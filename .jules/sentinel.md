## 2026-04-18 - [Exposed Supabase API Keys in Source Control]
**Vulnerability:** Supabase API keys (VITE_SUPABASE_ANON_KEY and VITE_SUPABASE_URL) were committed directly to the repository via the `.env` file.
**Learning:** Development environment variables should never be committed, even if they are 'anon' keys, as they are a vector for potential misuse if the service configuration has flaws. The project was missing a `.env.example` file to document the required keys, and the `.gitignore` was not configured to exclude local environment variables.
**Prevention:** Always ensure `.env` and `.env.*` are in `.gitignore` from project inception. Create a `.env.example` file containing key names but not values to guide developers without leaking secrets.
