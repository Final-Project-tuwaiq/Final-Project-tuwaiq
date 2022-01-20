import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";

import CallIcon from "@material-ui/icons/Call";

import DoneIcon from "@material-ui/icons/Done";

import { Button } from "@material-ui/core";

import "./DonationsAccepted.css";
import NavbarA from "../Navbar/NavbarA";

function DonationsAccepted() {
  const [data, setData] = useState();
  const [donorId, setDonorId] = useState();

  const state = useSelector((state) => {
    return {
      currentUser: state.usersReducer.currentUser,
      token: state.usersReducer.token,
    };
  });

  const config = {
    headers: { Authorization: `Bearer ${state.token}` },
  };

  console.log(config);

  useEffect(() => {
    updateState();
  }, []);

  const updateState = () => {
    axios
      .get(
        `http://localhost:8081/users/getRoleId/${state.currentUser.id}/charity`
      )

      .then((res) => {
        console.log(res.data);

        setDonorId(res.data);

        {
          axios
            .get(`http://localhost:8081/charities/${res.data}/donations`)
            .then((res1) => {
              console.log(res1.data);
              setData(res1.data);
            })
            .catch((err) => {
              console.log(err);
            });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const Contacted = (e) => {
    const Donation_id = e.id;
    axios
      .put(`http://localhost:8081/donations/${Donation_id}`, {
        state: "Contacted",
      })
      .then((res) => {
        console.log(res.data.state);
        updateState();
      });
  };
  const Done = (e) => {
    const Donation_id = e.id;
    axios
      .put(`http://localhost:8081/donations/${Donation_id}`, {
        state: "Donation received",
      })
      .then((res) => {
        console.log(res.data.state);
        updateState();
      });
  };

  console.log("hi" + donorId);

  // const [cls, setCls] = useState("green");

  return (
    <>
      <NavbarA />
      <>
        {" "}
        <div className="container-2">
          <ul className="responsive-table">
            <li className="table-header">
              <div className="col col-1"> Donor</div>
              <div className="col col-2">Location</div>
              <div className="col col-3"> Contact Number</div>
              <div className="col col-4">Donation type</div>
              <div className="col col-5">Status</div>
            </li>
            {data !== undefined
              ? data.map((e) => {
                  return (
                    <>
                      <li className="table-row">
                        <div className="col col-1" data-label="Job Id">
                          {e.donor.firstName}
                        </div>
                        <div className="col col-2" data-label="Customer Name">
                          {e.donor.location}
                        </div>
                        <div className="col col-3" data-label="Amount">
                          {e.donor.phoneNumber}{" "}
                          <CallIcon
                            className="icon-m"
                            onClick={() => {
                              Contacted(e);
                            }}
                          />
                          {/* <style>{`
        .red {Color: gray}
        .green {Color: green}
      `}</style>
      <CallIcon
      
        onClick={() => setCls((cls) => (cls === "red" ? "green" : "red"))}
      />  */}
                        </div>
                        <div className="col col-4" data-label="Payment Status">
                          {e.department.name}
                        </div>
                        <div className="col col-5" data-label="Payment Status">
                          {e.state} <br></br>
                          <Button
                            variant="contained"
                            onClick={() => {
                              Done(e);
                            }}
                          >
                            Done <DoneIcon />
                          </Button>
                        </div>
                      </li>
                    </>
                  );
                })
              : "Wait"}
          </ul>
        </div>{" "}
      </>
    </>
  );
}

export default DonationsAccepted;
