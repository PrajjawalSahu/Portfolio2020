import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, OverlayTrigger, Tooltip, Button } from 'react-bootstrap';
import './Home.css';
import Goo from 'gooey-react';
import Draggable from "react-draggable";
import Contact from './Contact';
import Hero from './Hero';
import About from './About';

export default class Home extends Component {
    componentDidMount() {
        var options = {
            // 'damping': 0.08
        }

        let mouseCursor = document.querySelector('.cursor');
        let buttonContainer = document.querySelector('.my-button');
        buttonContainer.addEventListener('mousemove', cursor);

        function cursor(e) {
            mouseCursor.style.top = e.pageY + "px" + "%";
            mouseCursor.style.left = e.pageX + "px";
        }
        buttonContainer.addEventListener('mouseover', () => { mouseCursor.classList.add("cursor-grow") });
        buttonContainer.addEventListener('mouseleave', () => { mouseCursor.classList.remove("cursor-grow") });
        buttonContainer.addEventListener('mouseleave', () => { mouseCursor.classList.add("visibility-hidden-class") });
        buttonContainer.addEventListener('mouseover', () => { mouseCursor.classList.remove("visibility-hidden-class") });


        // let gooeyBgContainer = document.getElementById('gooey-bg-container');
        // let count = 8;
        // for (let i = 0; i < 8; i++) {
        //     let gooeyCirclesForGooeyBg = document.createElement('div')
        //     gooeyCirclesForGooeyBg.className = 'gooey-bg-box';
        //     gooeyBgContainer.appendChild(gooeyCirclesForGooeyBg);
        // }

        // setInterval(function () {
        //     let gooeyBgDiv = document.getElementsByClassName('gooey-bg-box');
        //     for (let i = 0; i < gooeyBgDiv.length; i++) {
        //         gooeyBgDiv[i].style.left = Math.floor(Math.random() * 50) + '%';
        //         gooeyBgDiv[i].style.top = Math.floor(Math.random() * 50) + '%';

        //     }
        // }, 2000)



    }

    render() {
        return (
            <div className="page-home" id="page-home-id">

                <Hero></Hero>

                <About></About>

                <Container xs={12} className="full-width">
                    <Row className="major-row-2" id="projects-section">
                        {/* <Col className=" ">
                            <Goo>
                                <svg className="gooey" width="192" height="192">
                                    <Draggable ><circle cx="37%" cy="37%" fill="orchid" r="32" /></Draggable>
                                    <Draggable ><circle cx="63%" cy="63%" fill="mediumorchid" r="32" /></Draggable>
                                </svg>
                            </Goo>
                            <Goo>
                                <Draggable><svg className="temp">F</svg></Draggable>
                                <Draggable><svg className="temp2">Insta</svg></Draggable>
                                <Draggable><svg className="temp"></svg></Draggable>
                                <Draggable><svg className="temp"></svg></Draggable>

                            </Goo>
                            <Draggable
                                // axis="x"
                                // handle=".handle"
                                defaultPosition={{ x: 0, y: 0 }}
                                position={null}
                                // grid={[25, 25]}
                                bounds="parent"
                                scale={1}
                                onStart={this.handleStart}
                                onDrag={this.handleDrag}
                                onStop={this.handleStop}
                            >
                                <div>
                                    <div className="handle">Drag from here</div>
                                    <div>example of draggable div</div>
                                </div>
                            </Draggable>
                        </Col> */}
                        <Col xs={12} sm={12} lg={6} >
                            <div className="sticky-parent ">
                                <div className="work-and-about-big-heading is-sticky">
                                    <h3 className="text-align-center ">Projects</h3>
                                </div>
                            </div>

                        </Col>
                        <Col xs={12} sm={12} lg={6} className="" >

                            <div className="project-container">
                                <div className="project-card">
                                    <div className="project-image-box">
                                        {/* <img loading="lazy" className="img2" src="https://lh4.googleusercontent.com/TbGks6kQrWWCJtciZxW9qDpXQlVdswPkOeJh5GQiyWQ1jLfVNXxsA0C-hC6ZcmVtigX0YEaKDyFHUw=w1842-h992-rw" alt="casual blog authentication page" /> */}
                                        {/* <img loading="lazy" className="img2" src="https://lh4.googleusercontent.com/TbGks6kQrWWCJtciZxW9qDpXQlVdswPkOeJh5GQiyWQ1jLfVNXxsA0C-hC6ZcmVtigX0YEaKDyFHUw=w1842-h992-rw" alt="casual blog authentication page" /> */}
                                        {/* <img loading="lazy" className="img1" src="https://lh5.googleusercontent.com/RcFdSQJhrr9dO2CwL3ux4q4gWMzi-RGDsrvpFBHj_7YnvbZ_PdASNsw0Iqdp5G2hOJ5CijAO-eohIg=w1842-h992-rw" alt="casual blog home screen opened modal" /> */}
                                        <img loading="lazy" className="img1" src="https://iili.io/RAyWPI.gif" alt="casual blog home screen opened modal" />
                                    </div>
                                    <div className="project-content">
                                        <div className="top">
                                            {/* <i className="project-tech-used fab fa-react"></i>
                                            <button className="project-my-role">Front-end developement  </button> */}
                                        </div>
                                        <div className="project-card-text">
                                            <h3><strong className="asme"></strong><br></br>Casual Blogs - A Blogging website for all</h3>
                                            {/* <p>A fully fuctional website for american society of mechanical engineers (ASME) IIT Roorkee chapter</p> */}
                                            <div className="project-buttons">
                                                <a className="project-button" href="https://github.com/PrajjawalSahu/casual-blog"><i className="fab fa-github"></i></a>
                                                <span className="d-inline-block">
                                                    <a href="https://casual-blog-4ea6f.web.app/"><Button className="view-live" style={{ pointerEvents: 'none' }}>
                                                        View Live
                                                    </Button></a>
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="project-card">
                                    <div className="project-image-box">
                                        {/* <img loading="lazy" className="img2" src="/assets/asme-contact-us.png" alt="asme contact us section screenshot"/> */}
                                        <img loading="lazy" className="img2" src="https://iili.io/2EEF3v.png" alt="asme contact us section screenshot" />
                                        {/* <img loading="lazy" className="img1" src="/assets/asme-home.png" alt="asme home section screenshot"/> */}
                                        <img loading="lazy" className="img1" src="https://iili.io/2EE26J.png" alt="asme home section screenshot" />
                                    </div>
                                    <div className="project-content">
                                        <div className="top">
                                            <i className="project-tech-used fab fa-react"></i>
                                            <button className="project-my-role">Front-end developement  </button>
                                        </div>
                                        <div className="project-card-text">
                                            <h3><strong className="asme"></strong><br></br>ASME IIT Roorkee Chapter</h3>
                                            {/* <p>A fully fuctional website for american society of mechanical engineers (ASME) IIT Roorkee chapter</p> */}
                                            <div className="project-buttons">
                                                <a className="project-button" href="https://github.com/PrajjawalSahu/ASME-Website2020"><i className="fab fa-github"></i></a>
                                                {/* <a className="project-button" href="https://github.com/PrajjawalSahu/ASME-Website2020" ><i >go to website</i></a> */}
                                                <OverlayTrigger overlay={<Tooltip id="tooltip tooltip-disabled">Coming Soon...</Tooltip>}>
                                                    <span className="d-inline-block">
                                                        <Button className=" view-live" disabled style={{ pointerEvents: 'none' }}>
                                                            View Live
                                                        </Button>
                                                    </span>
                                                </OverlayTrigger>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* <div className="project-card">
                                    <div className="project-image-box">
                                        <img loading="lazy" className="" id="ggj-img" src="https://globalgamejam.org/sites/default/files/styles/responsive_large__wide/public/field_news_story_image_video/2019/10/ggj20_news_708x432px.jpg?itok=0W9xNPu7&timestamp=1569945916" alt="asme contact us section screenshot" />
                                    </div>
                                    <div className="project-content">
                                        <div className="top">
                                            <button className="project-my-role">Game Concept </button>
                                            <button className="project-my-role">Front-end developement</button>
                                        </div>
                                        <div className="project-card-text">
                                            <h3><strong className="asme"></strong><br></br>Global Game Jam 2020</h3>
                                            <div className="project-buttons">
                                                <a className="project-button" href="https://github.com/PrajjawalSahu/ggj2020/"><i className="fab fa-github"></i></a>

                                            </div>
                                        </div>
                                    </div>
                                </div> */}

                            </div>
                        </Col>
                    </Row>
                </Container>


                <Contact></Contact>



                {/* <div className="div-for-cursor">
                <Goo    className="cursor">
                                <svg className="gooey" width="192" height="192">
                                    <Draggable ><circle cx="0%" cy="0%" fill="orchid" r="32" /></Draggable>
                                </svg>
                            </Goo>
                </div> */}















            </div>
        )
    }
}