## 2024-05-18 - [CRITICAL] Hardcoded API Keys in version control
**Vulnerability:** The `.env` file containing `VITE_SUPABASE_ANON_KEY` and `VITE_SUPABASE_URL` was checked into Git and tracked.
**Learning:** Checking in `.env` files is a critical vulnerability that immediately exposes API keys, service credentials, and secrets to anyone with read access to the repository. It's a common mistake in early development that requires immediate remediation.
**Prevention:** Always add `.env`, `.env.local`, and `.env.*.local` to `.gitignore` at the very beginning of the project setup. Provide a `.env.example` file with dummy values to show other developers what environment variables are required without exposing actual secrets.
