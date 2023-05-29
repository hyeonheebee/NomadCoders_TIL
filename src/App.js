import styled, { keyframes } from "styled-components";
const Father = styled.div`
  display: flex;
`;

const rotationAnimation = keyframes`
from{
  transform:rotate(0deg)
}
to{
  transform:rotate(180deg)
}

`;
const Hello = styled.h1`
  font-size: 20px;
  color: ${(props) => props.theme.textColor};
`;
const Wapper = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
  background-color: ${(props) => props.theme.backgroundColor};
  ${Hello}{
    animation: :${rotationAnimation};
  }
`;

const Box = styled.div`
  background-color: ${(props) => props.bgColor};
  width: 100px;
  height: 100px;
  span {
    font-size: 50px;
    &:hover {
      font-size: 10px;
    }
    animation: ${rotationAnimation};
  }
`;

const Circle = styled(Box)`
  border-radius: 50px;
`;
function App() {
  return (
    <Wapper>
      <Hello />
      <h1>hello</h1>
      <Father>
        <Box bgColor="blue">
          <span>⭐</span>
        </Box>
        <Circle bgColor="teal" />
      </Father>
    </Wapper>
  );
}
export default App;
