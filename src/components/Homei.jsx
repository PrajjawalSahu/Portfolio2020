import React,{ Component } from 'react';
import { Link } from 'react-router-dom';
import {Jumbotron, Container, Row, Col, Image, Button } from 'react-bootstrap';
import MyNavbar from './MyNavbar'

import './Homei.css';
export default class Homei extends Component {
    render() {
        return (
            <div className="page-homei">
                <MyNavbar></MyNavbar>

                
                <Container>
                {/* <Jumbotron> */}
                    <h2>Welcome to My first website</h2>
                    <p>paragraph<br></br> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi odio quaerat inventore expedita quia tempore ullam, laborum cupiditate sit hic omnis in illum natus eligendi rem nihil, nam voluptatum ratione.</p>
                    <Link to="/Portfolio2020/home">
                    <Button variant="primary">button</Button>{' '}
                    </Link>


                    



                {/* </Jumbotron> */}
                </Container>
            </div>
        )
    }
}