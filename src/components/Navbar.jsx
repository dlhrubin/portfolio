import React from 'react';
import { Link } from 'react-scroll';
import portfolioIcon from '../img/portfolio_icon.PNG';

const Navbar = () => (
  <nav className="navbar">
    <ul>
      <li className="home-btn">
        <Link activeClass="active" to="landing" spy smooth>
          <img src={portfolioIcon} alt="Portfolio icon" />
        </Link>
      </li>
      <li>
        <Link activeClass="active" to="landing" spy smooth>
          About
        </Link>
      </li>
      <li>
        <Link activeClass="active" to="projects" spy smooth>
          Projects
        </Link>
      </li>
      <li>
        <Link activeClass="active" to="contact" spy smooth>
          Contact
        </Link>
      </li>
    </ul>
  </nav>
);

export default Navbar;
