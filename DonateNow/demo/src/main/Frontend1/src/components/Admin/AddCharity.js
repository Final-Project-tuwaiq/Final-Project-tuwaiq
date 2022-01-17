import { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import {
  FormGroup,
  FormControl,
  InputLabel,
  Input,
  Button,
  makeStyles,
  Typography,
} from "@material-ui/core";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";




const useStyles = makeStyles({
    container: {
      width: "50%",
      margin: "5% 0 0 25%",
      "& > *": {
        marginTop: 20,
      },
    },
  });

function AddCharity() {
    const navigate = useNavigate();
  const classes = useStyles();
  let departmentId;
 
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const [name, setName] = useState();
  const [phoneNumber, setPhoneNumber] = useState();
  const [location, setLocation] = useState();
  const [departments, setDepartments] = useState();
  const dispatch = useDispatch();

  const state = useSelector((state) => {
    return {
      token: state.usersReducer.token,
    };
  });
   const config = {
    headers: { Authorization: `Bearer ${state.token}` },
  };

  const changeUserName = (e) => {
    setUsername(e.target.value);
    console.log(username);
  };
  const changePassword = (e) => {
    setPassword(e.target.value);
    console.log(password);
  };
  const changeName = (e) => {
    setName(e.target.value);
    console.log(name);
  };
 
  const changePhoneNumber = (e) => {
    setPhoneNumber(e.target.value);
    console.log(phoneNumber);
  };
  const changeLocation = (e) => {
    setLocation(e.target.value);
    console.log(location);
  };

  const changeDepartments = (e) => {
    setDepartments(e.target.value)
   if(departments ==="kll"){
     departmentId=1
   }
   if(departments ==="dll"){
     departmentId=2
   }
   if(departments ==="ddf"){
     departmentId=3
   }
   if(departments ==="fkf"){
     departmentId=4
   }
   if(departments ==="flfl"){
     departmentId=5
   }
   
   console.log(departments)

 };
  const getUser = () => {
    const theuser = {
      userName: username,
      password: password,
      role: "charity",
    };
    console.log("the user  want add ");
    console.log(theuser);
    console.log(departmentId);

    axios.post("http://localhost:8081/users", theuser).then((res) => {
      if (res.data === null) {
        console.log("i am in if i geted match");
      } else {
        axios
          .post("http://localhost:8081/charities", {
            name: name,
            phoneNumber: phoneNumber,
            location: location,
     
            departments :[{"id" : departmentId},
                  {"id" :4}],
         
            user: { id: res.data.id },
          },config)
          

          .then((res) => {
            if (res.data === null) {
              console.log("Sorry, the phone number is taken");
            } else {
              console.log(res.data);
              navigate("/admin");
            }
          })
          .catch((err) => {
            console.log(err);
          });
      }
    });
  };

  return (
    <FormGroup className={classes.container}>
      <Typography variant="h4">  
            <Link to="/admin">
              <ArrowBackIcon />
            </Link>
          Add Charity</Typography>
      <FormControl>
        <InputLabel htmlFor="my-input">Name</InputLabel>
        <Input name="name" id="my-input" onChange={changeName}/>
      </FormControl>
      <FormControl>
        <InputLabel htmlFor="my-input">Username</InputLabel>
        <Input name="username" id="my-input" onChange={changeUserName}/>
      </FormControl>
      <FormControl>
        <InputLabel htmlFor="my-input">Phone</InputLabel>
        <Input name="phone" id="my-input" onChange={changePhoneNumber}/>
      </FormControl>
      <FormControl>
        <InputLabel htmlFor="my-input">Passoword</InputLabel>
        <Input name="phone" id="my-input"onChange={changePassword} />
      </FormControl>
      <FormControl>
        <InputLabel htmlFor="my-input">Location</InputLabel>
        <Input name="phone" id="my-input"onChange={changeLocation} />
      </FormControl>
      <FormControl>
          <InputLabel htmlFor="my-input">Departments</InputLabel>
        <Input name="phone" id="my-input"onChange={changeDepartments} />
      </FormControl>
      <FormControl>
        <Button variant="contained" color="primary" onClick={getUser} >
          Add Charity
        </Button>
      </FormControl>
    </FormGroup>
  );
};

export default AddCharity;
