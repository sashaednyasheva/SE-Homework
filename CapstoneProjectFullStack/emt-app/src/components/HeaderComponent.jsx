import React from 'react'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import Image from '../header2.jpeg'


export default function HeaderComponent() {
    return (
        <div>
        <header>
        <img src={Image} style={{width:'100%'}} alt="header"/>
            <h2 style={{marginLeft:'40px'}}>EVENT MANAGEMENT TOOL</h2>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" style={{gap: "10px"}}>
                 {/* <Container> */}
                 <Navbar.Brand href='/events' style={{marginLeft: "30px"}}>HOME</Navbar.Brand> 
                 <Navbar.Toggle aria-controls="respobsive-navbar-nav"/>
                 <Navbar.Collapse id="responsive-navbar-nav">
                 <Nav className ="me-auto">
                 <Nav.Item>
                 <Nav.Link href= '/add_event'>ADD NEW EVENT</Nav.Link>
                 </Nav.Item>
                 <Nav.Item>
                 <Nav.Link href= '/events'>ALL EVENTS</Nav.Link>
                 </Nav.Item>
                 <Nav.Item>
                 <Nav.Link href= '/contact'>HELP</Nav.Link>
                 </Nav.Item>
                 </Nav>
                 </Navbar.Collapse>
                 {/* </Container>    */}
            </Navbar>
        </header>
        </div>
    )
}