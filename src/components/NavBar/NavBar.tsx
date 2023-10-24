import './NavBar.scss';
import { default as logo } from '../../assets/shared/logo.svg';
import { Link, useLocation } from 'react-router-dom';

const NavBar = () => {
  const location = useLocation();

  function navLinks(linksArr: string[]) {
    return linksArr.map((link: string, key: number) => {
      return (
        <li key={key}>
          <Link
            to={link !== 'home' ? `/${link}` : '/'}
            className={`link ${
              `/${link}` === location.pathname ? 'active' : ''
            } ${link === 'home' && '/' === location.pathname ? 'active' : ''}`}
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

  return (
    <nav className="nav">
      <Link to="/">
        <img className="logo" src={logo} alt="logo icon" />
      </Link>
      <ul className="links">
        <div className="line" />
        {navLinks(['home', 'destination', 'crew', 'technology'])}
      </ul>
    </nav>
  );
};

export default NavBar;
