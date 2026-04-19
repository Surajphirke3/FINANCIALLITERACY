## 2025-04-19 - [Hardcoded Secrets Exposed in Source Control]
**Vulnerability:** A `.env` file containing critical secrets (`VITE_SUPABASE_ANON_KEY` and `VITE_SUPABASE_URL`) was committed and pushed to the repository's Git history. This exposed the backend Supabase instance to potential abuse.
**Learning:** This vulnerability existed because the `.gitignore` file did not properly exclude `.env` files before the developer added the secrets to the project, leading to accidental commitment.
**Prevention:** Always ensure that `.env` and `*.env.*` patterns (except for `!.env.example`) are in the `.gitignore` at project initialization. In React/Vite/NextJS setups, secrets should only reside in untracked `.env.local` or `.env` files, and dummy templates should be shared via `.env.example`.
