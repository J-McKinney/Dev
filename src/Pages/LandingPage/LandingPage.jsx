import React from "react";
import NavBar from "../../Components/MyNavBar/MyNavBar";
import Style from "./LandingPage.module.css";

function LandingPage(props) {
  return (
    <>
      <div className={Style.landingWrapper}>
        <NavBar />
      </div>
    </>
  );
}

export default LandingPage;
