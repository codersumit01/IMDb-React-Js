import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Card from '../AllCard/Card';
import './MovieList.css';


const MovieList = () =>{
    const [movieList, setMovieList] = useState([]);
    const {type} = useParams();
    
    useEffect(() =>{
        getData()
    },[])

    useEffect(()=>{
       getData()
    },[type])
    const getData = () =>{
        fetch (`https://api.themoviedb.org/3/movie/${type ? type: "popular"}?api_key=276d77a2a49929884ad96d7fe3732338&language=en-US`)
        .then(res => res.json())
        .then(data => setMovieList(data.results));
    }
    return (
        <>
        <div className='movielist'>
            <h2 className='movielist_title'>{(type ? type: "POPULAR"). toUpperCase()} </h2>
            <div className= 'movielist_cards'>
                {
                    movieList.map(movie =>(
                        <Card movie = {movie}/>
                    ))
                }
            </div>
        </div>
        </>
    )
}
export default MovieList;