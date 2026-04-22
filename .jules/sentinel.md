## 2023-10-25 - [Exposed Supabase API Keys]
**Vulnerability:** A `.env` file containing the `VITE_SUPABASE_ANON_KEY` and `VITE_SUPABASE_URL` was committed directly into the codebase and lacked a `.gitignore` entry.
**Learning:** Hardcoded secrets and configuration files (like `.env`) can easily be exposed if gitignore rules do not explicitly ignore them, potentially compromising application security.
**Prevention:** Ensure `.env` and `.env.*` are added to `.gitignore` during project setup. Use `.env.example` to provide developers a safe template instead of the real file.
