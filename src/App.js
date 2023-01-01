import React from 'react'
import { BrowserRouter as Router, Route, NavLink, Routes, BrowserRouter } from 'react-router-dom'

import './App.css';
import Home from './Components/AllPages/Home';
import Movie from './Components/AllPages/MovieDetails/Movie';
import Footer from './Components/Foter/Footer';
import Header from './Components/Header/Header';
import MovieList from './Components/MovieList/MovieList';

function App() {
  return (
  
     <div className="App">
     <Router>
         <Header/>
        <Routes>
          <Route path='/' element = {<Home/>}></Route>
          <Route path='/movie/:id' element ={<Movie/>} ></Route>
          <Route path='/movies/:type' element ={<MovieList/>} ></Route>
          <Route path='/*' element= {<h1>Error Page 404</h1>}></Route>
          <Route path = '/movie' element = {<MovieList/>}></Route>
        </Routes>
        <Footer/>
        </Router>
      
     </div>
 
   
 
  );
}

export default App;
