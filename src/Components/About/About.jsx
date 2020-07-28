import React, { useEffect } from 'react';
import styled from 'styled-components'
import { Card, Row, Col } from 'react-bootstrap'
// import { postObject, getAllObjects } from "../../services/CommonServices";
import { withRouter, Link } from 'react-router-dom'
import { faLaptopCode, faMobileAlt,faTabletAlt,faDesktop } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import '../../../node_modules/font-awesome/css/font-awesome.min.css';

const Container = styled.div`
height: 100vh;
text-align: center;
margin-left: 10%;
margin-right: 10%;
margin-top:20px;
`

const Header = styled.h1`
color: #1f2737;
text-decoration: underline;
width: 100%;

`

function About() {
  return (
    <Container >
      <Row>
      <Header>
        ABOUT
        </Header>
        <Col md={3}>
          <Card style={{ width: '15rem', height:'10rem', backgroundColor : '#1f2737' }}>
            <Card.Body>

              <FontAwesomeIcon icon={faLaptopCode} size="6x" color="#ed6c82" />
              <Card.Text style={{color:'white', fontWeight:'700',position:'absolute',bottom:'5px',width:'80%'}}>Javascript Native</Card.Text>
            </Card.Body>
          </Card>

        </Col>
        <Col md={3}>
          <Card style={{ width: '15rem', height:'10rem', backgroundColor : '#1f2737' }}>
            <Card.Body>

              <FontAwesomeIcon icon={faMobileAlt} size="3x" style={{padding:'5px'}} color="#ed6c82" />
              <FontAwesomeIcon icon={faTabletAlt} size="4x" style={{padding:'5px'}} color="#ed6c82" />
              <FontAwesomeIcon icon={faDesktop} size="5x" style={{padding:'5px'}} color="#ed6c82" />
              <Card.Text style={{color:'white', fontWeight:'700',position:'absolute',bottom:'5px',width:'80%'}}>Responsive Design</Card.Text>
            </Card.Body>
          </Card>

        </Col>
      </Row>


      {/* <i class="fas fa-laptop-code"></i> */}
    </Container>
  );
}
export default withRouter(About)