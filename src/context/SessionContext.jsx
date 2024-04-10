import {createContext, useState} from "react";
import PropTypes from "prop-types"; // Import PropTypes

export const SessionContext = createContext(null);

export const SessionProvider = ({children}) => {
  const [sessionData, setSessionData] = useState(null);

  return (
    <SessionContext.Provider value={{sessionData, setSessionData}}>
      {children}
    </SessionContext.Provider>
  );
};

SessionProvider.propTypes = {
  children: PropTypes.func.isRequired,
};
