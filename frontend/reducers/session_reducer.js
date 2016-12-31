import { merge } from 'lodash';

import { RECEIVE_CURRENT_USER,
         RECEIVE_ERRORS } from '../actions/session_actions';

const defaultState = {
  currentUser: null,
  errors: []
};

const SessionReducer = (state = defaultState, action) => {
  switch(action.type) {
    case RECEIVE_CURRENT_USER:
      return {
        currentUser: action.currentUser,
        errors: []
      };
    case RECEIVE_ERRORS:
      return {
        currentUser: null,
        errors: action.errors
      };
    default:
      return state;
  }
};

export default SessionReducer;