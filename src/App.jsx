import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "./pages/home"
import Menu from "./pages/menu"
import About from "./pages/about"
import Gallery from './pages/gallery';
import Contact from './pages/contact';
import Reservation from './pages/reservation';


function App() {
    return (
        <BrowserRouter>
        <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/menu' element={<Menu />}/>
            <Route path='/about' element={<About />}/>
            <Route path='/gallery' element={<Gallery />}/>
            <Route path='/contact' element={<Contact />}/>
            <Route path='/reservation' element={<Reservation />}/>
        </Routes>
        </BrowserRouter>
    );
  }
  
  export default App;
