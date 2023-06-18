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
  HPWrapper,
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
  const BgStyle = {
    width: "100%",
    height: "500px",
    isolation: "isolate",
    position: "relative",
    backgroundImage: `linear-gradient( rgba(255, 255, 255, 0.8) 2%, rgba(255, 255, 255, 0.6) 10%, rgba(255, 255, 255, 0.4) 50%,rgba(255, 255, 255, 0.6) 90%,  rgba(255, 255, 255, 0.8) 98%)
              , url(
              "${movieBgUrl ? makeBgPath(movieBgUrl) : NOTFOUND}")`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  };
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

  function priceToString(price: number) {
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

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
            <DetailSection style={BgStyle}>
              <DetailDescript>
                <h1>{detailData?.title}</h1>
                <CancleDiv>
                  <svg
                    onClick={() => {
                      navigate(-1);
                    }}
                    viewBox="0 0 20 20"
                    aria-hidden="true"
                  >
                    <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" />
                  </svg>
                </CancleDiv>
              </DetailDescript>
              <Img src={movieBgUrl ? makeBgPath(movieBgUrl) : NOTFOUND} />
              <p>{movieOverView ? movieOverView : NOOVERVIEW}</p>
              <DetailDescript>
                <div>
                  <span>💸budget </span>{" "}
                  <p> $ {priceToString(detailData?.budget)}</p>
                </div>
                <div>
                  <span>⏱runtime </span>
                  <p>{detailData?.runtime} min </p>
                </div>
                <div>
                  <span> 💰revenue</span>
                  <p> $ {priceToString(detailData?.revenue)} </p>
                </div>
              </DetailDescript>
              <DetailDescript>
                <GenresUl>
                  <span> 📌 Genres </span>
                  <p>
                    {detailData?.genres
                      ? detailData?.genres.map((genre) => (
                          <li key={genre.id}>{genre.name}</li>
                        ))
                      : null}
                  </p>
                </GenresUl>
              </DetailDescript>
              <HPWrapper>
                <span>🔍 WebSite </span>
                <span>
                  <a href={detailData?.homepage} target={"_blank"}>
                    {detailData?.title}
                  </a>
                </span>
              </HPWrapper>
              <CollectionBtn onClick={toggleFn}>
                {isActive ? (
                  <div>
                    <svg
                      style={{ width: "40px" }}
                      viewBox="0 0 20 20"
                      aria-hidden="true"
                    >
                      <path
                        clipRule="evenodd"
                        fillRule="evenodd"
                        d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                      />
                    </svg>
                    <span>Collection</span>
                  </div>
                ) : (
                  <div>
                    <svg
                      viewBox="0 0 20 20"
                      aria-hidden="true"
                      style={{ width: "40px" }}
                    >
                      <path
                        clipRule="evenodd"
                        fillRule="evenodd"
                        d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                      />
                    </svg>
                    <span>Collection</span>
                  </div>
                )}
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
