import React from 'react'
import { Row, Col } from 'react-bootstrap'
import './project.css'

import { Name } from '../styledcomponents'
export default (props) => (
    <Row>
        <Col md={6}>
            <img draggable="false" alt="project image" className="project-image" src={props.img} />
        </Col>
        <Col md={6}>
            <p className="projectParagraph">{props.description}</p>
            <Name>{props.title}</Name>
            <Name><a className="anchorproject" target="_blank" href={props.url}>Visit it</a></Name>
        </Col>
    </Row>

)