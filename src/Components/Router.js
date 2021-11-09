import React from 'react';
import { HashRouter, Route, Routes } from 'react-router-dom';
import Header from 'Components/Header';
import Home from 'Screens/Home';
import Movies from 'Screens/Movies';
import TVshows from 'Screens/TVshows';
import Details from 'Screens/Details';
import Search from 'Screens/Search';

const Router = () => {
  return (
    <HashRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movie" element={<Movies />} />
        <Route path="/show" element={<TVshows />} />
        <Route path="/movie/:id" element={<Details />} />
        <Route path="/show/:id" element={<Details />} />
        <Route path="/search" element={<Search />} />
      </Routes>
    </HashRouter>
  );
};

export default Router;
