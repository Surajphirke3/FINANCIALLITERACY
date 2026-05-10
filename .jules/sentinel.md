## 2025-02-17 - Missing Input Validation in Calculator
**Vulnerability:** The financial calculators in `Calculator.tsx` lack input validation. Users can input negative numbers or excessively large values, leading to `NaN` or `Infinity` results, or potentially causing performance issues/DoS in extreme cases due to large mathematical computations.
**Learning:** Client-side components that perform mathematical operations must strictly validate input types, minimum, and maximum boundaries to ensure reliable application state and prevent resource exhaustion.
**Prevention:** Add HTML5 validation attributes (`min`, `max`, `step`) to `input type="number"` fields and perform secondary checks within the calculation logic if necessary.
## 2024-05-10 - [Content Security Policy (CSP) Implementation]
**Vulnerability:** The application lacked a Content Security Policy (CSP) which provides a critical layer of defense against Cross-Site Scripting (XSS) and data injection attacks.
**Learning:** Adding a CSP as a meta tag is a simple yet effective way to enforce security boundaries directly in the frontend build. It requires careful consideration of external resources like images (e.g., Unsplash) and development tools (e.g., Vite's HMR via WebSockets).
**Prevention:** Incorporate CSP configuration early in the project setup, ideally as HTTP headers from the serving infrastructure, or as a meta tag for static builds. Ensure external domains are explicitly allowlisted.
