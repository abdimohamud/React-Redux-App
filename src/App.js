import React from "react";
import "./styles.css";

import NameFetch from "./components/NameFetch";

export default function App() {
  return (
    <div className="App">
      <h1>🌎Nationality Predicter </h1>
      <h4>Enter your name and watch us predict your Nationality</h4>
      {/* <NameForm /> */}
      <NameFetch />
    </div>
  );
}
