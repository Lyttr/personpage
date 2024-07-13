import React from 'react';
import { Card, Avatar, Typography, Space, Row, Col } from 'antd';
import { MailOutlined, GithubOutlined, LinkedinOutlined, CodeOutlined } from '@ant-design/icons';
import { DiTerminal } from 'react-icons/di';

const { Meta } = Card;
const { Title, Paragraph } = Typography;

const Profile = () => {
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      backgroundColor: '#1e1e1e',
      color: '#fff',
      fontFamily: 'Fira Code, monospace',
      padding: '20px'
    }}>
      <Card
        style={{ width: '100%', maxWidth: '800px', backgroundColor: '#2d2d2d', border: '1px solid #444' }}
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
          <a href="mailto:xuanmiaoji@gmail.com" target="_blank" rel="noopener noreferrer" style={{ color: '#08c', fontSize: '24px' }}><MailOutlined key="mail" /></a>,
          <a href="https://github.com/Lyttr" target="_blank" rel="noopener noreferrer" style={{ color: '#08c', fontSize: '24px' }}><GithubOutlined key="github" /></a>,
          <a href="https://linkedin.com/in/your-username" target="_blank" rel="noopener noreferrer" style={{ color: '#08c', fontSize: '24px' }}><LinkedinOutlined key="linkedin" /></a>,
        ]}
      >
        <Meta
          avatar={<Avatar src="https://via.placeholder.com/64" size={64} />}
          title={<Title level={2} style={{ color: '#fff' }}>Gaoyuan Ji</Title>}
          description={
            <Space direction="vertical" size="large">
              <Paragraph style={{ color: '#aaa', fontSize: '16px' }}>
                <CodeOutlined style={{ marginRight: 8 }} /> Full Stack Developer
              </Paragraph>
              <Paragraph style={{ color: '#aaa', fontSize: '14px' }}>
                A brief introduction about yourself. Passionate about coding, open-source, and coffee.
                Experienced in building modern web applications using React, Node.js, and other technologies.
              </Paragraph>
              <Row gutter={[16, 16]}>
                <Col span={12}>
                  <Card title="Projects" bordered={false} style={{ backgroundColor: '#333', color: '#fff' }}>
                    <Paragraph style={{ color: '#aaa', fontSize: '14px' }}>
                      Project 1: Description of the project.
                    </Paragraph>
                    <Paragraph style={{ color: '#aaa', fontSize: '14px' }}>
                      Project 2: Description of the project.
                    </Paragraph>
                  </Card>
                </Col>
                <Col span={12}>
                  <Card title="Skills" bordered={false} style={{ backgroundColor: '#333', color: '#fff' }}>
                    <Paragraph style={{ color: '#aaa', fontSize: '14px' }}>
                      - JavaScript
                    </Paragraph>
                    <Paragraph style={{ color: '#aaa', fontSize: '14px' }}>
                      - React
                    </Paragraph>
                    <Paragraph style={{ color: '#aaa', fontSize: '14px' }}>
                      - Node.js
                    </Paragraph>
                    <Paragraph style={{ color: '#aaa', fontSize: '14px' }}>
                      - CSS
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
