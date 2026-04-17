## 2026-04-17 - [Hardcoded Secrets in .env file committed to repository]
**Vulnerability:** A .env file containing a production Supabase anon key and URL was committed to the repository, potentially exposing the database to unauthorized access.
**Learning:** Checking in .env files leads to secrets leaking in source control. .gitignore must be correctly configured to exclude these files before they are ever created or committed.
**Prevention:** Add .env and .env.* to .gitignore. Create a .env.example file with dummy placeholders for developers to copy.
