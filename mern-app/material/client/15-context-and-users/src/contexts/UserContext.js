import React, { useState, createContext, useContext } from "react";

export const UserContext = createContext();

export const UserProvider = (props) => {
   const [username, setUsername] = useState("");

   const login = (name) => {
      // Should be replaced with request to auth API
      setUsername(name);
   };

   const logout = () => {
      // Would clear any tokens or user cookies
      setUsername("");
   };

   return (
      <UserContext.Provider
         value={{
            username,
            login,
            logout,
         }}
      >
         {props.children}
      </UserContext.Provider>
   );
};

export const useUserContext = () => {
   const { username, login, logout } = useContext(UserContext);
   return {
      username,
      login,
      logout,
   };
};
