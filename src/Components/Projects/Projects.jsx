import React, { useState } from 'react';
import { Row, Col, Button } from 'react-bootstrap'
import { withRouter } from 'react-router-dom'
import Project from '../Project/Project'
import '../../../node_modules/font-awesome/css/font-awesome.min.css';
import './Projects.css'
import { AboutContainer, Header} from '../styledcomponents'
import gemma from '../../Assets/Images/gemma.jpg'
import dawaya from '../../Assets/Images/dawaya.png'
import babmakkah from '../../Assets/Images/babmakkah.png'
import whitepointelabd from '../../Assets/Images/whitepoint.png'

function Projects() {
    const [projectsToShow,setProjects] = useState('all') 
    const projectslist = [
        {
            id:1,
            img: babmakkah,
            description: "E-commerce website for Bab Makkah which is a marketplace in Jeddah, Saudi Arabia.",
            technology: "reactjs",
            title: "BABMAKKAH",
            url: "https://www.babmakkah.com"
        },
        {
            id:2,
            img: whitepointelabd,
            description: "E-commerce website for electronic products.",
            technology: "reactjs",
            title: "WHITEPOINT EL ABD",
            url: "https://www.whitepointelabd.com"
        },
        {
            id:3,
            img:gemma,
            description: "Website for GEMMA Egypt, one of the biggest Ceramic Companies in Egypt.",
            technology: "reactjs",
            title: 'GEMMA',
            url: "https://www.gemma.com.eg"
        },
        {
            id:4,
            img:dawaya,
            description: "An E-commerce website where you can order medicines and the nearest pharmacy to your zone will provide it to you.",
            title: "DAWAYA",
            technology: "angular",
            url: "http://dawaya.com"
        }
    ]
    let projects = []
    if (projectsToShow === 'all') {
        projects = projectslist;
    }
    else if (projectsToShow === 'reactjs') {
        projects = projectslist.filter(x => x.technology === 'reactjs');
    }
    else if (projectsToShow === 'angular') {
        projects = projectslist.filter(x => x.technology === 'angular');
    }
    return (
        <AboutContainer style={{marginTop:'80px'}}  >
            <Header>
                Projects
        </Header>
            <Row style={{ marginTop: '50px', marginBottom: '50px' }}>
                <Col md={12}>
                <Button  className="tabs" variant="light" onClick={() => setProjects("all")}>All</Button> 
                    <Button className="tabs"  onClick={() => setProjects("reactjs")} variant="light"  >ReactJs</Button> 
                    <Button className="tabs"  variant="light"  onClick={() => setProjects("angular")}>Angular</Button>
                </Col>
            </Row>
            <Row>
                <Col md={12}>
                        {projects.map(project => (
                            <Project 
                                key={project.id}
                                title={project.title}
                                url={project.url}
                                img={project.img}
                                description={project.description} />
                        ))}
                </Col>
            </Row>

            {/* <i class="fas fa-laptop-code"></i> */}
        </AboutContainer>
    );
}
export default withRouter(Projects)