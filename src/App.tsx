import React, { useState } from "react";
import styled from "styled-components";
import Circle from "./Circle";
const Container = styled.div`
  background-color: ${(props) => props.theme.bgColor};
`;
const HI = styled.h1`
  color: ${(props) => props.theme.textColor};
`;
function App() {
  return (
    <Container>
      <HI>TEXT</HI>
    </Container>
  );
}
export default App;
