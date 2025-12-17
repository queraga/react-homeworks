import "./App.css";
import User from "./components/user";
import UserForm from "./components/userForm";

function App() {
  return (
    <div className="app">
      <h1>Status check</h1>
      <div>
        <User />
        <UserForm />
      </div>
    </div>
  );
}

export default App;
