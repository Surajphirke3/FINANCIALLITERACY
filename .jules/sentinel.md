## 2025-02-17 - Missing Input Validation in Calculator
**Vulnerability:** The financial calculators in `Calculator.tsx` lack input validation. Users can input negative numbers or excessively large values, leading to `NaN` or `Infinity` results, or potentially causing performance issues/DoS in extreme cases due to large mathematical computations.
**Learning:** Client-side components that perform mathematical operations must strictly validate input types, minimum, and maximum boundaries to ensure reliable application state and prevent resource exhaustion.
**Prevention:** Add HTML5 validation attributes (`min`, `max`, `step`) to `input type="number"` fields and perform secondary checks within the calculation logic if necessary.
## 2024-05-15 - Missing Input Length Limits
**Vulnerability:** The AI Agent chat form lacked input length constraints both on the client UI and in the submission handler, allowing excessively large payloads to be processed.
**Learning:** Even simple chat interfaces require length limits to prevent client-side denial of service (DoS) or memory exhaustion from maliciously crafted large strings.
**Prevention:** Always implement `maxLength` on form inputs and validate length programmatically during submission handling.
