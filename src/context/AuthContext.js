import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState();

  useEffect(() => {
    try {
      const userToken = localStorage.getItem("user_token");
      const usersStorage = localStorage.getItem("users_bd");

      if (userToken && usersStorage) {
        const hasUser = JSON.parse(usersStorage)?.filter(
          (user) => user.email === JSON.parse(userToken).email
        );

        if (hasUser?.length) setUser(hasUser[0]);
      }
    } catch (error) {
      console.error("Error loading user session: ", error);
    }
  }, []);

  const login = (email, password) => {
    try {
      const usersStorage = JSON.parse(localStorage.getItem("users_bd"));

      const hasUser = usersStorage?.filter((user) => user.email === email);

      if (hasUser?.length) {
        if (hasUser[0].email === email && hasUser[0].password === password) {
          const token = Math.random().toString(36).substring(2);
          localStorage.setItem("user_token", JSON.stringify({ email, token }));
          setUser({ email, password });
          return;
        } else {
          return "Email or password incorrect!";
        }
      } else {
        return "User not registered!";
      }
    } catch (error) {
      console.error("Error during login: ", error);
      return error.massage;
    }
  };

  const register = (email, password) => {
    try {
      const usersStorage = JSON.parse(localStorage.getItem("users_bd"));

      const hasUser = usersStorage?.filter((user) => user.email === email);

      if (hasUser?.length) {
        return "User with this email already exists!";
      }

      let newUser;

      if (usersStorage) {
        newUser = [...usersStorage, { email, password }];
      } else {
        newUser = [{ email, password }];
      }

      localStorage.setItem("users_bd", JSON.stringify(newUser));

      return;
    } catch (error) {
      console.error("Error during registration: ", error);
      return error.message;
    }
  };

  const signout = () => {
    try {
      setUser(null);
      localStorage.removeItem("user_token");
    } catch (error) {
      console.error("Error signing out: ", error);
    }
  };

  return (
    <AuthContext.Provider
      value={{ user, signed: !!user, login, register, signout }}
    >
      {children}
    </AuthContext.Provider>
  );
};
