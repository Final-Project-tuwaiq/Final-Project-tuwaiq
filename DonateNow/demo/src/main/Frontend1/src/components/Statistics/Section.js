import "./Section.css";
import PeopleIcon from "@material-ui/icons/People";
import AirlineSeatIndividualSuiteIcon from "@material-ui/icons/AirlineSeatIndividualSuite";
import ThumbUpIcon from "@material-ui/icons/ThumbUp";
import ApartmentIcon from "@material-ui/icons/Apartment";
import { useEffect, useState } from "react";
import axios from "axios";
import EventNoteIcon from "@material-ui/icons/EventNote";


function Section() {
  const [totalDonations, setTotalDonations] = useState(0);
  const [totalDonors, setTotalDonors] = useState(0);
  const [totalCharities, setTotalCharities] = useState(0);

  useEffect(() => {
    axios
      .get("http://localhost:8081/donations/totalDonations")
      .then((res) => {
        console.log(res.data);
        setTotalDonations(res.data);
      })

      .catch((err) => {
        console.log(err);
      });

    axios
      .get("http://localhost:8081/donors/totalDonors")
      .then((res) => {
        console.log(res.data);
        setTotalDonors(res.data);
      })

      .catch((err) => {
        console.log(err);
      });
    axios
      .get("http://localhost:8081/charities/totalCharities")
      .then((res) => {
        console.log(res.data);
        setTotalCharities(res.data);
      })

      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="di">
      <section className="icons-container">
        <div className="icons">
        {/* <ApartmentIcon className="Icon-S" /> */}
        {/* https://www.svgrepo.com/show/72289/donation.svg */}
        <img src="https://www.svgrepo.com/show/97364/charity.svg
"className="Icon-S"/>

          <h3>{totalCharities}</h3>
          <p>Charities</p>
        </div>
        <div className="icons">
        <img src="https://www.svgrepo.com/show/80768/charity.svg"className="Icon-S"/>
          {/* <ThumbUpIcon className="Icon-S" /> */}
          <h3>{totalDonors}+</h3>
          <p>Donors</p>
        </div>
        <div className="icons">
        <img src="https://www.svgrepo.com/show/372448/form.svg"className="Icon-S"/>

          {/* <EventNoteIcon className="Icon-S" /> */}
          <h3>{totalDonations}+</h3>
          <p>Donations</p>
        </div>
        <div className="icons">
        {/* <PeopleIcon className="Icon-S" /> */}
        <img src="https://www.svgrepo.com/show/348225/people.svg"className="Icon-S"/>

          <h3>58+</h3>
          <p>Visitors </p>
        </div>
      </section>
    </div>
  );
}

export default Section;
