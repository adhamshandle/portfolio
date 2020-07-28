import React, { useEffect } from 'react';
import styled from 'styled-components'
import {Card } from 'react-bootstrap'
// import { postObject, getAllObjects } from "../../services/CommonServices";
import { withRouter, Link } from 'react-router-dom'
import '../../../node_modules/font-awesome/css/font-awesome.min.css'; 

const Container = styled.div`
height: 100vh;
width: 100%;
display:flex;
justify-content: center;
margin-top:20px;
`

const Header = styled.h1`
color: #1f2737;
text-decoration: underline;

`

function About() {
  return (
    <Container >
        <Header>
            ABOUT
        </Header>
        <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="holder.js/100px180" />
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
      <i className="fas fa-laptop-code"></i> 
    </Card.Text>
  </Card.Body>
</Card>

  {/* <i class="fas fa-laptop-code"></i> */}
    </Container>
  );
}
export default withRouter(About)