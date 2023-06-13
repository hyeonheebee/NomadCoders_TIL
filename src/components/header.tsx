import { Link } from "react-router-dom";

function Header() {
  return (
    <>
      <h1>Header</h1>
      <Link to={"/"}>Home</Link>
      <Link to={"/coming-soon"}>Coming-Soon</Link>
      <Link to={"/now-playing"}>now-playing</Link>
    </>
  );
}

export default Header;
