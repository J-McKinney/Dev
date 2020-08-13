import React from "react";
import Container from "react-bootstrap/Container";
import NavBar from "../../Components/MyNavBar/MyNavBar";
import Footer from "../../Components/MyFooter/MyFooter";
import Style from "./LandingPage.module.css";

function LandingPage(props) {
  return (
    <>
      <div className={Style.landingWrapper}>
        <NavBar />
        <Container className={Style.container}></Container>
        <Footer />
      </div>
    </>
  );
}

export default LandingPage;
