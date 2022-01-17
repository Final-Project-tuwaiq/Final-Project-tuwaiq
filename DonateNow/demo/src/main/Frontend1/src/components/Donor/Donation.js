import "./Donation.css";
import { useState } from "react";
import { useParams } from "react-router";
import { useSelector } from "react-redux";
import axios from "axios";
import { Link } from "react-router-dom";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";


function Donation() {
  const { id } = useParams();
  const user_type = localStorage.getItem("user_type");
  

  const state = useSelector((state) => {
    return {
      currentUser: state.usersReducer.currentUser,
      token: state.usersReducer.token,
    };
  });
  const [description, setDescription] = useState();
  const [quantity, setQuantity] = useState();
  const [date, setDate] = useState();
  const [stat, setStat] = useState();

  const changeDescription = (e) => {
    setDescription(e.target.value);
  };
  const changeQuantity = (e) => {
    setQuantity(e.target.value);
  };
  const changeDate = (e) => {
    setDate(e.target.value);
  };
 
  const getDonation = () => {
    console.log(user_type);
  
    const config = {
      headers: { Authorization: `Bearer ${state.token}` },
    };

    console.log(config);

    axios
      .post(
        "http://localhost:8081/donations",
        {
          description: "" + description + "",
          quantity: quantity,
          date: "" + date + "",
          state: "in",
          department: { id: id },
          donor: { id: state.currentUser.id  },
        },
        config
      )
      .then((res) => {
        console.log(res.data);
      });
  };
 
  console.log(state.currentUser.id);
  console.log("hi " + id);
  console.log(state.currentUser.id + "hggi");
 
  return (
    <>
     
      <div className="donation1">
        <div className="container-D">
          <div>
            <Link to="/">
              <ArrowBackIcon className="icon-xx" />
            </Link>
          </div>
          <div className="title-D">Donation</div>

          <div className="row">
            <div className="column">
              <label htmlFor="name">Name</label>
              <input type="text" id="name" placeholder="Your name here" />
            </div>
            <div className="column">
              <label htmlFor="email">Contact Number</label>
              <input type="email" id="email"  />
            </div>
          </div>
          <div className="row">
            <div className="column">
              <label>Date</label>
              <input
                type="Date"
                id="subject"
                onChange={changeDate}
              />
            </div>
            <div className="column">
              <label htmlFor="contact">Quantity</label>
              <input
                type="number"
      
                onChange={changeQuantity}
              />
            </div>
          </div>
          <div className="row">
            <div className="column">
              <label htmlFor="issue">Describe your </label>
              <textarea
                id="issue"
                placeholder="Describe your "
                onChange={changeDescription}
              />
            </div>
     
          </div>
          <input
            className="submit-btn"
            type="submit"
            defaultValue="Submit"
            onClick={() => {
              getDonation();
            }}
          />
        </div>
      </div>
    </>
  );
}

export default Donation;
