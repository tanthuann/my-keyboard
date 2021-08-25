// lib
import React from "react";
// dataSources
import { fnKeys, areaKey1, areaKey2, mainKeys, arrowKeys } from "@/dataSources";
// hooks
import { useEventListener } from "@/hooks/useEventListener";
// components
import KeyCap from "@/components/KeyCap";
// contexts
import { usePressedKey } from "@/contexts";
// others
import "./style.scss";

const keys = { fnKeys, areaKey1, areaKey2, mainKeys, arrowKeys };

const Keyboard = () => {
  const { saveKey } = usePressedKey();
  const keydownHandler = (e) => {
    e.preventDefault();
    saveKey(e.key);
  };

  useEventListener("keydown", keydownHandler);

  return (
    <div className="keyboard">
      {Object.keys(keys).map((keyListName) => (
        <div key={keyListName} className={keyListName}>
          {keys[keyListName].map((keyCap, key) =>
            !["break-line", "empty"].includes(keyCap.name) ? (
              <KeyCap key={`${keyCap.name}-${key}`} {...keyCap} />
            ) : (
              <div key={`${keyCap.name}-${key}`} className={keyCap.name} />
            )
          )}
        </div>
      ))}
    </div>
  );
};

export default Keyboard;
