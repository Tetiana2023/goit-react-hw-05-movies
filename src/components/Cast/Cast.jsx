import { useEffect } from "react";
import { useState,useParams } from "react";
import { getMovieCredits } from 'components/servises/fetch';

export const Cast = () => {
    const [actor, setActor] = useState([]);
    const [,setError] = useState('');
    const {movieId} = useParams;

    useEffect(()=> {
        const getActor = async (movieId) => {
            try {
                const response = await getMovieCredits(movieId);
                setActor(response.cast)
                // console.log(response.cast)

            }catch(error) {
                setError(error.message)
            }
        }
        getActor()

    }, [movieId])

    return (
        <>
        <ul>
            {actor.map(({name, id, profile_path, character }) => {
                 return <li key = {id}>
                    <img src={profile_path} alt={name}/>
                    <p> {name}</p>
                    <p> {character}</p>
                
                </li>
            })}
        </ul>

      </>
    )
}