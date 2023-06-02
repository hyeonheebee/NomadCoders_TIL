import { useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import { Link, Outlet } from "react-router-dom";

import styled from "styled-components";

const Container = styled.div`
  padding: 0px 10px;
`;
const CoinsHeader = styled.header`
  height: 10vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Title = styled.h1`
  color: ${(props) => props.theme.accentColor};
  font-size: 50px;
`;
const Loader = styled.span`
  text-align: center;
  display: block;
`;
interface RouteState {
  name: string;
}
function Coin() {
  const [loading, setLoading] = useState(true);
  const { coinId } = useParams();
  const location = useLocation();
  const state = location.state as RouteState;

  return (
    <Container>
      <CoinsHeader>
        <Title>{state?.name || "Loading..."}</Title>
      </CoinsHeader>
      {loading ? <Loader>Loading...</Loader> : null};
    </Container>
  );
}
export default Coin;
