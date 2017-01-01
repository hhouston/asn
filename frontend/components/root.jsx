import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import Insta from './insta';

import SessionFormContainer from './session_form/session_form_container';

const Root = ({ store }) => {

  const _redirectIfLoggedIn = (nextState, replace) => {
    let currentUser = store.getState().session.currentUser;
    if (currentUser)  {
      replace('/');
    }
  };

  return(
    <Provider store={store}>
      <Router history={hashHistory}>
        <Route path='/' component={ Insta }>
          <Route path='/login'
                 component={ SessionFormContainer }
                 onEnter={ _redirectIfLoggedIn } />
          <Route path='signup'
                 component={ SessionFormContainer }
                 onEnter={ _redirectIfLoggedIn } />

        </Route>
      </Router>
    </Provider>
  );

};

export default Root;
