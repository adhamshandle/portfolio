import React from 'react';
import { withRouter } from 'react-router-dom'
import { Row, Col } from 'react-bootstrap'
import { Header, SocialContainer, NameCopyRights, CopyRights } from '../styledcomponents'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFileDownload} from "@fortawesome/free-solid-svg-icons";

import { faTwitterSquare, faLinkedin, faInstagramSquare, faGithubSquare } from "@fortawesome/free-brands-svg-icons"
import '../../../node_modules/font-awesome/css/font-awesome.min.css';
import './Social.css'
function Social() {

    return (
        <SocialContainer>
            <Row>
                <Col md={12}>
                    <a href="https://twitter.com/adhamshandle" target="_blank"><FontAwesomeIcon icon={faTwitterSquare} size="1x" color="#ed6c82" /></a>
                    <a href="https://www.linkedin.com/in/adhamshandle/" target="_blank"><FontAwesomeIcon icon={faLinkedin} size="1x" color="#ed6c82" /></a>
                    <a href="https://www.instagram.com/adhamshandle/?hl=en" target="_blank"><FontAwesomeIcon icon={faInstagramSquare} size="1x" color="#ed6c82" /></a>
                    <a href="https://github.com/adhamshandle" target="_blank"><FontAwesomeIcon icon={faGithubSquare} size="1x" color="#ed6c82" /></a>
                    <a href="https://drive.google.com/file/d/1yhxp_HzIeo6aePkjpfJ3IqiEGyKLPPCz/view?usp=sharing" target="_blank"><FontAwesomeIcon alt="CV" icon={faFileDownload} size="1x" color="#ed6c82" /></a>
                </Col>
            </Row>
            <Row>
                <Col md={12}>
                    <CopyRights>Copyright <NameCopyRights>Adham Khaled.</NameCopyRights> All Rights Reserved.</CopyRights>
                </Col>
            </Row>
        </SocialContainer>
    );
}
export default withRouter(Social)