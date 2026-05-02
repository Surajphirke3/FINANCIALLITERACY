## 2025-02-17 - Missing Input Validation in Calculator
**Vulnerability:** The financial calculators in `Calculator.tsx` lack input validation. Users can input negative numbers or excessively large values, leading to `NaN` or `Infinity` results, or potentially causing performance issues/DoS in extreme cases due to large mathematical computations.
**Learning:** Client-side components that perform mathematical operations must strictly validate input types, minimum, and maximum boundaries to ensure reliable application state and prevent resource exhaustion.
**Prevention:** Add HTML5 validation attributes (`min`, `max`, `step`) to `input type="number"` fields and perform secondary checks within the calculation logic if necessary.
## 2024-05-02 - Missing Input Length Limits in AiAgent
**Vulnerability:** The AI Agent text input in `AiAgent.tsx` lacked length limits. Users could input excessively large strings, potentially leading to client-side performance issues or DoS vulnerabilities.
**Learning:** All user inputs, including chat interfaces, must have strict length limitations enforced both via HTML attributes (`maxLength`) and component logic checks to ensure defense in depth.
**Prevention:** Always implement `maxLength` on text inputs and add programmatic checks before processing large text strings in state handlers.
