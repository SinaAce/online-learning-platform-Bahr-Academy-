import MainLayout from "../../Components/Core/Layout/MainLayout";
import Login from "../../Components/Pages/Auth/Login";
import Register from "../../Components/Pages/Auth/Register";
import Forgotpass from "../../Components/Pages/Auth/Forgotpass";
import Notfound from "../../Components/Pages/404/Notfound";
import PrivateRoute from "./privateRoute";
import StudentPanel from "../../Components/StudentPanel/StudentPanel";
import Dashboard from "../../Components/StudentPanel/Dashboard";
import EditProfile from "../../Components/StudentPanel/Profile/EditProfile";
import Courses from "../../Components/Pages/Courses/Courses";

export const commonRoute = [
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/courses",
        element: <Courses />,
      },
    ],
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
  {
    path: "/panel",
    element: (
      <PrivateRoute>
        <StudentPanel />
      </PrivateRoute>
    ),
    children: [
      {
        index: true,
        element: <Dashboard />,
      },
      {
        path: "profile",
        element: <EditProfile />,
      },
    ],
  },
];
