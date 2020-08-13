import React from "react";
import Container from "react-bootstrap/Container";
// import Row from "react-bootstrap/Row";
import NavBar from "../../Components/MyNavBar/MyNavBar";
import MyCarousel from "../../Components/MyCarousel/MyCarousel";
import Footer from "../../Components/MyFooter/MyFooter";
import Style from "./LandingPage.module.css";

function LandingPage(props) {
  return (
    <>
      <div className={Style.landingWrapper}>
        <NavBar />
        <Container fluid className={Style.container}></Container>
      </div>
      <MyCarousel />
      <Footer />
    </>
  );
}

export default LandingPage;
