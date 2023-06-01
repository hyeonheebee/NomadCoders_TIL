import { createBrowserRouter } from "react-router-dom";
import Root from "./Root";
import About from "./screens/About";
import Author from "./screens/Author";
import Book from "./screens/Book";
import Chapter from "./screens/Chapter";
import Character from "./screens/Character";
import Home from "./screens/Home";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "",
        element: <Home />
      },
      {
        path: "/about",
        element: <About />
      },
      {
        path: "author/:name",
        element: <Author />,
        children: [
          {
            path: ":book",
            element: <Book />,
            children: [
              {
                path: "chapter",
                element: <Chapter />
              },
              { path: "character", element: <Character /> }
            ]
          }
        ]
      }
    ]
  }
]);

export default router;
