import React from 'react';
import "./App.css";
import {BrowserRouter as Router} from 'react-router-dom';
import { Toaster } from "react-hot-toast";
import HeroSection from './components/HeroSection';
import Navbar from './components/Navbar';
import Service from './components/Service';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App = () => {
  return (
    <Router>
   
    <Navbar/>
    <HeroSection/>
   <Service/>
   <About/>
   <Contact/>
   <Footer/>

   <Toaster/>

    </Router>
  )
}

export default App
