import { connect } from "react-redux";
import UserItem from "../useritem";
import styles from "../userlist/styles.module.css";

function UserList({ users, filter }) {
  const query = filter.trim().toLowerCase();
  const filteredUsers =
    query === ""
      ? users
      : users.filter(
          (user) =>
            user.name.toLowerCase().includes(query) ||
            user.position.toLowerCase().includes(query)
        );

  return (
    <div>
      <h1 className={styles.title}>Users quantity: {users.length}</h1>
      <div className={styles.wrapper}>
        <div className={styles.list}>
          {filteredUsers.map((user) => (
            <UserItem key={user.id} user={user} />
          ))}
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  users: state.users,
  filter: state.filter,
});

export default connect(mapStateToProps)(UserList);
