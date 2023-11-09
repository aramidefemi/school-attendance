import React from 'react';
import { Form, Input, DatePicker, Button, message } from 'antd';
import axios from 'axios';
import Link from 'next/link';
import styles from './StudentForm.module.css';

const StudentForm = () => {
  const [form] = Form.useForm();
   const [messageApi, contextHolder] = message.useMessage();

  const onFinish = async (values) => {
    try {
         messageApi.open({
      type: 'loading',
      content: 'saving details...',
      duration: 0,
        });
      const response = await axios.post('http://localhost:4000/api/students', values);
       setTimeout(messageApi.destroy, 1500); 
    } catch (error) {
      console.error('Error saving student details:', error);
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
      <Form.Item label="Name" name="name" rules={[{ required: true, message: 'Please input your Name' }]}>
        <Input />
      </Form.Item>
      <Form.Item label="Surname" name="surname" rules={[{ required: true, message: 'Please input your Surname' }]}>
        <Input />
      </Form.Item>
      <Form.Item label="Date of Birth" name="dob" rules={[{ required: true, message: 'Please select your Date of Birth' }]}>
        <DatePicker />
      </Form.Item>
      <Form.Item label="Student Number" name="studentNumber" rules={[{ required: true, message: 'Please input your Student Number' }]}>
        <Input />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit">
          Save Student Details
        </Button>  <Link href="/student-list"> <Button type="link"  >
          View Student
        </Button></Link>
      </Form.Item>
                    </Form>
                     </div>
      </div>
    </div>
  );
};

export default StudentForm;
