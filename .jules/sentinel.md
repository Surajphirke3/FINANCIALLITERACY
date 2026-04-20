## 2025-04-20 - [Hardcoded Secrets Exposed]
**Vulnerability:** A `.env` file containing sensitive `VITE_SUPABASE_ANON_KEY` and `VITE_SUPABASE_URL` was checked into the version control system.
**Learning:** Checking in `.env` files exposes sensitive configuration and secrets to anyone with access to the repository, leading to potential unauthorized access and data breaches.
**Prevention:** Add `.env` and `.env.*` to `.gitignore` from the start of the project. Use `.env.example` to provide template variables for developers.
