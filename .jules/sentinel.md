## 2025-02-17 - Missing Input Validation in Calculator
**Vulnerability:** The financial calculators in `Calculator.tsx` lack input validation. Users can input negative numbers or excessively large values, leading to `NaN` or `Infinity` results, or potentially causing performance issues/DoS in extreme cases due to large mathematical computations.
**Learning:** Client-side components that perform mathematical operations must strictly validate input types, minimum, and maximum boundaries to ensure reliable application state and prevent resource exhaustion.
**Prevention:** Add HTML5 validation attributes (`min`, `max`, `step`) to `input type="number"` fields and perform secondary checks within the calculation logic if necessary.

## 2025-02-17 - PII Exposure in Console Logs
**Vulnerability:** PII (Personally Identifiable Information, including name and email) was exposed in frontend console logs via `console.log(formData)`.
**Learning:** Frontend logging can inadvertently leak sensitive user data to third-party error tracking tools, browsers, or anyone viewing the developer console. Even harmless-looking logs during development might carry sensitive info into production.
**Prevention:** Avoid logging complete data objects like `formData` directly. Replace with generic success/status logs. Implement strict log scrubbing policies for any data leaving the application boundaries.
