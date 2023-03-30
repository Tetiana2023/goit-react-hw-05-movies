import { MoviesList } from 'components/MoviesList/MoviesList';
import { SearchBar } from 'components/SearchBar/SearchBar';
import { useEffect, useState } from 'react';
import { getSearchMovie } from 'components/servises/fetch';
import { useSearchParams } from 'react-router-dom';

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
  
 const handleFormSubmit = query => {
    const nextFilm = query !== '' ? { query } : {};
    setSearchParams(nextFilm);
    setMovies([]);
  };
  return (
    <>
      <SearchBar onSubmit={handleFormSubmit} /> 
      {movies && <MoviesList movies={movies} />} 
    </>
  );
}