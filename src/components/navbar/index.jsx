import Navbar from "react-bootstrap/Navbar"
import Container from "react-bootstrap/Container"
import Nav from "react-bootstrap/Nav"

import menu from '../../utils/manuData'

export default function  SpaicialNavbar() {
   return (
      <Navbar bg="dark" >
         <Container>
            <Navbar.Brand className="text-white" href='#' >My Brand</Navbar.Brand>
            <Nav className="me-0" >
               {menu.map((nav,key) => <Nav.Link key={key} className="text-white" href={nav.link}>{nav.nav}</Nav.Link>)}
            </Nav>
         </Container>
      </Navbar>
   )
}

