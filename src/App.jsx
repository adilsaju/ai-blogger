
import React from "react";
import './App.css';
import Blog from './components/Blog'
import Navigation from './components/Header/Navigation';
import Logo from './components/Header/Logo';
import Trending from './components/Blogs/Trending';
import { Routes, Route, Link } from "react-router-dom";
import Featured from "./components/Blogs/Featured";
import Latest from "./components/Blogs/Latest";


function App() {
  return (
    <div className="App">
        <Logo/>
        <h2 className="name">ChallengeAI</h2>
        {/* <Navigation/> */}
        <div className="blog-div">
          <Featured/>
          {/* <Latest/> */}
          {/* <Trending/> */}
        </div>
        {/* <Routes> */}
        {/* <Route path="/history" element={<Trending/>}/> */}
        {/* </Routes> */}

    </div>
  );
}

export default App;

