import React, { useEffect } from 'react';
import styled from 'styled-components'
import { Nav,NavDropdown,Navbar } from 'react-bootstrap'
// import { postObject, getAllObjects } from "../../services/CommonServices";
import { withRouter, Link } from 'react-router-dom'
import './intro.css'
const Container = styled.div`
background-color: #1f2737;
height: 100vh;
width: 100%;
display:flex;
justify-content: center;

`
const IntroBrief = styled.h1`
display: flex;
color: white;
position: absolute;
justify-content: center;
width:100%;
top:35%;
`

const Name = styled.p`
color: #ed6c82;
margin: 0px;
padding: 0px;
width: fit-content;
`
const JobTitle = styled.p`
font-size: 2.9rem;
color:white;
display: flex;
color: white;
position: absolute;
justify-content: center;
width:100%;
top:42%;
`
const Contact = styled.a`
background: transparent;
height: 50px;
width: 100px;
font-size: 1.2rem;
color: #ed6c82 !important;
text-align: center;
margin:auto;
letter-spacing: 2px;
border: 1px solid  #ed6c82;
position: absolute;
top: 55%;
padding:8px;
cursor: pointer;
font-weight: 700;
&:hover {
    background-color: #ed6c82;
    color: #1f2737 !important;
    border: 1px solid  #ed6c82;
  }
text-transform: uppercase;
width:11%;

`
const NavContainer = styled.div`
position: absolute;
bottom: 0px;
left:40px;
height: 80px;
color:white;
`
function Intro() {
  return (
    <Container>
     <IntroBrief>Hello I'm <Name>&nbsp;Adham Khaled</Name></IntroBrief>
     <JobTitle>I'm Frontend Developer</JobTitle>
     <Contact href="#" role="button" className="btn main-button mt-3">Contact</Contact>
     <NavContainer>
     <Navbar collapseOnSelect expand="lg" bg="transparent" variant="transparent">
  <Navbar.Brand className="active" href="#home">HOME</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="#about">ABOUT</Nav.Link>
      <Nav.Link href="#portfolio">PORTFOLIO</Nav.Link>
      <Nav.Link href="#contact">CONTACT</Nav.Link>
    </Nav>
    <Nav>
    </Nav>
  </Navbar.Collapse>
</Navbar>
</NavContainer>
     </Container>
  );
}
export default withRouter(Intro)