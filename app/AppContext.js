"use client";
import axios from "axios";
import React, { Children, createContext, useEffect, useState } from "react";

export const AppContext = createContext({});

export default function AppContextProvider({ children }) {
  const [isLoading, setIsLoading] = useState(true);
  const [allEmployee, setAllEmployee] = useState([]);

  const fetchEmployeeData = async () => {
    const { data } = await axios.get(
      "https://sweede.app/DeliveryBoy/Get-Employee/"
    );

    if (data) {
      setIsLoading(false);
      setAllEmployee(data);
    }
  };

  useEffect(() => {
    fetchEmployeeData();
  }, []);

  return (
    <AppContext.Provider
      value={{
        allEmployee,
        setAllEmployee,
        isLoading,
        setIsLoading,
        fetchEmployeeData,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}
