const currentUser = localStorage.getItem("currentUser");
const token = localStorage.getItem("token");
const isLoggedIn = localStorage.getItem("isLoggedIn");
const UserType = localStorage.getItem("UserType");

const initialState = {
  currentUser: currentUser?currentUser:{},
  isLoggedIn: isLoggedIn?isLoggedIn:false ,
  UserType:UserType? UserType:"",
  token: token ? token :undefined,

  // roleId: undefined,
};

const usersReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case "LOG_IN":
      localStorage.setItem("currentUser", JSON.stringify(payload));
      console.log(payload);

      return {
        currentUser: payload,
        isLoggedIn: true,
        token: state.token,
        UserType:"",
      };
    case "ADD_TOKEN":
      localStorage.setItem("token", JSON.stringify(payload));

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
