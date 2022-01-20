import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { logout } from "../../reducers/Login/action";
import { useDispatch } from "react-redux";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import AccountBoxIcon from "@material-ui/icons/AccountBox";
import EditIcon from "@material-ui/icons/Edit";
import { Link } from "react-scroll";

import DescriptionIcon from "@material-ui/icons/Description";

import { useState } from "react";

import { useNavigate } from "react-router-dom";

import "./Navbar.css";

function NavbarA() {
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
      <nav className={navbar ? "navbarr activee" : "navbarrA"}>
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
            <NavLink to="#" className="nav-links" onClick={closeMobileMenu}>
              <b> Donations</b>
            </NavLink>
          </li>
   
          <li className="nav-item">
            <Link to="footer" className="nav-links" onClick={closeMobileMenu} spy={true} smooth={true} offset={50} duration={500}>
              <b> About us</b>
            </Link>
          </li>

          <li className="nav-item">
            <NavLink to="/cuntact" className="nav-links" onClick={closeMobileMenu}>
              <b> Conuct us</b>
            </NavLink>
          </li>
          <div className="space"></div>

          <li className="nav-item">
            {state.isLoggedIn && state.UserType ==="donor"&&(
                  <NavLink  to="/" className="nav-links" onClick={closeMobileMenu}>
                    <div class="dropdown">
                      <button className="dropbtn">
                        <AccountCircleIcon className="icon-drop" />{" "}
                        <ArrowDropDownIcon className="icon-drop" />
                      </button>
                      <div class="dropdown-content">
                        <NavLink  to="/DonorProfile" className="nav-links">
                          <AccountBoxIcon className="icon-logout" />
                          My Profile
                        </NavLink >
                   
                        <NavLink  to="/yourdonotion" className="nav-links">
                          <DescriptionIcon className="icon-logout" />
                          Your Donations
                        </NavLink >
                        <NavLink 
                          to="/"
                          className="nav-links"
                          onClick={() => {
                            const action = logout();
                            dispatch(action);
                          }}
                        >
                          <ExitToAppIcon className="icon-logout" />
                          Logout
                        </NavLink >
                      </div>
                    </div>
                  </NavLink >
                )}{" "}
            {state.isLoggedIn && state.UserType === "charity" && (
              <NavLink  to="/" className="nav-links" onClick={closeMobileMenu}>
                <div class="dropdown">
                  <button className="dropbtn"> 
                    <AccountCircleIcon className="icon-drop" />{" "}
                    <ArrowDropDownIcon className="icon-drop" />
                  </button>
                  <div class="dropdown-content">
                    <NavLink  to="/CharityProfile" className="nav-links">
                      <AccountBoxIcon className="icon-logout" />
                      Profile
                    </NavLink >

                    <NavLink to="/donationsaccepted" className="nav-links">
                      <DescriptionIcon className="icon-logout" />
                      Donations
                    </NavLink >
                    <NavLink 
                      to="/"
                      className="nav-links"
                      onClick={() => {
                        const action = logout();
                        dispatch(action);
                      }}
                    >
                      <ExitToAppIcon className="icon-logout" />
                      Logout
                    </NavLink >
                  </div>
                </div>
              </NavLink >
            )}
            
          </li>
        </ul>
        {/* <Button /> */}
      </nav>
    </>
  );
}

export default NavbarA;
