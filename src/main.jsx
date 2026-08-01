import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css";

const params = new URLSearchParams(window.location.search);
const redirectPath = params.get("redirect");

if (redirectPath) {
  const normalizedPath = redirectPath.startsWith("/My-Portfolio")
    ? redirectPath.replace("/My-Portfolio", "") || "/"
    : redirectPath;
  window.history.replaceState(null, "", normalizedPath);
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter basename="/My-Portfolio">
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
