import React from 'react'
import { Form, Input } from 'antd';
import { Link } from 'react-router-dom';

const Login = () => {
    const SubmitHandler=(values)=>{
        console.log(values);
    }
  return (
    <>
     <div className="register-page container mt-5">
        <Form layout="vertical" onFinish={SubmitHandler}>
          <h1>Login Form</h1>

          <Form.Item label="Email" name="email">
            <Input type="email" />
          </Form.Item>

          <Form.Item label="Password" name="password">
            <Input type="password" />
          </Form.Item>

          <div className="d-flex justify-content-between align-items-center mt-3">
            <Link to="/register">Not a user? Click here to Register</Link>
            <button type="submit" className="btn btn-primary">
              Register
            </button>
          </div>
        </Form>
      </div>
    </>
  )
}

export default Login