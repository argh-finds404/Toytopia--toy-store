import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../layouts/HomeLayout";
import Home from "../pages/Home";
import CategoriesToys from "../pages/CategoriesToys";
import ErrorPage from "../pages/error/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    children: [
      {
        path: "", 
        element: <CategoriesToys />, 
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
    element: <h2>Authentication Layout</h2>,
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
