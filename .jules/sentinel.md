## 2026-04-25 - [Hardcoded Secret in Git History]
**Vulnerability:** A hardcoded Supabase Anon Key and URL were committed to the repository in the `.env` file. Even if removed later, they remain in the git history.
**Learning:** Secrets should never be committed to source control. Even if deleted, they are still accessible via git history unless the history is rewritten or the repository is purged.
**Prevention:** Always add `.env` and other sensitive files to `.gitignore` before committing. Use `.env.example` with placeholder values to show required configuration without exposing real secrets.
