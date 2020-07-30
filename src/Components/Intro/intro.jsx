import React, { useEffect } from 'react';
import { Nav,Row,Navbar, Col } from 'react-bootstrap'
// import { postObject, getAllObjects } from "../../services/CommonServices";
import { withRouter, Link } from 'react-router-dom'
import './intro.css'
import {IntroContainer, IntroBrief, Contact, Name, NavContainer} from '../styledcomponents'

function Intro() {
  $('#gothere').click(function(event) {
    event.preventDefault();
  $.scrollTo($('#about'), 1000);
});
  return (
    <IntroContainer>
      <Row>
        <Col lg={12} sm={12} xs={12} md={12}>
     <IntroBrief>Hello there, i'm <Name>&nbsp;Adham Khaled.</Name></IntroBrief>
     </Col>
     </Row>
     <Row>
       <Col lg={12} md={12} sm={12} xs={12}>
     <Contact href="#" role="button" className="btn main-button mt-3">Contact</Contact>
     </Col>
     </Row>
     <NavContainer>
     <Navbar collapseOnSelect expand="lg" bg="transparent" variant="transparent">
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">
  <Navbar.Brand className="active" href="#home">HOME</Navbar.Brand>
      <Nav.Link id="gothere" href="#about">ABOUT</Nav.Link>
      <Nav.Link href="#portfolio">PORTFOLIO</Nav.Link>
      <Nav.Link href="#contact">CONTACT</Nav.Link>
    </Nav>
    <Nav>
    </Nav>
  </Navbar.Collapse>
</Navbar>
</NavContainer>
     </IntroContainer>
  );
}
export default withRouter(Intro)