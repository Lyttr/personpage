import React, { useState } from 'react';
import { Card, Avatar, Typography, Space, Row, Col, Tag, Button } from 'antd';
import { MailOutlined, GithubOutlined, LinkedinOutlined, CodeOutlined, LinkOutlined, DownOutlined, UpOutlined } from '@ant-design/icons';
import { DiTerminal } from 'react-icons/di';
import { FaLaptopCode, FaRobot, FaMicrochip, FaFileAlt } from 'react-icons/fa';
import placeholder from './placeholder.jpg';
const { Meta } = Card;
const { Title, Paragraph } = Typography;

const Profile = () => {
  const [expandedCategories, setExpandedCategories] = useState({});

  const toggleCategory = (category) => {
    setExpandedCategories(prev => ({
      ...prev,
      [category]: !prev[category]
    }));
  };
  const projects = {
    "Hardware and Embedded Systems": [
      {
        title: "STM32 and CAN based Parking Guidance System",
        description: "Scalable three-level (center server, middle server, end point) parking guidance and management system for large parking lots with over 1000 nodes",
        tech: ["STM32", "CAN Protocol", "PCB Design", "ESP32",  "Power Management"]
      },
      {
        title: "ESP32 based Nixie Tube Clock",
        description: "ESP32-based Nixie clock featuring Nixie tube drivers, time display, and online configuration",
        tech: ["ESP32", "Nixie Tubes", "PCB Design", "Web Interface"]
      },
      {
        title: "STM32 and OpenCV based Multifunctional Robot",
        description: "Multi-functional robot with track vehicle, power management, mechanical arm, vision module, and wireless communication",
        tech: ["STM32", "OpenCV", "CNN", "Maix 2 Dock", "OpenMV", "H-bridge", "Infrared Sensors", "Path Recognition"]
      },
      {
        title: "IoT-based Family Security Monitor and Alarm",
        description: "Comprehensive security monitoring system with heart rate, blood oxygen, location, fall detection, and automatic alarms",
        tech: ["IoT", "4G Module", "Wearable Device", "Heart Rate Monitor", "Fall Detection", "Cloud Platform", "Voice Control"]
      }
    ],
    "Software": [
      {
        title: "Github Repository Analyzer",
        description: "AI-Powered Code Analysis Platform with real-time streaming chat and interactive file analysis",
        tech: ["React", "Vite", "Ant Design", "Node.js", "Express", "GitHub API", "Claude AI"]
      },
      {
        title: "Wearable Health Monitor",
        description: "IoT-based Health Monitor Platform with real-time data visualization for biomedical sensor monitoring",
        tech: ["React", "Ant Design", "Node.js"]
      },
      {
        title: "EasyTravel",
        description: "Google Map-based Smart Travel Planner with POI search, filter, recommendation, and travel plans generator",
        tech: ["React", "Google Map API", "SpringBoot", "MongoDB", "POI Management"]
      },
      {
        title: "NearU",
        description: "Cloud and React-based Social Network with short-video web application and enhanced authentication",
        tech: ["React", "Go", "GAE", "JWT", "ElasticSearch", "GCS", "Authentication"]
      },
      {
        title: "Upload&Ask",
        description: "Full-Stack AI Agent for Document Queries with real-time PDF uploads and interactive AI responses",
        tech: ["React", "Ant Design", "Express", "Node.js", "GPT-3.5", "Langchain", "Vector Store", "PDF Processing"]
      },
      {
        title: "FullFoods",
        description: "Spring Boot-Based Online Food Ordering Platform with comprehensive ordering and checkout system",
        tech: ["SpringBoot", "Spring Security", "PostgreSQL", "AWS RDS", "React", "Ant Design", "AWS ECR", "AWS App Runner"]
      }
    ],
    "Machine Learning": [
      {
        title: "RWKV-IF: RNA Inverse Folding",
        description: "Efficient and controllable framework for RNA inverse folding using attention-free RWKV language model with linear complexity",
        tech: ["RWKV", "RNA Design", "LLM", "Generative Model"]
      },
      {
        title: "RWKV-Mamba-based Pathological image classification of Breast Cancer",
        description: "Proposed an RWKV-Mamba-based MIL approach for pathological image classification tasks with 8.9% AUC improvement",
        tech: ["RWKV", "Mamba", "MIL", "Pathological Image Classification", "CMELYON16"]
      }
    ]
  };

  const publications = [
    {
      title: "RWKV-IF: Efficient and Controllable RNA Inverse Folding via Attention-Free Language Modeling",
      link: "https://www.biorxiv.org/content/10.1101/2025.06.13.659654v1"
    },
    {
      title: "Rnn-based multiple instance learning for the classification of histopathology whole slide images",
      link: "https://link.springer.com/chapter/10.1007/978-981-97-1335-6_29"
    }
  ];

  const skillCategories = [
    {
      title: "Hardware and Embedded Systems",
      icon: <FaMicrochip />,
      skills: ["STM32", "ESP32", "Arduino", "Maix-Dock", "RTOS", "IoT", "Embedded Systems", "Wearable Device", "PCB Design", "FPC Design", "Analog Front-End", "CAN", "IIC", "SPI", "UART"]
    },
    {
      title: "Software",
      icon: <FaLaptopCode />,
      skills: ["Java", "JavaScript", "Python", "Kotlin", "Go", "C", "React", "SpringBoot", "Node.js", "Android", "HTML & CSS", "SQL", "PostgreSQL", "MySQL", "MongoDB", "ElasticSearch", "AWS ECR", "GCS", "GAE"]
    },
    {
      title: "Machine Learning",
      icon: <FaRobot />,
      skills: ["PyTorch", "RWKV", "Mamba", "LLM", "Computer Vision", "MIL","Multi-Modal Model", "Generative Model","Computer Aided Diagnosis","RNA Design"]
    }
  ];

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
      <div style={{ width: '100%', maxWidth: '1200px' }}>
        {/* Header Card */}
        <Card
          style={{ 
            width: '100%', 
            backgroundColor: '#2d2d2d', 
            border: '1px solid #444', 
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.5)',
            marginBottom: '20px'
          }}
          cover={
            <div style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              padding: '20px'
            }}>
              <DiTerminal size={80} color="#08c" />
            </div>
          }
          actions={[
            <a href="mailto:xuanmiaoji@gmail.com" target="_blank" rel="noopener noreferrer" style={{ color: '#08c', fontSize: '24px' }}><MailOutlined key="mail" /></a>,
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
                  Seeking 2026 SDE, hardware engineer and MLE full-time positions. MS ECE student at UCSD, specializing in Machine
                  Learning and Data Science. A wide range of full-stack project experience on Web development, hardware design, IOT development, and machine learning.
                </Paragraph>
              </Space>
            }
          />
        </Card>

        {/* Skills Section */}
        <Card
          title={<Title level={3} style={{ color: '#fff', margin: 0 }}>Skills & Expertise</Title>}
          style={{ 
            backgroundColor: '#2d2d2d', 
            border: '1px solid #444', 
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.5)',
            marginBottom: '20px'
          }}
        >
          <Row gutter={[16, 16]}>
            {skillCategories.map((category, index) => (
              <Col xs={24} sm={12} lg={8} key={index}>
                <Card 
                  title={
                    <span style={{ color: '#fff', fontSize: '14px' }}>
                      {category.icon} {category.title}
                    </span>
                  } 
                  bordered={false} 
                  style={{ backgroundColor: '#333', color: '#fff' }}
                >
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '4px' }}>
                    {category.skills.map((skill, skillIndex) => (
                      <Tag key={skillIndex} color="blue" style={{ margin: '2px' }}>
                        {skill}
                      </Tag>
                    ))}
                  </div>
                </Card>
              </Col>
            ))}
          </Row>
        </Card>

        {/* Publications Section */}
        <Card
          title={<Title level={3} style={{ color: '#fff', margin: 0 }}>Publications</Title>}
          style={{ 
            backgroundColor: '#2d2d2d', 
            border: '1px solid #444', 
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.5)',
            marginBottom: '20px'
          }}
        >
          <Space direction="vertical" size="large" style={{ width: '100%' }}>
            {publications.map((pub, index) => (
              <Card
                key={index}
                title={
                  <Title level={4} style={{ color: '#fff', margin: 0 }}>{pub.title}</Title>
                }
                bordered={false}
                style={{ backgroundColor: '#333', color: '#fff' }}
                extra={
                  <a href={pub.link} target="_blank" rel="noopener noreferrer" style={{ color: '#08c' }}>
                    <LinkOutlined />
                  </a>
                }
              >
              </Card>
            ))}
          </Space>
        </Card>

        {/* Projects Section */}
        <Card
          title={<Title level={3} style={{ color: '#fff', margin: 0 }}>Projects</Title>}
          style={{ 
            backgroundColor: '#2d2d2d', 
            border: '1px solid #444', 
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.5)'
          }}
        >
          <Row gutter={[16, 16]}>
            {Object.entries(projects).map(([category, categoryProjects]) => {
              const isExpanded = expandedCategories[category];
              const displayProjects = isExpanded ? categoryProjects : categoryProjects.slice(0, 2);
              const hasMoreProjects = categoryProjects.length > 2;
              
              return (
                <Col xs={24} lg={8} key={category}>
                  <Card
                    title={
                      <Title level={4} style={{ color: '#fff', margin: 0, textAlign: 'center' }}>
                        {category}
                      </Title>
                    }
                    bordered={false}
                    style={{ backgroundColor: '#333', color: '#fff', height: '100%' }}
                  >
                    <Space direction="vertical" size="large" style={{ width: '100%' }}>
                      {displayProjects.map((project, index) => (
                        <Card
                          key={index}
                          title={
                            <Title level={5} style={{ color: '#fff', margin: 0, fontSize: '14px', lineHeight: '1.3', wordBreak: 'break-word', whiteSpace: 'normal' }}>
                              {project.title}
                            </Title>
                          }
                          bordered={false}
                          style={{ backgroundColor: '#444', color: '#fff' }}
                          extra={
                            project.link ? (
                              <a href={project.link} target="_blank" rel="noopener noreferrer" style={{ color: '#08c' }}>
                                <LinkOutlined />
                              </a>
                            ) : null
                          }
                        >
                          <Paragraph style={{ color: '#aaa', fontSize: '12px', marginBottom: '8px' }}>
                            {project.description}
                          </Paragraph>
                          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '2px' }}>
                            {project.tech.map((tech, techIndex) => (
                              <Tag key={techIndex} color="orange" style={{ margin: '1px', fontSize: '10px' }}>
                                {tech}
                              </Tag>
                            ))}
                          </div>
                        </Card>
                      ))}
                      {hasMoreProjects && (
                        <div style={{ textAlign: 'center', marginTop: '16px' }}>
                          <Button
                            size="small"
                            onClick={() => toggleCategory(category)}
                            style={{
                              backgroundColor: '#444',
                              borderColor: '#666',
                              color: '#fff',
                              fontSize: '12px',
                              fontFamily: 'Fira Code, monospace'
                            }}
                            icon={isExpanded ? <UpOutlined /> : <DownOutlined />}
                          >
                            {isExpanded ? 'Show Less' : `Show All (${categoryProjects.length})`}
                          </Button>
                        </div>
                      )}
                    </Space>
                  </Card>
                </Col>
              );
            })}
          </Row>
        </Card>
      </div>
    </div>
  );
};

export default Profile;
