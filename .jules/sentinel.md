## 2026-04-17 - [Hardcoded Secrets in .env file committed to repository]
**Vulnerability:** A .env file containing a production Supabase anon key and URL was committed to the repository, potentially exposing the database to unauthorized access.
**Learning:** Checking in .env files leads to secrets leaking in source control. .gitignore must be correctly configured to exclude these files before they are ever created or committed.
**Prevention:** Add .env and .env.* to .gitignore. Create a .env.example file with dummy placeholders for developers to copy.

## 2025-02-17 - Missing Input Validation in Calculator
**Vulnerability:** The financial calculators in `Calculator.tsx` lack input validation. Users can input negative numbers or excessively large values, leading to `NaN` or `Infinity` results, or potentially causing performance issues/DoS in extreme cases due to large mathematical computations.
**Learning:** Client-side components that perform mathematical operations must strictly validate input types, minimum, and maximum boundaries to ensure reliable application state and prevent resource exhaustion.
**Prevention:** Add HTML5 validation attributes (`min`, `max`, `step`) to `input type="number"` fields and perform secondary checks within the calculation logic if necessary.
