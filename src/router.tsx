import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Home from "./Home";
import Detail from "./screens/Detail";

const router = createBrowserRouter([{
path:"/",
element:<App/>,
children:[{
  path:"",
  element:<Home /> 
},
<<<<<<< HEAD
{
path:"/character/:id",
element:<Detail />

}]
=======
{path : "/character/:id",
element:<Detail />}]
>>>>>>> f30b9cbfe91692afb079c7d09cba738b6e07805b
}]);

export default router;
