import { Outlet } from "react-router-dom";
import styled from "styled-components";
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
export default function App() {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
}
