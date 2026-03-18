export const tokens = {
  colour: {
    bg: {
      canvas: "#050816",
      surface: "#0b1327",
      elevated: "#121b34",
      overlay: "rgba(7, 12, 24, 0.76)"
    },
    text: {
      primary: "#f7f9fd",
      secondary: "#b7c4d8",
      muted: "#90a1b6",
      inverse: "#07101d"
    },
    accent: {
      primary: "#6cf2ff",
      secondary: "#80ffd8",
      warm: "#f0c884",
      danger: "#ff8ca1"
    },
    border: {
      soft: "rgba(123, 213, 255, 0.14)",
      strong: "rgba(123, 213, 255, 0.32)"
    }
  },
  typography: {
    fontFamily: {
      body: "var(--font-body)",
      display: "var(--font-display)"
    },
    scale: {
      xs: "0.75rem",
      sm: "0.875rem",
      base: "1rem",
      lg: "1.125rem",
      xl: "1.375rem",
      "2xl": "1.75rem",
      "3xl": "2.375rem",
      "4xl": "3.5rem",
      "5xl": "4.75rem"
    }
  },
  space: {
    1: "0.25rem",
    2: "0.5rem",
    3: "0.75rem",
    4: "1rem",
    5: "1.25rem",
    6: "1.5rem",
    8: "2rem",
    10: "2.5rem",
    12: "3rem",
    16: "4rem",
    20: "5rem"
  },
  radius: {
    sm: "0.75rem",
    md: "1rem",
    lg: "1.5rem",
    xl: "2rem",
    pill: "999px"
  },
  shadow: {
    soft: "0 18px 48px rgba(0, 0, 0, 0.22)",
    medium: "0 24px 70px rgba(0, 0, 0, 0.34)",
    glow: "0 0 36px rgba(108, 242, 255, 0.16)"
  },
  motion: {
    duration: {
      instant: 120,
      fast: 180,
      medium: 280,
      slow: 520,
      hero: 760
    },
    easing: {
      standard: [0.2, 0.8, 0.2, 1],
      entrance: [0.16, 1, 0.3, 1]
    }
  },
  zIndex: {
    base: 1,
    raised: 10,
    header: 40,
    overlay: 60,
    toast: 80
  },
  breakpoint: {
    sm: 640,
    md: 768,
    lg: 1024,
    xl: 1280
  }
} as const;

export type Tokens = typeof tokens;
