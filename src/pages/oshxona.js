import React, { Component } from "react";
import Navbar from "./Navbar";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import styles from "../css/mini.module.css";
import kinder1 from "../img/meal1.jpg";
import kinder2 from "../img/meal2.jpg";
import kinder3 from "../img/meal3.jpg";
import { Container, Row, Col } from "react-bootstrap";
import Footer from "./Footer";
import PacmanLoader from "react-spinners/PacmanLoader";
import { getKg } from "../host/Config";
import Global from "../host/Global";

export default class Oshxona extends Component {
  state = {
    loader: true,
  };

  componentDidMount() {
    if (Global.kg === null) {
      getKg()
        .then((res) => {
          Global.kg = res.data;
        })
        .catch((err) => console.log(err));
    }
    setInterval(() => {
      this.setState({
        loader: false,
      });
    }, 2000);
  }
  render() {
    const responsive = {
      superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 993 },
        items: 1,
      },
      desktop: {
        breakpoint: { max: 992, min: 769 },
        items: 1,
      },
      tablet: {
        breakpoint: { max: 768, min: 567 },
        items: 1,
      },
      mobile: {
        breakpoint: { max: 566, min: 0 },
        items: 1,
      },
    };
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
            <Navbar />
            <Carousel
              className={styles.sliderHeader}
              responsive={responsive}
              infinite={true}
              autoPlay={this.props.deviceType !== "mobile" ? true : false}
              autoPlaySpeed={3000}
              keyBoardControl={true}
              showDots={false}
            >
              <div>
                <img src={kinder1} className={styles.sliderImage} />
              </div>
              <div>
                <img src={kinder2} className={styles.sliderImage} />
              </div>
              <div>
                <img src={kinder3} className={styles.sliderImage} />
              </div>
            </Carousel>
            <Container fluid style={{ padding: "0" }}>
              <Row>
                <Col lg={12} className={styles.text}>
                  <div style={{ display: "flex", justifyContent: "center" }}>
                    <h1>Bog'chamiz oshxonasi</h1>
                  </div>
                  <h2>
                    Maktabgacha yoshdagi bolalarni nima bilan boqish kerak?
                  </h2>
                  <p>
                    3 yoshdan 5 yoshgacha bo'lgan maktabgacha yoshdagi bolalar
                    turli xil foydali ovqatlarni iste'mol qilish imkoniyatiga
                    ega. Farzandingizga boshqa oila a'zolari iste'mol qiladigan
                    ovqatni taklif qiling. Turli xil ta'm, to'qima va ranglarga
                    ega ovqatlarni taklif eting
                  </p>
                  <h2>
                    Maktabgacha tarbiyalanuvchi qancha ovqat yeyishi kerak?
                  </h2>
                  <p>
                    Farzandingiz siz taklif qilayotgan ovqatlardan qancha ovqat
                    iste'mol qilishni hal qilsin. Farzandingizni ovqat eyishga
                    majburlamang yoki unga ruxsat berilgan ovqat miqdorini
                    cheklamang. Ba'zi kunlarda ular ko'proq ovqatlanishlari
                    mumkin. Ba'zi kunlarda ular kamroq ovqatlanishlari mumkin.
                    Bolaning ishtahasi kundan-kunga o'zgarishi mumkin. Quyidagi
                    namunaviy taomlardan faqat umumiy ko'rsatmalar sifatida
                    foydalaning. Ovqatlanish va atıştırmalıklarni har kuni bir
                    vaqtning o'zida rejalashtiring, shunda ovqatlanish vaqti
                    kelganida bolangiz och qoladi.
                  </p>
                  <h2>
                    Maktabgacha yoshdagi bolalar uchun namunaviy ovqatlanish: 3
                    yoshdan 5 yoshgacha
                  </h2>
                  {Global.kg.oshxona.map((food) => {
                    if (food.id === 3) {
                      return <h2 className={styles.heading}>{food.name}</h2>;
                    }
                  })}

                  <hr style={{ backgroundColor: "#F76B6A", height: "2px" }} />
                  <div className={styles.cardchalar}>
                    <div>Nonushta</div>

                    {Global.kg.menu.map((food) => {
                      if (food.oshxona === 3 && food.name === "nonushta 1") {
                        return (
                          <div style={{ marginLeft: "200px" }}>
                            {food.tarkib}
                          </div>
                        );
                      }
                    })}
                  </div>
                  <hr style={{ backgroundColor: "#F76B6A", height: "2px" }} />
                  <div className={styles.cardchalar}>
                    <div>Ertalabki tamaddi</div>
                    {Global.kg.menu.map((food) => {
                      if (food.oshxona === 3 && food.name === "nonushta 2") {
                        return (
                          <div style={{ marginLeft: "150px" }}>
                            {food.tarkib}
                          </div>
                        );
                      }
                    })}
                  </div>
                  <hr style={{ backgroundColor: "#F76B6A", height: "2px" }} />
                  <div className={styles.cardchalar}>
                    <div>Tushlik</div>
                    {Global.kg.menu.map((food) => {
                      if (food.oshxona === 3 && food.name === "tushlik") {
                        return (
                          <div style={{ marginLeft: "210px" }}>
                            {food.tarkib}
                          </div>
                        );
                      }
                    })}
                  </div>
                  <hr style={{ backgroundColor: "#F76B6A", height: "2px" }} />
                  {/* <div className={styles.cardchalar}>
                    <div>Peshindan keyin tamaddi</div>
                    <div style={{ marginLeft: "100px" }}>
                      Yong'oq moyi yoki keddar pishloqli olma bo'laklari Suv
                    </div>
                  </div>
                  <hr style={{ backgroundColor: "#F76B6A", height: "2px" }} /> */}

                  {Global.kg.oshxona.map((food) => {
                    if (food.id === 4) {
                      return <h2 className={styles.heading}>{food.name}</h2>;
                    }
                  })}
                  <hr style={{ backgroundColor: "#F76B6A", height: "2px" }} />
                  <div className={styles.cardchalar}>
                    <div>Nonushta</div>
                    {Global.kg.menu.map((food) => {
                      if (food.oshxona === 4 && food.name === "nonushta") {
                        return (
                          <div style={{ marginLeft: "200px" }}>
                            {food.tarkib}
                          </div>
                        );
                      }
                    })}
                  </div>
                  <hr style={{ backgroundColor: "#F76B6A", height: "2px" }} />
                  <div className={styles.cardchalar}>
                    <div>Tushlik</div>
                    {Global.kg.menu.map((food) => {
                      if (food.oshxona === 4 && food.name === "tushlik") {
                        return (
                          <div style={{ marginLeft: "215px" }}>
                            {food.tarkib}
                          </div>
                        );
                      }
                    })}
                  </div>
                  <hr style={{ backgroundColor: "#F76B6A", height: "2px" }} />
                  {/* <div className={styles.cardchalar}>
                    <div>Tushlik</div>
                    <div style={{ marginLeft: "210px" }}>
                      Ko'p donli non yoki bug'doy krakerida orkinos pishirilgan
                      pishloq yoki mini sendvich Qovurilgan bodring bo'laklari
                      To'q rangli takozlar Sut
                    </div>
                  </div>
                  <hr style={{ backgroundColor: "#F76B6A", height: "2px" }} />
                  <div className={styles.cardchalar}>
                    <div>Peshindan keyin tamaddi</div>
                    <div style={{ marginLeft: "100px" }}>
                      Xom sabzavotli sabzi (sabzi, selderey tayoqchalari, qizil
                      qalampir bo'laklari) pishirilgan tortilla chiplari yoki
                      bug'doy pita noni Suv
                    </div>
                  </div> */}
                </Col>
              </Row>
            </Container>
            <Footer />
          </div>
        )}
      </div>
    );
  }
}
