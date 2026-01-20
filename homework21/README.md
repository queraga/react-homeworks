# React Questionnaire (Redux Toolkit + MUI)

A simple questionnaire app built with React. Users answer multiple-choice questions, submit the form, and see a computed result. State is managed with Redux Toolkit and the UI is styled with Material UI.

## Features

- Renders a list of questions from Redux state
- Saves selected answers in Redux (`answers` by `questionId`)
- Submit button calculates a result (example: "Mostly YES" / "Mostly NO")
- Clean UI using Material UI components

## Tech Stack

- React (Vite)
- Redux Toolkit + React Redux
- Material UI (MUI)

## Project Structure (example)

    •	src/features/questionnaire/questionnaireSlice.js - questions, answers, submit logic
    •	src/components/Question.jsx - single question + answer buttons
    •	src/components/Result.jsx - shows result after submission
    •	src/App.jsx - renders questions, submit button, result

## Notes

    •	The result calculation is implemented inside the submitAnswers reducer and can be customized (e.g. scoring, different outputs, more answer options).
