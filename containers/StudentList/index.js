import React, { useEffect, useState } from 'react';
import { Table } from 'antd';
import axios from 'axios';

const columns = [
  { title: 'National ID', dataIndex: 'nationalId', key: 'nationalId' },
  { title: 'Name', dataIndex: 'name', key: 'name' },
  { title: 'Surname', dataIndex: 'surname', key: 'surname' },
  { title: 'Date of Birth', dataIndex: 'dob', key: 'dob' },
  { title: 'Student Number', dataIndex: 'studentNumber', key: 'studentNumber' },
];

const StudentList = () => {
  const [studentData, setStudentData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get('/api/students')
      .then((response) => {
        setStudentData(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching student data:', error);
        setLoading(false);
      });
  }, []);

  return (
    <div>
      <h1>Student List</h1>
      <Table columns={columns} dataSource={studentData} loading={loading} />
    </div>
  );
};

export default StudentList;
