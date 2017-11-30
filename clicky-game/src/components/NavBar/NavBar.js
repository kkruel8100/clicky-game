import React from 'react';
import './NavBar.css';

const NavBar = props => (
  <div className="NavBar-header">
    <ul>
      <li>
        <a href="/">Clicky Game</a>
      </li>
      <li>Click an image to begin!</li>
      <li>Score: </li>
    </ul>
  </div>
);

export default NavBar;
