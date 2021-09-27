import React, { Component } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import styles from "../css/news.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import PacmanLoader from "react-spinners/PacmanLoader";
import news1 from "../img/kinder6.png";
import Navbar from "./Navbar";
import Footer from "./Footer";
import {
  MDBCard,
  MDBCardTitle,
  MDBCardText,
  MDBCardBody,
  MDBCardImage,
  MDBRow,
  MDBCol,
  MDBCardFooter,
} from "mdb-react-ui-kit";
import { Link } from "react-router-dom";
import { BsGeoAlt } from "react-icons/bs";
import "react-multi-carousel/lib/styles.css";
import { FaCalendarAlt } from "react-icons/fa";
export default class Dashboardtadbir extends Component {
  render() {
    const responsive = {
      desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3,
        slidesToSlide: 3, // optional, default to 1.
      },
      tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2,
        slidesToSlide: 2, // optional, default to 1.
      },
      mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
        slidesToSlide: 1, // optional, default to 1.
      },
    };
    return (
      <div>
        <Container>
          <body>
            <div className={styles.body}>
              <div data-aos="fade-up" className={styles.title}>
                <h1>Tadbirlar</h1>
              </div>
              <Carousel
                swipeable={false}
                draggable={false}
                showDots={true}
                slidesToSlide={1}
                responsive={responsive}
                ssr={true} // means to render carousel on server-side.
                infinite={true}
                autoPlay={this.props.deviceType !== "mobile" ? true : false}
                autoPlaySpeed={5000}
                keyBoardControl={true}
                customTransition="all .5"
                transitionDuration={500}
                containerClass="carousel-container"
                removeArrowOnDeviceType={["tablet", "mobile"]}
                deviceType={this.props.deviceType}
                dotListClass="custom-dot-list-style"
                itemClass="carousel-item-padding-40-px"
              >
                <div>
                  <MDBCol style={{ margin: "10px" }}>
                    <MDBCard className="h-100" className={styles.card}>
                      <MDBCardImage
                        src={news1}
                        className={styles.img}
                        alt="..."
                        position="top"
                      />
                      <MDBCardBody>
                        <MDBCardTitle>
                          Bog'chamizga Prezident tashrif buyirdi
                        </MDBCardTitle>
                        <MDBCardText>
                          <p>
                            <FaCalendarAlt
                              style={{ fontSize: "17px", color: "#FF8080" }}
                            />{" "}
                            <span>14/08/2020</span>
                          </p>
                          <p>
                            <BsGeoAlt
                              style={{ fontSize: "17px", color: "#FF8080" }}
                            />{" "}
                            <span>133-bog'cha</span>
                          </p>
                          <Link to="/tadbir/uz">
                            <p style={{ color: "rgba(0,0,0,0.6)" }}>Batafsil</p>
                          </Link>
                        </MDBCardText>
                      </MDBCardBody>
                    </MDBCard>
                  </MDBCol>
                </div>
                <div>
                  <MDBCol style={{ margin: "10px" }}>
                    <MDBCard className="h-100" className={styles.card}>
                      <MDBCardImage
                        src={news1}
                        className={styles.img}
                        alt="..."
                        position="top"
                      />
                      <MDBCardBody>
                        <MDBCardTitle>
                          Bog'chamizga Prezident tashrif buyirdi
                        </MDBCardTitle>
                        <MDBCardText>
                          <p>
                            <FaCalendarAlt
                              style={{ fontSize: "17px", color: "#FF8080" }}
                            />{" "}
                            <span>14/08/2020</span>
                          </p>
                          <p>
                            <BsGeoAlt
                              style={{ fontSize: "17px", color: "#FF8080" }}
                            />{" "}
                            <span>133-bog'cha</span>
                          </p>
                          <Link to="/tadbir/uz">
                            <p style={{ color: "rgba(0,0,0,0.6)" }}>Batafsil</p>
                          </Link>
                        </MDBCardText>
                      </MDBCardBody>
                    </MDBCard>
                  </MDBCol>
                </div>
                <div>
                  <MDBCol style={{ margin: "10px" }}>
                    <MDBCard className="h-100" className={styles.card}>
                      <MDBCardImage
                        src={news1}
                        className={styles.img}
                        alt="..."
                        position="top"
                      />
                      <MDBCardBody>
                        <MDBCardTitle>
                          Bog'chamizga Prezident tashrif buyirdi
                        </MDBCardTitle>
                        <MDBCardText>
                          <p>
                            <FaCalendarAlt
                              style={{ fontSize: "17px", color: "#FF8080" }}
                            />{" "}
                            <span>14/08/2020</span>
                          </p>
                          <p>
                            <BsGeoAlt
                              style={{ fontSize: "17px", color: "#FF8080" }}
                            />{" "}
                            <span>133-bog'cha</span>
                          </p>
                          <Link to="/tadbir/uz">
                            <p style={{ color: "rgba(0,0,0,0.6)" }}>Batafsil</p>
                          </Link>
                        </MDBCardText>
                      </MDBCardBody>
                    </MDBCard>
                  </MDBCol>
                </div>
                <div>
                  <MDBCol style={{ margin: "10px" }}>
                    <MDBCard className="h-100" className={styles.card}>
                      <MDBCardImage
                        src={news1}
                        className={styles.img}
                        alt="..."
                        position="top"
                      />
                      <MDBCardBody>
                        <MDBCardTitle>
                          Bog'chamizga Prezident tashrif buyirdi
                        </MDBCardTitle>
                        <MDBCardText>
                          <p>
                            <FaCalendarAlt
                              style={{ fontSize: "17px", color: "#FF8080" }}
                            />{" "}
                            <span>14/08/2020</span>
                          </p>
                          <p>
                            <BsGeoAlt
                              style={{ fontSize: "17px", color: "#FF8080" }}
                            />{" "}
                            <span>133-bog'cha</span>
                          </p>
                          <Link to="/tadbir/uz">
                            <p style={{ color: "rgba(0,0,0,0.6)" }}>Batafsil</p>
                          </Link>
                        </MDBCardText>
                      </MDBCardBody>
                    </MDBCard>
                  </MDBCol>
                </div>
              </Carousel>
            </div>
          </body>
        </Container>
      </div>
    );
  }
}
