## 2025-04-24 - [CRITICAL] Prevent secrets leakage in repository
**Vulnerability:** Hardcoded API keys and secrets stored in unignored `.env` file.
**Learning:** Found Supabase secrets committed inside `project/.env` which was tracked by git.
**Prevention:** Always ensure `.env` and any file containing secrets are added to `.gitignore` to prevent accidental commits.
