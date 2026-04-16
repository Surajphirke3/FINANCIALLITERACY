## 2025-02-18 - Tracked Environment Files

**Vulnerability:** The `.env` file containing configuration variables was committed directly to the git repository and was missing from `.gitignore`. While `VITE_SUPABASE_ANON_KEY` is a public key, tracking `.env` is a dangerous practice that often leads to leaking real secrets.
**Learning:** `.env` files should never be committed to git, even if they only contain public keys, as it sets a bad precedent and creates a risk that developers might add real secrets to it later thinking it's safe. Instead, a `.env.example` file should be committed.
**Prevention:** Always include `.env` in `.gitignore` from project inception. Use `.env.example` to document required configuration variables.
