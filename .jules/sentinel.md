## 2025-02-17 - Missing Input Validation in Calculator
**Vulnerability:** The financial calculators in `Calculator.tsx` lack input validation. Users can input negative numbers or excessively large values, leading to `NaN` or `Infinity` results, or potentially causing performance issues/DoS in extreme cases due to large mathematical computations.
**Learning:** Client-side components that perform mathematical operations must strictly validate input types, minimum, and maximum boundaries to ensure reliable application state and prevent resource exhaustion.
**Prevention:** Add HTML5 validation attributes (`min`, `max`, `step`) to `input type="number"` fields and perform secondary checks within the calculation logic if necessary.

## 2025-05-06 - PII Leaked in Logs
**Vulnerability:** Personal Identifiable Information (PII) like names and emails submitted via the `Contact.tsx` form was logged to standard output (`console.log('Form submitted:', formData)`).
**Learning:** Frontend forms handling sensitive user data should never indiscriminately log full payloads. This exposes PII to console logs, which could be collected or analyzed externally.
**Prevention:** Remove `console.log` statements logging user data prior to shipping features or implement stringent logging practices that scrub PII values.