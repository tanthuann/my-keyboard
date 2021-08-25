// libs
import React from "react";
// layouts
import MyKeyboard from "./layouts";
// others
import "./App.css";
import ProvidePressedKey from "./contexts";

const App = () => (
  <div className="App">
    <ProvidePressedKey>
      <MyKeyboard />
    </ProvidePressedKey>
  </div>
);

export default App;
