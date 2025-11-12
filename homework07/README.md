📝 React Homework 07 - Language Context Switcher

A simple React app demonstrating language switching using Context API.

⸻

📌 Project Description

A mini React application that implements language switching (English / Ukrainian) using React Context API and hooks (useState, useContext).

This project demonstrates how to:
• store and manage global state (current language),
• pass functions without prop drilling,
• automatically re-render components when the context changes.

⸻

⚙️ Technologies
• React 18+
• Context API
• useState, useContext
• CSS styling (App.css)

⸻

🧩 Project Structure

```
src/
 ├── components/
 │    ├── languageProvider/
 │    │    └── index.jsx          # Context provider (LanguageProvider)
 │    ├── textDisplay/
 │    │    └── index.jsx          # Displays text based on selected language
 │    └── languageSwitcher/
 │         └── index.jsx          # Button to switch language
 │
 ├── App.jsx                      # Main app structure
 ├── App.css                      # Simple styling
 └── index.js                     # Entry point

```

🚀 How It Works 1. LanguageProvider creates a context with a state lang (default "en"). 2. When the button in LanguageSwitcher is clicked, toggleSwitcher toggles the language (en ↔ ua). 3. TextDisplay reads lang from the context using useContext(LanguageContext) and updates automatically when it changes.

🧠 Key Learnings
• Managing global state with Context API
• Using React hooks (useState, useContext)
• Avoiding prop drilling with context
• Building modular and reactive components

✍️ Author Queraga https://github.com/queraga 📍 Berlin, Germany
