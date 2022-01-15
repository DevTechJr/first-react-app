import logo from "./logo.svg";
import "./App.css";
import React from "react";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>Here's the React logo component : </p>
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            App Made By : <code>Anirudh Vangara</code>
          </p>
        </header>
      </div>
    );
  }
}

export default App;
