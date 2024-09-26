

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./components/home/Home";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import Services from "./components/pages/Services";
import New from './components/pages/New';
import Refer from './components/pages/Refer';
import Button from './components/pages/Button';

export default  function App(){
  return(
    <Router>
      <Routes>
      <Route path="/" element={<Layout />}>
      <Route index element={<Home/>} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services"element={<Services />} />
        <Route path="/newPatients"element={<New/>}/>
        <Route path="/referPatients"element={<Refer/>}/>
        <Route path="/button"element={<Button/>}/>
        </Route>
      </Routes>
    </Router>

  );

}
