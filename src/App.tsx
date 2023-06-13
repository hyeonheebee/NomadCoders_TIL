import { Outlet } from "react-router-dom";
import Header from "./components/header";

export default function App() {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
}
