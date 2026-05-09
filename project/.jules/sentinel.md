## 2025-05-09 - Missing Content Security Policy (CSP)
**Vulnerability:** The application was missing a Content Security Policy (CSP) header, which is a key defense-in-depth security mechanism against Cross-Site Scripting (XSS) and other data injection attacks.
**Learning:** Even modern frameworks like React can benefit from CSPs to prevent XSS if a vulnerability like `dangerouslySetInnerHTML` or similar injection vector is introduced. It's important to restrict content sources explicitly, like defining image sources (Unsplash) and connection sources (Supabase API).
**Prevention:** Always include a strong CSP in the base HTML templates (`index.html`) or via HTTP headers for all web applications to enforce strict content origin restrictions.
