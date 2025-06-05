import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App/App";
import "./assets/Fonts/css/style.css";
import "./Style/index.css";
import { Provider } from "react-redux";
import { persistor, Store } from "./App/Store/Store";
import { PersistGate } from "redux-persist/integration/react";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={Store}>
      <PersistGate
        loading={<div>در حال بازیابی اطلاعات...</div>}
        persistor={persistor}
      >
        <App />
      </PersistGate>
    </Provider>
  </StrictMode>
);
