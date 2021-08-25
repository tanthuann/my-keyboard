import { useEffect, useCallback } from "react";

export const useEventListener = (
  eventName,
  handler,
  element = window,
  useCapture
) => {
  const memoHandler = useCallback(
    (e) => {
      if (element === document) {
        e.stopPropagation();
      }
      handler(e);
    },
    [element, handler]
  );

  useEffect(
    () => {
      const isSupported = element && element.addEventListener;
      if (!isSupported) return false;

      // Create event listener that calls handler function stored in ref
      const eventListener = (event) => memoHandler(event);
      // Add event listener
      element.addEventListener(eventName, eventListener, useCapture);

      // Remove event listener on cleanup
      return () => {
        element.removeEventListener(eventName, eventListener, useCapture);
      };
    },
    [eventName, element, memoHandler, useCapture] // Re-run if eventName or element changes
  );
};
