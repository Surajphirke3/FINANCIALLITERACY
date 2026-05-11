## 2025-02-17 - Missing Input Validation in Calculator
**Vulnerability:** The financial calculators in `Calculator.tsx` lack input validation. Users can input negative numbers or excessively large values, leading to `NaN` or `Infinity` results, or potentially causing performance issues/DoS in extreme cases due to large mathematical computations.
**Learning:** Client-side components that perform mathematical operations must strictly validate input types, minimum, and maximum boundaries to ensure reliable application state and prevent resource exhaustion.
**Prevention:** Add HTML5 validation attributes (`min`, `max`, `step`) to `input type="number"` fields and perform secondary checks within the calculation logic if necessary.

## 2024-05-20 - Add Content Security Policy
**Vulnerability:** Missing Content Security Policy (CSP) headers in the main `index.html`.
**Learning:** React/Vite single-page applications often omit CSP by default, leaving the application vulnerable to XSS attacks if user input is mishandled elsewhere.
**Prevention:** Always ensure a restrictive Content Security Policy is defined in the `<head>` of the `index.html` file or via HTTP headers, restricting sources for scripts, styles, images, and connections.
