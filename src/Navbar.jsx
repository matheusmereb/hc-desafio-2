import React from 'react';
import { Navbar, Container, Nav, NavLink } from 'react-bootstrap';

export default function Navbar1 () {
    return (
        <>
            <Navbar bg="dark" variant="dark" sticky="top">
                <Container>
                <Navbar.Brand href="#home">REGISTR</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#clients">Clientes</Nav.Link>
                    <Nav.Link href="#products">Produtos</Nav.Link>
                </Nav>
                <Navbar.Collapse className="justify-content-end">
                    <Navbar.Text>
                        Logado como: <a href="#">Admin</a>
                    </Navbar.Text>
                </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}