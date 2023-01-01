import React from 'react'
import'./Footer.css';

function Footer() {
  return (
   <>
  <footer className='footer'>
<nav>
   <div className='column'>
    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/IMDB_Logo_2016.svg/2560px-IMDB_Logo_2016.svg.png" alt="" width={100} height = {94}/>
    </div> 
    <div  className='column'>
        <h3>THE BASICS</h3>
        <ul>
            <li><a href="#">About IMDB</a></li>
            <li><a href="#">Contact Us</a></li>
            <li><a href="#">Support Foru..</a></li>
            <li><a href="#">Api</a></li>
        </ul>
    </div>
    <div  className='column'>
        <h3>GET INVOLVED</h3>
        <ul>
            <li><a href="#">Contribution Bi..</a></li>
            <li><a href="#">Add New Movie</a></li>
            <li><a href="#">Add New TV Sherial.</a></li>
           
        </ul>
    </div>
    <div  className='column'>
        <h3>COMMUNITY</h3>
        <ul>
            <li><a href="#">Guidelines</a></li>
            <li><a href="#">Discussions</a></li>
            <li><a href="#">Leaderboard</a></li>
            <li><a href="#">Twitter</a></li>
        </ul>
    </div>
    <div  className='column'>
        <h3>LEGAL</h3>
        <ul>
            <li><a href="#">Terms of Use</a></li>
            <li><a href="#">API Terms of..</a></li>
            <li><a href="#">Privacy Policy</a></li>
           
        </ul>
    </div>
   
</nav>
  </footer>
   </>
  )
}

export default Footer
