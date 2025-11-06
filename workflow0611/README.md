🧩 React Registration App

A simple demo project showcasing user registration and login state management using React Context API and React Hook Form.

🚀 Overview

This project demonstrates how to:
• Manage global state with React Context.
• Build and validate forms using React Hook Form.
• Implement a simple user registration and logout flow.
• Share data between components without prop drilling.

🛠️ Tech Stack
• React 18+
• React Hook Form
• Context API
• Vite (build tool)
• CSS Modules

🧱 Project Structure

```
src/
 ├── components/
 │   ├── MainComponent.jsx        # Root view that switches between RegistrationForm and UserProfile
 │   ├── RegistrationForm.jsx     # Handles form validation and user login
 │   └── UserProfile.jsx          # Displays user data and logout button
 │
 ├── context/
 │   └── UserContext.jsx          # Provides global user state and login/logout functions
 │
 ├── styles/
 │   └── App.css
 │
 ├── App.jsx                      # Wraps app in UserProvider
 └── main.jsx                     # Entry point

```
