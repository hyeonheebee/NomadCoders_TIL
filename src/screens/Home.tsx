import { useQuery } from "@tanstack/react-query";
import { useState } from "hoist-non-react-statics/node_modules/@types/react";
import { Outlet } from "react-router";
import { Link } from "react-router-dom";
import { getPopular, IAPIResponse, makeImagePath } from "../api";

function Home() {
  const { isLoading: popularLoading, data: popularData } =
    useQuery<IAPIResponse>(["popular"], () => getPopular());
  let Id: number;

  return (
    <>
      <h1>Home</h1>
      {popularLoading ? (
        <h1>Please..wating..</h1>
      ) : (
        <ul>
          <Outlet />
          {popularData?.results?.map((m) => (
            <>
              <li key={m.id}>
                <Link
                  to={`${m.id}`}
                  onClick={() => {
                    popularData?.results?.find((movie) =>
                      movie.id === m.id ? (Id = m.id) : null
                    );
                  }}
                >
                  {m.title} <img src={makeImagePath(m.poster_path)} />{" "}
                </Link>
              </li>
            </>
          ))}
        </ul>
      )}
    </>
  );
}

export default Home;
