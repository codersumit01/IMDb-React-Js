import React from 'react'
import { Link } from 'react-router-dom';
import './Header.css';




function Header() {
  return (
    <div className='header'>
        <div className='headerleft'>
          <Link to ="/"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/IMDB_Logo_2016.svg/2560px-IMDB_Logo_2016.svg.png" className='header_icon' alt="" /></Link> 

          {/* Search Movie section */}
          <div className='header_search'>
              <input type="text" className='header_searchInput' placeholder='Search Movies'/>
              <span></span>
             
          </div>
          

          <Link to= "/movies/popular" style={{textDecoration:"none"}} > <span>Popular</span></Link> 
          <Link to = '/movies/top_rated'style={{textDecoration:"none"}} ><span>Top Rated</span></Link> 
          <Link to= '/movies/upcoming'style={{textDecoration:"none"}} ><span>Upcoming</span></Link> 
        </div>

         {/* <div className='moviesearch'>
          <input type="text" placeholder='Search movie' />
         </div> */}

         {/* <div>
         <button type='login' className='loginbtn'>Login</button> 
         </div> */}
      
    </div>
  )
}

export default Header;
