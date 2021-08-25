// libs
import React, { useState, useContext, createContext } from "react";

const PressedContext = createContext();

const ProvidePressedKey = ({ children }) => {
  const [pressedKeys, setPressedKeys] = useState({});

  const saveKey = (key) => {
    setPressedKeys({ ...pressedKeys, [key.toLowerCase()]: true });
  };

  return (
    <PressedContext.Provider value={{ pressedKeys, setPressedKeys, saveKey }}>
      {children}
    </PressedContext.Provider>
  );
};

export const usePressedKey = () => useContext(PressedContext);

export default ProvidePressedKey;
