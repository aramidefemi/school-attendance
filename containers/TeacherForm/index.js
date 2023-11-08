import React, { useState } from 'react';
import { Form, Input, Select, DatePicker, Button } from 'antd';
import axios from 'axios';
import styles from './TeacherForm.module.css';

const { Option } = Select;

const TeacherForm = () => {
  const [form] = Form.useForm();

  const onFinish = async (values) => {
    try {
      // Perform an API call to save teacher details (replace with your API endpoint)
      const response = await axios.post('/api/teachers', values);
      console.log('Teacher details saved:', response.data);
    } catch (error) {
      console.error('Error saving teacher details:', error);
    }
  };

  return (
    <Form form={form} onFinish={onFinish}>
      <Form.Item label="National ID Number" name="nationalId" rules={[{ required: true, message: 'Please input your National ID Number' }]}>
        <Input />
      </Form.Item>
      <Form.Item label="Title" name="title" rules={[{ required: true, message: 'Please select a Title' }]}>
        <Select>
          <Option value="Mr">Mr</Option>
          <Option value="Mrs">Mrs</Option>
          <Option value="Miss">Miss</Option>
          <Option value="Dr">Dr</Option>
          <Option value="Prof">Prof</Option>
        </Select>
      </Form.Item>
      <Form.Item label="Name" name="name" rules={[{ required: true, message: 'Please input your Name' }]}>
        <Input />
      </Form.Item>
      <Form.Item label="Surname" name="surname" rules={[{ required: true, message: 'Please input your Surname' }]}>
        <Input />
      </Form.Item>
      <Form.Item label="Date of Birth" name="dob" rules={[{ required: true, message: 'Please select your Date of Birth' }]}>
        <DatePicker />
      </Form.Item>
      <Form.Item label="Teacher Number" name="teacherNumber" rules={[{ required: true, message: 'Please input your Teacher Number' }]}>
        <Input />
      </Form.Item>
      <Form.Item label="Salary" name="salary">
        <Input />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit">
          Save Teacher Details
        </Button>
      </Form.Item>
    </Form>
  );
};

export default TeacherForm;
