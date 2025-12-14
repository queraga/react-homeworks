import "./App.css";
import Filter from "./components/filter";
import UserList from "./components/userlist/index";

function App() {
  return (
    <div className="app">
      <Filter />
      <UserList />
    </div>
  );
}

export default App;
