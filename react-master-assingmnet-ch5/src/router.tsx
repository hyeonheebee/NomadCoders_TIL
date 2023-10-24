import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Home from "./Home";
import Detail from "./screens/Detail";
import NotFound from "./screens/NotFound";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <Home />,
        errorElement: <NotFound />,
      },

      {
        path: "/character/:id",
        element: <Detail />,
        errorElement: <NotFound />,
      },
    ],
    errorElement: <NotFound />,
  },
]);

export default router;
