import { BrowserRouter, useRoutes } from "react-router-dom";
import { commonRoute } from "../Config/Router/common.route";

const AppRoutes = () => {
  return useRoutes(commonRoute);
};

function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
}

export default App;
