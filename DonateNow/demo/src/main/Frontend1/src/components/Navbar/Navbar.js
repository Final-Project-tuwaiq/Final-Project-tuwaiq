import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { logout } from "../../reducers/Login/action";
import { useDispatch } from "react-redux";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import AccountBoxIcon from "@material-ui/icons/AccountBox";
import EditIcon from "@material-ui/icons/Edit";
import DescriptionIcon from "@material-ui/icons/Description";

import { useState } from "react";

import { useNavigate } from "react-router-dom";

import "./Navbar.css";

function Navbar() {
  const navigate = useNavigate();
  const [navbar, setNavbar] = useState(false);

  const dispatch = useDispatch();
  const state = useSelector((state) => {
    return {
      isLoggedIn: state.usersReducer.isLoggedIn,
      UserType: state.usersReducer.UserType,
    };
  });
  const changeBackground = () => {
    if (window.scrollY >= 400) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };
  window.addEventListener("scroll", changeBackground);
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <>
      <nav className={navbar ? "navbarr activee" : "navbarr"}>
        <div className="header-option"></div>
        <div
          className="nav-2"
          onClick={() => {
            navigate("/");
          }}
          style={{ cursor: "pointer" }}
        >
          <div className="logo" onClick={closeMobileMenu}>
            <b>
              {" "}
              WEL<span>F</span>ARE
            </b>
            <br></br>
            <div className="logo-d">
              <b>DONATE NOW</b>{" "}
            </div>
          </div>
        </div>
        {/* <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
          EPIC
        </Link> */}
        <div className="menu-icon" onClick={handleClick}>
          <i className={click ? "fas fa-times" : "fas fa-bars"} />
        </div>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item">
            <Link to="/" className="nav-links" onClick={closeMobileMenu}>
              <b> Donations</b>
            </Link>
          </li>
   
          <li className="nav-item">
            <Link to="/" className="nav-links" onClick={closeMobileMenu}>
              <b> About us</b>
            </Link>
          </li>

          <li className="nav-item">
            <Link to="/" className="nav-links" onClick={closeMobileMenu}>
              <b> Conuct us</b>
            </Link>
          </li>
          <div className="space"></div>

          <li className="nav-item">
            {state.isLoggedIn && state.UserType ==="donor"&&(
                  <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                    <div class="dropdown">
                      <button className="dropbtn">
                        <AccountCircleIcon className="icon-drop" />{" "}
                        <ArrowDropDownIcon className="icon-drop" />
                      </button>
                      <div class="dropdown-content">
                        <Link to="/DonorProfile" className="nav-links">
                          <AccountBoxIcon className="icon-logout" />
                          My Profile
                        </Link>
                        <Link to="/editprofile" className="nav-links">
                          <EditIcon className="icon-logout" />
                          Edit Profile
                        </Link>
                        <Link to="/yourdonotion" className="nav-links">
                          <DescriptionIcon className="icon-logout" />
                          Your Donations
                        </Link>
                        <Link
                          to="/"
                          className="nav-links"
                          onClick={() => {
                            const action = logout();
                            dispatch(action);
                          }}
                        >
                          <ExitToAppIcon className="icon-logout" />
                          Logout
                        </Link>
                      </div>
                    </div>
                  </Link>
                )}{" "}
            {state.isLoggedIn && state.UserType === "charity" && (
              <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                <div class="dropdown">
                  <button className="dropbtn"> 
                    <AccountCircleIcon className="icon-drop" />{" "}
                    <ArrowDropDownIcon className="icon-drop" />
                  </button>
                  <div class="dropdown-content">
                    <Link to="/CharityProfile" className="nav-links">
                      <AccountBoxIcon className="icon-logout" />
                      Profile
                    </Link>

                    <Link to="/donationsaccepted" className="nav-links">
                      <DescriptionIcon className="icon-logout" />
                      Donations
                    </Link>
                    <Link
                      to="/"
                      className="nav-links"
                      onClick={() => {
                        const action = logout();
                        dispatch(action);
                      }}
                    >
                      <ExitToAppIcon className="icon-logout" />
                      Logout
                    </Link>
                  </div>
                </div>
              </Link>
            )}
             {state.isLoggedIn && state.UserType === "admin" && (
              <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                <div class="dropdown">
                  <button className="dropbtn"> 
                    <AccountCircleIcon className="icon-drop" />{" "}
                    <ArrowDropDownIcon className="icon-drop" />
                  </button>
                  <div class="dropdown-content">
                    <Link to="/admin" className="nav-links">
                      <AccountBoxIcon className="icon-logout" />
                      Admin
                    </Link>

              
                    <Link
                      to="/"
                      className="nav-links"
                      onClick={() => {
                        const action = logout();
                        dispatch(action);
                      }}
                    >
                      <ExitToAppIcon className="icon-logout" />
                      Logout
                    </Link>
                  </div>
                </div>
              </Link>
            )}
          </li>
        </ul>
        {/* <Button /> */}
      </nav>
    </>
  );
}

export default Navbar;
