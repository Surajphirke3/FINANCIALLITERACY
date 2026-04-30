## 2026-04-30 - Add Input Length Limits and Prevent PII Leakage
**Vulnerability:** Client-side Denial of Service via overly large input sizes on form elements and sensitive data leakage via `console.log` in production forms.
**Learning:** React form inputs without explicit `maxLength` props allow arbitrarily large strings to be stored in state, creating memory or processing vulnerabilities. `console.log` during form submissions often mistakenly remain from development, exposing PII to browser consoles.
**Prevention:** Always define realistic `maxLength` constraints on text/textarea inputs immediately upon creation, and configure automated linting rules to prevent `console.log` usage (e.g. `no-console`) from reaching production.
