# QA Checklist

## Core experience

- Homepage loads with no console errors.
- Hero copy, primary CTA, résumé CTA, and contact CTA are visible on desktop and mobile.
- Navigation works by mouse, keyboard, and touch.
- Reduced-motion toggle updates behaviour and persists across refreshes.

## Case studies

- Every case study includes Problem, Role, Stack, Impact, and Example metrics.
- GitHub links and internal case-study routes work.
- Pages render correct metadata and usable headings.

## Labs

- AI chat works in both mock mode and live-key mode.
- Realtime dashboard receives SSE updates and handles disconnects gracefully.
- Workflow builder exports valid JSON and shows export feedback.
- Labs route lazy-loads demos and keeps the homepage responsive.

## Accessibility

- Skip link is reachable by keyboard.
- Interactive controls have visible focus states.
- Colour contrast remains readable in dark mode.
- All demos are usable without a mouse where practical.

## Performance

- Initial homepage load stays lean and demo code is not bundled eagerly.
- Large assets are optimised and the portrait uses `next/image`.
- Motion remains subtle and does not block interaction.
