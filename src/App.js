import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";

//Import components
import NavBar from './components/NavBar';
import Footer from './components/Footer';

//import pages components
import Homepage from './Pages/Homepage';
import Recipe from './Pages/Recipe';
import About from './Pages/About';
import RecipesArchive from './Pages/RecipesArchive';

function App() {
  return (
    <div className="App body-home">
      <BrowserRouter>
      <div className='wrap grow'>
        <NavBar />

        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/recipe/:id" element={<Recipe />} />
          <Route path="/about" element={<About />} />
          <Route path="/recipes" element={<RecipesArchive />} />
        </Routes>
        
        </div>

        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
