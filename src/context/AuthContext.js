import React, { createContext, useState } from "react";

export const UserAuthContext = createContext();

const UserAuthContextProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);

  const login = (userData) => {
    setIsLoading(true);
    // logic to authenticate user
    setTimeout(() => {
      setIsLoggedIn(true);
      setUser(userData);
      setIsLoading(false);
    }, 1000);
  };

  const logout = () => {
    setIsLoading(true);
    // logic to logout user
    setTimeout(() => {
      setIsLoggedIn(false); 
      setUser(null);
      setIsLoading(false);
    }, 1000);
  };

  return (
    <UserAuthContext.Provider
      value={{ isLoggedIn, user, login, logout, isLoading }}
    >
      {children}
    </UserAuthContext.Provider>
  );
};

export default UserAuthContextProvider;
