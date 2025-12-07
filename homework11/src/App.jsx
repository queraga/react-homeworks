import "./App.css";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import { NavLink } from "react-router-dom";
import HomePage from "./components/homePage";
import Articles from "./components/articles";
import SingleArticle from "./components/singleArticle";

function App() {
  return (
    <>
      <div className="app">
        <div className="nav">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/articles">Articles</NavLink>
        </div>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/articles" element={<Articles />} />
          <Route path="/articles/:id" element={<SingleArticle />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
