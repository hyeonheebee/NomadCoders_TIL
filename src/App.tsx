import { motion } from "framer-motion";
import { Outlet } from "react-router-dom";

import styled, { createGlobalStyle } from "styled-components";
import Header from "./components/Header";


const GlobalStyle = createGlobalStyle`
body{
  display:flex;
  flex-direction:column;
  justify-content:center;

}
a:link{
  text-decoration: none;
}
`

export default function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
     <Outlet />
    </>
  );
}