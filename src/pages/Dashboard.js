import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import styles from "../css/Dashboard.module.css";
import kinder from "../video/kinder.mp4";
import rasm1 from "../img/ftr-logo.png";
import rasm2 from "../img/heart-btn.png";
import icon1 from "../img/icon1.png";
import icon2 from "../img/icon2.png";
import icon3 from "../img/icon3.png";
import icon4 from "../img/icon4.png";
import icon5 from "../img/icon5.png";
import icon6 from "../img/icon6.png";
import rasm3 from "../img/1.jpg";
import border from "../img/border.png";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  FaHome,
  FaPhoneAlt,
  FaInstagram,
  FaTelegramPlane,
} from "react-icons/fa";
import rasm5 from "../img/logo-dark.png";
import { BsFillTriangleFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import rasm4 from "../img/3s-Photo-3.jpg";
import rasm7 from "../img/engagement.jpg";
import rasm6 from "../img/love.jpg";
import PacmanLoader from "react-spinners/PacmanLoader";
import Footer from "./Footer";
import Navbar from "./Navbar";
import Dashboardnews from "./Dashboardnews";
import Dashboardtadbir from "./Dashboardtadbir";

export default class Dashboard extends Component {
  state = {
    loader: true,
  };
  componentDidMount() {
    setInterval(() => {
      this.setState({
        loader: false,
      });
    }, 2000);
  }

  render() {
    return (
      <div>
        {this.state.loader ? (
          <div className={styles.loader}>
            <PacmanLoader
              size={20}
              color={"#FF8080"}
              loading={this.state.loader}
            />
          </div>
        ) : (
          <div>
            <div className={styles.header}>
              <Navbar />
              <video autoPlay="autoplay" loop="loop" muted>
                <source src={kinder} type="video/mp4" />
              </video>
              <div className={styles.btnHeader}>
                <img src={rasm2} />
                <button>Hoziroq qo'ng'iroq qiling!</button>
              </div>
            </div>
            <div className={styles.second}>
              <Container fluid>
                <Row>
                  <Col
                    lg={2}
                    md={4}
                    sm={4}
                    style={{
                      background: "rgb(247,107,106)",
                      background:
                        "linear-gradient(180deg, rgba(247,107,106,1) 0%, rgba(198,192,192,1) 100%)",
                    }}
                    className={styles.card1}
                  >
                    <img src={icon1} />
                    <p>
                      <Link style={{ color: "white" }} to="/yoga/uz">
                        Sport
                      </Link>
                    </p>
                  </Col>
                  <Col
                    lg={2}
                    md={4}
                    sm={4}
                    style={{ backgroundColor: "#F76B6A" }}
                    className={styles.card}
                  >
                    <img src={icon2} />
                    <p>
                      <Link style={{ color: "white" }} to="/musiqa/uz">
                        Musiqa
                      </Link>
                    </p>
                  </Col>
                  <Col
                    lg={2}
                    md={4}
                    sm={4}
                    style={{
                      background: "rgb(247,107,106)",
                      background:
                        "linear-gradient(180deg, rgba(247,107,106,1) 0%, rgba(198,192,192,1) 100%)",
                    }}
                    className={styles.card1}
                  >
                    <img src={icon3} />
                    <p>
                      <Link style={{ color: "white" }} to="/garden/uz">
                        Bog'
                      </Link>
                    </p>
                  </Col>
                  <Col
                    lg={2}
                    md={4}
                    sm={4}
                    style={{ backgroundColor: "#F76B6A" }}
                    className={styles.card}
                  >
                    <img src={icon4} />
                    <p>
                      <Link style={{ color: "white" }} to="/steam/uz">
                        Steam
                      </Link>
                    </p>
                  </Col>
                  <Col
                    lg={2}
                    md={4}
                    sm={4}
                    style={{
                      background: "rgb(247,107,106)",
                      background:
                        "linear-gradient(180deg, rgba(247,107,106,1) 0%, rgba(198,192,192,1) 100%)",
                    }}
                    className={styles.card1}
                  >
                    <img src={icon5} />
                    <p>
                      <Link style={{ color: "white" }} to="/cooking/uz">
                        Shirinlik
                      </Link>
                    </p>
                  </Col>
                  <Col
                    lg={2}
                    md={4}
                    sm={4}
                    style={{ backgroundColor: "#F76B6A" }}
                    className={styles.card}
                  >
                    <img src={icon6} />
                    <p>
                      <Link style={{ color: "white" }} to="/pedagogy/uz">
                        Pedagogika
                      </Link>
                    </p>
                  </Col>
                  <Col lg={12} className={styles.tourCard}>
                    <button>Turni rejalashtirish</button>
                  </Col>
                  <Col
                    lg={12}
                    style={{
                      border: "1px solid rgba(0,0,0,0.1)",
                      width: "95%",
                      marginLeft: "2.5%",
                      marginBottom: "50px",
                    }}
                  >
                    <Row>
                      <Col lg={7} style={{ padding: "0" }}>
                        <img src={rasm6} style={{ width: "100%" }} />
                      </Col>
                      <Col lg={5} className={styles.heading}>
                        <h1>Mehribon va tarbiyalovchi muhit</h1>
                        <p>
                          Flamingo orolidagi ta'lim o'qituvchilar, ota-onalar va
                          o'quvchilar mehribon va mehribon, ilmiy jihatdan boy
                          muhitda hamkorlik qiladigan go'zal raqsga o'xshaydi.
                          Har bir talabaning o'ziga xos kuchli, zaif tomonlari
                          va sovg'alari bizni katta va kichik yangi marralarni
                          birgalikda nishonlash paytida qabul qilinadi va
                          qo'llab-quvvatlanadi.
                        </p>
                        <span>
                          <Link to="/loving/uz">Batafsil</Link>
                        </span>
                        <img src={border} />
                      </Col>
                    </Row>
                  </Col>
                  <Col
                    lg={12}
                    style={{
                      border: "1px solid rgba(0,0,0,0.1)",
                      width: "95%",
                      marginLeft: "2.5%",
                      marginBottom: "50px",
                    }}
                  >
                    <Row>
                      <Col lg={5} className={styles.heading1}>
                        <h1>Ajoyib / qiziquvchanlik</h1>
                        <p>
                          Young children are born with an innate curiosity of
                          the world around them. Flamingo nurtures this natural
                          wonder and joy for learning. Our learning activities
                          integrate wonder and curiosity on a daily basis.
                          Searching for worms and building a house for a beetle
                          are monumental moments in a child’s day! We nurture
                          young perspectives to embrace and support inquiry and
                          discovery.
                        </p>
                        <span>
                          <Link to="/wonder/uz">Batafsil</Link>
                        </span>
                        <img src={border} className={styles.img1} />
                      </Col>

                      <Col lg={7} style={{ padding: "0" }}>
                        <img src={rasm3} style={{ width: "100%" }} />
                      </Col>
                    </Row>
                  </Col>
                  <Col
                    lg={12}
                    style={{
                      border: "1px solid rgba(0,0,0,0.1)",
                      width: "95%",
                      marginLeft: "2.5%",
                      marginBottom: "50px",
                    }}
                  >
                    <Dashboardnews />
                    <Row>
                      <Col lg={7} style={{ padding: "0" }}>
                        <img src={rasm4} style={{ width: "100%" }} />
                      </Col>
                      <Col lg={5} className={styles.heading}>
                        <h1>G'ayrat. Nishon. Etakchilik</h1>
                        <p>
                          Flamingo orolida o'rganish hech qachon qiyin ish emas.
                          O'rganish quvonchli, ijodiy, egiluvchan va hattoki
                          noyob bolalar qiziqishlari atrofida moslashtirilgan.
                          Bundan ham muhimi, "Flamingo" da ta'lim mazmunli va
                          farzandingizning kelajagi uchun juda foydali. Bu
                          eshiklarni, imkoniyatlarni ochadi va bolangizni ta'lim
                          safariga olib boradi. "Daryolarda siz tegizadigan suv
                          o'tganlarning oxirgi va kelayotganlarning
                          birinchisidir; hozirgi zamon bilan ham." Leonardo da
                          Vinchi
                        </p>
                        <span>
                          <Link to="/leadership/uz">Batafsil</Link>
                        </span>
                        <img src={border} />
                      </Col>
                    </Row>
                  </Col>
                  <Col
                    lg={12}
                    style={{
                      border: "1px solid rgba(0,0,0,0.1)",
                      width: "95%",
                      marginLeft: "2.5%",
                      marginBottom: "50px",
                    }}
                  >
                    {" "}
                    <Dashboardtadbir />
                    <Row>
                      <Col lg={5} className={styles.heading1}>
                        <h1>
                          Bizning dunyomizni bir vaqtning o'zida bitta bolani
                          o'zgartirish
                        </h1>
                        <p>
                          Flamingo oroli toza sevgi va imondan yaratilgan.
                          Maktabimizning markazida ijtimoiy va emotsional
                          salomatlik bola poydevori va kelajagi uchun ajralmas
                          tarkibiy qism ekanligini tushunishdir. Flamingo
                          talabalari altruistik xususiyatlarni rivojlantiradilar
                          va ularga o'z jamoalari va dunyo etakchilari bo'lish
                          uchun vositalar berishadi. "Agar biz o'zimizni
                          o'zgartira olsak, dunyodagi tendentsiyalar ham
                          o'zgargan bo'lar edi. Inson o'z tabiatini
                          o'zgartirishi bilan, dunyoning unga bo'lgan munosabati
                          ham o'zgaradi." Gandi
                        </p>
                        <span>
                          <Link to="/changing/uz">Batafsil</Link>
                        </span>
                        <img src={border} className={styles.img1} />
                      </Col>
                      <Col lg={7} style={{ padding: "0" }}>
                        <img src={rasm7} style={{ width: "100%" }} />
                      </Col>
                    </Row>
                  </Col>
                </Row>
              </Container>
            </div>
            <Footer />
          </div>
        )}
      </div>
    );
  }
}
