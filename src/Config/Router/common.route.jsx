import { Children } from "react";
import MainLayout from "../../Components/Core/Layout/MainLayout";

export const commonRoute = () => [
  {
    path: "/",
    Element: <MainLayout />,
    Children: "",
  },
];
