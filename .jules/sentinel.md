## 2025-02-17 - Missing Input Validation in Calculator
**Vulnerability:** The financial calculators in `Calculator.tsx` lack input validation. Users can input negative numbers or excessively large values, leading to `NaN` or `Infinity` results, or potentially causing performance issues/DoS in extreme cases due to large mathematical computations.
**Learning:** Client-side components that perform mathematical operations must strictly validate input types, minimum, and maximum boundaries to ensure reliable application state and prevent resource exhaustion.
**Prevention:** Add HTML5 validation attributes (`min`, `max`, `step`) to `input type="number"` fields and perform secondary checks within the calculation logic if necessary.

## 2025-05-13 - PII Leak in Console Log
**Vulnerability:** The Contact form was directly logging the `formData` object to the console (`console.log('Form submitted:', formData)`). This object contained sensitive Personally Identifiable Information (PII) like the user's name, email, and message.
**Learning:** Never log raw user input objects or sensitive data to the client-side console, as this can expose PII to malicious browser extensions, shoulder surfers, or through accidental log collection.
**Prevention:** Instead of logging raw user objects, log generic messages or specific, non-sensitive IDs. Add linting rules (like `no-console` or specific custom rules) to warn or error on logging sensitive variable names.
