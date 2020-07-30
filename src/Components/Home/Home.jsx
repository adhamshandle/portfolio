import React, { useEffect } from 'react';
import { withRouter } from 'react-router-dom'
import Intro from '../Intro/intro'
import About from '../About/About';
import Projects from '../Projects/Projects';
import './Home.css'
function Home() {
    return (
     <>
    <Intro/>
    <About/>
    <Projects/>
     </>
    );
  }
  export default withRouter(Home)