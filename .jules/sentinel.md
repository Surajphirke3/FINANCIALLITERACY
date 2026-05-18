## 2025-02-17 - Missing Input Validation in Calculator
**Vulnerability:** The financial calculators in `Calculator.tsx` lack input validation. Users can input negative numbers or excessively large values, leading to `NaN` or `Infinity` results, or potentially causing performance issues/DoS in extreme cases due to large mathematical computations.
**Learning:** Client-side components that perform mathematical operations must strictly validate input types, minimum, and maximum boundaries to ensure reliable application state and prevent resource exhaustion.
**Prevention:** Add HTML5 validation attributes (`min`, `max`, `step`) to `input type="number"` fields and perform secondary checks within the calculation logic if necessary.
## 2024-05-18 - [Content Security Policy Addition]
**Vulnerability:** Missing Content Security Policy (CSP) headers in the main `index.html` could allow Cross-Site Scripting (XSS) attacks by executing arbitrary injected scripts or loading malicious resources.
**Learning:** Static single-page applications without custom backends require using `<meta http-equiv="Content-Security-Policy">` for applying basic security policies. However, some security headers like `X-Content-Type-Options: nosniff` cannot be enforced through `<meta>` tags and must be configured on the static file hosting server/CDN itself.
**Prevention:** Always include a restrictive default CSP via meta tags or server config in any new SPA to provide defense in depth against XSS, and explicitly list allowed external dependencies.
