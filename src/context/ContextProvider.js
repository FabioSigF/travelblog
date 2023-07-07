import React, { createContext, useContext, useState } from 'react';


const StateContext = createContext();

export const ContextProvider = ({ children }) => {

  const [user, setUser] = useState(undefined)
  const [searchString, setSearchString] = useState(undefined);

  return (
    <StateContext.Provider
      value={{
        user,
        setUser,
        searchString,
        setSearchString
      }}>
      {children}
    </StateContext.Provider>
  )
}

export const useStateContext = () => useContext(StateContext);