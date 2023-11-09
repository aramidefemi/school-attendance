import React, { useEffect, useState } from 'react';
import { Layout, Table, Button } from 'antd';
import Link from 'next/link';
import axios from 'axios'; 

const { Header, Content } = Layout;

const columns = [
  { title: 'National ID', dataIndex: 'nationalId', key: 'nationalId' },
  { title: 'Name', dataIndex: 'name', key: 'name' },
  { title: 'Surname', dataIndex: 'surname', key: 'surname' },
  { title: 'Date of Birth', dataIndex: 'dob', key: 'dob' },
  { title: 'Student Number', dataIndex: 'studentNumber', key: 'studentNumber' },
];
const headerStyle = {
  textAlign: 'center',
  color: '#fff',
  height: 64,
  paddingInline: 50,
  lineHeight: '64px',
  backgroundColor: '#7dbcea',
};
const StudentList = () => {
  const [studentData, setStudentData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get('http://localhost:4000/api/students')
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
     <Header  style={headerStyle}  >
        
      </Header>
      <Content style={{ padding: '0 50px' }}>
    
      <h1>Student List <Link href="/new-student">
                <Button type="primary"  >
                  Add
                </Button>
              </Link></h1>
      <Table columns={columns} dataSource={studentData} loading={loading} />
      </Content> </div>
  );
};

export default StudentList;
