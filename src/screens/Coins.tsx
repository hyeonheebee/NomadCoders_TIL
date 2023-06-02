import { Link } from "react-router-dom";
import { users } from "../db";
import styled from "styled-components";
import { useEffect, useState } from "react";

const Container = styled.div`
  padding: 0px 10px;
`;
const CoinsHeader = styled.header`
  height: 10vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const CoinsList = styled.ul``;
const Coin = styled.li`
  background-color: white;
  color: ${(props) => props.theme.bgColor};
  margin-bottom: 10px;
  border-radius: 15px;
  a {
    display: block;
    padding: 20px;
  }
  &:hover {
    a {
      color: ${(props) => props.theme.accentColor};
      transition: color 0.3s ease-in;
    }
  }
`;
const Title = styled.h1`
  color: ${(props) => props.theme.accentColor};
  font-size: 50px;
`;
const Loader = styled.span`
  text-align: center;
  display: block;
`;
interface CoinInterface {
  id: string;
  name: string;
  symbol: string;
  rank: number;
  is_new: boolean;
  is_active: boolean;
  type: string;
}

function Coins() {
  const [coins, setCoins] = useState<CoinInterface>([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    (async () => {
      const json = await (
        await fetch("https://api.coinpaprika.com/v1/coins")
      ).json();
      setCoins(json.splice(0, 100));
      setLoading(false);
    })();
  }, []);

  return (
    <Container>
      <CoinsHeader>
        <Title>Coins</Title>
      </CoinsHeader>
      {loading ? (
        <Loader>Loading...</Loader>
      ) : (
        <CoinsList>
          {coins.map((coin) => (
            <Coin key={coin.id}>
              <Link to={`/${coin.id}`}>{coin.name} &rarr;</Link>
            </Coin>
          ))}
        </CoinsList>
      )}
    </Container>
  );
}
export default Coins;
