import React, { useCallback, useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

import { BiMenu } from 'react-icons/bi';

import './style.css';

function Navbar() {
  const [windowSize, setWindowSize] = useState(window.innerWidth);
  const [isNavItemVisible, setIsNavItemVisible] = useState(null);

  const location = useLocation();
  const { pathname } = location;

  const handleWindowSize = useCallback((event) => {
    setWindowSize(window.innerWidth);
  });

  useEffect(() => {
    window.addEventListener('resize', handleWindowSize);

    return () => window.removeEventListener('resize', handleWindowSize);
  }, [handleWindowSize]);

  return (
    <>
      {windowSize > 576 ? (
        <nav className="nav-container">
          <ul>
            <li>
              <Link to="/" className={pathname === '/' ? 'active' : ''}>
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/works"
                className={pathname === '/works' ? 'active' : ''}
              >
                Works
              </Link>
            </li>
            <li>
              <Link
                to="/techstacks"
                className={pathname === '/techstacks' ? 'active' : ''}
              >
                Tech Stack
              </Link>
            </li>
            <li>
              <a
                href="https://github.com/fillahfirdausyah/personal-website"
                target="_blank"
                rel="noreferrer"
              >
                Github
              </a>
            </li>
          </ul>
        </nav>
      ) : (
        <nav className="nav-mobile-container">
          <div className="top-nav">
            <div className="top-nav-item">
              <h4>Fillah Firdausyah</h4>
              <div
                className="nav-icon-wrapper"
                onClick={() => setIsNavItemVisible(!isNavItemVisible)}
              >
                <BiMenu size={'30px'} />
              </div>
            </div>
          </div>
          <div
            className={
              isNavItemVisible
                ? 'nav-mobile-item-container angry-animate'
                : 'nav-mobile-item-container appear-out'
            }
          >
            <ul>
              <li>
                <Link to="/" className={pathname === '/' ? 'active' : ''}>
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/works"
                  className={pathname === '/works' ? 'active' : ''}
                >
                  Works
                </Link>
              </li>
              <li>
                <Link
                  to="/techstacks"
                  className={pathname === '/techstacks' ? 'active' : ''}
                >
                  Tech Stack
                </Link>
              </li>
              <li>
                <a
                  href="https://github.com/fillahfirdausyah/personal-website"
                  target="_blank"
                  rel="noreferrer"
                >
                  Github
                </a>
              </li>
            </ul>
          </div>
        </nav>
      )}
    </>
  );
}

export default Navbar;
