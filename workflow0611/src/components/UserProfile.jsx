import { useContext } from "react";
import { UserContext } from "../context/UserContext";

export default function UserProfile() {
  const { user, logoutUser } = useContext(UserContext);

  if (!user) return null;

  return (
    <div>
      <h3>User Profile</h3>
      <p>
        <b>Login:</b>
        {user.login}
      </p>
      <p>
        <b>Email:</b>
        {user.email}
      </p>
      <button onClick={logoutUser}>Logout</button>
    </div>
  );
}
