import React from 'react'
import { Container, Row, Col} from 'react-bootstrap';


export default function About() {
    return (
        <div>
            <Container xs={12} className="full-width">
            <Row className="major-row-3" id="about-section">
                <Col>
                <div className="major-row-3-left" >
                    
                    <div className="work-and-about-big-heading" >
                        <h3 className="text-align-center" id="contact-heading">About</h3>
                    </div>

                </div>
                </Col>
                <Col sm={8} lg={6} className="major-row-3-right" id="contact-right">

                    <Row className="about-section-text">
                        <p>
                        Hi! I'm Prajjawal Sahu, a third-year undergraduate student at IIT Roorkee. 
                        I am a Front-end developer proficient in ReactJS. 
                        I love bringing great user experiences to life by writing clean and efficient code.
                        {/* I am skilled at building functional, attractive, and high-performance websites. */}
                        <br></br>
                        {/* I love bringing design to life with code. Passionate about crafting delightful and functional experiences and focused on writing clean and efficient code. */}
                        
                        </p>
                        
                        <a href="#contacts-section">
                            <button className="button-resume button-contact-me">
                                Contact Me
                            </button>
                        </a>
                        
                    </Row>
                </Col>
            </Row>
            </Container>
        </div>
    )
}
