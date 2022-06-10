import "./ShowDonations.css";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import axios from "axios";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import swal from 'sweetalert';
import NavbarA from "../Navbar/NavbarA";




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
      state:"Acceptance"
  })
    .then((res) => {
      console.log(res.data);
      swal({
        title: "Donation accepted ",
        text: ``,
        icon: "success",
        button: "ok"
       
      })
      .then(() => {
        swal(navigate("/"));
      });
    })
    .catch((err) => {
      console.log(err);
    });

   

  }



  return (
    <>
      <NavbarA />
     
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
                if(e.state === "Pending"){
                  return (
                    <div className="donationBox_text">
            <img
              src="https://www.kindpng.com/picc/m/237-2379012_donate-icon-donate-icon-png-transparent-png.png"
            
              className="donationBox__picture"
            />
            <table >
            <td>
    <tr><span><b>Name:</b></span>{e.donor.firstName}</tr>
    <tr><span><b>Quantity:</b></span> {e.quantity}</tr>
    <tr><span><b>Location:</b></span> {e.donor.location}</tr>
  </td>

 
 
  <td><tr><span><b>Date: </b></span>{e.date} </tr>
    <tr>
      <div className ="div1"><span><b>description:</b></span>{e.description}
    </div>
   </tr>
   {/* <tr>Location in hhhhj</tr> */}
  </td>
 
 
</table>
<div>
<button className="Img-correct"  onClick={()=>{updateCharity(e)}}>
                <img src="https://www.svgrepo.com/show/52154/check.svg"  />
             </button>
                  </div>
                    </div>
                  );}
                })
              : "Wait"}
          </div>
        </div>  
      </div>

   

    </>
  );
}

export default ShowDonations;
