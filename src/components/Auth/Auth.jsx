import React, { createContext, useState } from 'react';
const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [notify, setNotify] = useState({
    isOpen: false,
    message: "",
    type: "success",
    position: "top",
  });

  return (
    <AuthContext.Provider value={{ notify, setNotify }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };

