import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <nav>
        <h1>BigBus</h1>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/buslist">Buses</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
