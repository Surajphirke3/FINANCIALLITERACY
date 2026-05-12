## 2025-02-17 - Missing Input Validation in Calculator
**Vulnerability:** The financial calculators in `Calculator.tsx` lack input validation. Users can input negative numbers or excessively large values, leading to `NaN` or `Infinity` results, or potentially causing performance issues/DoS in extreme cases due to large mathematical computations.
**Learning:** Client-side components that perform mathematical operations must strictly validate input types, minimum, and maximum boundaries to ensure reliable application state and prevent resource exhaustion.
**Prevention:** Add HTML5 validation attributes (`min`, `max`, `step`) to `input type="number"` fields and perform secondary checks within the calculation logic if necessary.

## 2025-02-18 - Missing Input Length Limits in AI Agent
**Vulnerability:** The AI Agent chat input in `AiAgent.tsx` lacked a `maxLength` restriction and corresponding programmatic validation. This could potentially allow excessively large strings to be processed, causing resource exhaustion or client-side Denial of Service (DoS) when the application attempts to manage these massive inputs in state and render them in the UI.
**Learning:** Client-side components that accept unstructured text input must enforce reasonable length limits. Without them, even if there's no server interaction, a malicious or accidental paste of megabytes of text can freeze or crash the user's browser.
**Prevention:** Always add HTML `maxLength` attributes to `<input>` and `<textarea>` fields, and include corresponding programmatic checks in the event handler to validate input length before processing or adding to application state.
