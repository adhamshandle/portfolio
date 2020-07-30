import React, { useState } from 'react';
import { Row, Col, Button } from 'react-bootstrap'
import { Tabs, Tab } from 'react-bootstrap-tabs';
import { withRouter, Link } from 'react-router-dom'
import Project from '../Project/Project'
import '../../../node_modules/font-awesome/css/font-awesome.min.css';
import { WorkHistoryCard, Header, AboutContainer, Name} from '../styledcomponents'
import ImperialCreation from '../../Assets/Images/imperialcreation.png'
import Qpix from '../../Assets/Images/qpix.jpg'
import './WorkHistory.css'
function WorkHistory() {
   
    return (
        <AboutContainer style={{marginTop:'80px'}} id="about" >
            <Header>
                Work History
        </Header>
            <Row className="workhistory" style={{ marginTop: '50px', marginBottom: '50px' }}>
                <Col md={4}>
                <WorkHistoryCard>
                    <img src={Qpix} alt="qpix"/>
                    <h4>Qpix</h4>
                </WorkHistoryCard>
                <Name>Frontend Developer</Name>
                </Col>
                <Col md={4}>
                <WorkHistoryCard>
                    <img src={ImperialCreation} alt="Imperial Creation"/>
                    <h4>Imperial Creation</h4>
                </WorkHistoryCard>
                <Name>Frontend Developer</Name>

              </Col>
            </Row>

            {/* <i class="fas fa-laptop-code"></i> */}
        </AboutContainer>
    );
}
export default withRouter(WorkHistory)