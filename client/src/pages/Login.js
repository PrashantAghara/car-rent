import React from "react";
import { Link } from "react-router-dom";
import { Row, Col, Input, Form } from "antd";
import { useDispatch } from "react-redux";
import { userLogin } from "../redux/actions/userAction";
function Login() {
  const dispatch = useDispatch();
  function onFinish(values) {
    dispatch(userLogin(values));
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
            <h1>LOGIN</h1>
            <Form.Item
              name="username"
              label="Username"
              rules={[{ required: true }]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              name="password"
              label="Password"
              rules={[{ required: true }]}
            >
              <Input />
            </Form.Item>
            <button className="btn1">Login</button>
            <br />
            <div className="acc">
              <p>
                New User? <Link to="/register">Click Here</Link>
              </p>
            </div>
          </Form>
        </Col>
      </Row>
    </div>
  );
}

export default Login;
