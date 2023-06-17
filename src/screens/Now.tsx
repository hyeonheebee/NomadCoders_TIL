import { useQuery } from "@tanstack/react-query";

import { useState,useEffect } from "react";
import { Outlet } from "react-router";
import { Link,useLocation  } from "react-router-dom";
import { getNowPlaying, IAPIResponse, makeImagePath } from "../api";
import { Container, ContainerWrapper,containerVariants,MovieListVariants } from "../components/motion";
function Now() {
  const { isLoading: nowLoading, data: nowData } = useQuery<IAPIResponse>(
    ["now"],
    () => getNowPlaying()
    );
    
    const [movieId, setMovieId] = useState(0);
    const [movieBgUrl, setMovieBgUrl] = useState("");
    const [movieOverView, setMovieOverView] = useState("");
    const [isClick, setClick] = useState(false);
 

    const handleClick = (Id: number) => {
      nowData?.results?.find((movie) => {
        if (movie.id === Id) {
          setMovieId(Id);
          setMovieBgUrl(movie.backdrop_path);
          setMovieOverView(movie.overview);
          setClick(true);
        }
    });
  };

  return (
    <>
      {nowLoading ? (
        <h1>Please..wating..</h1>
      ) : (
        <>
          <Outlet
            context={{
              movieId,
              movieBgUrl,
              movieOverView,
              setClick,
              isClick,
   
            }}
          />
          <ContainerWrapper variants={containerVariants} initial="start" animate="end">
            {nowData?.results?.map((m) => (
              <Container key={m.id}  variants={MovieListVariants} >
                <Link to={`${m.id}`} onClick={() => handleClick(m.id)}>
                  {m.title}
                  <img src={makeImagePath(m.poster_path)} />
                </Link>
              </Container>
            ))}
          </ContainerWrapper>
        </>
      )}
    </>
  );
}

export default Now;
