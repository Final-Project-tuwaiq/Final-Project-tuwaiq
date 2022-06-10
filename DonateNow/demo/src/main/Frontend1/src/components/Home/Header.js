import "./Header.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import img from "../image/00.png";

function Header() {
  const state = useSelector((state) => {
    return {
      isLoggedIn: state.usersReducer.isLoggedIn,
      UserType: state.usersReducer.UserType,
      currentUser: state.usersReducer.currentUser,
    };
  });

   
 

  return (
    <div> 
      {console.log(state.UserType)}
      {console.log("cc: ",state.currentUser)}
      <img className="header-img"  src={img} />
      

        {/* <p className="p-header">you donate</p> */}
             
      <div className="button-btns">
        {!state.isLoggedIn && (
          <>
            <div className="button-login-signup">
              <Link to="/login">
                <button type="button" className="btn-trans">
                  LOG IN
                </button>
              </Link>
              <Link to="/SignUp">
                <button type="button" className="btn-white">
                  SIGIN UP
                </button>
              </Link>
            </div>{" "}
          </>
        )}
    
      </div>
    </div>
  );
}

export default Header;
