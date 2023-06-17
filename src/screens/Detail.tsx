import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { Outlet } from "react-router";
import { getMovie, IMovieDetail, makeBgPath } from "../api";
import { Link, useOutletContext, useParams,useLocation } from "react-router-dom";
import styled from "styled-components";
import { CancleDiv  } from "../components/motion";
import { AnimatePresence,motion } from "framer-motion";

interface ImoviePre {
  movieId: number;
  movieBgUrl: string;
  movieOverView: string;
  setClick: React.Dispatch<React.SetStateAction<boolean>>;
  isClick: boolean;
}
 const Overlay = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: black;
  color: white;
  position: absolute;
  width:50%;
`;
const overlay = {
  visible: {
    opacity:1,
    zIndex: 3,
  },
  exit: {
    opacity:0,
    zIndex: -1,
  },
  initial: { 
    opacity:0,
    zIndex: -1,
  },
};
const Img = styled.img`
  width: 100px;
  height: 150px;
`;
const DetailSection = styled.div`
  background-color: inherit;
`;
const DetailDescript = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: space-between;
`;
const GenresUl = styled.ul`
  display: flex;

  li {
    list-style: none;
    margin-left: 10px;
  }
`;
const DetailWrapper = styled.div `
display:flex;
justify-content:center;
align-itmes:center;`
function Detail() {
  const { movieId, movieBgUrl, movieOverView, setClick, isClick } =
    useOutletContext<ImoviePre>();
  const { id } = useParams();
  const NOTFOUND =
    "https://mblogthumb-phinf.pstatic.net/20160122_105/rmdwjdansdud_14534438344224j2jM_JPEG/Cap_2016-01-22_15-22-16-770.jpg?type=w420";
  const NOOVERVIEW =
    "Sorry, No Overview, PLEASE PRESS NAVIGATOR THEN Go back to page";
  const [isActive, setActive] = useState(false);
  const location = useLocation();
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
  const clickFn = () => {
    setClick(false);
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



  ////path 수정중 
  let path=""
  useEffect(()=>{
    if(location.pathname.includes("")){ path =""} else if (location.pathname.includes("/coming-soon")){path="/coming-soon"}
    else if(location.pathname.includes("/now-playing")){
      path = "/now-playing"
    
    }
  },[location])


  return (
          <DetailWrapper>
          <AnimatePresence>
            {isClick && successFetch&&!isLoading ? (
              <Overlay
                layoutId={id}
                variants={overlay}
                initial="initial"
                animate="visible"
                exit="exit"
              >
                <DetailSection>
                  <h1>{detailData?.title}</h1>
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
                  <DetailDescript>
                    
                    <Link onClick={toggleFn} to={isActive ? "" : "collection"}>
                      {isActive ? "🔽 Collection" : " ▶ Collection"}
                    </Link>
                    <Outlet
                      context={{
                        collection: detailData?.belongs_to_collection,
                      }}
                    />
                    <CancleDiv>
                      
                      <Link to={path}  >
                        ✖
                      </Link>
                    </CancleDiv>
                  </DetailDescript>
                </DetailSection>
              </Overlay>
            ) : null}
            </AnimatePresence>
            </DetailWrapper>
        )}
  
export default Detail;
