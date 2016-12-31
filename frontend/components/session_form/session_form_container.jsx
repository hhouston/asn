import React from 'react';
import { connect } from 'react-redux';
import { login, signup } from '../../actions/session_actions';

const mapStateToProps = ({ session }) => ({
  loggedIn: Boolean(session.currentUser),
  errors: session.errors
});

const mapDispatchToProps = (dispatch, { location }) => {
  let formType = location.pathName.slice(1);
  let dispatchType;

  if(formType === 'signup') {
    dispatchType = signup;
  } else {
    dispatchType = login;
  }

  return {
    formType,
    processForm: user => dispatch(dispatchType(user))
  };
};
