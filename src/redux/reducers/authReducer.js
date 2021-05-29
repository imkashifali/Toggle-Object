let initialState = {
  isLogin: true,
  user: { name: "jazib", email: "esd@gmail.com" },
};

function authReducer(state = initialState, action) {
  switch (action.type) {
    case "USER_LOGIN":
      let newState = {
        ...state,
        isLogin: true,
        newData : action.payload
    };
      return newState;

    default:
      return state;
  }
}

export default authReducer;
