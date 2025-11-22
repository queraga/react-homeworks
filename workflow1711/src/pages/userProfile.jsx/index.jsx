import { useParams } from "react-router";
import styles from "../userProfile.jsx/styles.module.css";
import { dataUsers } from "../users/dataUsers";

function UserProfile() {
  const { userId } = useParams();

  const user = dataUsers.find((u) => u.id === Number(userId));

  if (!user) {
    return <h2>User not found</h2>;
  }

  return (
    <div className={styles.profile}>
      <h1 className={styles.name}>{user.name}</h1>
      <p className={styles.bio}>{user.bio}</p>
    </div>
  );
}

export default UserProfile;
