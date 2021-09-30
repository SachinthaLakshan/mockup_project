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
