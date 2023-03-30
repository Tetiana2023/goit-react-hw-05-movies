import { MoviesList } from 'components/MoviesList/MoviesList';
// import { SearchBar } from 'components/SearchBar/SearchBar';
import { useEffect } from 'react';
import { useState, useSearchParams } from 'react';
import { getSearchMovie } from 'components/servises/fetch';

export const Movies = () => {
  const [movies, setMovies] = useState(null);
  const [, setError] = useState('')
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query') ?? '';

  useEffect(() => {
    if (query === "") {
      return;
    }
    const getMovieSeach = async search => {
      try {
        const response = await getSearchMovie(search);
        setMovies(response.results);
      } catch (error) {
        setError(error.massige);
      }
    };
    getMovieSeach(query);
  }, [query]);
  
  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    setSearchParams({ query: form.elements.query.value.trim() });
    form.reset();
  };

  return (
    <main>
      <form onSubmit={handleSubmit}>
        <input type="text" name="query" />
        <button type="submit">Search</button>
      </form>
      {movies && <MoviesList movies={movies} />}
    </main>
  );



//   const updateQueryString = (query) => {
//     const nextParams = query !== "" ? { query } : {};
//     setSearchParams(nextParams);
// };

// const searchMovieByInput = (inputValue) => {
//     setMovies(null);
//     updateQueryString(inputValue);
// }
//  const handleFormSubmit = query => {
//     const nextFilm = query !== '' ? { query } : {};
//     setSearchParams(nextFilm);
//     setMovies([]);
//   };
//   return (
//     <>
//       <SearchBar onSubmit={handleFormSubmit} /> 
//       {movies && <MoviesList movies={movies} />} 
//     </>
//   );
}