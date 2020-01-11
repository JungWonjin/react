import React from 'react';
import logo from './logo.svg';
import './App.css';

const Header = ({form}) => {
  return (
      <div>
        <img src={logo} className="App-logo" alt="logo" />
        {form}
      </div>    
  );
};

export default Header;