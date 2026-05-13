'use client';

import { Environment } from '@react-three/drei';
import { Canvas, useFrame } from '@react-three/fiber';
import {
  BallCollider,
  CylinderCollider,
  Physics,
  RigidBody,
  type RapierRigidBody,
} from '@react-three/rapier';
import { EffectComposer, N8AO } from '@react-three/postprocessing';
import * as THREE from 'three';
import { Suspense, useEffect, useMemo, useRef, useState } from 'react';

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

const imageUrls = [
  `${basePath}/images/react2.webp`,
  `${basePath}/images/next2.webp`,
  `${basePath}/images/node2.webp`,
  `${basePath}/images/express.webp`,
  `${basePath}/images/mongo.webp`,
  `${basePath}/images/mysql.webp`,
  `${basePath}/images/typescript.webp`,
  `${basePath}/images/javascript.webp`,
];

const sphereScales = [0.7, 1, 0.8, 1, 1] as const;

function seededRand(seed: number) {
  const v = Math.sin(seed * 12.9898) * 43758.5453;
  return v - Math.floor(v);
}

function seededSpread(seed: number, range: number) {
  return seededRand(seed) * range - range / 2;
}

type SphereProps = {
  scale: number;
  material: THREE.MeshPhysicalMaterial;
  active: boolean;
  geometry: THREE.SphereGeometry;
  position: [number, number, number];
};

function SphereGeo({
  scale,
  material,
  active,
  geometry,
  position,
}: SphereProps) {
  const api = useRef<RapierRigidBody | null>(null);
  const vec = useMemo(() => new THREE.Vector3(), []);

  useFrame((_state, delta) => {
    if (!active || !api.current) {
      return;
    }

    const safeDelta = Math.min(0.1, delta);
    const impulse = vec
      .copy(api.current.translation())
      .normalize()
      .multiply(
        new THREE.Vector3(
          -50 * safeDelta * scale,
          -150 * safeDelta * scale,
          -50 * safeDelta * scale,
        ),
      );

    api.current.applyImpulse(impulse, true);
  });

  return (
    <RigidBody
      linearDamping={0.75}
      angularDamping={0.15}
      friction={0.2}
      position={position}
      ref={api}
      colliders={false}>
      <BallCollider args={[scale]} />
      <CylinderCollider
        rotation={[Math.PI / 2, 0, 0]}
        position={[0, 0, 1.2 * scale]}
        args={[0.15 * scale, 0.275 * scale]}
      />
      <mesh
        castShadow
        receiveShadow
        scale={scale}
        geometry={geometry}
        material={material}
        rotation={[0.3, 1, 1]}
      />
    </RigidBody>
  );
}

function Pointer({ active }: { active: boolean }) {
  const ref = useRef<RapierRigidBody>(null);
  const vec = useMemo(() => new THREE.Vector3(), []);

  useFrame(({ pointer, viewport }) => {
    if (!active) {
      return;
    }

    const targetVec = vec.lerp(
      new THREE.Vector3(
        (pointer.x * viewport.width) / 2,
        (pointer.y * viewport.height) / 2,
        0,
      ),
      0.2,
    );

    ref.current?.setNextKinematicTranslation(targetVec);
  });

  return (
    <RigidBody
      position={[100, 100, 100]}
      type='kinematicPosition'
      colliders={false}
      ref={ref}>
      <BallCollider args={[2]} />
    </RigidBody>
  );
}

export function TechOrbField() {
  const [isCompact, setIsCompact] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 900px)');
    const updateCompact = () => setIsCompact(mediaQuery.matches);
    updateCompact();
    mediaQuery.addEventListener('change', updateCompact);

    return () => {
      mediaQuery.removeEventListener('change', updateCompact);
    };
  }, []);

  const sphereGeometry = useMemo(
    () => new THREE.SphereGeometry(1, isCompact ? 20 : 28, isCompact ? 20 : 28),
    [isCompact],
  );

  const spheres = useMemo(
    () =>
      Array.from({ length: isCompact ? 20 : 30 }, (_, i) => ({
        scale:
          sphereScales[Math.floor(seededRand(i + 1) * sphereScales.length)],
        position: [
          seededSpread(i + 11, 20),
          seededSpread(i + 29, 20) - 25,
          seededSpread(i + 47, 20) - 10,
        ] as [number, number, number],
      })),
    [isCompact],
  );

  const materials = useMemo(() => {
    const textureLoader = new THREE.TextureLoader();
    const textures = imageUrls.map((url) => textureLoader.load(url));

    return textures.map(
      (texture) =>
        new THREE.MeshPhysicalMaterial({
          map: texture,
          emissive: '#ffffff',
          emissiveMap: texture,
          emissiveIntensity: 0.3,
          metalness: 0.5,
          roughness: 1,
          clearcoat: 0.1,
        }),
    );
  }, []);

  useEffect(() => {
    return () => {
      materials.forEach((mat) => {
        mat.map?.dispose();
        mat.dispose();
      });
      sphereGeometry.dispose();
    };
  }, [materials, sphereGeometry]);

  return (
    <div className='tech-orbs'>
      <Canvas
        dpr={isCompact ? [1, 1.15] : [1, 1.5]}
        frameloop='always'
        shadows={!isCompact}
        gl={{
          alpha: true,
          stencil: false,
          depth: false,
          antialias: false,
          powerPreference: 'high-performance',
        }}
        camera={{ position: [0, 0, 20], fov: 32.5, near: 1, far: 100 }}
        onCreated={(state) => {
          state.gl.toneMappingExposure = 1.5;
        }}
        className='tech-orbs__canvas'>
        <ambientLight intensity={1} />
        <spotLight
          position={[20, 20, 25]}
          penumbra={1}
          angle={0.2}
          color='white'
          castShadow={!isCompact}
          shadow-mapSize={isCompact ? [256, 256] : [512, 512]}
        />
        <directionalLight position={[0, 5, -4]} intensity={2} />

        <Suspense fallback={null}>
          <Physics gravity={[0, 0, 0]}>
            <Pointer active />
            {spheres.map((sphere, index) => (
              <SphereGeo
                key={`${sphere.scale}-${index}`}
                scale={sphere.scale}
                material={materials[index % materials.length]}
                active
                geometry={sphereGeometry}
                position={sphere.position}
              />
            ))}
          </Physics>
        </Suspense>

        <Suspense fallback={null}>
          <Environment
            files={`${basePath}/models/char_enviorment.hdr`}
            environmentIntensity={0.5}
            environmentRotation={[0, 4, 2]}
          />
        </Suspense>

        {!isCompact ? (
          <EffectComposer enableNormalPass={false}>
            <N8AO color='#0f002c' aoRadius={2} intensity={1.15} />
          </EffectComposer>
        ) : null}
      </Canvas>
    </div>
  );
}
