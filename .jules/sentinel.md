## 2025-02-17 - Missing Input Validation in Calculator
**Vulnerability:** The financial calculators in `Calculator.tsx` lack input validation. Users can input negative numbers or excessively large values, leading to `NaN` or `Infinity` results, or potentially causing performance issues/DoS in extreme cases due to large mathematical computations.
**Learning:** Client-side components that perform mathematical operations must strictly validate input types, minimum, and maximum boundaries to ensure reliable application state and prevent resource exhaustion.
**Prevention:** Add HTML5 validation attributes (`min`, `max`, `step`) to `input type="number"` fields and perform secondary checks within the calculation logic if necessary.
## 2025-05-17 - [Missing Content Security Policy]
**Vulnerability:** The application was missing a Content Security Policy (CSP), leaving it potentially vulnerable to Cross-Site Scripting (XSS), data injection, and other content-related attacks if an attacker manages to inject malicious content.
**Learning:** Static single-page applications should define a basic CSP to restrict where scripts, styles, images, and other resources can be loaded from. This provides an important layer of defense-in-depth even if input validation is present elsewhere.
**Prevention:** Include a CSP via `<meta http-equiv="Content-Security-Policy">` in the `index.html` or via HTTP response headers on the static file server, strictly allowing resources only from intended origins (e.g., `'self'`, explicit image domains, and the backend API url).
