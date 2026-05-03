## 2025-05-03 - [Exposed sensitive data in logs]
**Vulnerability:** The contact form submission handler was logging the entire `formData` object to the console, exposing Personally Identifiable Information (PII) including name, email address, and potentially sensitive message contents.
**Learning:** Even simple `console.log` statements for debugging can turn into data leaks if left in production, especially when handling user-submitted forms that collect sensitive data. Frontend logs are often captured by monitoring services.
**Prevention:** Avoid logging complete objects containing user input. Log only non-sensitive metadata (like string lengths or event triggers) or use a dedicated logging utility that automatically redacts sensitive fields.
