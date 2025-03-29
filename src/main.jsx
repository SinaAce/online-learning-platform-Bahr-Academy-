import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App/App";
import "./assets/Fonts/css/style.css";
import "./Style/index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
