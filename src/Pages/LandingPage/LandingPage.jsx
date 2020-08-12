import React from "react";
import NavBar from "../../Components/MyNavBar/MyNavBar";
import Footer from "../../Components/MyFooter/MyFooter";
import Style from "./LandingPage.module.css";

function LandingPage(props) {
  return (
    <>
      <div className={Style.landingWrapper}>
        <NavBar />
        <Footer />
      </div>
    </>
  );
}

export default LandingPage;
