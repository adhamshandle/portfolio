import React, { useEffect } from 'react';
import { Card, Row, Col } from 'react-bootstrap'
// import { postObject, getAllObjects } from "../../services/CommonServices";
import { withRouter, Link } from 'react-router-dom'
import { faLaptopCode, faMobileAlt, faTabletAlt, faDesktop, faCode, faRocket } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import '../../../node_modules/font-awesome/css/font-awesome.min.css';
import './About.css'
import  myphoto from '../../Assets/Images/myphoto.jpg'
import {AboutContainer, Header, ImgContainer, ImgItSelf, JobTitle, Name} from '../styledcomponents'
import $ from "jquery"

function About() {

  return (
    <AboutContainer id="about" >
      <Header>
        ABOUT
        </Header>
      <Row style={{ marginTop: '50px', marginBottom: '50px' }}>
        <Col md={3}>
          <Card style={{ width: '15rem', height: '10rem', backgroundColor: '#1f2737' ,borderRadius : '20px'}}>
            <Card.Body>
              <FontAwesomeIcon icon={faLaptopCode} size="6x" color="#ed6c82" />
              <Card.Text style={{ color: 'white', fontWeight: '700', position: 'absolute', bottom: '5px', width: '80%' }}>Javascript Native</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={3}>
          <Card style={{ width: '15rem', height: '10rem', backgroundColor: '#1f2737',borderRadius : '20px' }}>
            <Card.Body>
              <FontAwesomeIcon icon={faMobileAlt} size="3x" style={{ padding: '5px' }} color="#ed6c82" />
              <FontAwesomeIcon icon={faTabletAlt} size="4x" style={{ padding: '5px' }} color="#ed6c82" />
              <FontAwesomeIcon icon={faDesktop} size="5x" style={{ padding: '5px' }} color="#ed6c82" />
              <Card.Text style={{ color: 'white', fontWeight: '700', position: 'absolute', bottom: '5px', width: '80%' }}>Responsive Design</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={3}>
          <Card style={{ width: '15rem', height: '10rem', backgroundColor: '#1f2737' ,borderRadius : '20px'}}>
            <Card.Body>

              <FontAwesomeIcon icon={faCode} size="6x" color="#ed6c82" />
              <Card.Text style={{ color: 'white', fontWeight: '700', position: 'absolute', bottom: '5px', width: '80%' }}>Clean Code</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={3}>
          <Card style={{ width: '15rem', height: '10rem', backgroundColor: '#1f2737' ,borderRadius : '20px' }}>
            <Card.Body>

              <FontAwesomeIcon icon={faRocket} size="6x" color="#ed6c82" />
              <Card.Text style={{ color: 'white', fontWeight: '700', position: 'absolute', bottom: '5px', width: '80%' }}>Dynamic</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col lg={6} md={6} sm={6}>
            <ImgContainer>
            <ImgItSelf src={myphoto} >
            </ImgItSelf>
            </ImgContainer>
        </Col>
        <Col lg={6} md={6} sm={6}>
     <JobTitle>I'm a passionate, ambitious <Name>Front-End developer</Name> who creates codes out of pretty designs and in love with Javascript. I create <Name>websites and web applications.</Name>
     My stack of choice often includes <Name>JavaScript</Name> but I have worked with other languages before. I care about performance, code efficiency, and the user experience. 
        Native in <Name>HTML/CSS/JS</Name> and aiming to learn all the frameworks in between.
        Always learning new skills and technologies to add to what I already know. </JobTitle>
          
        </Col>
      </Row>


      {/* <i class="fas fa-laptop-code"></i> */}
    </AboutContainer>
  );
}
export default withRouter(About)