import { useState } from "react";
import Header from "./components/header";
import Hero from "./components/hero";
import Categories from "./components/categories";
import Jobs from "./components/newJob";
import Footer from "./components/footer";
import "./App.css";

function App() {
  return (
    <div className="appContainer">
      <Header />
      <Hero />
      <Categories />
      <Jobs />
      <Footer />
    </div>
  );
}

export default App;
