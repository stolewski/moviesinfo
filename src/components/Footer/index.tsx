import React from 'react';
import { NavLink } from 'react-router-dom';
import { ReactComponent as Logo } from 'assets/img/logo.svg';
import routeHome from 'pages/Home/routes';
import './styles.scss';

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='container'>
        <div className='row align-items-center justify-content-between'>
          <div className='col-md-4 col-lg-2'>
            <NavLink to={routeHome()}>
              <Logo />
            </NavLink>
          </div>
          <div className='col-md-4 col-lg-2'>
            <p>Final project</p>
          </div>
          <div className='col-md-4 col-lg-2'>
            <span className='made'>Made by</span>
            <span className='myName'>Stanislav Oleszko</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
