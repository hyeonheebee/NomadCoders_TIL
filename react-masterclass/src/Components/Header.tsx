import { Link, useNavigate } from "react-router-dom";
function Header() {
  const navigate = useNavigate();
  const onAboutClick = () => {
    navigate("/about");
  };
  return (
    <ul>
      <li>
        <Link to={"/"}>Home</Link>
      </li>
      <li>
        <button onClick={onAboutClick}>About</button>
      </li>
      <li>
        <Link to={"/coins"}>Coins</Link>
      </li>
    </ul>
  );
}
export default Header;
