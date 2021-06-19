import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, NavItem, NavDropdown, Button, Form, FormControl } from 'react-bootstrap';
import './MyNavbar.css';

export default class MyNavbar extends Component {
    render() {
        return (
            <Navbar bg="transparent" expand="lg" className="custom-css pl-3" sticky="top">
                <Navbar.Brand href="/home" className="nav-brand"></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto px-5">
                        {/* <Nav.Link  className="px-5 custom-css-nav" href="/">Homei</Nav.Link> */}
                        {/* <Nav.Link  className="px-5 custom-css-nav" href="/home">Home</Nav.Link> */}
                        <Nav.Link  className="px-5 custom-css-nav" href="#projects-section">Projects</Nav.Link>
                        {/* <Nav.Link  className="px-5 custom-css-nav" href="#about-section">About</Nav.Link> */}
                        <Nav.Link  className="px-5 custom-css-nav" href="#contacts-section">Contact</Nav.Link>
                        {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="https://www.instagram.com/exploring_myself___/">instagram</NavDropdown.Item>
                        </NavDropdown> */}
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}