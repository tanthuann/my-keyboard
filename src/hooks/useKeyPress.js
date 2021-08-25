// libs
import { useState, useEffect } from "react";
// other
import CONSTANTS from "@/constants";

export const useKeyPress = (targetKey, element = window) => {
  // State for keeping track of whether key is pressed
  const [keyPressed, setKeyPressed] = useState(false);

  // If pressed key is our target key then set to true
  const downHandler = (e) => {
    if (e.key === targetKey) {
      e.preventDefault();
      setKeyPressed(true);
    }
  };

  // If released key is our target key then set to false
  const upHandler = (e) => {
    if (e.key === targetKey) {
      e.preventDefault();
      setKeyPressed(false);
    }
  };

  // If window is blur then set to false
  const blurHandler = (e) => {
    e.preventDefault();
    setKeyPressed(false);
  };

  const compositionUpdateHandler = () => {
    setKeyPressed(false);
  };

  useEffect(() => {
    // Make sure element supports addEventListener
    const isSupported = element && element.addEventListener;
    if (!isSupported) return false;

    // Add event listeners
    element.addEventListener(CONSTANTS.EVENT_NAMES.KEY_DOWN, downHandler);
    element.addEventListener(CONSTANTS.EVENT_NAMES.KEY_UP, upHandler);
    element.addEventListener(CONSTANTS.EVENT_NAMES.BLUR, blurHandler);
    element.addEventListener(
      CONSTANTS.EVENT_NAMES.COMPOSITION_UPDATE,
      compositionUpdateHandler
    );
    // Remove event listeners on cleanup
    return () => {
      element.removeEventListener(CONSTANTS.EVENT_NAMES.KEY_DOWN, downHandler);
      element.removeEventListener(CONSTANTS.EVENT_NAMES.KEY_UP, upHandler);
      element.removeEventListener(CONSTANTS.EVENT_NAMES.BLUR, blurHandler);
      element.removeEventListener(
        CONSTANTS.EVENT_NAMES.COMPOSITION_UPDATE,
        compositionUpdateHandler
      );
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // Empty array ensures that effect is only run on mount and unmount

  return keyPressed;
};
