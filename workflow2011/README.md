📘 React Animations Lab

✨ Fade • Scale • Slide Components

This project contains three small interactive UI components built with React, useRef, useState, and CSS transition-based animations.
The goal was to practice DOM references, dynamic classes, animation timing control, and modular CSS.

🚀 Components Overview

1️⃣ Fade Text (ToggleText)

📌 Smoothly hides and shows text by animating opacity & max-height
📌 Animation duration controlled by user input
📌 Built with useRef, useState and CSS transitions

Features:
• Toggle button
• Dynamic duration
• Fade-out + collapse animation
• Modular CSS styles

2️⃣ Scale Element

📌 Element smoothly grows/shrinks
📌 Class toggling controls transformation
📌 Uses CSS transform: scale()

Features:
• Uses useRef
• Customizable animation duration
• Clean reusable JSX structure
• Scale-up / scale-down transitions

3️⃣ Slider Block

📌 Block slides in/out horizontally
📌 CSS transform + opacity transition
📌 Uses class toggle for animation control

Features:
• Uses useRef
• Horizontal movement via translateX
• Smooth slide animation

🛠 Tech Stack
• React 18+
• useRef / useState hooks
• CSS Modules
• Transition-based animations
• Vite / CRA (depending on project setup)

📂 Project Structure

```
src/
 ├─ components/
 │   ├─ toggleText/
 │   │    ├─ index.jsx
 │   │    └─ styles.module.css
 │   ├─ scaleElement/
 │   │    ├─ index.jsx
 │   │    └─ styles.module.css
 │   └─ slider/
 │        ├─ index.jsx
 │        └─ styles.module.css
 ├─ App.jsx
 └─ main.jsx

```

✍️ Author Queraga https://github.com/queraga 📍 Berlin, Germany
