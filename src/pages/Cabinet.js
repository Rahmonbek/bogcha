import React, { Component } from "react";
import { Col, Container, Form, Row } from "react-bootstrap";
import styles from "../css/kids.module.css";
import { Select } from "antd";
import { getKg } from "../host/Config";
const { Option } = Select;
export default class Cabinet extends Component {
  state = {
    KG: {},
    email: "",
    name: "",
    instagram: "",
    telegram: "",
    facebook: "",
    tuman: "",
    viloyat: "",
    dastur1: "",
    dastur2: "",
    dastur3: "",
    address: "",
    number: null,
    phone: "",
    logo: null,
    ourHistory: "",
    whyUs: "",
  };
  getKinderGarden = () => {
    getKg()
      .then((res) => {
        console.log(res.data);
        this.setState({
          KG: res.data,
          email: res.data.email,
          name: res.data.name,
          instagram: res.data.instagram,
          telegram: res.data.telegram,
          facebook: res.data.facebook,
          viloyat: res.data.viloyat,
          tuman: res.data.tuman,
          address: res.data.address,
          number: res.data.number,
        });
      })
      .catch((err) => console.log(err));
  };
  customRequest = (e) => {
    this.setState({ image: e.target.files[0] });
  };
  componentDidMount() {
    this.getKinderGarden();
  }
  render() {
    return (
      <div style={{ padding: "3%", width: "100%" }}>
        <div className={styles.formAdmin}>
          <Container>
            <Form>
              <Row>
                <Col>
                  <Form.Group className="mb-3" style={{ marginBottom: "20px" }}>
                    <Form.Label>Bog'cha raqami</Form.Label>
                    <Form.Control
                      type="number"
                      disabled
                      placeholder="Bog'cha raqami"
                      value={this.state.KG.number}
                    />
                  </Form.Group>
                  <Form.Group className="mb-3" style={{ marginBottom: "20px" }}>
                    <Form.Label>Bog'cha nomi</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Bog'cha nomi"
                      value={this.state.name}
                    />
                  </Form.Group>
                  <Form.Group className="mb-3" style={{ marginBottom: "20px" }}>
                    <Form.Label>Bog'cha elektron pochtasi</Form.Label>
                    <Form.Control
                      type="text"
                      value={this.state.email}
                      placeholder="info@gmail.com"
                    />
                  </Form.Group>
                  <Form.Group className="mb-3" style={{ marginBottom: "20px" }}>
                    <Form.Label>Bog'cha telefon raqami</Form.Label>
                    <Form.Control
                      value={this.state.phone}
                      type="text"
                      pattern="+[0-9]{15}"
                      placeholder="+998935956664"
                    />
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group className="mb-3" style={{ marginBottom: "20px" }}>
                    <Form.Label>Bog'cha joylashgan viloyati</Form.Label>
                    <br />
                    <Select
                      value={this.state.viloyat}
                      showSearch
                      style={{ width: "100%" }}
                      placeholder="Viloyat"
                      optionFilterProp="children"
                      filterOption={(input, option) =>
                        option.children
                          .toLowerCase()
                          .indexOf(input.toLowerCase()) >= 0
                      }
                    >
                      <Option value="Andijon">Andijon viloyat</Option>
                      <Option value="Namangan">Namangan viloyat</Option>
                      <Option value="Farg'ona">Farg'ona viloyat</Option>
                      <Option value="Sirdaryo">Sirdaryo viloyat</Option>
                      <Option value="Jizzax">Jizzax viloyat</Option>
                      <Option value="Samarqand">Samarqand viloyat</Option>
                      <Option value="Buxoro">Buxoro viloyat</Option>
                      <Option value="Navoiy">Navoiy viloyat</Option>
                      <Option value="Qashqadaryo">Qashqadaryo viloyat</Option>
                      <Option value="Surxondaryo">Surxondaryo viloyat</Option>
                      <Option value="Xorazm">Xorazm viloyat</Option>
                      <Option value="Toshkent">Toshkent viloyat</Option>
                      <Option value="Toshkent shahar">Toshkent shahar</Option>
                      <Option value="Qoraqalpog'iston Respublikasi">
                        Qoraqalpog'iston Respublikasi
                      </Option>
                    </Select>
                  </Form.Group>
                  <Form.Group className="mb-3" style={{ marginBottom: "20px" }}>
                    <Form.Label>Bog'cha joylashgan tumani</Form.Label>
                    <Form.Control
                      type="text"
                      value={this.state.tuman}
                      placeholder="Bog'cha joylashgan tumani"
                    />
                  </Form.Group>
                  <Form.Group className="mb-3" style={{ marginBottom: "20px" }}>
                    <Form.Label>Bog'cha manzili</Form.Label>
                    <Form.Control
                      type="text"
                      value={this.state.address}
                      placeholder="Bog'cha manzili"
                    />
                  </Form.Group>
                  <Form.Group controlId="formFile" className="mb-3">
                    <Form.Label>Bog'cha logotip rasmini kiriting </Form.Label>
                    <br />
                    <Form.Control
                      type="file"
                      accept="image/*"
                      onChange={this.customRequest}
                    />
                  </Form.Group>
                </Col>
              </Row>
              <Form.Group className="mb-3" style={{ marginBottom: "20px" }}>
                <Form.Label>Bog'cha telegram linki</Form.Label>
                <Form.Control
                  type="text"
                  value={this.state.telegram}
                  placeholder="https://t.me/bogcha"
                />
              </Form.Group>
              <Form.Group className="mb-3" style={{ marginBottom: "20px" }}>
                <Form.Label>Bog'cha instagram linki</Form.Label>
                <Form.Control
                  type="text"
                  value={this.state.instagram}
                  placeholder="https://i.me/bogcha"
                />
              </Form.Group>
              <Form.Group className="mb-3" style={{ marginBottom: "20px" }}>
                <Form.Label>Bog'cha facebook linki</Form.Label>
                <Form.Control
                  value={this.state.facebook}
                  type="text"
                  placeholder="https://facebook.com/bogcha"
                />
              </Form.Group>
              <Form.Group className="mb-3" style={{ marginBottom: "20px" }}>
                <Form.Label>
                  Bog'cha nima uchun biz degan sahifasi matni
                </Form.Label>
                <Form.Control
                  value={this.state.whyUs}
                  rows={3}
                  as="textarea"
                  placeholder="Nima uchun biz..."
                />
              </Form.Group>
              <Form.Group className="mb-3" style={{ marginBottom: "20px" }}>
                <Form.Label>
                  Bog'cha bizning tarix degan sahifasi matni
                </Form.Label>
                <Form.Control
                  value={this.state.ourHistory}
                  rows={3}
                  as="textarea"
                  placeholder="Bizning tarix..."
                />
              </Form.Group>
              <Form.Group className="mb-3" style={{ marginBottom: "20px" }}>
                <Form.Label>
                  Bog'cha dastur 1-bosqich degan sahifasi matni
                </Form.Label>
                <Form.Control
                  value={this.state.dastur1}
                  rows={3}
                  as="textarea"
                  placeholder="Dastur 1-bosqich..."
                />
              </Form.Group>
              <Form.Group className="mb-3" style={{ marginBottom: "20px" }}>
                <Form.Label>
                  Bog'cha dastur 2-bosqich degan sahifasi matni
                </Form.Label>
                <Form.Control
                  value={this.state.dastur2}
                  rows={3}
                  as="textarea"
                  placeholder="Dastur 2-bosqich..."
                />
              </Form.Group>
              <Form.Group className="mb-3" style={{ marginBottom: "20px" }}>
                <Form.Label>
                  Bog'cha dastur 3-bosqich degan sahifasi matni
                </Form.Label>
                <Form.Control
                  value={this.state.dastur3}
                  rows={3}
                  as="textarea"
                  placeholder="Dastur 3-bosqich..."
                />
              </Form.Group>
            </Form>
          </Container>
        </div>
      </div>
    );
  }
}
