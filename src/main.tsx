import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

import React from "react";
import ReactDOM from "react-dom/client";
import Plans from "./Plans";
import "./index.css"; // your Tailwind or custom styles

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Plans />
  </React.StrictMode>
);

