## 2025-02-12 - [Info Leakage] Remove console log in Contact form
**Vulnerability:** Personal identifiable information (PII) like name and email address inputted into the contact form was logged to the console via `console.log('Form submitted:', formData);`.
**Learning:** Console logs of sensitive user input can be exposed to third parties, extensions, or attackers who gain access to the user's browser or session, leaking PII and violating data privacy.
**Prevention:** Never log sensitive user data to the console in production applications. Remove or redact PII from any necessary debug logging and utilize secure, server-side logging where appropriate.
