import { useState } from "react";
import AuthContext from "./AuthContext";

function AuthContextProvider({ children }) {
  const [logout, setLogout] = useState(true);
  const [user, setUser] = useState([]);

  return (
    <AuthContext.Provider value={{ user, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthContextProvider;
