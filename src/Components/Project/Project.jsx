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
            <br></br>
            <br></br>
        <Row>
                <Col md={12}>
                <p className="title" >{props.title}</p>
                </Col>
            </Row>
            <Row>
                <Col md={12}>
                <p className="visitit"><a className="anchorproject" target="_blank" href={props.url}>Visit it</a></p>
                </Col>
            </Row>
            <Row>
                <Col md={12}>
                <p className="projectParagraph">{props.description}</p>

                </Col>
            </Row>
        </Col>
    </Row>

)