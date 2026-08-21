import logo from "./logo.svg";
import "./App.css";
import React from "react";
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1> Weather App</h1>
        <Weather />
      </header>
      <footer>
        <p>
          View my GitHub:
          <a
            href="https://github.com/LwandisaMasiza/my-app"
            target="-blank"
            rel="nooper noreferrer"
          >
            GitHub Profile
          </a>
        </p>
      </footer>
    </div>
  );
}

export default App;
