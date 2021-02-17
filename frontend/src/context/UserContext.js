import React, { createContext, useState } from "react";

export const UserContext = createContext();

const initialState = {
  user: null,
  isLoggedIn: false,
};
export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(initialState);
  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};
