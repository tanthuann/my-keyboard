// libs
import React from "react";
import classnames from "classnames";
// contexts
import { usePressedKey } from "@/contexts";
// hooks
import { useKeyPress } from "@/hooks/useKeyPress";
// others
import "./style.scss";

const KeyCap = ({ name, nameArr, style }) => {
  const isPressed = useKeyPress(name);
  const { pressedKeys } = usePressedKey();
  return (
    <div
      className={classnames("key-cap", {
        isPressed: !!isPressed,
        hasPressed: pressedKeys[name.toLowerCase()],
      })}
      style={style}
    >
      {nameArr || name}
    </div>
  );
};

export default KeyCap;
