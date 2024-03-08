import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Detail from "../pages/Detail";
import Header from "../layout/Header";
import { Login } from "../pages/Login";
import { SignUp } from "../pages/SignUp";
import { ProtectedSite } from "../components/ProtectedSite";

export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <ProtectedSite>
        <Header />
      </ProtectedSite>
    ),
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "detail/:id",
        element: <Detail />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signUp",
    element: <SignUp />,
  },
]);
