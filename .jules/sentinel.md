## 2024-04-26 - [Hardcoded Secrets Exposed in Version Control]
**Vulnerability:** The project contained a tracked `.env` file that exposed the real `VITE_SUPABASE_ANON_KEY` and `VITE_SUPABASE_URL` to version control.
**Learning:** Hardcoded configuration files like `.env` containing API keys or connection strings should never be tracked by Git. Their exposure could allow unauthorized access to the Supabase backend.
**Prevention:** Always add `.env` files to `.gitignore` at the beginning of a project and track a separate `.env.example` file that only contains variable names or placeholder values.
