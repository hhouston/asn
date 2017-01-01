import React from 'react';
import WelcomeContainer from './welcome/welcome_container';

const Insta = ({ children }) => (
  <div>
    <h1>Insta</h1>
    <WelcomeContainer />
    { children }
  </div>
);

export default Insta;
