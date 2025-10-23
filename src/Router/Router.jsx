import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../layouts/HomeLayout";
import Home from "../pages/Home";
import CategoriesToys from "../pages/CategoriesToys";
import ErrorPage from "../pages/error/ErrorPage";

import Register from "../pages/Register";
import AuthLayout from "../layouts/AuthLayout";
import Login from "../pages/LoginPage/Login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    children: [
      {
        path: "", 
        element: <Home></Home>, 
        loader: () => fetch("/toys.json"),
      },
      {
        path: "categories/:id?",
        element: <CategoriesToys />,
        loader: () => fetch("/toys.json"),
      },
    ],
  },
  {
    path: "/auth",
    element:<AuthLayout></AuthLayout>,
    children:[
      {
        path:"/auth/login",
        element:<Login></Login>
      },
      {
        path:"/auth/register",
        element:<Register></Register>
      },
    ]
  },
  {
    path: "/toys",
    element: <h2>Toys Layout</h2>,
  },
  {
    path: "*",
    element: <ErrorPage></ErrorPage>,
  },
]);

export default router;
