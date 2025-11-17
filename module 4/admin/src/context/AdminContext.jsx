// src/context/AdminContext.jsx
import React, { createContext, useState, useEffect } from "react";

export const AdminContext = createContext();

const AdminContextProvider = ({ children }) => {
  const [admin, setAdmin] = useState(null);
  const [loading, setLoading] = useState(true);
  const [aToken,setAToken]= useState(localStorage.getItem("aToken")?localStorage.setItem('aToken'):"");


//   backend add krrna yaahan par b
// const backendUrl="http://localhost:5000";

  useEffect(() => {
    const storedAdmin = localStorage.getItem("admin");
    if (storedAdmin) {
      setAdmin(JSON.parse(storedAdmin));
    }
    setLoading(false);
  }, []);

  return (
    <AdminContext.Provider value={{ admin, setAdmin, loading }}>
      {children}
    </AdminContext.Provider>
  );
};

export default AdminContextProvider;
