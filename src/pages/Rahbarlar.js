import React, { Component } from "react";
import { Table, Button, Form, Row, Col } from "react-bootstrap";
import styles from "../css/kids.module.css";
import moment from "moment";
import { DatePicker, Space } from "antd";
import { deleteTeacher, getRahbariyat, pushTeacher } from "../host/Config";
export default class Rahbarlar extends Component {
  state = {
    rahbarlar: [],
    kids1: {},
    image: null,
    full_name: null,
    lavozim: null,
    mutaxassislik: null,
    otm: null,
    about: null,
    phone: null,
    email: null,
    telegram: null,
  };
  deleteTeacher = (id) => {
    deleteTeacher(id)
      .then((res) => {})
      .catch((err) => {});
    this.getRahbarlar();
  };
  getRahbarlar = () => {
    getRahbariyat()
      .then((res) =>
        this.setState({
          rahbarlar: res.data,
        })
      )
      .catch((err) => console.log(err));
  };
  customRequest = (e) => {
    this.setState({ image: e.target.files[0] });
  };
  saveTeacher = (e) => {
    var info = {
      full_name: document.getElementById("name").value,
      otm: document.getElementById("otm").value,
      mutaxassislik: document.getElementById("about").value,
      telegram: document.getElementById("telegram").value,
      email: document.getElementById("formBasicEmail").value,
      lavozim: document.getElementById("lavozim").value,
      phone: document.getElementById("PhoneNumber").value,
      about: document.getElementById("exampleForm.ControlTextarea1").value,
    };
    var bodyFormData = new FormData();
    bodyFormData.append("full_name", info.full_name ?? "");
    bodyFormData.append("otm", info.otm ?? "");
    bodyFormData.append("mutaxassislik", info.mutaxassislik ?? "");
    bodyFormData.append("telegram", info.telegram ?? "");
    bodyFormData.append("email", info.email ?? "");
    bodyFormData.append("lavozim", info.lavozim ?? "");
    bodyFormData.append("phone", info.phone ?? "");
    bodyFormData.append("about", info.about ?? "");
    bodyFormData.append("image", this.state.image ?? null);

    pushTeacher(FormData)
      .then((res) => {
        console.log("ishladi");
        this.getRahbarlar();
      })
      .catch((err) => {
        console.log("Ishlamadi");
      });
  };
  componentDidMount() {
    this.getRahbarlar();
  }
  render() {
    const { RangePicker } = DatePicker;
    const dateFormat = "YYYY/MM/DD";
    const customFormat = (value) =>
      `custom format: ${value.format(dateFormat)}`;

    return (
      <div style={{ padding: "3%" }}>
        <div className={styles.formAdmin}>
          <h4>Rahbar kiritish</h4>

          <Form id="formAdmin">
            <Row>
              <Col>
                {" "}
                <Form.Group controlId="name" style={{ marginBottom: "20px" }}>
                  <Form.Label>Familiya,ism,sharifni kiriting</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="F.I.Sh"
                    defaultValue={this.state.kids1.name}
                  />
                </Form.Group>
                <Form.Group controlId="otm" style={{ marginBottom: "20px" }}>
                  <Form.Label>Tamomlagan oliy ta'lim muassasasi</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="O.T.M"
                    defaultValue={this.state.kids1.name}
                  />
                </Form.Group>
                <Form.Group controlId="about" style={{ marginBottom: "20px" }}>
                  <Form.Label>Mutaxasisligini kiritng</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Mutaxasisligi"
                    defaultValue={this.state.kids1.name}
                  />
                </Form.Group>
                <Form.Group
                  controlId="telegram"
                  style={{ marginBottom: "20px" }}
                >
                  <Form.Label>Telegram manzil kiriting</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Telegram"
                    defaultValue={this.state.kids1.name}
                  />
                </Form.Group>
                <Form.Group controlId="formFile" className="mb-3">
                  <Form.Label>Rasm kiriting </Form.Label>
                  <br />
                  <Form.Control
                    type="file"
                    accept="image/*"
                    onChange={this.customRequest}
                  />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Email manzil kiriting</Form.Label>
                  <Form.Control type="Email" placeholder="Email kiriting" />
                </Form.Group>{" "}
                <Form.Group
                  controlId="lavozim"
                  style={{ marginBottom: "20px" }}
                >
                  <Form.Label>Ishlaydigan lavozimi</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Lavozimi"
                    defaultValue={this.state.kids1.sana}
                  />
                </Form.Group>
                <Form.Group controlId="PhoneNumber" className="mb-3">
                  <Form.Label>Telefon raqam kiriting </Form.Label>
                  <Form.Control type="Number" placeholder="Telefon raqam" />
                </Form.Group>
                <Space direction="vertical" size={12}>
                  <Form.Label>Tug'ilgan yil,oy,sanani kiriting</Form.Label>
                  <DatePicker
                    defaultValue={moment("2015/01/01", dateFormat)}
                    format={dateFormat}
                  />
                </Space>
              </Col>
            </Row>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Qo'shimcha ma'lumot</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                placeholder="Qo'shimcha ma'lumotlar..."
              />
            </Form.Group>
            <Button
              // type="submit"
              variant="primary"
              className={styles.inputFormBtn}
              onClick={() => this.saveTeacher()}
            >
              O'zgarishlarni saqlash
            </Button>
            <Button
              variant="primary"
              className={styles.inputFormBtn1}
              onClick={this.reset}
            >
              Bekor qilish
            </Button>
          </Form>
        </div>
        <Table
          style={{
            backgroundColor: "white",
            border: "none",
            boxShadow:
              "rgba(17, 17, 26, 0.1) 0px 4px 16px, rgba(17, 17, 26, 0.1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 56px",
            borderRadius: "5px",
            marginRight: "20px",
          }}
        >
          <thead style={{ borderBottom: "none" }}>
            <tr style={{ borderBottom: "none" }}>
              <th>#</th>
              <th>F.I.O</th>
              <th>Lavozimi</th>
              <th>Tug'ilgan sana</th>
              <th>Mutaxasisligi</th>
              <th>OTM</th>
              <th>Haqida</th>
              {/* <th>Tel. raqam</th>
              <th>Pochta</th>
              <th>Telegram</th> */}
              <th>O'zgartirish</th>
              <th>O'chirish</th>
            </tr>
          </thead>
          <tbody style={{ border: "none" }}>
            {this.state.rahbarlar.map((item, key) => {
              return (
                <tr>
                  <td>{key + 1}</td>
                  <td>{item.full_name}</td>
                  <td>{item.lavozim}</td>
                  <td>{item.date}</td>
                  <td>{item.otm}</td>
                  <td>{item.mutaxassislik}</td>
                  <td>{item.about}</td>
                  {/* <td>{item.phone}</td>
                  <td>{item.email}</td>
                  <td>{item.telegram}</td> */}
                  <td>
                    <Button
                      style={{
                        backgroundColor: "#FF8080",
                        padding: "3px 10px",
                        fontSize: "17px",
                        border: "none",
                      }}
                      onClick={() => this.editTeacher(key)}
                    >
                      O'zgartirish
                    </Button>
                  </td>
                  <td>
                    <Button
                      style={{
                        backgroundColor: "#FF8080",
                        padding: "3px 10px",
                        fontSize: "17px",
                        border: "none",
                      }}
                      onClick={() => this.deleteTeacher(item.id)}
                    >
                      O'chirish
                    </Button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </div>
    );
  }
}
