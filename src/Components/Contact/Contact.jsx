import React from 'react';
import { Row, Col } from 'react-bootstrap'
import { withRouter } from 'react-router-dom'
import '../../../node_modules/font-awesome/css/font-awesome.min.css';
import { Header, AboutContainer, Name, Contact} from '../styledcomponents'

import './Contact.css'
function ContactMe() {
   
    return (
        <AboutContainer style={{marginTop:'80px'}} id="contactme" >
            <Header>
                Email Me?
        </Header>
     
            <Row className="workhistory" style={{ marginTop: '50px', marginBottom: '50px' }}>
                <Col md={12}>
                <p>
        If you need my help with a project or need to ask about anything?
        </p>
        <Contact>
            <a className="contactme" href="mailto:adhamkhaled2427@gmail.com">Hola!</a>
        </Contact>
                </Col>
            </Row>

            {/* <i class="fas fa-laptop-code"></i> */}
        </AboutContainer>
    );
}
export default withRouter(ContactMe)