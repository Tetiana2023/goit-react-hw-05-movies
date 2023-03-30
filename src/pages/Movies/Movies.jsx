import { MoviesList } from 'components/MoviesList/MoviesList';
import { SearchBar } from 'components/SearchBar/SearchBar';
import { useEffect } from 'react';
import { useState, useSearchParams } from 'react';
import { getSearchMovie } from 'components/servises/fetch';

export const Movies = () => {
  const [movies, setMovies] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query') || '';

  useEffect(() => {
    // if (!query) {
    //   return;
    // }
    const getMovieSeach = async search => {
      try {
        const res = await getSearchMovie(search);
        setMovies(res.results);
      } catch (error) {
        console.log(error.massige);
      }
    };
    getMovieSeach(query);
  }, [query]);

  const updateQueryString = (query) => {
    const nextParams = query !== "" ? { query } : {};
    setSearchParams(nextParams);
};

const searchMovieByInput = (inputValue) => {
    setMovies(null);

    updateQueryString(inputValue);
    // if (inputValue.trim() === '') {
       
    //     Notify.failure(`Search request shouldn't be empty`);
    // };
}
//   const formSubmit = query => {
//     const nextQuery = query !== '' ? { query } : {};
//     setSearchParams(nextQuery);
//     setMovies(null);
//   };

  return (
    <>
      <SearchBar onSubmit={searchMovieByInput} />
      {movies && <MoviesList movies={movies} />}
    </>
  );
}