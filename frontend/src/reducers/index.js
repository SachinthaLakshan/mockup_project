import { combineReducers } from 'redux';
import { authReducer } from './authReducer';
import { employeeReducer, employeeDeleteReducer } from './employeeReducer';

const rootReducer = combineReducers({
  auth: authReducer,
  get_emp: employeeReducer,
  delete_emp: employeeDeleteReducer,
});

export default rootReducer;
