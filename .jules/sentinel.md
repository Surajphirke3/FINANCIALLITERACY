## 2024-05-18 - [Preventing Hardcoded Secrets in Git]
**Vulnerability:** Found hardcoded `VITE_SUPABASE_ANON_KEY` and `VITE_SUPABASE_URL` in `.env` committed directly to the repository.
**Learning:** Developers often forget to add `.env` to `.gitignore` when initializing new projects or adding environment variables, leading to credential leaks in version control.
**Prevention:** Always ensure `.env` and related secret files are added to `.gitignore` immediately upon project initialization. Provide an `.env.example` file to securely document required variables without exposing real credentials.
