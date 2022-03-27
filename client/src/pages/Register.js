import React from "react";
import { Row, Col, Input, Form } from "antd";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { userRegister } from "../redux/actions/userAction";
function Register() {
  const dispatch = useDispatch();
  function onFinish(values) {
    dispatch(userRegister(values));
  }
  return (
    <div className="login">
      <Row gutter={16} className="d-flex align-item-center">
        <Col lg={16} className="img-col">
          <img
            src="https://www.teahub.io/photos/full/162-1626987_black-classic-car-wallpapers-4-cool-hd-wallpaper.jpg"
            alt="bg-image"
          />
        </Col>
        <Col lg={8} className="text-left p-5">
          <Form
            layout="vertical"
            className="login-form p-5"
            onFinish={onFinish}
          >
            <h1>REGISTER</h1>
            <Form.Item
              name="username"
              label="Username"
              rules={[{ required: true }]}
            >
              <Input />
            </Form.Item>

            <Form.Item name="email" label="Email" rules={[{ required: true }]}>
              <Input />
            </Form.Item>
            <Form.Item
              name="password"
              label="Password"
              rules={[{ required: true }]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              name="cpassword"
              label="Confirm Password"
              rules={[{ required: true }]}
            >
              <Input />
            </Form.Item>
            <button className="btn1 mt-3 mb-3">Register</button>
            <br />
            <div className="acc">
              <p>
                Already Have An Account? <Link to="/login">Click Here</Link>
              </p>
            </div>
          </Form>
        </Col>
      </Row>
    </div>
  );
}

export default Register;
