
import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faHeart, faShoppingCart, faSmile} from '@fortawesome/free-solid-svg-icons'


export function NavBar() {
  return (
  <Navbar className="navbar" expand="lg">
    <Navbar.Brand href="#home">LOGO</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
            <Nav.Link href="#link">Home</Nav.Link>
            <Nav.Link href="#link">Shop</Nav.Link>
            <Nav.Link href="#link">Track</Nav.Link>
            <Nav.Link href="#link">FAQ</Nav.Link>
            <Nav.Link href="#link">Refer a Friend</Nav.Link>
        </Nav>
        <Nav className="ml-auto">
            <Nav.Link href="#link"><FontAwesomeIcon icon={faSearch} /></Nav.Link>
            <Nav.Link href="#link"><FontAwesomeIcon icon={faHeart} /></Nav.Link>
            <Nav.Link href="#link"><FontAwesomeIcon icon={faShoppingCart} /></Nav.Link>
            <Nav.Link href="#link"><FontAwesomeIcon icon={faSmile} /></Nav.Link>
        </Nav>
        {/* <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-success">Search</Button>
        </Form> */}
    </Navbar.Collapse>
    </Navbar>
  );
}
