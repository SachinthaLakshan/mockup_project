import { combineReducers } from 'redux';
import { authReducer } from './authReducer';
import { employeeReducer } from './employeeReducer';

const rootReducer = combineReducers({
  auth: authReducer,
  get_emp: employeeReducer,
});

export default rootReducer;
