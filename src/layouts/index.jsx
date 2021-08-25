// libs
import React from "react";
// components
import Header from "@/components/Header";
import Keyboard from "@/components/Keyboard";
// others
import "./style.scss";

const MyKeyboard = () => (
  <div className="my-keyboard">
    <Header />
    <Keyboard />
  </div>
);

export default MyKeyboard;
