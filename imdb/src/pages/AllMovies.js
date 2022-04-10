import { useState, useEffect } from "react";

import MovieList from "../components/movies/MovieList";

function AllMoviesPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedMovies, setLoadedMovies] = useState([]);

  useEffect(() => {
      setIsLoading(true);
    fetch(
      "https://react-getting-started-af0bd-default-rtdb.firebaseio.com/movies.json"
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => { 
        // need to handle error here
        const movies = []

        for (const key in data) {
            const movie = {
                id: key,
                ...data[key]
            };

            movies.push(movie);
        }

        setIsLoading(false);
        setLoadedMovies(movies);
      });
  }, []);

  if (isLoading) {
    return (
      <section>
        <p>Loading...</p>
      </section>
    );
  }
  return (
    <section>
      <h1 style={{color: "yellow"}}>All Movies</h1>
      <MovieList movies={loadedMovies} />
    </section>
  );
}

export default AllMoviesPage;
