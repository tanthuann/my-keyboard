// libs
import { useState, useEffect } from "react";

export const useKeyPress = (targetKey, element = window) => {
  // State for keeping track of whether key is pressed
  const [keyPressed, setKeyPressed] = useState(false);

  // If pressed key is our target key then set to true
  const downHandler = (e) => {
    if (e.key.toLowerCase() === targetKey.toLowerCase()) {
      e.preventDefault();
      setKeyPressed(true);
    }
  };

  // If released key is our target key then set to false
  const upHandler = (e) => {
    if (e.key.toLowerCase() === targetKey.toLowerCase()) {
      e.preventDefault();
      setKeyPressed(false);
    }
  };

  // If window is blur then set to false
  const blurHandler = (e) => {
    e.preventDefault();
    setKeyPressed(false);
  };

  useEffect(() => {
    // Make sure element supports addEventListener
    const isSupported = element && element.addEventListener;
    if (!isSupported) return false;

    // Add event listeners
    element.addEventListener("keydown", downHandler);
    element.addEventListener("keyup", upHandler);
    element.addEventListener("blur", blurHandler);
    // Remove event listeners on cleanup
    return () => {
      element.removeEventListener("keydown", downHandler);
      element.removeEventListener("keyup", upHandler);
      element.removeEventListener("blur", blurHandler);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // Empty array ensures that effect is only run on mount and unmount

  return keyPressed;
};
