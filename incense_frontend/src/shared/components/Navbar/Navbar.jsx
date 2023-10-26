import React from 'react';
import './Navbar.css';
import { navbarItems } from '../../constants/navbarItems';

export const Navbar = ({ toggle }) => {
  return (
    <nav className="flex justify-between items-center">
      Shree Ansh Agarbatti
      <div className="flex flex-row">
        {navbarItems.map((e) => {
          return <span className="menu-items">{e.name}</span>;
        })}
        <div className="icons">
          <div className="mobile-menu-icon">
            <button onClick={toggle}>{'>'}</button>
          </div>
        </div>
      </div>
    </nav>
  );
};
