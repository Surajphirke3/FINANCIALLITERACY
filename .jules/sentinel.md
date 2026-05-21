## 2025-02-17 - Missing Input Validation in Calculator
**Vulnerability:** The financial calculators in `Calculator.tsx` lack input validation. Users can input negative numbers or excessively large values, leading to `NaN` or `Infinity` results, or potentially causing performance issues/DoS in extreme cases due to large mathematical computations.
**Learning:** Client-side components that perform mathematical operations must strictly validate input types, minimum, and maximum boundaries to ensure reliable application state and prevent resource exhaustion.
**Prevention:** Add HTML5 validation attributes (`min`, `max`, `step`) to `input type="number"` fields and perform secondary checks within the calculation logic if necessary.
## 2025-05-21 - [Added Content Security Policy]
**Vulnerability:** Missing Content Security Policy (CSP), making the application potentially vulnerable to Cross-Site Scripting (XSS) and data injection attacks.
**Learning:** Adding a CSP requires careful consideration of the application's external dependencies such as Supabase API endpoints, Unsplash image URLs, and local Vite HMR WebSockets to avoid breaking functionality.
**Prevention:** Implement a strong default Content Security Policy early in development and update it as new external services are integrated, practicing the principle of least privilege.
