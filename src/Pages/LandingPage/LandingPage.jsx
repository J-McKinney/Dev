import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import NavBar from "../../Components/MyNavBar/MyNavBar";
import Footer from "../../Components/MyFooter/MyFooter";
import Style from "./LandingPage.module.css";

function LandingPage(props) {
  return (
    <>
      <div className={Style.landingWrapper}>
        <NavBar />
        <Container fluid className={Style.container}>
          <Row className={Style.introRow}>
            <div className="col-md-6"></div>
          </Row>
        </Container>
      </div>
      <Footer />
    </>
  );
}

export default LandingPage;
