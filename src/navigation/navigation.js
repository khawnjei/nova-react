import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import About from '../pages/About';
import Locations from '../pages/Locations';
import Services1 from '../pages/Services1';
import SpecialsP from '../pages/SpecialsP';
import Products from '../pages/Products';
import ReviewsP from "../pages/ReviewsP";
import BookP from '../pages/BookP';

const NavigationMain = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/locations" element={<Locations />} />
      <Route path="/services" element={<Services1 />} />
      <Route path="/specials" element={<SpecialsP />} />
      <Route path="/products" element={<Products />} />
      <Route path="/reviews" element={<ReviewsP />} />
      <Route path="/book" element={<BookP />} />
    </Routes>
  );
}

export default NavigationMain;

