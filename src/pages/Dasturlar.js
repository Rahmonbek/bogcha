import React, { Component } from "react";
import style from "../css/Dasturlar.module.css";
import Footer from "./Footer";
import rasm1 from "../img/logo-dark.png";
import rasm5 from "../img/logo-dark.png";
import img1 from "../img/q1.jpg";
import img2 from "../img/q2.jpg";
import img3 from "../img/q3.jpg";
import img from "../img/border.png";
import { BsFillTriangleFill } from "react-icons/bs";
import {
  FaHome,
  FaPhoneAlt,
  FaInstagram,
  FaTelegramPlane,
  FaBars,
  FaFacebook,
} from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import { Menu } from "antd";
import "antd/dist/antd.css";
import { Link } from "react-router-dom";
import Global from "../host/Global";
import { getKg } from "../host/Config";

export default class Dasturlar extends Component {
  state = {
    nav: false,
    open: false,
    close: false,
  };
  change = () => {
    if (window.scrollY >= 200) {
      this.setState({
        nav: true,
      });
    } else {
      this.setState({
        nav: false,
      });
    }
  };
  openNav = () => {
    this.setState({
      open: true,
    });
  };
  closeNav = () => {
    this.setState({
      open: false,
    });
  };
  componentDidMount() {
    if (Global.kg === null) {
      getKg()
        .then((res) => {
          Global.kg = res.data;
        })
        .catch((err) => console.log(err));
    }
    window.addEventListener("scroll", this.change);

    // console.log("Global.kg.program1");
    // console.log(Global.kg.program1);
  }
  handleClick = (e) => {
    console.log("click ", e);
  };
  render() {
    const { SubMenu } = Menu;

    return (
      <>
        <div className={style.mat}>
          <div className={style.one}>
            <div className={this.state.nav ? style.nav1_active : style.nav1}>
              <div className={this.state.nav ? style.logo1 : style.logo}>
                {this.state.nav ? <img src={rasm5} /> : <img src={rasm1} />}
                <div className={style.navbar}>
                  <span>
                    <Link to="/dashboard/uz">
                      <FaHome style={{ color: "#FF8080", fontSize: "23px" }} />
                    </Link>
                  </span>
                  <span style={{ fontSize: "25px" }}>|</span>
                  <span className={style.sub1}>
                    <Link to="/bizhaqimizda/uz">Biz haqimizda</Link>
                  </span>
                  <div className={style.subNav1}>
                    <span>
                      <BsFillTriangleFill className={style.icon1} />
                    </span>
                    <p>
                      <Link to="/bizningtarix/uz">Bizning tarix</Link>
                    </p>
                    <p>
                      <Link to="/nimauchunbiz/uz">Nima uchun biz</Link>
                    </p>
                    <p>
                      <Link to="/rahbariyat/uz">Rahbariyat</Link>
                    </p>
                    <p>
                      <Link to="/tarbiyachilar/uz">Tarbiyachilar</Link>
                    </p>
                    <p>
                      <Link to="/oshxona/uz">Oshxona</Link>
                    </p>
                    {/* <p>
                      <Link to="/galereya/uz">Galereya</Link>
                    </p>
                    <p>
                      <Link to="/manzil/uz">Manzil</Link>
                    </p> */}
                  </div>
                  <span style={{ fontSize: "25px" }}>|</span>
                  <span className={style.sub2}>
                    <Link to="/dasturlar/uz">Dasturlar</Link>
                  </span>
                  <div className={style.subNav2}>
                    <span>
                      <BsFillTriangleFill className={style.icon2} />
                    </span>
                    <p>
                      <Link to="/dastur_1/uz">1-bosqich</Link>
                    </p>
                    <p>
                      <Link to="/dastur_2/uz">2-bosqich</Link>
                    </p>
                    <p>
                      <Link to="/dastur_3/uz">3-bosqich</Link>
                    </p>
                  </div>
                  <span style={{ fontSize: "25px" }}>|</span>
                  <span>
                    <Link to="/curriculm/uz">Qabul</Link>
                  </span>
                  <span style={{ fontSize: "25px" }}>|</span>
                  <span>
                    <Link to="/yangiliklar/uz">Yangiliklar</Link>
                  </span>
                  <span style={{ fontSize: "25px" }}>|</span>
                  <span>
                    <Link to="/tadbirlar/uz">Tadbirlar</Link>
                  </span>
                  <span style={{ marginLeft: "40px" }}>
                    <a href="tel:+998335093874">
                      <FaPhoneAlt
                        style={{ color: "#FF8080", fontSize: "18px" }}
                      />
                    </a>
                  </span>
                  <span>
                    <a href="http://t.me/Karshiyeva_N">
                      <FaTelegramPlane
                        style={{ color: "#FF8080", fontSize: "23px" }}
                      />
                    </a>
                  </span>
                  <span>
                    <a href="http://t.me/Karshiyeva_N">
                      <FaInstagram
                        style={{ color: "#FF8080", fontSize: "23px" }}
                      />
                    </a>
                  </span>
                  <span>
                    <a href="http://t.me/Karshiyeva_N">
                      <FaFacebook
                        style={{ color: "#FF8080", fontSize: "23px" }}
                      />
                    </a>
                  </span>
                  {/* <Link to="/login"><button className={this.state.nav? style.btn1 :style.btn2}>Kirish</button></Link>                         */}
                </div>
              </div>
            </div>
          </div>

          <div className={style.second}>
            <div className={this.state.nav ? style.nav1_active : style.nav1}>
              <div className={this.state.nav ? style.logo1 : style.logo}>
                {this.state.nav ? <img src={rasm5} /> : <img src={rasm1} />}
                <div
                  className={this.state.nav ? style.openNav1 : style.openNav}
                >
                  <FaBars
                    onClick={this.openNav}
                    style={{ color: "#FF8080", fontSize: "30px" }}
                  />
                </div>
                <div
                  className={
                    this.state.open ? style.navWrapper1 : style.navWrapper
                  }
                >
                  <div className={style.clicknav}>
                    <Menu
                      onClick={this.handleClick}
                      style={{
                        width: 256,
                        backgroundColor: "#F76B6A",
                        border: "none",
                        textAlign: "center",
                        fontSize: "18px",
                        marginTop: "100px",
                      }}
                      defaultSelectedKeys={["1"]}
                      defaultOpenKeys={["sub1"]}
                      mode="inline"
                    >
                      <Menu.Item key="1" style={{ backgroundColor: "#F76B6A" }}>
                        <span>
                          <Link to="/dashboard/uz">
                            <FaHome
                              style={{ color: "white", fontSize: "23px" }}
                            />
                          </Link>
                        </span>
                      </Menu.Item>
                      <SubMenu
                        key="sub1"
                        title="Biz haqimizda"
                        style={{ backgroundColor: "#F76B6A", color: "white" }}
                      >
                        <Menu.ItemGroup
                          key="g1"
                          style={{ borderTop: "3px solid rgba(0,0,0,0.4)" }}
                        >
                          <Menu.Item key="2">
                            <Link to="/bizningtarix/uz">Bizning tarix</Link>
                          </Menu.Item>
                          <Menu.Item key="3">
                            <Link to="/nimauchunbiz/uz">Nima uchun biz</Link>
                          </Menu.Item>
                          <Menu.Item key="4">
                            <Link to="/rahbariyat/uz">Rahbariyat</Link>
                          </Menu.Item>
                          <Menu.Item key="4">
                            <Link to="/tarbiyachilar/uz">Tarbiyachilar</Link>
                          </Menu.Item>
                          {/* <Menu.Item key="5">
                            <Link to="/galereya/uz">Galereya</Link>
                          </Menu.Item>
                          <Menu.Item key="6">
                            <Link to="/manzil/uz">Manzil</Link>
                          </Menu.Item> */}
                        </Menu.ItemGroup>
                      </SubMenu>
                      <SubMenu
                        key="sub2"
                        title="Dasturlar"
                        style={{ color: "white" }}
                      >
                        <Menu.ItemGroup
                          style={{ borderTop: "3px solid rgba(0,0,0,0.4)" }}
                        >
                          <Menu.Item key="7">
                            <Link to="/dastur_1/uz">1-dastur</Link>
                          </Menu.Item>
                          <Menu.Item key="8">
                            <Link to="/dastur_2/uz">2-dastur</Link>
                          </Menu.Item>
                          <Menu.Item key="9">
                            <Link to="/dastur_3/uz">3-dastur</Link>
                          </Menu.Item>
                        </Menu.ItemGroup>
                      </SubMenu>
                      <Menu.Item
                        key="10"
                        style={{ color: "white", backgroundColor: "#F76B6A" }}
                      >
                        <Link to="/curriculm/uz" style={{ color: "white" }}>
                          Qabul
                        </Link>
                      </Menu.Item>
                      <Menu.Item
                        key="11"
                        style={{ color: "white", backgroundColor: "#F76B6A" }}
                      >
                        <Link style={{ color: "white" }} to="/yangiliklar/uz">
                          Yangiliklar
                        </Link>
                      </Menu.Item>
                      <Menu.Item
                        key="12"
                        style={{ color: "white", backgroundColor: "#F76B6A" }}
                      >
                        <Link style={{ color: "white" }} to="/tadbirlar/uz">
                          Tadbirlar
                        </Link>
                      </Menu.Item>
                      <Menu.Item
                        key="12"
                        style={{ color: "white", backgroundColor: "#F76B6A" }}
                      >
                        {/* <button
                          style={{
                            border: "none",
                            backgroundColor: "white",
                            color: "#F76B6A",
                            borderRadius: "25px",
                            padding: "10px 30px",
                          }}
                        >
                          <Link
                            style={{ color: "#F76B6A", fontWeight: "800" }}
                            to="/login"
                          >
                            Kirish
                          </Link>
                        </button> */}
                      </Menu.Item>
                      <Menu.Item>
                        <span>
                          <a href="tel:+998335093874">
                            <FaPhoneAlt
                              style={{ color: "white", fontSize: "18px" }}
                            />
                          </a>
                        </span>
                        <span>
                          <a href="http://t.me/Karshiyeva_N">
                            <FaTelegramPlane
                              style={{
                                color: "white",
                                fontSize: "23px",
                                marginLeft: "10px",
                              }}
                            />
                          </a>
                        </span>
                      </Menu.Item>
                    </Menu>
                    <div className={style.close}>
                      <AiOutlineClose
                        onClick={this.closeNav}
                        style={{ fontSize: "30px", color: "white" }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <h2 className={style.sarlavha}>Dasturlar</h2>
          <div
            style={{
              width: "200px",
              height: "2px",
              margin: "auto",
              backgroundColor: "#FF8080",
            }}
          ></div>
          <div className={style.oyna}>
            <div className={style.rasm}>
              {/* {  (Global.kg.program_img==null)? {return()}:{return(Global.kg.program1_img)}} */}
              <img
                src={
                  Global.kg.program1_img == null ? img1 : Global.kg.program1_img
                }
              />
            </div>
            <div className={style.border}>
              <img src={img} />
            </div>
            <div className={style.content}>
              <h4>1-bosqich</h4>
              <div
                style={{
                  width: "140px",
                  height: "1px",
                  backgroundColor: "#FF8080",
                  margin: "16px 0px 12px",
                }}
              ></div>
              <p>{Global.kg.program1}</p>
              <span>
                <Link to="/dastur_1/uz">Batafsil</Link>
              </span>
            </div>
          </div>
          <div className={style.oyna}>
            <div className={style.content}>
              <h4>2-bosqich</h4>
              <div
                style={{
                  width: "140px",
                  height: "1px",
                  backgroundColor: "#FF8080",
                  margin: "16px 0px 12px",
                }}
              ></div>
              <p>{Global.kg.program2}</p>
              <span>
                <Link to="/dastur_2/uz">Batafsil</Link>
              </span>
            </div>
            <div className={style.border}>
              <img src={img} />
            </div>
            <div className={style.rasm}>
              <img
                src={
                  Global.kg.program1_img == null ? img2 : Global.kg.program2_img
                }
              />
            </div>
          </div>
          <div className={style.oyna}>
            <div className={style.rasm}>
              <img
                src={
                  Global.kg.program1_img == null ? img3 : Global.kg.program3_img
                }
              />
            </div>
            <div className={style.border}>
              <img src={img} />
            </div>
            <div className={style.content}>
              <h4>3-bosqich</h4>
              <div
                style={{
                  width: "140px",
                  height: "1px",
                  backgroundColor: "#FF8080",
                  margin: "16px 0px 12px",
                }}
              ></div>
              <p>{Global.kg.program3}</p>
              <span>
                <Link to="/dastur_3/uz">Batafsil</Link>
              </span>
            </div>
          </div>
        </div>
        <Footer />
      </>
    );
  }
}
