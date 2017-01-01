import React from 'react';
import WelcomeContainer from './welcome/welcome_container';

const Header = ({ children }) => (
  <div>
    <WelcomeContainer />
    { children }
  </div>
);

export default Header;
