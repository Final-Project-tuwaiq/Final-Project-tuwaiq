import "./Departments.css";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";

function Departments() {
  const navigate = useNavigate();
  const [data, setData] = useState();
  const [id, setId] = useState();

  useEffect(() => {
    axios
      .get("http://localhost:8081/departments")
      .then((res) => {
        console.log(res.data[0].id);
        setData(res.data);
      })

      .catch((err) => {
        console.log(err);
      });
  }, []);

  const state = useSelector((state) => {
    return {
      isLoggedIn: state.usersReducer.isLoggedIn,
      UserType: state.usersReducer.UserType,
    };
  });

  let myInlineStyle = {
    paddingLeft: "7%",
    width: "145px",
    height: "30px",
  };

  return (
    <div>
      <div className="Title">
        DONATIONS{" "}
        <span>
          <b>DEPARTMENTS</b>
        </span>
      </div>
      <div className="box-container">
        {data !== undefined
          ? data.map((e) => {
              return (
                <div id="container">
                  <div className="product-details">
                    <h1>{e.name}</h1>
                    <p>____________</p>
                    <p className="information">{e.description}</p>
                    <div className="fixd-button">
                      {state.isLoggedIn && state.UserType === "donor" && (
                        <button
                          type="button"
                          className="button-t"
                          onClick={() => {
                            setId(e.id);
                          }}
                        >
                          Donate Now
                          {/* <span className="fas fa-chevron-right"></span> */}
                        </button>
                      )}
                    </div>
                    {state.isLoggedIn && state.UserType === "charity" && (
                      <button
                        type="button"
                        className="button-t"
                        style={myInlineStyle}
                        onClick={() => {
                          navigate(`/departmentt/${e.id}`);
                        }}
                      >
                        Show donations
                        {/* <span className="fas fa-chevron-right"></span> */}
                      </button>
                    )}
                  </div>
                  <div className="product-image">
                    <img src={e.img} />
                    <div className="info">
                      <h3>
                        <b>
                          {" "}
                          Every act of
                          <br></br>
                          kindness is charity
                        </b>
                      </h3>
                      <h3>
                        {" "}
                        <progress
                          id="progressBar"
                          max="100"
                          value={(e.amount / 100) * 100}
                        ></progress>
                      </h3>
                    </div>
                  </div>
                </div>
              );
            })
          : "Wait"}
      </div>
      {id ? navigate("/Department/" + id) : ""} <div className="div"></div>
    </div>
  );
}

export default Departments;
