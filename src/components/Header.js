import { useNavigate } from "react-router-dom";
function Header() {
  const navigate = useNavigate();
  const onHomeClick = () => {
    navigate("/");
  };
  const onAboutClick = () => {
    navigate("/about");
  };
  return (
    <div>
      <ul style={{ listStyle: "none" }}>
        <li>
          <button onClick={onHomeClick}>Home</button>
        </li>
        <li>
          <button onClick={onAboutClick}>About</button>
        </li>
      </ul>
    </div>
  );
}
export default Header;
