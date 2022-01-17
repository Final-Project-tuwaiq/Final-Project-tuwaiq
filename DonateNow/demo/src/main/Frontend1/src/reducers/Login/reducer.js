const initialState = {
  currentUser: {},
  isLoggedIn: false,
  UserType: "",
  token: undefined,
  // roleId: undefined,
};

const usersReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case "LOG_IN":
      return {
        currentUser: payload,
        isLoggedIn: true,
        token: state.token,
        UserType:"",
      };
    case "ADD_TOKEN":
      console.log(payload);
      return {
        currentUser: state.currentUser,
        token: payload,
        UserType:""
      };
    case "SET_TYPE":
      return {
        currentUser: state.currentUser,
        isLoggedIn: true,
        UserType: payload,
        token: state.token,
      };
    // case "SET_ROLE_ID":
    //   return {
    //     currentUser: state.currentUser,
    //     isLoggedIn: true,
    //     UserType: "",
    //     token: state.token,
    //     roleId: undefined
    //   };
    case "LOG_OUT":
      return {
        currentUser: {},
        isLoggedIn: false,
        token: undefined,
        UserType:""
      };
    default:
      return state;
  }
};

export default usersReducer;
