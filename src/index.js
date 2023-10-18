import React from "react";
import ReactDOM from "react-dom/client";

// CSS
import "./css/Root.css";
import "./css/Home.css";
import "./css/NavBars.css";
import "./css/Buttons.css";

import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
