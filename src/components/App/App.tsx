import React from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Home from 'pages/Home';
import CategoryPage from 'pages/CategoryPage';
import AboutUsPage from 'pages/AboutUsPage';
import SearchPage from 'pages/SearchPage';
import routeHome from 'pages/Home/routes';
import Header from 'components/Header';
import routeCategory from 'pages/CategoryPage/routes';
import routeAbout from 'pages/AboutUsPage/routes';
import routeSearch from 'pages/SearchPage/routes';
import Footer from 'components/Footer';
import routeMovieDetail from 'pages/MovieDetailPage/routes';
import MovieDetailPage from 'pages/MovieDetailPage';
import Sidebar from 'components/Sidebar';

function App() {
  return (
    <BrowserRouter>
      <div className='App' id='outer-container'>
        <Sidebar
          pageWrapId={'page-wrap'}
          outerContainerId={'outer-container'}
        />
        <div id='page-wrap'>
          <Header />
          <main>
            <div className='container'>
              <Routes>
                <Route path={routeHome()} element={<Home />} />
                <Route path={routeCategory()} element={<CategoryPage />} />
                <Route path={routeAbout()} element={<AboutUsPage />} />
                <Route path={routeSearch()} element={<SearchPage />} />
                <Route
                  path={routeMovieDetail()}
                  element={<MovieDetailPage />}
                />
                <Route path='*' element={<Navigate to='/' />} />
              </Routes>
            </div>
          </main>
          <Footer />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
