import React,{ Component } from 'react';
import { Link } from 'react-router-dom';
import {Jumbotron, Container, Row, Col, Image, Button } from 'react-bootstrap';
import MyNavbar from './MyNavbar'

import './Homei.css';
export default class Homei extends Component {
    render() {
        return (
            <div className="page-homei page-home" >
                {/* <MyNavbar></MyNavbar> */}
                <Container className="pos-abs">
                <Jumbotron>
                    <h2>Welcome to My first website</h2>
                    <p>paragraph<br></br> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi odio quaerat inventore expedita quia tempore ullam, laborum cupiditate sit hic omnis in illum natus eligendi rem nihil, nam voluptatum ratione.</p>
                    <Link to="/Portfolio2020/home">
                    <Button variant="primary">button</Button>{' '}
                    </Link>
{/* <h3>Look Ma, no JS! Scroll down...</h3>

<p>Previously, building content headers that scrolled normally until sticking to the top of the viewport required listening to scroll events and switching an element’s position from relative to fixed at a specified threshold. It was difficult to synchronize, and often results in small visual jumps.</p>

<p>Chrome now supports CSS position: sticky;, a new way to position elements.</p>

<p>An element that is position sticky, starts relative; but becomes fixed, after the element reaches a certain scroll position.</p>

<p>Simply set position: sticky, and set a threshold for it to become sticky.</p>

<div class="parent">
<div class="sticky-header is-sticky">I'm sticky</div>
<p>Spicy jalapeno bacon ipsum dolor amet filet mignon tri-tip jowl shank short loin.  Pork chop ham hock burgdoggen t-bone strip steak jerky, salami bacon brisket pancetta beef.  Pork belly tri-tip jowl, jerky swine flank ground round brisket tongue bacon kevin beef ribs drumstick bresaola ham hock.  Shank venison jowl short ribs burgdoggen.  Fatback jerky short ribs beef ribs turducken.  Short loin pig jowl cupim venison meatball.</p>
  
<p>Ground round biltong spare ribs, porchetta rump ham frankfurter hamburger sirloin bresaola pig.  Turducken andouille jerky capicola venison frankfurter shank.  Turkey ball tip rump, ribeye meatball short ribs pig jerky sausage shoulder pork loin andouille capicola swine.  Tongue chuck swine, brisket cupim ball tip shank pancetta tri-tip.  Pork prosciutto filet mignon alcatra pork belly leberkas.</p>
  
<p>Ground round biltong spare ribs, porchetta rump ham frankfurter hamburger sirloin bresaola pig.  Turducken andouille jerky capicola venison frankfurter shank.  Turkey ball tip rump, ribeye meatball short ribs pig jerky sausage shoulder pork loin andouille capicola swine.  Tongue chuck swine, brisket cupim ball tip shank pancetta tri-tip.  Pork prosciutto filet mignon alcatra pork belly leberkas.</p>
</div>

<p>Ground round biltong spare ribs, porchetta rump ham frankfurter hamburger sirloin bresaola pig.  Turducken andouille jerky capicola venison frankfurter shank.  Turkey ball tip rump, ribeye meatball short ribs pig jerky sausage shoulder pork loin andouille capicola swine.  Tongue chuck swine, brisket cupim ball tip shank pancetta tri-tip.  Pork prosciutto filet mignon alcatra pork belly leberkas.</p>

<p>Ground round biltong spare ribs, porchetta rump ham frankfurter hamburger sirloin bresaola pig.  Turducken andouille jerky capicola venison frankfurter shank.  Turkey ball tip rump, ribeye meatball short ribs pig jerky sausage shoulder pork loin andouille capicola swine.  Tongue chuck swine, brisket cupim ball tip shank pancetta tri-tip.  Pork prosciutto filet mignon alcatra pork belly leberkas.</p>

<p>Ground round biltong spare ribs, porchetta rump ham frankfurter hamburger sirloin bresaola pig.  Turducken andouille jerky capicola venison frankfurter shank.  Turkey ball tip rump, ribeye meatball short ribs pig jerky sausage shoulder pork loin andouille capicola swine.  Tongue chuck swine, brisket cupim ball tip shank pancetta tri-tip.  Pork prosciutto filet mignon alcatra pork belly leberkas.</p>

<p>Ground round biltong spare ribs, porchetta rump ham frankfurter hamburger sirloin bresaola pig.  Turducken andouille jerky capicola venison frankfurter shank.  Turkey ball tip rump, ribeye meatball short ribs pig jerky sausage shoulder pork loin andouille capicola swine.  Tongue chuck swine, brisket cupim ball tip shank pancetta tri-tip.  Pork prosciutto filet mignon alcatra pork belly leberkas.</p> */}

                    



                </Jumbotron>
                </Container>
            </div>
        )
    }
}