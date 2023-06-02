import { Routes, Route, createBrowserRouter } from "react-router-dom";
import Header from "./Components/Header";
import About from "./screens/About";
import Home from "./screens/Home";
import Root from "./Root";
import NotFound from "./screens/NotFound";
import ErrorComponent from "./Components/ErrorComponent";
import User from "./screens/users/User";
import Followers from "./screens/users/Followers";
import Coins from "./screens/Coins";
import Coin from "./screens/coin";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "",
        element: <Home />,
        errorElement: <ErrorComponent />,
      },
      {
        path: "/about",
        element: <About />,
      },
      { path: "/coins", element: <Coins /> },
      { path: "/:coinId", element: <Coin /> },
      {
        path: "users/:userId",
        element: <User />,
        children: [
          {
            path: "followers",
            element: <Followers />,
          },
        ],
      },
    ],
    errorElement: <NotFound />,
  },
]);
export default router;
