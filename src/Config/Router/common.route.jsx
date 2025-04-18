import MainLayout from "../../Components/Core/Layout/MainLayout";
import Login from "../../Components/Pages/Auth/Login";
import Register from "../../Components/Pages/Auth/Register";
import Forgotpass from "../../Components/Pages/Auth/Forgotpass";
import Notfound from "../../Components/Pages/404/Notfound";

export const commonRoute = [
  {
    path: "/",
    element: <MainLayout />,
    children: [],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <Register />,
  },
  {
    path: "/forgotpassword",
    element: <Forgotpass />,
  },
  {
    path: "*",
    element: <Notfound />,
  },
];
