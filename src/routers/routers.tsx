import { createBrowserRouter } from "react-router-dom";
import Users from "../pages/users/Users";
import Homes from "../pages/homes/Homes";
import Navbar from "../pages/Navbar";

const routers = createBrowserRouter([
  {
    path: "/",
    element: <Navbar />,
    children: [
      {
        path: "/users",
        element: <Users />
      },
      {
        path: "/",
        element: <Homes />
      },
    ]
  }
], { basename: "/" });

export default routers;
