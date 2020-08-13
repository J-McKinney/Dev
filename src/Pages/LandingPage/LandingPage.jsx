import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import NavBar from "../../Components/MyNavBar/MyNavBar";
import MyCarousel from "../../Components/MyCarousel/MyCarousel";
import ATL from "../../images/atlanta.jpg";
import Footer from "../../Components/MyFooter/MyFooter";
import Style from "./LandingPage.module.css";

function LandingPage(props) {
  return (
    <>
      <div className={Style.landingWrapper}>
        <NavBar />
        <Container fluid className={Style.container}>
          <Row className={Style.row}>
            <div id={Style.name} className="col-md-9">
              <h2 className={Style.h2Name}>Jesse McKinney</h2>
            </div>
            <div id={Style.atl} className="col-md-3">
              <img className={Style.atlanta} src={ATL} alt="ATL City" />
            </div>
          </Row>
        </Container>
      </div>
      <MyCarousel />
      <Footer />
    </>
  );
}

export default LandingPage;
