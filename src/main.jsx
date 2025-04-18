import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App/App";
import "./assets/Fonts/css/style.css";
import "./Style/index.css";
import { Provider } from "react-redux";
import { Store } from "./App/Store/Store";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={Store}>
      <App />
    </Provider>
  </StrictMode>
);
