import React from "react";
import { Link } from "react-router-dom";
import CloseIcon from "@material-ui/icons/Close";
import "./Login.css";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import swal from 'sweetalert';




function SignUp() {
  const navigate = useNavigate();
const[error,setError]=useState()
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [phoneNumber, setPhoneNumber] = useState();
  const [location, setLocation] = useState();
  const [gender, setGender] = useState();
  const dispatch = useDispatch();

  const changeUserName = (e) => {
    setUsername(e.target.value);
    console.log(username);
  };
  const changePassword = (e) => {
    setPassword(e.target.value);
    console.log(password);
  };
  const changeFirstName = (e) => {
    setFirstName(e.target.value);
    console.log(firstName);
  };
  const changeLastName = (e) => {
    setLastName(e.target.value);
    console.log(lastName);
  };
  const changePhoneNumber = (e) => {
    setPhoneNumber(e.target.value);
    console.log(phoneNumber);
  };
  const changeLocation = (e) => {
    setLocation(e.target.value);
    console.log(location);
  };
  const genderChange = (e) => {
    setGender(e.target.value);
    console.log(gender);
  };

  const getUser = () => {
    const theuser = {
      userName: username,
      password: password,
      role: "donor",
    };
    console.log("the user  want add ");
    console.log(theuser);

    axios.post("http://localhost:8081/users", theuser).then((res) => {
      if (res.data === null) {
        console.log(" geted match");
        
      } else {
        axios
          .post("http://localhost:8081/donors", {
            firstName: firstName,
            lastName: lastName,
            phoneNumber: phoneNumber,
            location: location,
            gender: gender,
            user: { id: res.data.id },
          })
          .then((res) => {
            if (res.data === null) {
              console.log("Sorry, the phone number is taken");
            } else {
              console.log(res.data);
              swal({
                title: "Successfully Registered",
                icon: "success",
                button: "Go To Login"
               
              })
              .then(() => {
                swal(navigate("/login"));
              });
      
           
            }
          })
          .catch((err) => {
            console.log(err);
            setError("This  userName or phone number  has already been taken")
           
          });
      }
    });
  };

  return (
    <div className="background">
      <form>
        <div className="container-S">
          <div className="Icon-x-m">
            <Link to="/">
              <CloseIcon className="Icon-x" />
            </Link>
          </div>
          
          <h2 className="title-b">Sign Up</h2>
          <div className="form-group two-input">
            <label>
              First Name
              <input
                type="text"
                onChange={changeFirstName}
                className="form-control"
                placeholder="Enter First name"
              />
            </label>
           
            <label>
             Last Name
              <input
                type="text"
                onChange={changeLastName}
                className="form-control"
                placeholder="Enter Last name"
              />
            </label>
          </div>
          <div className="form-group two-input">
            <label>
              Phone Number
              <input
                type="text"
                onChange={changePhoneNumber}
                className="form-control"
                placeholder="000-000-0000"
              />
            </label>
            <label>
              Location
              <input
                type="text"
                onChange={changeLocation}
                className="form-control"
                placeholder="Location"
              />
            </label>
          </div>
          <div className="form-group two-input">
            <label>
              User Name
              <input
                type="text"
                onChange={changeUserName}
                className="form-control"
                placeholder="Enter User Name"
              />
            </label>
            <label>
              {" "}
              Password
              <input
                type="password"
                onChange={changePassword}
                className="form-control"
                placeholder=" Enter password"
              />
            </label>
          </div>
         
        <div className="form-group">
          <label>Gender: </label>
          <label>
            <input
              type="radio"
              onChange={genderChange}
              name="gender"
              value="Fmale"
              classNam="PostBtn flex-child"
            />
            Fmale.
          </label>
          
          <label>
            <input
              type="radio"
              onChange={genderChange}
              name="gender"
              value="Male"
              classNam="PostBtn flex-child"
            />
            Male
          </label>
          </div>
      
       
            <br />
            
             {/* <p className="p-error">kkkk{error}</p> */}
          <button onClick={getUser} type="button" className="button-b">
            Sign Up
          </button>
          <br></br>
          <p className="forgot-password text-right">
            Already registered ?<Link to="/login"> Log in</Link>
          </p>
        </div>
      </form>
    </div>
  );
}

export default SignUp;
