import React, { Component } from "react";
import { Table, Button, Form, Row, Col } from "react-bootstrap";
import styles from "../css/kids.module.css";
import moment from "moment";
import { DatePicker, Space } from "antd";
export default class Rahbarlar extends Component {
  state = {
    kids: [
      {
        name: "Toshmatov Toshmat Toshmat ogli",
        sana: "2019-yil 7-oktabr",
        otasi: {
          ismi: "Toshmatov Toshmat",
          tel: "+8947632364",
        },
        onasi: {
          ismi: "Toshmatova Sabina",
          tel: "+27364712672",
        },
      },
      {
        name: "Toshmatov Toshmat Toshmat ogli",
        sana: "2019-yil 7-oktabr",
        otasi: {
          ismi: "Toshmatov Toshmat",
          tel: "+8947632364",
        },
        onasi: {
          ismi: "Toshmatova Sabina",
          tel: "+27364712672",
        },
      },
      {
        name: "Toshmatov Toshmat Toshmat ogli",
        sana: "2019-yil 7-oktabr",
        otasi: {
          ismi: "Toshmatov Toshmat",
          tel: "+8947632364",
        },
        onasi: {
          ismi: "Toshmatova Sabina",
          tel: "+27364712672",
        },
      },
    ],
    kids1: {
      name: "",
      sana: "",
      otasi: {
        ismi: "",
        tel: "",
      },
      onasi: {
        ismi: "",
        tel: "",
      },
    },
  };
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
                <Form.Group controlId="about" style={{ marginBottom: "20px" }}>
                  <Form.Label>Telegram manzil kiriting</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Telegram"
                    defaultValue={this.state.kids1.name}
                  />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Email manzil kiriting</Form.Label>
                  <Form.Control type="email" placeholder="email kiriting" />
                </Form.Group>{" "}
                <Form.Group controlId="sana" style={{ marginBottom: "20px" }}>
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
                <Form.Group controlId="formFile" className="mb-3">
                  <Form.Label>Rasm kiriting </Form.Label>
                  <Form.Control type="file" />
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
              <th>Tug'ilgan sana</th>
              <th>Otasi</th>
              <th>Onasi</th>
              <th>O'zgartirish</th>
              <th>O'chirish</th>
            </tr>
          </thead>
          <tbody style={{ border: "none" }}>
            {this.state.kids.map((item, key) => {
              return (
                <tr>
                  <td>{key + 1}</td>
                  <td>{item.name}</td>
                  <td>{item.sana}</td>
                  <td>
                    <p>{item.otasi.ismi}</p>
                    <p>{item.otasi.tel}</p>
                  </td>
                  <td>
                    <p>{item.onasi.ismi}</p>
                    <p>{item.onasi.tel}</p>
                  </td>
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
                      onClick={() => this.deleteTeacher(key)}
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
