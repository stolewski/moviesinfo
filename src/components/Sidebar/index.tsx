import React from 'react';
import { elastic as Menu } from 'react-burger-menu';
import { NavLink } from 'react-router-dom';
import routeHome from 'pages/Home/routes';
import routeCategory from 'pages/CategoryPage/routes';
import routeAbout from 'pages/AboutUsPage/routes';
import routeSearch from 'pages/SearchPage/routes';
import './styles.scss';

interface ISidebarProps {
  pageWrapId: {};
  outerContainerId: {};
}

const Sidebar: React.FC<ISidebarProps> = props => {
  return (
    <Menu>
      <NavLink className='menu-item' to={routeHome()}>
        Home
      </NavLink>
      <NavLink className='menu-item' to={routeCategory()}>
        Categories
      </NavLink>
      <NavLink className='menu-item' to={routeAbout()}>
        About Us
      </NavLink>
      <NavLink className='menu-item' to={routeSearch()}>
        Search
      </NavLink>
    </Menu>
  );
};

export default Sidebar;
