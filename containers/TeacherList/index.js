import React, { useEffect, useState } from 'react';
import { Layout, Table, Button  } from 'antd';
import Link from 'next/link';
import axios from 'axios'; 

const { Header, Content } = Layout;

const columns = [
  { title: 'National ID', dataIndex: 'nationalId', key: 'nationalId' },
  { title: 'Title', dataIndex: 'title', key: 'title' },
  { title: 'Name', dataIndex: 'name', key: 'name' },
  { title: 'Surname', dataIndex: 'surname', key: 'surname' },
  { title: 'Date of Birth', dataIndex: 'dob', key: 'dob' },
  { title: 'Teacher Number', dataIndex: 'teacherNumber', key: 'teacherNumber' },
  { title: 'Salary', dataIndex: 'salary', key: 'salary' },
];

const headerStyle = {
  textAlign: 'center',
  color: '#fff',
  height: 64,
  paddingInline: 50,
  lineHeight: '64px',
  backgroundColor: '#7dbcea',
};

const TeacherList = () => {
  const [teacherData, setTeacherData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get('http://localhost:4000/api/teachers')
      .then((response) => {
        setTeacherData(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching teacher data:', error);
        setLoading(false);
      });
  }, []);

  return (<div>
     <Header  style={headerStyle}  >
        
      </Header>
      <Content style={{ padding: '0 50px' }}>
    
      <h1>Teacher List  <Link href="/new-teacher">
                <Button type="primary"  >
                  Add
                </Button>
              </Link></h1>
      <Table columns={columns} dataSource={teacherData} loading={loading} />
   </Content> </div>
  );
};

export default TeacherList;
