import { useQuery } from "@tanstack/react-query";
import { getComingSoon, IAPIResponse, makeImagePath } from "../api";

function Coming() {
  const { isLoading: comingLoading, data: comingData } = useQuery<IAPIResponse>(
    ["coming"],
    () => getComingSoon()
  );
  console.log(comingData);
  return (
    <>
      <h1>Coming</h1>
      {comingLoading ? (
        <h1>Please..wating..</h1>
      ) : (
        <ul>
          {comingData?.results?.map((m) => (
            <>
              <li key={m.id}>{m.title}</li>
              <img src={makeImagePath(m.poster_path)} />
            </>
          ))}
        </ul>
      )}
    </>
  );
}

export default Coming;
