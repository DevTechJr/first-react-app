import React from "react";
import ReactDOM from "react-dom";
// Compo CSS + JS
import "./AniCompo/AniCompo.css";
import AniCompo from "./AniCompo/AniCompo";
// Compo CSS + JS
import "./NewCompo/NewCompo.css";
import NewCompo from "./NewCompo/NewCompo.js";
import reportWebVitals from "./reportWebVitals";

// New Component

ReactDOM.render(
  <React.StrictMode>
    <AniCompo />
    <NewCompo />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
