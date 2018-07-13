import { reducer as formReducer } from 'redux-form';
import { combineReducers } from 'react-redux';

export default combineReducers({
  form: formReducer,
});
