## 2025-02-17 - Missing Input Validation in Calculator
**Vulnerability:** The financial calculators in `Calculator.tsx` lack input validation. Users can input negative numbers or excessively large values, leading to `NaN` or `Infinity` results, or potentially causing performance issues/DoS in extreme cases due to large mathematical computations.
**Learning:** Client-side components that perform mathematical operations must strictly validate input types, minimum, and maximum boundaries to ensure reliable application state and prevent resource exhaustion.
**Prevention:** Add HTML5 validation attributes (`min`, `max`, `step`) to `input type="number"` fields and perform secondary checks within the calculation logic if necessary.

## 2025-05-08 - [Committed .env File]
**Vulnerability:** The `project/.env` file was committed to version control.
**Learning:** Even though the Supabase variables within the `.env` file are meant to be public, committing `.env` files is a bad practice. It trains developers to ignore `.env` files in git status and risks accidentally leaking actual secrets that may be added to this file in the future.
**Prevention:** Remove `project/.env` from git tracking and create a `project/.env.example` file to document the required environment variables without exposing sensitive data. Ensure `.env` is listed in `.gitignore` (which it already is).
