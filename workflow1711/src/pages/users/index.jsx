import { Link } from "react-router";
import styles from "../users/styles.module.css";
import { dataUsers } from "./dataUsers";

function Users() {
  return (
    <div>
      <h1>Users List</h1>
      <ul>
        {dataUsers.map((user) => (
          <li key={user.id}>
            <Link to={`/users/${user.id}`} className={styles.userLink}>
              {user.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Users;
