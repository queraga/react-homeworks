import "./App.css";
import Counter from "./components/counter";
import TodoForm from "./components/todoForm";
import TodoList from "./components/todoList";

function App() {
  return (
    <div>
      <Counter />
      <div>
        <h1>Redux Todo App</h1>
        <TodoForm />
        <TodoList />
      </div>
    </div>
  );
}

export default App;
