// HomeContainer.js
import React from 'react';
import { Card, Button } from 'antd';
import Link from 'next/link';
import styles from './Home.module.css';

const HomeContainer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1>Welcome to Our Platform</h1>
        <div className={styles.cardContainer}>
          <Card
            title="Continue as a Teacher"
            className={styles.card}
            extra={
              <Link href="/new-teacher">
                <Button type="primary" className={styles.cardButton}>
                  Go
                </Button>
              </Link>
            }
          >
            This is for teachers.
               <br />
            <Link href="/teachers-list"> <Button type="link"  >
          View Teachers
        </Button></Link>
          </Card>
          <Card
            title="Continue as a Student"
            className={styles.card}
            extra={
              <Link href="/new-student">
                <Button type="primary" className={styles.cardButton}>
                  Go
                </Button>
              </Link>
            }
          >
            This is for students.
            <br />
              <Link href="/student-list"> <Button type="link"  >
          View Student
        </Button></Link>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default HomeContainer;
