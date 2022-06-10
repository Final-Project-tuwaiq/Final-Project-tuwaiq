export const login = (user) => {
 
  return {
    type: "LOG_IN",
    payload: user,
  };
};
export const addToken = (token) => {
  console.log(token);
  return {
    type: "ADD_TOKEN",
    payload: token,
  };
};
export const UserType = (type) => {

  return {
    type: "SET_TYPE",
    payload: type,
  };
};

// export const RoleId = (id) => {

//   return {
//     type: "SET_ROLE_ID",
//     userId: id,
//   };
// };

export const logout = (user) => {
 
  return {
    type: "LOG_OUT",
    payload: user,
  };
};
