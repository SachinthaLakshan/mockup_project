let savedState;
if (window.localStorage.getItem('auth')) {
  savedState = JSON.parse(window.localStorage.getItem('auth'));
} else {
  savedState = null;
}

export const authReducer = (state = savedState, action) => {
  switch (action.type) {
    case 'LOGIN':
      return {
        ...state,
        ...action.payload,
      };
    case 'LOGOUT':
      return action.payload;

    default:
      return state;
  }
};

export const userListReducer = (
  state = { loading: true, users: [] },
  action
) => {
  switch (action.type) {
    case 'GET_USER_LIST_REQUEST':
      return { loading: true };
    case 'GET_USER_LIST_SUCCESS':
      return { loading: false, users: action.payload };
    case 'GET_USER_LIST_FAIL':
      return { loading: false, users: action.payload };
    default:
      return state;
  }
};
