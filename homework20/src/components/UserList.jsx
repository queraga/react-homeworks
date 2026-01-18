import { useSelector } from "react-redux";

function UserList() {
  const users = useSelector((state) => state.user.users);

  return (
    <div>
      <h1>User List is here</h1>
      <ul>
        {users.map((e) => (
          <li key={e.id}>
            <strong>{e.name}</strong> ({e.email})
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UserList;
