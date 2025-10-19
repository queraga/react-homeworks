# Homework #4 — React

## Task 1: City Selector and City Card

### Description:
This task implements a simple UI where the user selects a city from a dropdown menu, and the app displays details about the selected city.

### Components:
- **CitySelector**: A dropdown (`<select>`) with a list of cities (Tokyo, Kyoto, Osaka, Hokkaido, Nagoya). It triggers the `onCitySelect` callback on change.
- **CityCard**: Displays the name, description, image, and facts about the selected city.

### Functionality:
- The selected city state is managed in the `App` component using `useState`.
- City data is imported from a separate file `citiesData.js`.
- When a city is selected, the corresponding information is displayed dynamically.

---

## Task 2: Math Quiz App

### Description:
This is a simple React-based math quiz game. The app presents a random addition problem, accepts the user's answer, and updates the score based on correctness.

### Components:
- **MathQuiz**:
  - Generates two random numbers.
  - Displays the current score.
  - Validates user input.
  - Generates a new problem after each attempt.
- **Answer**:
  - Contains a form with an input field and a submit button.
  - Sends the user’s answer to the parent component via `onSubmit`.

### Logic:
- Numbers are generated with:  
  `Math.floor(Math.random() * 10 + 1)`
- Score is updated depending on whether `parseInt(userAnswer) === (a + b)`.
- `useState` is used to track the score and the current problem.

### Styling:
- Basic CSS styling added via `MathQuiz.css`.
- Components styled with padding, background color, rounded corners, and centered layout.

---
## How to Run

```
bash
npm install
npm start
```

