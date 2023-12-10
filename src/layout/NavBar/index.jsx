import React from 'react';
import { NavLink, useLocation, Outlet } from 'react-router-dom';
import './style.css';

/*const LocationDisplay = () => {
  const location = useLocation()

  return <span>{location.pathname}</span>
}
*/
const NavBar = () => {

  const activeStyle = {
    textDecoration: 'underline',
    color: 'darkblue'
  }

  return (
    <>
      <nav className="navbar">
       
        <ul className="nav-links">
          <li>
            <NavLink
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
              to="/">
              Home
            </NavLink>
          </li>

          <li>
            <NavLink 
              style={({ isActive }) => (isActive ? activeStyle : undefined)} 
              to="/JustinQuiles">
              Justin Quiles
            </NavLink>
          </li>

          <li><NavLink style={({ isActive }) => (isActive ? activeStyle : undefined)} to="/Feid">Feid</NavLink></li>
          <li><NavLink style={({ isActive }) => (isActive ? activeStyle : undefined)} to="/Lunay">Lunay</NavLink></li>
        </ul>
      </nav>
      <Outlet />
    </>
  );
}

export default NavBar;