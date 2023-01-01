import React, { useEffect, useState } from 'react'
import './Home.css';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { Link } from 'react-router-dom';
import MovieList from '../MovieList/MovieList';
import Footer from '../Foter/Footer';
function Home() {
    const [popularMovie, setPopularMovie] =useState([]);
useEffect(() =>{
    fetch ("https://api.themoviedb.org/3/movie/popular?api_key=276d77a2a49929884ad96d7fe3732338&language=en-US")
    .then(res => res.json())
    .then(data => setPopularMovie(data.results));
},[])

  return (
   <>
   <div className='mainposter'>
    <Carousel
    showThumbs = {false}
    autoPlay = {true}
    transitionTime= {2}
    infiniteLoop = {true}
    showStatus = {false}
    >
        {
           popularMovie.map(movie =>(
                <Link style={{textDecoration:"none",color: "white"}} to = {`/movie/${movie.id}`}>

                        <div className='posterimg'>
                            <img src = {`https://image.tmdb.org/t/p/original${movie && movie.backdrop_path}`}/>
                        </div>
                    <div className='posterimg_overlay'>
                        <div className='posterimg_title'> {movie? movie.original_title : ""}</div>
                        <div className='posterimg_runtime'>
                                {movie? movie.release_date :""}
                                <span className='posterimg_rating'>
                                    {movie? movie.vote_average: ""}
                                    <i className="fa-sharp fa-solid fa-star"></i>
                                </span>
                        </div>
                            <div className='posterimg_descr'>
                               {movie? movie.overview : ""}
                            </div>
                    </div>
               </Link>
           ))
        }
        </Carousel>
        <MovieList/>
   </div>
   </>
  )
}

export default Home;
