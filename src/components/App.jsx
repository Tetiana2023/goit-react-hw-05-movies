import { Routes, Route } from 'react-router-dom';
import { SharedLayout } from './SharedLayout/SharedLayout';
// import  Home  from 'pages/Home/Home';
// import  Movies  from 'pages/Movies/Movies';
// import  MovieInfo  from 'pages/MovieInfo/MovieInfo';
// import  Cast  from './Cast/Cast';
// import  Reviews  from './Reviews/Reviews';
// import  Error from './Error/Error';
import { lazy } from 'react';

const Home = lazy(()=> import ('pages/Home/Home'));
const Movies = lazy(()=> import ('pages/Movies/Movies'));
const MovieInfo = lazy(()=> import ('pages/MovieInfo/MovieInfo'));
const Cast = lazy(()=> import ('./Cast/Cast'));
const Reviews  = lazy(()=> import ('./Reviews/Reviews'));
const Error = lazy(()=> import ( './Error/Error'));



export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="/movies" element={<Movies />} />   
          <Route path="/movies/:movieId" element={<MovieInfo />}> 
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </div>
  );
};
