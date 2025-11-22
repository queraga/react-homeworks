import "./App.css";
import { Routes, Route } from "react-router";
import NavBar from "./components/NavBar";
import Home from "./pages/home";
import Users from "./pages/users";
import UserProfile from "./pages/userProfile.jsx";

function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/users" element={<Users />} />
        <Route path="/users/:userId" element={<UserProfile />} />
      </Routes>
    </div>
  );
}

export default App;
