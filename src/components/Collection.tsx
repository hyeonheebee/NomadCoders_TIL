import styled from "styled-components";
import { makeBgPath, makeImagePath } from "../api";
import { DetailDescript } from "../components/DetailMotion";
const CollectionWrapper = styled.div`
  position: relative;
  margin-bottom: 10px;
`;
const BgImg = styled.img`
  width: 150px;
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
        <DetailDescript>
          <h4>{collection.name}</h4>
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
        </DetailDescript>
      ) : (
        <h1>no collection!</h1>
      )}
    </CollectionWrapper>
  );
}
export default Collection;
