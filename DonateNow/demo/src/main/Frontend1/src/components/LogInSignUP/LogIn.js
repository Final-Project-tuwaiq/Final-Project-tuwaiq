import React from "react";
import { useNavigate } from "react-router-dom";
import {  useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import CloseIcon from "@material-ui/icons/Close";
import { login, UserType, addToken } from "../../reducers/Login/action";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import Navbar from "../Navbar/Navbar";
import jwt_decode from "jwt-decode";


import "./Login.css";
function LogIn() {
  const [userinfo, setUserinfo] = useState("");
  const [password, setPassword] = useState("");
  const[error,setError]=useState()

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const state = useSelector((state) => {
    return {
      isLoggedIn: state.usersReducer.isLoggedIn,
      UserType: state.usersReducer.UserType,
      
    };
  });


  const usernameValue = (e) => {
    setUserinfo(e.target.value);
  };
  const passwordValue = (e) => {
    setPassword(e.target.value);
  };

  const getUser = () => {
    const data = {
      userinfo,
      password,
    };

    axios
      .post("http://localhost:8081/login", {
        userName: data.userinfo,
        password: data.password,
      })

      .then((res) => {
        const token = res.data.access_token;
        const decoded = jwt_decode(token);
        console.log(token);

        localStorage.setItem("currentUser",decoded.userName)
        localStorage.setItem("token",token)
        localStorage.setItem("isLoggedIn",true)
        localStorage.setItem("UserType",decoded.roles[0])
        // // add to redux
        const user_action = login(decoded);
        const token_action = addToken(token);
        const type_action = UserType(decoded.roles[0]);
        localStorage.setItem("user_type", type_action);
        console.log("type: ", type_action);

        dispatch(user_action);
        dispatch(token_action);
        dispatch(type_action);
        if(decoded.roles[0]==="admin"){
          navigate("/admin");
        }else
        navigate("/");
        console.log("hiiiiiiiiiiii" + decoded.userName);
      })

    
      .catch((err) => {
        console.log(err);
        setError("Username or Password is incorrect")
      });
  };

 

  return (
    <div>
      <Navbar />
      <div className="background">
        <form>
          <div className="container-S">
            <div className="Icon-x-m">
              <Link to="/">
                <CloseIcon className="Icon-x" />
              </Link>
            </div>

            <h2 className="title-b">Log In</h2>
            <div className="form-group">
              <label>
                <b>User Name</b>
              </label>
              <input
                type="text"
                onChange={usernameValue}
                className="form-control"
                placeholder="Enter User Name"
              />
            </div>
            <div className="form-group">
              <label>
                <b>Password</b>
              </label>
              <input
                type="password"
                onChange={passwordValue}
                className="form-control"
                placeholder="Enter password"
              />
            </div>
           <p className="p-error">{error}</p> 
          

     
            <button
              type="button"
              onClick={() => {
                getUser();
              }}
              className="button-b"
            >
              Login
            </button>
            <br />
            <p className="forgot-password text-right">
              You don't have an account ?{" "}
              <a
                href
                className="navig"
                onClick={() => {
                  navigate("/SignUp");
                }}
              >
                {" "}
                Sign Up
              </a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default LogIn;
