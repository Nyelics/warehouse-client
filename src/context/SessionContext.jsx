import {createContext, useState} from "react";

export const SessionContext = createContext(null);

export const SessionProvider = ({children}) => {
  const [sessionData, setSessionData] = useState(null);

  return (
    <SessionContext.Provider value={{sessionData, setSessionData}}>
      {children}
    </SessionContext.Provider>
  );
};
