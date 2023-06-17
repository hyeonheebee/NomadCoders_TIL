import App from "./App";
import { createBrowserRouter } from "react-router-dom";

import Home from "./screens/Home";
import Coming from "./screens/Coming";
import Now from "./screens/Now";
import Detail from "./screens/Detail";
import CancleComing from "./components/CancleComing";
import CancelPopular from "./components/CancelPopular";
import CancleNow from "./components/CancleNow";
import Collection from "./screens/Collection";
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
            path: ":id",
            element: <Detail />,
            children: [
              {
                path: "collection",
                element: <Collection />,
              },
            ],
          },
        ],
      },
      {
        path: "/coming-soon",
        element: <Coming />,
        children: [
          {
            path: ":id",
            element: <Detail />,
            children: [
              {
                path: "collection",
                element: <Collection />,
              },
            ],
          },
        ],
      },
      {
        path: "/now-playing",
        element: <Now />,
        children: [
          {
            path: ":id",
            element: <Detail />,
            children: [
              {
                path: "collection",
                element: <Collection />,
              },
            ],
          },
        ],
      },
    ],
  },
]);
