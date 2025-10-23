import { createBrowserRouter } from "react-router";
import HomeLayout from "../layouts/HomeLayout";
import Home from "../pages/Home";
import CategoriesToys from "../pages/CategoriesToys";


const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout></HomeLayout>,
    children: [
      {
        path:"",
        element:<Home></Home>
      },
      {
        path:"/categories/:id",
        element:<CategoriesToys></CategoriesToys>,
        loader: ()=> fetch('/toys.json')
      }
    ]
  },
  {
    path: "/auth",
    element: <h2>Authntication Layout</h2>,
  },
  {
    path: "/toys",
    element: <h2>toys Layout</h2>,
  },
  {
    path: "/*",
    element: <h2>Error404</h2>,
  },
]);

export default router;