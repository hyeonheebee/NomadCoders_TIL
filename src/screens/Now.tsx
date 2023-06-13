import { useQuery } from "@tanstack/react-query";
import { Outlet } from "react-router";
import { getNowPlaying, IAPIResponse, makeImagePath } from "../api";

function Now() {
  const { isLoading: nowLoading, data: nowData } = useQuery<IAPIResponse>(
    ["now"],
    () => getNowPlaying()
  );

  return (
    <>
      <h1>now-playing</h1>
      {nowLoading ? (
        <h1>Please..wating..</h1>
      ) : (
        <ul>
          {nowData?.results?.map((m) => (
            <>
              <li key={m.id}>{m.title}</li>
              <img src={makeImagePath(m.poster_path)} />
              <Outlet context={{ id: m.id }} />
            </>
          ))}
        </ul>
      )}
    </>
  );
}

export default Now;
