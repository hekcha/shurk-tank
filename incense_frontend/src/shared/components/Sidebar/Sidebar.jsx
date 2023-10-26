import React from 'react';
import './Sidebar.css';
import { navbarItems } from '../../constants/navbarItems';

export const Sidebar = ({ isopen, toggle }) => {
  let opacityClasses = ['sidebar-container'];
  if (isopen) {
    opacityClasses.push('opacity-on');
  } else {
    opacityClasses.push('opacity-off');
  }

  return (
    <div
      className={opacityClasses.join(' ')}
      isopen={isopen.toString()}
      onClick={toggle}
    >
      <div className="icon">
        <button onClick={toggle}>X</button>
      </div>
      <div className="sidebar-wrapper">
        <div className="sidebar-menu">
          {navbarItems.map((item) => {
            return <span>{item.name}</span>;
          })}
        </div>
      </div>
    </div>
  );
};