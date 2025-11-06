import { useContext } from "react";
import { UserContext } from "../context/UserContext";
import RegistrationForm from "./RegistrationForm";
import UserProfile from "./UserProfile";

export default function MainComponent() {
  const { isRegistered } = useContext(UserContext);

  return (
    <main>
      <h2>Auth demo with Context + react-hook-form</h2>
      {isRegistered ? <UserProfile /> : <RegistrationForm />}
    </main>
  );
}
