## 2025-02-18 - Hardcoded API Key in .env file
**Vulnerability:** A hardcoded Supabase API key (`VITE_SUPABASE_ANON_KEY`) was tracked in git via the `.env` file, exposing it to anyone with access to the repository.
**Learning:** Checking in `.env` files with real keys is a critical security vulnerability as it permanently exposes credentials in git history.
**Prevention:** Never commit `.env` files. Always use an `.env.example` file with empty or placeholder values as a template, and ensure `.env` is listed in `.gitignore` from the start of a project.