import { Link } from "react-router-dom";
import styled from "styled-components";
import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";
const MarkerWrapper = styled.div`
  div {
    width: 7px;
    height: 7px;
    border-radius: 50%;
    background-color: #f5f42c;
    position: absolute;
    top: 45px;
  }
`;
const HeaderMarker1 = styled(motion.div)`
  left: 452px;
`;
const HeaderMarker2 = styled(motion.div)`
  left: 647px;
`;
const HeaderMarker3 = styled(motion.div)`
  right: 452px;
`;
const HeaderContainer = styled.div`
  width: 100vw;
  height: 50px;
  display: flex;
  position: fixed;
  justify-content: center;
  align-items: center;
  padding: 5px 10px;
  top: 0;
  background-color: black;
  a {
    diplay: block;
    width: 15%;
    color: white;
    text-align: center;
  }
`;

function Header() {
  const location = useLocation();
  return (
    <>
      <HeaderContainer>
        <Link to={"/"}>Popular-Movie</Link>
        <Link to={"/coming-soon"}>Coming-Soon</Link>
        <Link to={"/now-playing"}>Now-playing</Link>
        <MarkerWrapper>
          {location.pathname === "/" ? (
            <HeaderMarker1 layoutId="circle" />
          ) : null}
          {location.pathname === "/coming-soon" ? (
            <HeaderMarker2 layoutId="circle" />
          ) : null}
          {location.pathname === "/now-playing" ? (
            <HeaderMarker3 layoutId="circle" />
          ) : null}
        </MarkerWrapper>
      </HeaderContainer>
    </>
  );
}
export default Header;
