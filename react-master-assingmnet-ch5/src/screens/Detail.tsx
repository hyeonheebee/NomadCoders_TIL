import { useQuery } from "@tanstack/react-query";
import styled from "styled-components";
import { Link, useLocation, useParams } from "react-router-dom";
import { fetchDetail } from "../api";
const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  ul {
    margin-top: 30px;
  }
  img {
    &:hover {
      opacity: 0.8;
      cursor: pointer;
    }
  }
`;
interface IdetailData {
  id: number;
  films: string[];
  name: string;
  imageUrl: string;
  sourceUrl: string;
}

function Detail() {
  const { id: charId } = useParams();
  const { isLoading, data: detailData } = useQuery<IdetailData>(
    ["charDetail"],
    () => fetchDetail(charId)
  );
  const imgUrl = detailData?.imageUrl
    ? detailData.imageUrl
    : "https://seranking.com/blog/wp-content/uploads/2021/01/404_01-min.jpg";

  return (
    <>
      <h1>
        <Link to={"/"}>&larr;</Link>
      </h1>
      {isLoading ? (
        <h1>is Loading...</h1>
      ) : (
        <Container>
          <img src={imgUrl} />
          <h2>{detailData?.name}'s films'</h2>
          <ul>
            {detailData?.films.map((film) => (
              <li key={film}>{film}</li>
            ))}
          </ul>
        </Container>
      )}
    </>
  );
}
export default Detail;
