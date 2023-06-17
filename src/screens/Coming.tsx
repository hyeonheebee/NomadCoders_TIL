import { useQuery } from "@tanstack/react-query";

import { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { getComingSoon, IAPIResponse, makeImagePath } from "../api";
import { Container, ContainerWrapper } from "../App";

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
      <h1>Coming</h1>
      {comingLoading ? (
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
          <ContainerWrapper>
            {comingData?.results?.map((m) => (
              <Container key={m.id}>
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
