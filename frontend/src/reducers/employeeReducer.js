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
