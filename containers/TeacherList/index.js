import React, { useEffect, useState } from 'react';
import { Table } from 'antd';
import axios from 'axios';

const columns = [
  { title: 'National ID', dataIndex: 'nationalId', key: 'nationalId' },
  { title: 'Title', dataIndex: 'title', key: 'title' },
  { title: 'Name', dataIndex: 'name', key: 'name' },
  { title: 'Surname', dataIndex: 'surname', key: 'surname' },
  { title: 'Date of Birth', dataIndex: 'dob', key: 'dob' },
  { title: 'Teacher Number', dataIndex: 'teacherNumber', key: 'teacherNumber' },
  { title: 'Salary', dataIndex: 'salary', key: 'salary' },
];

const TeacherList = () => {
  const [teacherData, setTeacherData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get('/api/teachers')
      .then((response) => {
        setTeacherData(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching teacher data:', error);
        setLoading(false);
      });
  }, []);

  return (
    <div>
      <h1>Teacher List</h1>
      <Table columns={columns} dataSource={teacherData} loading={loading} />
    </div>
  );
};

export default TeacherList;
