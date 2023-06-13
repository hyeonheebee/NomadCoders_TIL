import { useQuery } from "@tanstack/react-query";
import { HTMLAttributes, useState } from "react";
import { Outlet } from "react-router";
import { Link } from "react-router-dom";
import { getNowPlaying, IAPIResponse, makeImagePath } from "../api";
import { Container, ContainerWrapper } from "../App";

function Now() {
  const { isLoading: nowLoading, data: nowData } = useQuery<IAPIResponse>(
    ["now"],
    () => getNowPlaying()
  );

  const [movieId, setMovieId] = useState(0);
  const [movieBgUrl, setMovieBgUrl] = useState("");
  const [movieOverView, setMovieOverView] = useState("");

  const handleClick = (Id: number) => {
    nowData?.results?.find((movie) => {
      if (movie.id === Id) {
        setMovieId(Id);
        setMovieBgUrl(movie.backdrop_path);
        setMovieOverView(movie.overview);
      }
    });
  };

  return (
    <>
      <h1>now-playing</h1>
      {nowLoading ? (
        <h1>Please..wating..</h1>
      ) : (
        <>
          <Outlet context={{ movieId, movieBgUrl, movieOverView }} />
          <ContainerWrapper>
            {nowData?.results?.map((m) => (
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

export default Now;
