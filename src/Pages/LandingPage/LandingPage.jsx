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
      <div id="top-of-page" className={Style.landingWrapper}>
        <NavBar />
        <Container fluid className={Style.container}>
          <Row className={Style.row}>
            <div id={Style.name} className="col-md-9">
              <h1 className={Style.h1Name}>Jesse McKinney</h1>
              <p className={Style.introP}>
                <bold className={Style.letter}>C</bold>urrently living in
                Marietta, Georgia. I'm a Bartender and Server working full-time
                for a local Golf and Country Club. Over the past 2 years, I
                discovered the world of coding/programming and my passion for a
                long time career has changed. I started learning the basics from
                free website tutorials and soon decided to go back to school for
                a more advanced approach on the subject. Before I knew it, I was
                creating full websites and programs. I'm now a full-time Full
                Stack Flex Web Developer working in Freelance, looking for a
                full-time job opportunity.
              </p>
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
