import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { default as closeIcon } from '../../assets/shared/icon-close.svg';
import { default as hamburgerIcon } from '../../assets/shared/icon-hamburger.svg';
import { default as logo } from '../../assets/shared/logo.svg';
import './NavBar.scss';

const NavBar = () => {
  const location = useLocation().pathname;
  const [isMobileNavOpen, setIsMobileNavOpen] = useState<boolean>(false);
  // TODO: add invis backdrop for users to click to close if clicked outside of mobile nav menu

  function createNavLinks(linksArr: string[]) {
    return linksArr.map((link: string, key: number) => {
      return (
        <li key={key}>
          <Link
            to={link !== 'home' ? `/${link}` : '/'}
            className={`link ${`/${link}` === location ? 'active' : ''} ${
              link === 'home' && '/' === location ? 'active' : ''
            }`}
            onClick={mobileNavHandler}
          >
            <p className="nav-text">
              <strong className="bold">0{key}</strong>
            </p>
            <p className="nav-text">{link.toUpperCase()}</p>
          </Link>
        </li>
      );
    });
  }

  const navLinks = (links: string[]) => (
    <ul className="links">
      <div className="line" />
      {createNavLinks(links)}
    </ul>
  );

  const mobileNavHandler = () => setIsMobileNavOpen(!isMobileNavOpen);

  return (
    <>
      <nav className="nav" aria-label="primary-navigation">
        <Link to="/">
          <img className="logo" src={logo} alt="logo icon" />
        </Link>
        {navLinks(['home', 'destination', 'crew', 'technology'])}
        <button className="button--mobile-nav" onClick={mobileNavHandler}>
          {!isMobileNavOpen ? (
            <img src={hamburgerIcon} alt="mobile navigation icon" />
          ) : (
            <img src={closeIcon} alt="mobile navigation close icon" />
          )}
        </button>
      </nav>
      {isMobileNavOpen ? (
        <>
          <div className="nav-backdrop" onClick={mobileNavHandler}></div>
          <div className="mobile-nav-menu anim--slide-left">
            {navLinks(['home', 'destination', 'crew', 'technology'])}
          </div>
        </>
      ) : (
        ''
      )}
    </>
  );
};

export default NavBar;
