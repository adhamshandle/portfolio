import React from 'react'
import { Row, Col } from 'react-bootstrap'
import './project.css'

export default (props) => (
    <Row>
        <Col md={6}>
            <img draggable="false" alt="project" className="project-image" src={props.img} />
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
                <p className="visitit"><a className="anchorproject"  rel="noopener noreferrer"  target="_blank" href={props.url}>Visit it</a></p>
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