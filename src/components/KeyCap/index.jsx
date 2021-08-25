// libs
import React from "react";
// others
import "./style.scss";

const KeyCap = ({ name, nameArr, style }) => (
  <div className="key-cap" style={style}>
    {nameArr || name}
  </div>
);

export default KeyCap;
