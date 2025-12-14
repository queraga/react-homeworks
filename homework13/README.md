# User Filter App (React + Redux)

A small React app that filters a list of users using Redux.  
Type in the input field to filter users by **name** or **position**.

## Features

- Redux store with `users` and `filter` in state
- Filter input connected to Redux (`SET_FILTER`)
- User list updates instantly based on the filter
- Case-insensitive search
- Filtering by:
  - `user.name`
  - `user.position`
- Modular CSS styles (CSS Modules)

## Tech Stack

- React
- Redux
- React-Redux
- CSS Modules

## Project Structure

```

src/
components/
filter/
index.jsx
styles.module.css
useritem/
index.jsx
styles.module.css
userlist/
index.jsx
styles.module.css
redux/
actions.js
reducer.js
store.js
data/
users.js
App.jsx
App.css
main.jsx

```

How It Works
• Filter dispatches setFilter(value) on each input change
• UserList reads users and filter from Redux and applies:
• filter.trim().toLowerCase()
• includes() check for name OR position

✍️ Author Queraga https://github.com/queraga 📍 Berlin, Germany
