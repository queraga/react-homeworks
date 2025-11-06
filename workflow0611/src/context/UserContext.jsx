import { createContext, useState } from "react";

export const UserContext = createContext(null);

export function UserProvider({ children }) {
  const [user, setUser] = useState(null);
  const [isRegistered, setIsRegistered] = useState(false);

  const loginUser = (data) => {
    setUser({ login: data.login, email: data.email });
    setIsRegistered(true);
  };

  const logoutUser = () => {
    setUser(null);
    setIsRegistered(false);
  };

  const value = { user, isRegistered, loginUser, logoutUser };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
}
