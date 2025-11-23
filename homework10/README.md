🐱 Cat Image Shuffle

React Homework 10 — Fetching Random Cat Pictures

A simple React app that fetches random cat images from TheCatAPI using axios, updates the image on button click, and shows a loader animation while the image is loading.

🚀 Features
• 🐈 Fetches random cat images from API
• 🔄 Shows loader while fetching
• ⚡ Uses axios for HTTP requests
• 🎣 Uses useEffect and useState
• 💅 Styled with CSS modules
• 🎛 Button to load a new cat instantly

```
🚀 Features
	•	🐈 Fetches random cat images from API
	•	🔄 Shows loader while fetching
	•	⚡ Uses axios for HTTP requests
	•	🎣 Uses useEffect and useState
	•	💅 Styled with CSS modules
	•	🎛 Button to load a new cat instantly

```

🧩 How It Works

1. useEffect

Fetches the first cat automatically when the component mounts.

2. useState
   • image — the current cat image URL
   • isLoading — loader visibility

3. axios

Requests a random image from:
https://api.thecatapi.com/v1/images/search

4. Loader

Shows animated spinner until the image loads.

🛠️ Tech Stack
• ⚛️ React
• 🎣 React Hooks
• 🌐 Axios
• 🎨 CSS Modules

💡 What I Learned
• How to fetch data using axios
• How to handle loading states
• How to structure UI with CSS modules
• Using useEffect for API calls
• How to build responsive components

✍️ Author Queraga https://github.com/queraga 📍 Berlin, Germany