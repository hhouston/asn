import React from 'react';
import WelcomeContainer from './welcome/welcome_container';
import Insta from './insta';

const Header = ({ children }) => (
  <div>

    <Insta />
    { children }
  </div>
);

export default Header;
