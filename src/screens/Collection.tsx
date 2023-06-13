import { useOutletContext } from "react-router-dom";
import styled from "styled-components";
import { makeBgPath, makeImagePath } from "../api";
const BgImg = styled.img`
  width: 300px;
  height: auto;
  opacity: 0.7;
  border-radius: 20px;
`;
const MainImg = styled.img`
  width: 150px;
  height: auto;
  border-radius: 20px;
`;
interface IDetailPre {
  collection: {
    id: number;
    name: string;
    poster_path: string;
    backdrop_path: string;
  };
}
function Collection() {
  const { collection } = useOutletContext<IDetailPre>();
  return (
    <>
      {collection ? (
        <>
          <h3>{collection.name}</h3>
          <BgImg src={makeBgPath(collection.backdrop_path)} />
          <MainImg src={makeImagePath(collection.poster_path)} />
        </>
      ) : (
        <h1>no collection!</h1>
      )}
    </>
  );
}
export default Collection;
