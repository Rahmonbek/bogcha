import React, { Component } from "react";
import { Form } from "react-bootstrap";
import styles from "../css/kids.module.css";
import { Select } from "antd";
const { Option } = Select;
export default class Cabinet extends Component {
  render() {
    return (
      <div style={{ padding: "3%" }}>
        <div className={styles.formAdmin}>
          <Form>
            <Form.Group className="mb-3" style={{ marginBottom: "20px" }}>
              <Form.Label>Joylashgan viloyati</Form.Label>
              <br />
              <Select
                showSearch
                style={{ width: "100%" }}
                placeholder="Viloyat"
                optionFilterProp="children"
                filterOption={(input, option) =>
                  option.children.toLowerCase().indexOf(input.toLowerCase()) >=
                  0
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
              <Form.Label>Bog'cha nomi</Form.Label>
              <Form.Control type="text" placeholder="Bog'cha nomi" />
            </Form.Group>
            <Form.Group className="mb-3" style={{ marginBottom: "20px" }}>
              <Form.Label>Bog'cha elektron pochtasi</Form.Label>
              <Form.Control type="text" placeholder="info@gmail.com" />
            </Form.Group>
            <Form.Group className="mb-3" style={{ marginBottom: "20px" }}>
              <Form.Label>Bog'cha joylashgan tumani</Form.Label>
              <Form.Control
                type="text"
                placeholder="Bog'cha joylashgan tumani"
              />
            </Form.Group>
            <Form.Group className="mb-3" style={{ marginBottom: "20px" }}>
              <Form.Label>Bog'cha raqami</Form.Label>
              <Form.Control
                type="number"
                min="1"
                placeholder="Bog'cha raqami"
              />
            </Form.Group>
            <Form.Group className="mb-3" style={{ marginBottom: "20px" }}>
              <Form.Label>Bog'cha manzili</Form.Label>
              <Form.Control type="text" placeholder="Bog'cha manzili" />
            </Form.Group>
            <Form.Group className="mb-3" style={{ marginBottom: "20px" }}>
              <Form.Label>Bog'cha telefon raqami</Form.Label>
              <Form.Control
                type="text"
                pattern="+[0-9]{5}-[0-9]{3}-[0-9]{2}-[0-9]{2}"
                placeholder="+99893-595-66-64"
              />
            </Form.Group>
            <Form.Group className="mb-3" style={{ marginBottom: "20px" }}>
              <Form.Label>Bog'cha nomi</Form.Label>
              <Form.Control type="text" placeholder="Bog'cha nomi" />
            </Form.Group>
          </Form>
        </div>
      </div>
    );
  }
}
