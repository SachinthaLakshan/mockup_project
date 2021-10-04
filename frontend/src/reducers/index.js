import { combineReducers } from 'redux';
import { authReducer, userListReducer } from './authReducer';
import { employeeReducer, employeeDeleteReducer } from './employeeReducer';

const rootReducer = combineReducers({
  auth: authReducer,
  get_emp: employeeReducer,
  delete_emp: employeeDeleteReducer,
  get_users: userListReducer,
});

export default rootReducer;
