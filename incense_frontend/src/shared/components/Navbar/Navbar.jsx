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
            <button onClick={toggle}>
              <svg
                width="30px"
                height="30px"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4 18L20 18"
                  stroke="#ffffff"
                  stroke-width="2"
                  stroke-linecap="round"
                />
                <path
                  d="M4 12L20 12"
                  stroke="#ffffff"
                  stroke-width="2"
                  stroke-linecap="round"
                />
                <path
                  d="M4 6L20 6"
                  stroke="#ffffff"
                  stroke-width="2"
                  stroke-linecap="round"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};
