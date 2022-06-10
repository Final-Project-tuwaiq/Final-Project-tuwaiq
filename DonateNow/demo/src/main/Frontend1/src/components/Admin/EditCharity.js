import { useState, useEffect } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  FormGroup,
  FormControl,
  InputLabel,
  Input,
  Button,
  makeStyles,
  Typography,
} from "@material-ui/core";
import { useParams } from "react-router-dom";
import swal from "sweetalert";

const useStyles = makeStyles({
  container: {
    width: "50%",
    margin: "5% 0 0 25%",
    "& > *": {
      marginTop: 20,
    },
  },
});

const EditCharity = () => {
  const navigate = useNavigate();

  const { id } = useParams();
  console.log("hi" + id);

  const [name, setName] = useState();
  const [phoneNumber, setPhoneNumber] = useState();
  const [location, setLocation] = useState();
  const state = useSelector((state) => {
    return {
      currentUser: state.usersReducer.currentUser,

      token: state.usersReducer.token,
    };
  });

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

  const config = {
    headers: { Authorization: `Bearer ${state.token}` },
  };

  const classes = useStyles();

  const EditCharity = () => {
    const data = {
      name: name,
      phoneNumber: phoneNumber,
      location: location,
    };

    axios
      .put(`http://localhost:8081/charities/${id}`, data, config)
      .then((res) => {
        console.log(res.data);
        swal({
          icon: "success",
        });
        navigate("/admin");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <FormGroup className={classes.container}>
      <Typography variant="h4">Edit Information</Typography>
      <FormControl>
        <InputLabel htmlFor="my-input">Name</InputLabel>
        <Input
          onChange={changeName}
          name="name"
          id="my-input"
          aria-describedby="my-helper-text"
        />
      </FormControl>
      <FormControl>
        <InputLabel htmlFor="my-input">phone Number</InputLabel>
        <Input
          onChange={changePhoneNumber}
          name="username"
          id="my-input"
          aria-describedby="my-helper-text"
        />
      </FormControl>
      <FormControl>
        <InputLabel htmlFor="my-input">Location</InputLabel>
        <Input
          onChange={changeLocation}
          name="email"
          id="my-input"
          aria-describedby="my-helper-text"
        />
      </FormControl>

      <FormControl>
        <Button
          variant="contained"
          color="primary"
          onClick={() => {
            EditCharity();
          }}
        >
          Edit
        </Button>
      </FormControl>
    </FormGroup>
  );
};

export default EditCharity;
