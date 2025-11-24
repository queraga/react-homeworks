import { useSelector } from "react-redux";

function TodoList() {
  const todos = useSelector((state) => state.todo.todos);
  return (
    <ul>
      {todos.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
}

export default TodoList;
