// React
import React, { StrictMode } from "react";
// React's library to talk to web browsers
import { createRoot } from "react-dom/client";
// The styles for your components
import "./styles.css";
// Component I made in App.js
import App from "./App";

const root = createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);