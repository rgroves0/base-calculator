import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Button } from "./components";

export const App = () => {
  const [value, setValue] = useState("1");
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <Button value={value} setValue={setValue} />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
};
