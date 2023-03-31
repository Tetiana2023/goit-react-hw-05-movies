import { useEffect } from 'react';
import { useState } from 'react';
import { getMovieReviews } from 'components/servises/fetch';
import { useParams } from 'react-router-dom';

export const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const [, setError] = useState('');
  const { movieId } = useParams();

  useEffect(() => {
    const getReviews = async movieId => {
      try {
        const response = await getMovieReviews(movieId);
        setReviews(response.results);
      } catch (error) {
        setError(error.message);
      }
    };
    getReviews(movieId);
  }, [movieId]);

  return (
    <>
      {reviews.length !== 0 ? (
        <ul>
          {reviews.map(({ id, author, content }) => {
            return (
              <li key={id}>
                <p>{author}</p>
                <p>{content}</p>
              </li>
            );
          })}
        </ul>
      ) : (
        <p>Sorry, we don't have any reviews </p>
      )}
    </>
  );
};
