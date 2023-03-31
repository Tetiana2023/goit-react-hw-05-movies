import { useEffect } from "react";
import { useState } from "react";
import { getMovieReviews } from 'components/servises/fetch';
import {useParams} from 'react-router-dom';

export const Reviews = () => {
    const [reviews, setReviews] = useState([]);
    const [,setError] = useState('');
    const {movieId} = useParams();

    useEffect(() => {
        const getReviews = async (movieId) => {
            try {
                const response = await getMovieReviews(movieId);
                setReviews(response.results)

            }catch(error){
            setError(error.message);
        }
    } 
    getReviews(movieId)
}, [movieId]);

    return(
        <> <ul>
            {reviews.map(( {id, outher, content }) => {
                return <li key={id}>
                    <p>{outher}</p>
                    <p>{content}</p>

                </li>

            })}
        </ul>
        </>
    )
}