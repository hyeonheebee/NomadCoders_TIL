import styled from "styled-components";
import { makeBgPath, makeImagePath } from "../api";

const CollectionWrapper = styled.div`
  position: relative;
  margin-bottom: 10px;
  display: flex;
  justify-content: space-between;
  span {
    z-index: 3;
    font-size: 25px;
    font-family: "Permanent Marker", cursive;
    font-weight: 700;
    margin-left: 10px;
  }
`;
const BgImg = styled.img`
  width: 100%;
  z-index: -2;
  height: auto;
  -webkit-filter: opacity(75%);
  filter: opacity(50%);
  border-radius: 10px;
  margin-top: 5px;
  position: relative;
`;
const MainImg = styled.img`
  width: 150px;
  height: auto;
  border-radius: 10px;
  position: absolute;
  left: 20px;
  margin-top: 45px;
  z-index: 3;
`;
interface IDetailPre {
  id: number;
  name: string;
  poster_path: string;
  backdrop_path: string;
}
function Collection(collection: IDetailPre) {
  const NOTFOUND =
    "https://mblogthumb-phinf.pstatic.net/20160122_105/rmdwjdansdud_14534438344224j2jM_JPEG/Cap_2016-01-22_15-22-16-770.jpg?type=w420";

  return (
    <CollectionWrapper>
      {collection ? (
        <div>
          <span>{collection.name}</span>
          <BgImg
            src={
              collection.backdrop_path
                ? makeBgPath(collection.backdrop_path)
                : NOTFOUND
            }
          />
          <MainImg
            src={
              collection.poster_path
                ? makeImagePath(collection.poster_path)
                : NOTFOUND
            }
          />
        </div>
      ) : (
        <h1>no collection!</h1>
      )}
    </CollectionWrapper>
  );
}
export default Collection;
