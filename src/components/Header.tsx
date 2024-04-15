'use client'

import { Container, Navbar, Nav, NavDropdown, Form, Button } from 'react-bootstrap';
import Link from 'next/link';

function Header() {
    return (
        <Navbar expand="lg" className="bg-pink-300">
            <Container>
                <Link href="/" className='navbar-brand'>MON&BUN</Link>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Link href={"/"} className="nav-link">Home</Link>
                        <Link href={"/upload"} className="nav-link">Upload</Link>
                        <NavDropdown title="Events" id="basic-nav-dropdown">
                            <NavDropdown.Item>
                                <Link href="/newyear" className="nav-link">HappyNewYear</Link>
                            </NavDropdown.Item>
                            <NavDropdown.Item>
                                <Link href="/christmas" className="nav-link">MerryChristmas</Link>
                            </NavDropdown.Item>
                            <NavDropdown.Item>
                                <Link href="/womenday" className="nav-link">HappyWomenDay</Link>
                            </NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item>
                                <Link href="/inlove" className="nav-link">InLove</Link>
                            </NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
                <Form className="d-flex">
                    <Form.Control
                        type="search"
                        placeholder="Search"
                        className="me-2"
                        aria-label="Search"
                    />
                    <Button variant="outline-light">Search</Button>
                </Form>
            </Container>
        </Navbar>
    );
}

export default Header;