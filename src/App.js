import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Browse from './pages/Browse';
import BrowseByGenre from './pages/BrowseByGenre';
import Details from './pages/Details';
import Homescreen from './pages/Homescreen';
import Search from './pages/Search';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Homescreen />}></Route>
        <Route path='/details/:platform/:id' element={<Details />}></Route>
        <Route path='/browse/:platform' element={<Browse />}></Route>
        <Route path='/browsebygenre/:platform/:id' element={<BrowseByGenre />}></Route>
        <Route path='/search' element={<Search />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
