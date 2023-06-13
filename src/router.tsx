import App from "./App";
import { createBrowserRouter } from "react-router-dom";
import { Children } from "react";
import Home from "./screens/Home";
import Coming from "./screens/Coming";
import Now from "./screens/Now";
import Detail from "./screens/Detail";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <Home />,
        children: [
          {
            path: "/:id",
            element: <Detail />,
          },
        ],
      },
      {
        path: "/coming-soon",
        element: <Coming />,
      },
      {
        path: "/now-playing",
        element: <Now />,
      },
      // {
      //   path: "/detail",
      //   element: <Detail />,
      // },
    ],
  },
]);
