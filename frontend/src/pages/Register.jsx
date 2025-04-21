import React from 'react';
import { Form, Input } from 'antd';
import { Link } from 'react-router-dom';

const Register = () => {
    const SubmitHandler=()=>{
        console.log(values);

    }
  return (
    <>
      <div className="register-page container mt-5">
        <Form layout="vertical" onFinish={SubmitHandler}>
          <h1>Registration Form</h1>

          <Form.Item label="Name" name="name">
            <Input />
          </Form.Item>

          <Form.Item label="Email" name="email">
            <Input type="email" />
          </Form.Item>

          <Form.Item label="Password" name="password">
            <Input type="password" />
          </Form.Item>

          <div className="d-flex justify-content-between align-items-center mt-3">
            <Link to="/login">Already registered? Click here to login</Link>
            <button type="submit" className="btn btn-primary">
              Register
            </button>
          </div>
        </Form>
      </div>
    </>
  );
};

export default Register;
