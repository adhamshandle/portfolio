import React from 'react';
import { withRouter } from 'react-router-dom'
import Intro from '../Intro/intro'
import About from '../About/About';
import Projects from '../Projects/Projects';
import WorkHistory from '../WorkHistory/WorkHistory';
import './Home.css'
import ContactMe from '../Contact/Contact';
import Social from '../social/Social';
function Home() {
    return (
     <>
    <Intro/>
    <About/>
    <Projects/>
    <WorkHistory/>
    <ContactMe/>
    <Social/>
     </>
    );
  }
  export default withRouter(Home)