import { useEffect, useState } from "react";

import Movie from "../components/Movie";

function Home() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const getMovies = async () => {
    const json = await (await fetch(URL)).json();
    setMovies(json.data.movies);
    setLoading(false);
  };
  const URL =
    "https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year";
  useEffect(() => {
    getMovies();
  }, []);
  console.log(movies);
  return (
    <div>
      <div>
        {loading ? (
          <h1>loading...</h1>
        ) : (
          <div>
            {movies.map((movie) => (
              <Movie
                key={movie.id}
                id={movie.id}
                coverImg={movie.medium_cover_image}
                title={movie.title}
                summary={movie.summary}
                genres={movie.genres}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Home;
