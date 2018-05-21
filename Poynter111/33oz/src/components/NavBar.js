import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({children}) => {
  return (
    <nav className="navbar" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <Link className="navbar-item" to="/">
          <img src="https://static1.squarespace.com/static/5842547d3e00be994a561913/t/5a4f169924a6948ca5bb5db0/1525345756404/?format=1500w" width="112" height="28" />
        </Link>
        <a role="button" className="navbar-burger">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div className="navbar-menu">
        <div className="navbar-end">
          {children}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
