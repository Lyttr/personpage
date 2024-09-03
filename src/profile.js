import React from 'react';
import { Card, Avatar, Typography, Space, Row, Col } from 'antd';
import { MailOutlined, GithubOutlined, LinkedinOutlined, CodeOutlined } from '@ant-design/icons';
import { DiTerminal } from 'react-icons/di';
import { GiCircuitry, GiBrain } from 'react-icons/gi';
import placeholder from './placeholder.jpg';
const { Meta } = Card;
const { Title, Paragraph } = Typography;

const Profile = () => {
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      minHeight: '100vh',
      backgroundColor: '#1e1e1e',
      color: '#fff',
      fontFamily: 'Fira Code, monospace',
      padding: '20px',
      backgroundImage: 'url("https://www.transparenttextures.com/patterns/cubes.png")',
    }}>
      <Card
        style={{ width: '100%', maxWidth: '1100px', backgroundColor: '#2d2d2d', border: '1px solid #444', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.5)' }}
        cover={
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '20px'
          }}>
            <DiTerminal size={100} color="#08c" />
          </div>
        }
        actions={[
          <a href="xuanmiaoji@gmail.com" target="_blank" rel="noopener noreferrer" style={{ color: '#08c', fontSize: '24px' }}><MailOutlined key="mail" /></a>,
          <a href="https://github.com/Lyttr" target="_blank" rel="noopener noreferrer" style={{ color: '#08c', fontSize: '24px' }}><GithubOutlined key="github" /></a>,
          <a href="https://linkedin.com/in/gaoyuan-ji-a23b55314" target="_blank" rel="noopener noreferrer" style={{ color: '#08c', fontSize: '24px' }}><LinkedinOutlined key="linkedin" /></a>,
        ]}
      >
        <Meta
          avatar={<Avatar src={placeholder} size={64} />}
          title={<Title level={2} style={{ color: '#fff' }}>Gaoyuan Ji</Title>}
          description={
            <Space direction="vertical" size="large">
              <Paragraph style={{ color: '#aaa', fontSize: '16px' }}>
                <CodeOutlined style={{ marginRight: 8 }} /> Full Stack Developer
              </Paragraph>
              <Paragraph style={{ color: '#aaa', fontSize: '14px' }}>
              Seeking 2025 SDE and MLE internships. Incoming student at UCSD for MS ECE, specializing in Machine
              Learning and Data Science. A wide range of project experience on Web development, machine learning and mobile
              development.

              </Paragraph>
              <Row gutter={[16, 16]}>
                <Col span={12}>
                  <Card title={<span><GiBrain style={{ marginRight: 8 }} />Programming</span>} bordered={false} style={{ backgroundColor: '#333', color: '#fff' }}>
                    <Paragraph style={{ color: '#aaa', fontSize: '14px', marginBottom: '8px' }}>
                      Java, JavaScript, Python, Kotlin, Go, C, SQL
                    </Paragraph>
                  </Card>
                </Col>
                <Col span={12}>
                  <Card title={<span><GiBrain style={{ marginRight: 8 }} />Web/Mobile Development</span>} bordered={false} style={{ backgroundColor: '#333', color: '#fff' }}>
                    <Paragraph style={{ color: '#aaa', fontSize: '14px', marginBottom: '8px' }}>
                      Android, React, SpringBoot, Node.js, HTML & CSS
                    </Paragraph>
                  </Card>
                </Col>
                <Col span={12}>
                  <Card title={<span><GiBrain style={{ marginRight: 8 }} />Databases and Cloud</span>} bordered={false} style={{ backgroundColor: '#333', color: '#fff' }}>
                    <Paragraph style={{ color: '#aaa', fontSize: '14px', marginBottom: '8px' }}>
                      ElasticSearch, PostgreSQL, MySQL, MongoDB, GCS, GAE, AWS ECR
                    </Paragraph>
                  </Card>
                </Col>
                <Col span={12}>
                  <Card title={<span><GiBrain style={{ marginRight: 8 }} />Machine Learning and LLM</span>} bordered={false} style={{ backgroundColor: '#333', color: '#fff' }}>
                    <Paragraph style={{ color: '#aaa', fontSize: '14px', marginBottom: '8px' }}>
                      RWKV, Mamba, PyTorch
                    </Paragraph>
                  </Card>
                </Col>
                <Col span={12}>
                  <Card title={<span><GiCircuitry style={{ marginRight: 8 }} />Embedded Development</span>} bordered={false} style={{ backgroundColor: '#333', color: '#fff' }}>
                    <Paragraph style={{ color: '#aaa', fontSize: '14px', marginBottom: '8px' }}>
                      STM32, ESP32, Arduino, Maix-Dock, PCB, IoT
                    </Paragraph>
                  </Card>
                </Col>
              </Row>
            </Space>
          }
        />
      </Card>
    </div>
  );
};

export default Profile;
