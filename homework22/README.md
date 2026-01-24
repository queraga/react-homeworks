# Random Quote App (Redux Toolkit + Axios + Material UI)

A small React app that fetches and displays a random quote from an API.  
Built to practice Redux Toolkit async logic with `createAsyncThunk`, plus simple UI styling with Material UI.

## Features

- Fetches a random quote on first render
- Button to fetch a new quote
- Handles loading and error states
- Displays quote and author inside a styled MUI Card

## Tech Stack

- React (Vite)
- Redux Toolkit + React Redux
- Axios
- Material UI (MUI)
- CSS Modules (layout helpers)

## API

- Random quote endpoint: `https://dummyjson.com/quotes/random`

## Project Structure

- `src/features/quote/quoteSlice.js` - async thunk + slice (quote, author, status, error)
- `src/store.js` - Redux store setup
- `src/components/randomQuote/index.jsx` - UI component (useSelector/useDispatch, render logic)
- `src/components/randomQuote/styles.module.css` - container and error styling

## Notes

    •	status values: idle -> loading -> succeeded / failed
    •	UI updates automatically based on status (Loading text, Error message, or Quote Card)
