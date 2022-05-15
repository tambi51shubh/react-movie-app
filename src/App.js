import './App.css';
import React from "react";
import { Routes, Route} from "react-router-dom";
import {Home, Detail, Trending} from "./components";
import HeaderBox from './components/commons/header';

function App() {

  return (
    <>
    <HeaderBox />
    <div className="App">
      <Routes>
        <Route path='/react-movie-app' element = {<Home />} />
        <Route path='/react-movie-app/movie' element = {<Trending type = {"movie"} title = {"Movies"}  />} /> 
        <Route path='/react-movie-app/tv' element = {<Trending type = {"tv"} title = {"TV Series"} />} /> 
        <Route path='/react-movie-app/detail/:mediaType/:mediaId' element = {<Detail />} /> 
      </Routes>
    </div>
    </>
  );
}

export default App;





