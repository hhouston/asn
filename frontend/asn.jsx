import React from 'react';
import ReactDOM from 'react-dom';

import Insta from './components/insta.jsx';

class Root extends React.Component {


  render() {
    return(
      <div>
        <Insta />
      </div>
    );
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  ReactDOM.render(<Root />, root);
});
