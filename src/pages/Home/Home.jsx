import  MoviesList  from 'components/MoviesList/MoviesList';
import { useEffect } from 'react';
import { useState } from 'react';
import { getTrendingMovie } from 'components/servises/fetch';
// import { SearchBar } from 'components/SeachBar/SearchBar';

 const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const getMovies = async () => {
      try {
        const response = await getTrendingMovie();
       
        setMovies(response.results);
      } catch (error) {}
    };
    getMovies();
  }, []);

  return (
    <>
      <div>
        <h1>Treanding Today </h1>
        
        {movies && <MoviesList movies={movies} />}
      </div>
    </>
  );
};
export default Home;
