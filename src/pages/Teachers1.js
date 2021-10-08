import React, { Component } from "react";
import { Table, Button, Form, Row, Col } from "react-bootstrap";
import { DatePicker, Space } from "antd";
import moment from "moment";
import { getXodimlar } from "../host/Config";
import styles from "../css/kids.module.css";
export default class teachers1 extends Component {
  state = {
    tarbiyachilar: [],
  };
  getTarbiyachilar = () => {
    getXodimlar()
      .then((res) => {
        this.setState({ tarbiyachilar: res.data });
        console.log(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  componentDidMount() {
    this.getTarbiyachilar();
  }
  render() {
    const { RangePicker } = DatePicker;
    const dateFormat = "YYYY/MM/DD";
    const customFormat = (value) =>
      `custom format: ${value.format(dateFormat)}`;
    return (
      <div style={{ padding: "3%" }}>
        <div className={styles.formAdmin}>
          <h4>Tarbiyachini kiritish</h4>
          <Form id="formAdmin">
            <Row>
              <Col lg={6} md={6} sm={12}>
                {" "}
                <Form.Group controlId="name" style={{ marginBottom: "20px" }}>
                  <Form.Label style={{ fontSize: "20px", paddingLeft: "10px" }}>
                    Familiya,ism,sharif
                  </Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="F.I.Sh"
                    // defaultValue={this.state.kid.name}
                  />
                </Form.Group>
              </Col>
              <Col lg={6} md={6} sm={12}>
                <Form.Group controlId="otel" style={{ marginBottom: "20px" }}>
                  <Form.Label style={{ fontSize: "20px", paddingLeft: "10px" }}>
                    Lavozim
                  </Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Lavozim"
                    // defaultValue={this.state.kids1.onasi.tel}
                    onChange={(e) => this.handleImage(e)}
                  />
                </Form.Group>
              </Col>
              <Col lg={6} md={6} sm={12}>
                <Space direction="vertical" size={12}>
                  <Form.Label style={{ fontSize: "20px" }}>
                    Tug'ilgan yil,oy,sanani kiriting
                  </Form.Label>
                  <DatePicker
                    // defaultValue={moment("2015/01/01", dateFormat)}
                    format={dateFormat}
                  />
                </Space>
              </Col>
              <Col lg={6} md={6} sm={12}>
                <Form.Group
                  controlId="otaname"
                  style={{ marginBottom: "20px" }}
                >
                  <Form.Label style={{ fontSize: "20px", paddingLeft: "10px" }}>
                    Mutaxasislik
                  </Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Mutaxasislik"
                    // defaultValue={this.state.kids1.otasi.ismi}
                  />
                </Form.Group>
              </Col>
              <Col lg={6} md={6} sm={12}>
                <Form.Group controlId="otatel" style={{ marginBottom: "20px" }}>
                  <Form.Label style={{ fontSize: "20px", paddingLeft: "10px" }}>
                    Telefon raqam
                  </Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Telefon raqam"
                    // defaultValue={this.state.kids1.otasi.tel}
                    onChange={(e) => this.handleImage(e)}
                  />
                </Form.Group>
              </Col>
              <Col lg={6} md={6} sm={12}>
                <Form.Group controlId="otatel" style={{ marginBottom: "20px" }}>
                  <Form.Label style={{ fontSize: "20px", paddingLeft: "10px" }}>
                    Elektron pochta
                  </Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="gmail.com"
                    // defaultValue={this.state.kids1.otasi.tel}
                    onChange={(e) => this.handleImage(e)}
                  />
                </Form.Group>
              </Col>
              <Col lg={6} md={6} sm={12}>
                <Form.Group controlId="otatel" style={{ marginBottom: "20px" }}>
                  <Form.Label style={{ fontSize: "20px", paddingLeft: "10px" }}>
                    Telegram
                  </Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Telegram"
                    // defaultValue={this.state.kids1.otasi.tel}
                    onChange={(e) => this.handleImage(e)}
                  />
                </Form.Group>
              </Col>
              <Col lg={6} md={6} sm={12}>
                <Form.Group controlId="otatel" style={{ marginBottom: "20px" }}>
                  <Form.Label style={{ fontSize: "20px", paddingLeft: "10px" }}>
                    Oliygohi
                  </Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Oliygohi"
                    // defaultValue={this.state.kids1.otasi.tel}
                    onChange={(e) => this.handleImage(e)}
                  />
                </Form.Group>
              </Col>
              <Col lg={6} md={6} sm={12}>
                <Form.Group controlId="formFile" className="mb-3">
                  <Form.Label>Rasm kiriting </Form.Label>
                  <Form.Control type="file" />
                </Form.Group>
              </Col>
            </Row>
            <Form.Group controlId="onaname" style={{ marginBottom: "20px" }}>
              <Form.Label style={{ fontSize: "20px", paddingLeft: "10px" }}>
                Qo'shimcha ma'lumot
              </Form.Label>
              <Form.Control
                as="textarea"
                rows={4}
                placeholder="Qo'shimcha ma'lumot"
                // defaultValue={this.state.kids1.onasi.ismi}
              />
            </Form.Group>

            {/* */}

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
              {/* <th>#</th> */}
              <th>F.I.O</th>
              <th>Tug'ilgan sana</th>
              <th>Lavozim</th>
              <th>Tug'ilgan sana</th>
              <th>Mutaxasisligi</th>
              <th>O'zgartirish</th>
              <th>O'chirish</th>
            </tr>
          </thead>
          <tbody style={{ border: "none" }}>
            {this.state.tarbiyachilar.map((item, key) => {
              return (
                <tr>
                  <td>{key + 1}</td>
                  <td>{item.full_name}</td>
                  <td>{item.lavozim}</td>
                  <td>{item.date}</td>
                  <td>{item.mutaxassislik}</td>
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
