import Home from "./components/Home/Home";
import Login from "./components/LogInSignUP/LogIn";
import SignUp from "./components/LogInSignUP/SignUp";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import CharityProfile from "./components/Charity/CharityProfile";
import DonorProfile from "./components/Donor/DonorProfile";
import ShowDonation from "./components/Charity/ShowDonations";
import ScrollToTop from "./components/ScrollToTop";
import Donation from "./components/Donor/Donation";
import DonationDonor from "./components/Donor/DonationDonor";
import DonationsAccepted from "./components/Charity/DonationsAccepted";
import Admin from "./components/Admin/Admin";
import AddCharity from "./components/Admin/AddCharity";
import EditCharity from "./components/Admin/EditCharity";



function App() {
  return (
    <BrowserRouter>
      <ScrollToTop>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/admin/add" element={<AddCharity/>} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/edit/:id" element={<EditCharity />} />
          <Route path="/donationsaccepted" element={<DonationsAccepted />} />
          <Route path="/Department/:id" element={<Donation />} />
          <Route path="/Departmentt/:id" element={<ShowDonation/>} />
          <Route path="/yourdonotion" element={<DonationDonor/>} />
          <Route path="/login" element={<Login />} />
          <Route path="/signUp" element={<SignUp />} />
          <Route path="/CharityProfile" element={<CharityProfile />} />
          <Route path="/donorProfile" element={<DonorProfile />} />
        </Routes>
      </ScrollToTop>
    </BrowserRouter>
  );
}

export default App;
