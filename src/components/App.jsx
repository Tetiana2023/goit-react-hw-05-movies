import { Routes, Route } from 'react-router-dom';
import { SharedLayout } from './SharedLayout/SharedLayout';
import { Home } from 'pages/Home/Home';

export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          {/* <Route path="movies" element={<Movies />} />
          <Route path="movieinfo" element={<MovieInfo />}>
            <Route past="cast" element={<Cast />} />
            <Route past="reviews" element={<Reviews />} />
          </Route>
          <Route path="*" element={<Error />} /> */}
        </Route>
      </Routes>
    </div>
  );
};
