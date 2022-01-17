import Navbar from "../Navbar/Navbar";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import DescriptionIcon from "@material-ui/icons/Description";
import EventNoteIcon from "@material-ui/icons/EventNote";

import usersReducer from "../../reducers/Login/reducer";
// import "./DonationDonor.css";

function DonationDonor() {
  const [data, setData] = useState();
  const [don, setDon] = useState();
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
    axios
      .get(
        `http://localhost:8081/users/getRoleId/${state.currentUser.id}/donor`,
        config
      )

      .then((res) => {
        console.log(res.data);
        setDonorId(res.data);

        {
          axios
            .get(`http://localhost:8081/donations/donor/${res.data}`, config)
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
  }, []);

  return (
    <>
      <Navbar />
      <>
        {" "}
        <div className="box-container">
          {data !== undefined
            ? data.map((e) => {
                return (
                  <>
                    {/* <h1></h1>
                  <h1> {e.description}</h1> */}

                    <div className="card mt-5 border-5 pt-9 active pb-0 px-10">
                      <div className="card-body ">
                        <div className="row">
                          <div className="col-12 ">
                            <h4 className="card-title ">
                              <b>
                                Donate in the {e.department.name} department
                              </b>
                            </h4>
                          </div>
                          <div className="col">
                            <h6 className="card-subtitle mb-2 text-muted">
                              <p className="card-text text-muted small ">
                                {" "}
                                {e.description}
                              </p>
                            </h6>
                          </div>
                        </div>
                      </div>
                      <div className="card-footer bg-white px-0 ">
                        <div className="row">
                          <div className=" col-md-auto ">
                            <DescriptionIcon className="icon-logoutt" />
                            <b>{e.state}</b>{" "}
                            <EventNoteIcon className="icon-logoutt" />
                            <b>{e.date}</b>
                          </div>
                        </div>
                      </div>
                    </div>
                  </>
                );
              })
            : "Wait"}
        </div>{" "}
      </>
    </>
  );
}

export default DonationDonor;
