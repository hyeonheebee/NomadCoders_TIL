import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { Outlet } from "react-router";
import { Link } from "react-router-dom";
import { getPopular, IAPIResponse, makeImagePath } from "../api";
import {
  Container,
  ContainerWrapper,
  containerVariants,
  MovieListVariants,
  HeartDiv,
} from "../components/motion";

function Popular() {
  const [like, setLike] = useState<String[]>([]);
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
        <h1 style={{ position: "absolute", top: "300px", left: "300px" }}>
          Please..wating..
        </h1>
      ) : (
        <>
          <div
            style={{
              width: "250px",
              top: "10px",
              right: "20px",
              color: "white",
              display: "flex",
              flexDirection: "column",
              position: "fixed",
              backgroundColor: "black",
              zIndex: 20,
            }}
          >
            <span style={{ color: "#f5f42c" }}>💕My Favorite</span>
            {like.map((likeItem) => (
              <span>📌 {likeItem} </span>
            ))}
            <button
              style={{ border: "none", backgroundColor: "#f5f42c" }}
              onClick={() => {
                setLike([]);
              }}
            >
              All Delete
            </button>
          </div>
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
            {popularData?.results?.map((m) => (
              <Container
                whileHover={{ scale: 1.2, cursor: "pointer" }}
                key={m.id}
                variants={MovieListVariants}
              >
                <HeartDiv
                  whileHover={{
                    scale: 1.1,
                    cursor: "pointer",
                    color: "tomato",
                  }}
                >
                  <svg
                    onClick={() => {
                      setLike((pre) => [...pre, m.title]);
                    }}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    aria-hidden="true"
                  >
                    <path d="M9.653 16.915l-.005-.003-.019-.01a20.759 20.759 0 01-1.162-.682 22.045 22.045 0 01-2.582-1.9C4.045 12.733 2 10.352 2 7.5a4.5 4.5 0 018-2.828A4.5 4.5 0 0118 7.5c0 2.852-2.044 5.233-3.885 6.82a22.049 22.049 0 01-3.744 2.582l-.019.01-.005.003h-.002a.739.739 0 01-.69.001l-.002-.001z" />
                  </svg>
                </HeartDiv>
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

export default Popular;
