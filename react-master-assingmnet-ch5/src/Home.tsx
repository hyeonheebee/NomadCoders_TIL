import { useQuery } from "@tanstack/react-query";
import { Link, Outlet } from "react-router-dom";
import { fetchList } from "./api";
import styled from "styled-components";
const Title = styled.h1`
  font-size: 100px;
  font-family: "Caveat", cursive;
  color: ${(props) => props.theme.hlColor};
`;
const Wrapper = styled.div`
  padding-top: 50px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(25, 1fr);
  align-items: baseline;
`;
const Container = styled.div`
  margin-bottom: 20px;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  img {
    &:hover {
      border: ${(props) => props.theme.hlColor} solid 2px;
      cursor: pointer;
    }
  }
  h2 {
    &:hover {
      color: ${(props) => props.theme.hlColor};
    }
  }
`;
interface IcharList {
  id: number;
  name: string;
  imageUrl: string;
}
function Home() {
  const { isLoading, data: charData } = useQuery<IcharList[]>(
    ["charlist"],
    fetchList
  );
  let imgUrl = "";
  return (
    <>
      <Title>Characters</Title>
      {isLoading ? (
        <h1>Loading...</h1>
      ) : (
        <ul>
          <Wrapper>
            {charData?.slice(1, 100).map((data) => (
              <Container>
                <Link to={`character/${data.id}`}>
                  <img
                    src={
                      (imgUrl = data.imageUrl
                        ? data.imageUrl
                        : "https://seranking.com/blog/wp-content/uploads/2021/01/404_01-min.jpg")
                    }
                  />
                  <li key={data.id}>
                    <h2>{data.name}</h2>
                  </li>
                </Link>
              </Container>
            ))}
          </Wrapper>
        </ul>
      )}
    </>
  );
}
export default Home;
