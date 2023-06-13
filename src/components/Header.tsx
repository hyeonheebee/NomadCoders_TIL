import { Link } from "react-router-dom";
import styled from "styled-components";
const HeaderContainer = styled.div`
  width: 100vw;
  height: 50px;
  margin-bottom: 150px;
  display: flex;
  justify-content: space-between;
`;
function Header() {
  return (
    <HeaderContainer>
      <Link to={"/"}>Home</Link>
      <Link to={"/coming-soon"}>Coming-Soon</Link>
      <Link to={"/now-playing"}>now-playing</Link>
    </HeaderContainer>
  );
}
export default Header;
