import Navbar from "../Navbar/Navbar";

import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import axios from "axios";

function CharityProfile() {
  const [data, setData] = useState();

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
        `http://localhost:8081/charities/byUser/${state.currentUser.id}`,
        config
      )
      .then((res) => {
        console.log(res.data);
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <Navbar />
      {data !== undefined ? (
        <>
          <div className="container emp-profile">
            <div className="row">
              <div className="col-md-4">
                <div className="profile-img">
                  <img
                    src="https://i.pinimg.com/564x/2e/60/80/2e60808c2b288e393128ebed7ee988b6.jpg"
                    alt
                  />
                  <div className="file btn btn-lg btn-primary">
                    Change Photo
                    <input type="file" name="file" />
                  </div>
                </div>
              </div>

              <div className="col-md-6">
                <div className="profile-head">
                  <ul className="nav nav-tabs" id="myTab" role="tablist">
                    <li>
                      <h5> {data.name} </h5>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-4">
                {/* <div className="profile-work">
            <p>WORK LINK</p>
            <a href>Website Link</a>
            <br />
            <a href>Bootsnipp Profile</a>
            <br />
            <a href>Bootply Profile</a>
            <p>SKILLS</p>
            <a href>Web Designer</a>
            <br />
            <a href>Web Developer</a>
            <br />
            <a href>WordPress</a>
            <br />
            <a href>WooCommerce</a>
            <br />
            <a href>PHP, .Net</a>
            <br />
          </div> */}
              </div>
              <div className="col-md-8">
                <div className="tab-content profile-tab" id="myTabContent">
                  <div className="tab-pane fade show active">
                    <div className="row">
                      <div className="col-md-6">
                        <label>User Name</label>
                      </div>
                      <div className="col-md-6">
                        <p>{state.currentUser.sub}</p>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6">
                        <label>Phone Number</label>
                      </div>
                      <div className="col-md-6">
                        <p>{data.phoneNumber}</p>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6">
                        <label>Location</label>
                      </div>
                      <div className="col-md-6">
                        <p>{data.location}</p>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6">
                        <label>Address</label>
                      </div>
                      <div className="col-md-6">
                        <p>{data.location}</p>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6">
                        <label>Types of donations<br></br>
                           you accept </label>
                      </div>
                      <div className="col-md-6">
                        {/* <p>{data.department[1]}</p> */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>{" "}
        </>
      ) : (
        ""
      )}
    </>
  );
}

export default CharityProfile;
