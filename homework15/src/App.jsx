import { useState, useMemo, useCallback } from "react";
import "./App.css";
import UserList from "./UserList";
import usersData from "./userData";

function App() {
  const [filteredData, setFilteredData] = useState("");

  // const filteredUsers = userList.filter((user) =>
  //   user.name.toLowerCase().includes(filteredData.toLowerCase()),
  // );

  const filterUsers = useCallback(
    (users) => {
      return users.filter((user) =>
        user.name.toLowerCase().includes(filteredData.toLowerCase()),
      );
    },
    [filteredData],
  );

  const filteredUsers = useMemo(() => {
    console.log("Filtering happens");
    return filterUsers(usersData);
  }, [filterUsers]);

  return (
    <>
      <UserList users={filteredUsers} />
      <input
        type="text"
        value={filteredData}
        onChange={(e) => setFilteredData(e.target.value)}
      />
      <p>{filteredData}</p>
    </>
  );
}

export default App;
