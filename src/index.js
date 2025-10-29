import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";

const rootEl = document.getElementById("root");
if (!rootEl) throw new Error('Missing <div id="root"></div> in public/index.html');

createRoot(rootEl).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
