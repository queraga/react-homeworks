# User State Manager (React + Redux)

This project is a simple React application that demonstrates how to manage and update user state using **Redux** and **React-Redux**.

The app allows updating a user's **name** and **status** through a form and displays the current state in real time.

---

## 🚀 Features

- Global state management with Redux
- Update user name and status
- Form validation (required fields)
- Error handling with user feedback
- Clean and responsive UI
- Separation of logic (actions, reducers, components)

---

## 🧩 Technologies Used

- React
- Redux
- React-Redux
- JavaScript (ES6)
- CSS

---

## 📁 Project Structure

```

src/
├── components/
│   ├── User.jsx
│   └── UserForm.jsx
├── redux/
│   ├── actions.js
│   ├── reducers.js
│   └── store.js
├── App.jsx
├── main.jsx

```

📝 How It Works

1. User data is stored in Redux.
2. User component reads data from the store.
3. UserForm updates the store via dispatched actions.
4. Validation ensures empty values are not submitted.
5. UI updates automatically when state changes.

✍️ Author Queraga https://github.com/queraga 📍 Berlin, Germany
