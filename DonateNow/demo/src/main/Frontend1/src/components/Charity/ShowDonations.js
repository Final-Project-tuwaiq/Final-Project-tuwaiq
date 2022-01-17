import "./ShowDonations.css";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import axios from "axios";
import { useSelector } from "react-redux";
import Navbar from "../Navbar/Navbar";
import { Link } from "react-router-dom";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";


function ShowDonations() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [data, setData] = useState();
  const [charity_id, setCharity_id] = useState();


  const state = useSelector((state) => {
    return {
      currentUser: state.usersReducer.currentUser,
      token: state.usersReducer.token,
    };
  });

  useEffect(() => {
    axios
      .get(`http://localhost:8081/donations/department/${id}`)
      .then((res) => {
        console.log(res.data);
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const config = {
    headers: { Authorization: `Bearer ${state.token}` },
  };

  // const updatePatient = (e)=>{
  //   console.log(state.currentUser.id);
  //   console.log(e.date);
  //   console.log(e.id);
  //   const Appointment_id = e.id;
  //   const patient_id = state.currentUser.id;

  //   addPatient(Appointment_id,patient_id);

  // }

  // const addPatient = (Appointment_id,patient_id)=>{
  //   axios
  //   .put(`http://localhost:8080/appointment/${Appointment_id}/patient/${patient_id}`)
  //   .then((res) => {
  //     console.log(res.data);
  //     updateState(Appointment_id);

  //   })
  //   .catch((err) => {
  //     console.log(err);
  //   });

  // }

  

  const updateCharity = (e)=>{
    console.log(state.currentUser.id);
    console.log(e.date);
    console.log(e.id);
    const Donation_id = e.id;

    addDonation(Donation_id);
      
  }

  const addDonation = (Donation_id)=>{
    axios
    .get(
      `http://localhost:8081/users/getRoleId/${state.currentUser.id}/charity`
    )

    .then((res) => {
      console.log(res.data);
      setCharity_id(res.data);

      {
          axios
    .put(`http://localhost:8081/donations/${Donation_id}/${res.data}`)
    .then((res) => {
      console.log(res.data);
      updateState(Donation_id);

    })
    .catch((err) => {
      console.log(err);
    });
      }
    })
    .catch((err) => {
      console.log(err);
    });
 
  

  }
  const updateState= (Donation_id)=>{
    axios
    .put(`http://localhost:8081/donations/${Donation_id}`,{
      state:"Waiting"
  })
    .then((res) => {
      console.log(res.data);
    })
    .catch((err) => {
      console.log(err);
    });

    navigate("/");

  }


  // const updateState= ()=>{
  //   axios
  //   .put(`http://localhost:8081/donations/${id}`, {
  //     state:"Waiting"
  // })
  //   .then((res) => {
  //     console.log(res.data);
  //   })
  //   .catch((err) => {
  //     console.log(err);
  //   });

  //   navigate("/");
  // }

  return (
    <>
      <Navbar />
      {/* <div className="flex"></div>
      <div className="container">
        <div className="row justify-content-around">
          {data !== undefined
            ? data.map((e) => {
              if(e.state === "Available"){
                return (
                  <div
                    className=" my-5 py-4 Sh-card"
                    style={{ width: "18rem" }}
                  >
                    <div className="card-body text-center">
                      <h4> The Appointment </h4>
                      <h4> {Math.floor(Math.random()*10)+""+Math.floor(Math.random()*10)+""+Math.floor(Math.random()*10)+""+Math.floor(Math.random()*10) } </h4>
                      <h6>Date : {e.date}</h6>
                      <h6>Time : {Math.floor(Math.random() * 12)+": "+Math.floor(Math.random() * 60)+" AM"} </h6>
                      <p className="text-dep">
                        <button type="button" className="btn-v"  onClick={()=>{updatePatient(e)}}>
                          {e.state}
                        </button>
                      </p>
                    </div>
                  </div>
                );}
              })
            : "Wait"}
        </div>
      </div> */}
      <div>
       

        <div className="donationBox">
        <div className="donationBox_s">
        <div>
            <Link to="/">
              <ArrowBackIcon className="icon-xd" />
            </Link>
          </div>
            {data !== undefined
              ? data.map((e) => {
                  return (
                    <div className="donationBox_text">
            <img
              src="https://www.kindpng.com/picc/m/237-2379012_donate-icon-donate-icon-png-transparent-png.png"
            
              className="donationBox__picture"
            />
            <table >
            <td>
    <tr><span><b>Name:</b></span>{e.donor.firstName}{e.id}</tr>
    <tr><span><b>Quantity:</b></span> {e.quantity}</tr>
    <tr><span><b>Location:</b></span> {e.donor.location}</tr>
  </td>

 
 
  <td><tr><span><b>Date: </b></span>{e.date} </tr>
    <tr>
      <div className ="div1"><span><b>description:</b></span>{e.description}
    </div>
   </tr><tr>Location in hhhhj</tr>
  </td>
 
 
</table>
<div>
<button className="Img-correct"  onClick={()=>{updateCharity(e)}}>
                <img src="https://www.svgrepo.com/show/52154/check.svg"  />
             </button>
                  </div>
      {/* {state.isLoggedIn && state.UserType === "User" && (
                        <button
                          type="button"
                          className="btn-b"
                          onClick={() => {
                            navigate(`/Department/${e.id}`);
                          }}
                        >
                          Donate
                          <span className="fas fa-chevron-right"></span>
                        </button>
                      )}
                      {state.isLoggedIn && state.UserType === "Charity" && (
                        <button
                          type="button"
                          className="btn-b"
                          onClick={() => {
                            navigate(`/Departments/${e.id}`);
                          }}
                        >
                          Show
                          <span className="fas fa-chevron-right"></span>
                        </button>
                      )} */}
  
                    </div>
                  );
                })
              : "Wait"}
          </div>
        </div>  
      </div>

   

    </>
  );
}

export default ShowDonations;
