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
    <div className="App">
      <BrowserRouter>
      <div className='wrap'>
        <NavBar />

        {/*<Routes>
          <Route path="/">
            <Route index element={<Homepage />} />
          </Route>
        </Routes>

        <Routes>
          <Route path="/recipe">
            <Route index element={<Recipe />} />
          </Route>
        </Routes>

        <Routes>
          <Route path="/about">
            <Route index element={<About />} />
          </Route>
  </Routes>*/}


        {/*O ChatGPT sugeriu meter assim
        O chat GPT deve ser burro, porque o stor tem como eu tinha antes*/}
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
