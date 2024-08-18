import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Input, Form } from 'antd';

const Login: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (values: { username: string; password: string }) => {
    setLoading(true);
    try {
      if (values.username === 'admin' && values.password === 'password') {
        localStorage.setItem('auth', 'true'); 
        navigate('/'); 
      } else {
        alert('Invalid credentials');
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-sm w-full animate-fadeIn">
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
          Login
        </h2>
        <Form onFinish={handleLogin}>
          <Form.Item
            name="username"
            rules={[{ required: true, message: 'Please input your username!' }]}
          >
            <Input
              placeholder="Username"
              className="border border-gray-300 rounded-md py-2 px-4 mb-4 transition duration-300 ease-in-out focus:border-blue-500 focus:ring focus:ring-blue-200"
            />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[{ required: true, message: 'Please input your password!' }]}
          >
            <Input.Password
              placeholder="Password"
              className="border border-gray-300 rounded-md py-2 px-4 mb-4 transition duration-300 ease-in-out focus:border-blue-500 focus:ring focus:ring-blue-200"
            />
          </Form.Item>
          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              loading={loading}
              className="w-full bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300"
            >
              Login
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default Login;
