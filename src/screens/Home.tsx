import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { Outlet } from "react-router";
import { Link } from "react-router-dom";
import { getPopular, IAPIResponse, makeImagePath } from "../api";
import { Container, ContainerWrapper,containerVariants,MovieListVariants } from "../components/motion";

function Home() {
  const [movieId, setMovieId] = useState(0);
  const [movieBgUrl, setMovieBgUrl] = useState("");
  const [movieOverView, setMovieOverView] = useState("");
  const { isLoading: popularLoading, data: popularData } =
    useQuery<IAPIResponse>(["popular"], () => getPopular());
  const [isClick, setClick] = useState(false);
  const handleClick = (Id: number) => {
    popularData?.results?.find((movie) => {
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
      {popularLoading ? (
        <h1>Please..wating..</h1>
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
          <ContainerWrapper variants={containerVariants} initial="start" animate="end">
            {popularData?.results?.map((m) => (
              <Container key={m.id } variants={MovieListVariants}  >
                <Link to={`${m.id}`} onClick={() => handleClick(m.id)}>
                  {m.title} <img src={makeImagePath(m.poster_path)} />{" "}
                </Link>
              </Container>
            ))}
          </ContainerWrapper>
        </>
      )}
    </>
  );
}

export default Home;
