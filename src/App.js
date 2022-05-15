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
        <Route path='/' element = {<Home />} />
        <Route path='/movie' element = {<Trending type = {"movie"} title = {"Movies"}  />} /> 
        <Route path='/tv' element = {<Trending type = {"tv"} title = {"TV Series"} />} /> 
        <Route path='/detail/:mediaType/:mediaId' element = {<Detail />} /> 
      </Routes>
    </div>
    </>
  );
}

export default App;





