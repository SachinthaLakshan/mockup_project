export const employeeReducer = (
  state = { loading: true, employees: [] },
  action
) => {
  switch (action.type) {
    case 'GET_EMP_LIST_REQUEST':
      return { loading: true };
    case 'GET_EMP_LIST_SUCCESS':
      return { loading: false, employees: action.payload };
    case 'GET_EMP_LIST_FAIL':
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const employeeDeleteReducer = (state = {}, action) => {
  switch (action.type) {
    case 'EMP_DELETE_REQUEST':
      return { loading: true };
    case 'EMP_DELETE_SUCCESS':
      return { loading: false, success: true };
    case 'EMP_DELETE_FAIL':
      return { loading: false, error: action.payload };
    case 'EMP_DELETE_RESET':
      return {};
    default:
      return state;
  }
};
