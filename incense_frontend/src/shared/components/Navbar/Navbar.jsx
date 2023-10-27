import './Navbar.css';
import { useState, useEffect } from 'react';
import { navbarItems } from '../../constants/index.constants.js';

function useScrollDirection() {
  const [scrollDirection, setScrollDirection] = useState(null);

  useEffect(() => {
    let lastScrollY = window.pageYOffset;

    const updateScrollDirection = () => {
      const scrollY = window.pageYOffset;
      const direction = scrollY > lastScrollY ? 'down' : 'up';
      if (
        direction !== scrollDirection &&
        (scrollY - lastScrollY > 10 || scrollY - lastScrollY < -10)
      ) {
        setScrollDirection(direction);
      }
      lastScrollY = scrollY > 0 ? scrollY : 0;
    };
    window.addEventListener('scroll', updateScrollDirection); // add event listener
    return () => {
      window.removeEventListener('scroll', updateScrollDirection); // clean up
    };
  }, [scrollDirection]);

  return scrollDirection;
}

export const Navbar = ({ toggle }) => {
  const scrollDirection = useScrollDirection();

  return (
    <nav
      className={`sticky ${
        scrollDirection === 'down' ? '-top-24' : 'top-0'
      } flex justify-between items-center transition-all duration-500`}
    >
      Shree Ansh Agarbatti
      <div className="flex flex-row">
        {navbarItems.map((item, index) => {
          return (
            <span key={index} className="menu-items">
              {item.name}
            </span>
          );
        })}
        <div className="icons">
          <div className="mobile-menu-icon">
            <span onClick={toggle}>
              <svg
                width="30px"
                height="30px"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                style={{
                  strokeWidth: '2',
                  strokeLinecap: 'round',
                }}
                className="hover:[stroke:gray] [stroke:#fff]"
              >
                <path d="M4 18L20 18" />
                <path d="M4 12L20 12" />
                <path d="M4 6L20 6" />
              </svg>
            </span>
          </div>
        </div>
      </div>
    </nav>
  );
};
