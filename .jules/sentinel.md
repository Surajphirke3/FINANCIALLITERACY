## 2025-02-17 - Missing Input Validation in Calculator
**Vulnerability:** The financial calculators in `Calculator.tsx` lack input validation. Users can input negative numbers or excessively large values, leading to `NaN` or `Infinity` results, or potentially causing performance issues/DoS in extreme cases due to large mathematical computations.
**Learning:** Client-side components that perform mathematical operations must strictly validate input types, minimum, and maximum boundaries to ensure reliable application state and prevent resource exhaustion.
**Prevention:** Add HTML5 validation attributes (`min`, `max`, `step`) to `input type="number"` fields and perform secondary checks within the calculation logic if necessary.
## 2025-05-19 - [Missing Content Security Policy in Vite App]
**Vulnerability:** The application was lacking a Content Security Policy (CSP), leaving it potentially vulnerable to Cross-Site Scripting (XSS) and unwanted external data injections.
**Learning:** Adding CSP via `<meta http-equiv="Content-Security-Policy">` to `index.html` requires carefully allowing Vite's internal behaviors (`'unsafe-inline'` scripts/styles, `ws://localhost:*` for HMR) and any external integrations (like `https://images.unsplash.com`) while preventing generic wide-open domains.
**Prevention:** Always implement a baseline CSP in `index.html` for single-page applications before deployment, systematically whitelisting required external resources.
