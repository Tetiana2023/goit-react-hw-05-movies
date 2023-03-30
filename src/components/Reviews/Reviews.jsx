import { useEffect } from "react";
import { useState, useParams } from "react";
import { getMovieReviews } from 'components/servises/fetch';

export const Reviews = () => {
    const [reviews, setReviews] = useState([]);
    const [,setError] = useState('');
    const {movieId} = useParams;

    useEffect(() => {
        const getReviews = async (movieId) => {
            try {
                const response = await getMovieReviews(movieId);
                setReviews(response.reviews)

            }catch(error){
            setError(error.message);
        }
    } 
    getReviews()
}, [movieId])
    return(
        <> <ul>
            {reviews.map(( {id, auther, content }) => {
                return <li key={id}>
                    <p>{auther}</p>
                    <p>{content}</p>

                </li>

            })}
        </ul>
        </>
    )
}