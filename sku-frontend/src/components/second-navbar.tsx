
import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';

export function SecondNavBar() {
  return (
  <Navbar bg="white" expand="lg">
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
            <Nav.Link href="#link">ACCOUNT</Nav.Link>
            <Nav.Link href="#link">ADDRESS</Nav.Link>
            <Nav.Link href="#link">PAYMENT METHOD</Nav.Link>
            <Nav.Link href="#link" active>INVENTORY</Nav.Link>
            <Nav.Link href="#link">REWARDS</Nav.Link>
        </Nav>
        {/* <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-success">Search</Button>
        </Form> */}
    </Navbar.Collapse>
    </Navbar>
  );
}
