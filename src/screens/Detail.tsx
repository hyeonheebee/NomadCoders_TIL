import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { getMovie, IMovieDetail, makeBgPath } from "../api";
import {
  Overlay,
  overlay,
  Img,
  DetailSection,
  DetailDescript,
  GenresUl,
  DetailWrapper,
  CollectionBtn,
} from "../components/DetailMotion";
import { useOutletContext, useParams, useNavigate } from "react-router-dom";
import { CancleDiv } from "../components/motion";
import { AnimatePresence } from "framer-motion";
import Collection from "../components/Collection";

interface ImoviePre {
  movieId: number;
  movieBgUrl: string;
  movieOverView: string;
  isClick: boolean;
}

function Detail() {
  const { movieId, movieBgUrl, movieOverView, isClick } =
    useOutletContext<ImoviePre>();
  const { id } = useParams();
  const NOTFOUND =
    "https://mblogthumb-phinf.pstatic.net/20160122_105/rmdwjdansdud_14534438344224j2jM_JPEG/Cap_2016-01-22_15-22-16-770.jpg?type=w420";
  const NOOVERVIEW =
    "Sorry, No Overview, PLEASE PRESS NAVIGATOR THEN Go back to page";
  const [isActive, setActive] = useState(false);
  const {
    isLoading,
    data: detailData,
    isSuccess: successFetch,
  } = useQuery<IMovieDetail>(["detail", movieId], () =>
    getMovie(id || String(movieId))
  );
  const toggleFn = () => {
    setActive((prev) => !prev);
  };

  /// 새로고침 방지
  const preventReload = (e: BeforeUnloadEvent) => {
    e.preventDefault();
    e.returnValue = "";
  };

  useEffect(() => {
    (() => {
      window.addEventListener("beforeunload", preventReload);
    })();
    return () => {
      window.removeEventListener("beforeunload", preventReload);
    };
  }, []);

  const navigate = useNavigate();
  return (
    <DetailWrapper>
      <AnimatePresence>
        {isClick && successFetch && !isLoading ? (
          <Overlay
            layoutId={id}
            variants={overlay}
            initial="initial"
            animate="visible"
            exit="exit"
          >
            <DetailSection>
              <DetailDescript>
                <h1>{detailData?.title}</h1>
                <CancleDiv>
                  <button
                    onClick={() => {
                      navigate(-1);
                    }}
                  >
                    x
                  </button>
                </CancleDiv>
              </DetailDescript>

              <Img src={movieBgUrl ? makeBgPath(movieBgUrl) : NOTFOUND} />
              <p>{movieOverView ? movieOverView : NOOVERVIEW}</p>
              <DetailDescript>
                <span>budget : {detailData?.budget}</span>
                <span>runtime : {detailData?.runtime}</span>
                <span>revenue: {detailData?.revenue}</span>
              </DetailDescript>
              <DetailDescript>
                <a href={detailData?.homepage} target={"_blank"}>
                  homepage{" "}
                </a>
                <GenresUl>
                  Genres :
                  {detailData?.genres
                    ? detailData?.genres.map((genre) => (
                        <li key={genre.id}>{genre.name}</li>
                      ))
                    : null}
                </GenresUl>
              </DetailDescript>
              <CollectionBtn onClick={toggleFn}>
                {isActive ? "🔻 Collection" : " 🔺 Collection"}
              </CollectionBtn>
              {isActive ? Collection(detailData?.belongs_to_collection) : null}
            </DetailSection>
          </Overlay>
        ) : null}
      </AnimatePresence>
    </DetailWrapper>
  );
}

export default Detail;
