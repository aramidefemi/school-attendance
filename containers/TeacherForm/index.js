import React, { useState } from 'react';
import { Form, Input, Select, DatePicker, Button, message } from 'antd';
import axios from 'axios'; 
import Link from 'next/link';
import styles from './TeacherForm.module.css';

const { Option } = Select;

const TeacherForm = () => {
  const [form] = Form.useForm();
   const [messageApi, contextHolder] = message.useMessage();

  const onFinish = async (values) => {
    try {
          messageApi.open({
      type: 'loading',
      content: 'saving details...',
      duration: 0,
        });
      
      const response = await axios.post('http://localhost:4000/api/teachers', values);

      setTimeout(messageApi.destroy, 1500);
       
    } catch (error) {
      console.error('Error saving teacher details:', error);
    }
  };

  return (
      <div className={styles.container}>
      <div className={styles.content}>
        {contextHolder}
        <h1>Sign up as a student</h1>
        <div className={styles.cardContainer}> 
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
        </Button> <Link href="/teachers-list"> <Button type="link"  >
          View Teachers
        </Button></Link>
      </Form.Item>
    </Form>        </div>
      </div>
    </div>
  );
};

export default TeacherForm;
