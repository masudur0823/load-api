import React from 'react'
import {
    BrowserRouter,
    Routes,
    Route,
  } from "react-router-dom";
import Home from './Home';
import MealDb from './MealDb';
import News from './News';

function Router() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/news" element={<News />}/>
      <Route path="/meal" element={<MealDb />}/>
    </Routes>
  </BrowserRouter>
  )
}

export default Router