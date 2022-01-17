import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import Header from "./Header";
import Section from "../Statistics/Section";

import Departments from "../Departments/Departments";

import { useSelector } from "react-redux";
import Modal from "../Modal";

function Home() {
  const state = useSelector((state) => {
    return {
      currentUser: state.usersReducer.currentUser,
      UserType: state.usersReducer.UserType,
    };
  });

 

  return (
    <div>
      {console.log(state.currentUser)}
      {console.log("State: ")}
      {console.log("id:"+state.currentUser.sub)}
      {console.log(state.UserType)}
      <Navbar />

      <Header />
      <Section />
       <Modal/>
      <Departments />
      <Footer />

      {/* {state.isLoggedIn && state.UserType === "donor" && <Footer />} */}
    </div>
  );
}

export default Home;
