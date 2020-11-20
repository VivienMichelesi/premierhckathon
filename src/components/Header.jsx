import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <div className="Header">
      <Link to="/" className="HeaderLink">
        <h1>Uber Arts</h1>
      </Link>
      <h2>Let art travel to you</h2>
    </div>
  );
};

export default Header;
