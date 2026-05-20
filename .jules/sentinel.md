## 2025-02-17 - Missing Input Validation in Calculator
**Vulnerability:** The financial calculators in `Calculator.tsx` lack input validation. Users can input negative numbers or excessively large values, leading to `NaN` or `Infinity` results, or potentially causing performance issues/DoS in extreme cases due to large mathematical computations.
**Learning:** Client-side components that perform mathematical operations must strictly validate input types, minimum, and maximum boundaries to ensure reliable application state and prevent resource exhaustion.
**Prevention:** Add HTML5 validation attributes (`min`, `max`, `step`) to `input type="number"` fields and perform secondary checks within the calculation logic if necessary.
## 2024-05-20 - Add Content Security Policy
**Vulnerability:** Missing Content Security Policy (CSP) headers in the frontend web application index.html.
**Learning:** Adding CSP headers using an http-equiv meta tag is an effective way to implement initial baseline CSP in static single-page apps (SPA) while accounting for development realities like Vite HMR, which requires inline script and websockets.
**Prevention:** Future SPA projects should include a CSP from the start to harden against Cross-Site Scripting (XSS) and other data injection attacks. Any new external asset domains must be whitelisted.
