import { createContext, useContext, useState } from "react";
import {loadUser} from './UserData'
const AppContext = createContext();

export const AppProvider = ({ children }) => {
  

  return (
    <AppContext.Provider value={{ loadUser }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  return useContext(AppContext);
};