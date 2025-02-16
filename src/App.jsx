import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./components/About.jsx";
import Navbar from "./components/Navbar.jsx";
import Projects from "./components/Projects.jsx";
import Home from "./components/Home.jsx";
import "./App.css";

const App = () => {
  return (
    <Router>
      <Navbar /> 
      {/* Routing for Different Pages */}
      <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/About" element={<About />} />
      <Route path="/Projects" element={<Projects/>}/>
      </Routes>
    </Router>
  );
};

export default App;

