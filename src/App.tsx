import { Outlet } from "react-router-dom";
import { createGlobalStyle } from "styled-components";
import Header from "./components/Header";

const GlobalStyle = createGlobalStyle`
body{
  display:flex;
  flex-direction:column;
  justify-content:center;
  background-color:black;
  
  
color:white;
}
a{
  text-decoration: none;
  color:white;
}
`;

export default function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Outlet />
    </>
  );
}
