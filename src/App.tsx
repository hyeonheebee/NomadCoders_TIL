import { motion } from "framer-motion";
import { Outlet } from "react-router-dom";
import styled, { createGlobalStyle } from "styled-components";
import Header from "./components/Header";
export const ContainerWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
`;
export const Container = styled.div`
  width: 100px;
  height: 150px;
  ul {
    display: flex;
    justify-content: center;
  }
  img {
    width: 50px;
    height: auto;
  }
`;

export const CancleDiv = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 5px;
  background-color: tomato;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const Overlay = styled(motion.div)`
    z-index: 1,
  display: "flex";
  justify-content: "center";
  align-items: "center";
    width: "100%",
    height: "100%",
`;
export const overlay = {
  visible: {
    scale: 1,
    zIndex: 3,
    backgroundColor: "rgb(0, 0, 0)",
    color: "white",
    position: "absolute",
  },
  exit: {
    zIndex: -1,
  },
  initial: {
    zIndex: -1,
  },
};
const OutContainer = styled.div`
  margin-top: 150px;
`;
const GlobalStyle = createGlobalStyle`
a:link{
  text-decoration: none;
}

`;
export default function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <OutContainer>
        <Outlet />
      </OutContainer>
    </>
  );
}
