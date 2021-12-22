import React from 'react';
import { NavLink } from 'react-router-dom';
import { ReactComponent as Logo } from 'assets/img/logo.svg';
import routeHome from 'pages/Home/routes';
import routeAbout from 'pages/AboutUsPage/routes';
import routeCategory from 'pages/CategoryPage/routes';
import routeSearch from 'pages/SearchPage/routes';
import './styles.scss';

const Header = () => {
  return (
    <header className='header'>
      <div className='container'>
        <div className='row justify-content-between align-items-center pt-4'>
          <div className='col-lg-4 col-xl-2'>
            <NavLink className='logo' to={routeHome()}>
              <Logo />
            </NavLink>
          </div>
          <div className='col-lg-7 col-xl-5'>
            <nav>
              <NavLink to={routeHome()}>Home</NavLink>
              <NavLink to={routeCategory()}>Categories</NavLink>
              <NavLink to={routeAbout()}>About Us</NavLink>
              <NavLink to={routeSearch()}>Search</NavLink>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
