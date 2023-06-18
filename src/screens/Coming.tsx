import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { getComingSoon, IAPIResponse, makeImagePath } from "../api";
import {
  Container,
  ContainerWrapper,
  containerVariants,
  MovieListVariants,
} from "../components/motion";

function Coming() {
  const { isLoading: comingLoading, data: comingData } = useQuery<IAPIResponse>(
    ["coming"],
    () => getComingSoon()
  );
  const [movieId, setMovieId] = useState(0);
  const [movieBgUrl, setMovieBgUrl] = useState("");
  const [movieOverView, setMovieOverView] = useState("");
  const [isClick, setClick] = useState(false);
  const handleClick = (Id: number) => {
    comingData?.results?.find((movie) => {
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
      {comingLoading ? (
        <h1 style={{ position: "absolute", top: "300px", left: "300px" }}>
          Please..wating..
        </h1>
      ) : (
        <>
          <Outlet
            context={{
              movieId,
              movieBgUrl,
              movieOverView,
              isClick,
            }}
          />
          <ContainerWrapper
            variants={containerVariants}
            initial="start"
            animate="end"
          >
            {comingData?.results?.map((m) => (
              <Container key={m.id} variants={MovieListVariants}>
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

export default Coming;
