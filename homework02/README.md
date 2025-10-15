# React Homework 2

This project is the second homework assignment for React learning.

It includes three main components:

## Components

### 1. `Greeting`
Displays a personal greeting message using a passed prop (`name`).

```jsx
<Greeting name="Yevhen" />
```

### 2. `ShoppingList`
Renders a shopping list with a check for an empty array.
If the list is empty, a fallback message is shown.

```
<ShoppingList items={['Milch', 'Apfel', 'Brot']} />
```

### 3. `OrderStatus`
Accepts an array of orders with orderId and status, and renders them as a list of status messages.

Example:
```
<OrderStatus orderId={101} status="Delivered" />
```
In the app, multiple OrderStatus components are rendered using .map()

## Folder Structure

```
homework02/
├── public/
├── src/
│   ├── components/
│   │   ├── Greeting.jsx
│   │   ├── ShoppingList.jsx
│   │   └── OrderStatus.jsx
│   ├── App.jsx
│   ├── main.jsx
├── package.json
├── package-lock.json
├── vite.config.js

```
## Getting Started
To run this app locally:

npm install
npm run dev

Notes
	•	Built using Vite + React
	•	No external component libraries used
	•	All components are functional and follow React best practices
