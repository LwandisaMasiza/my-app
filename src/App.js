import logo from "./logo.svg";
import "./App.css";
import React from "react";
import weather from "./weather";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1> Weather App</h1>
        <weather />
      </header>
    </div>
  );
}

export default App;
