import styles from "../useritem/styles.module.css";

function UserItem({ user }) {
  return (
    <div className={styles.card}>
      <p>
        <span className={styles.name}>{user.name}</span>,{" "}
        <span className={styles.position}>{user.position}</span>
      </p>
    </div>
  );
}

export default UserItem;
