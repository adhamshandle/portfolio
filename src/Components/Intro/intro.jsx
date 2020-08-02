import React from 'react';
import { Row, Col } from 'react-bootstrap'
import Typing from 'react-typing-animation';
import { withRouter } from 'react-router-dom'
import './intro.css'
import {IntroContainer, IntroBrief, Contact, Name} from '../styledcomponents'

function Intro() {

  return (
    <IntroContainer>
      <Row>
        <Col lg={12} sm={12} xs={12} md={12}>
     <Typing><IntroBrief>Hello there, i'm <Name>&nbsp;Adham Khaled.</Name></IntroBrief></Typing>
     </Col>
     </Row>
     <Row >
       <Col style={{marginBottom:'20px'}} lg={12} md={12} sm={12} xs={12}>
     <Contact href="#contactme" role="button" className="btn main-button mt-3">Contact</Contact>
     </Col>
     </Row>
     <Row>
       <Col md={12}>
         <div className="socialmedia">

         </div>
       </Col>
     </Row>
     </IntroContainer>
  );
}
export default withRouter(Intro)