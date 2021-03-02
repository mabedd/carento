import React from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { Nav, Navbar, Container, NavDropdown } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap';

import { logout } from '../actions/userActions'

const Header = () => {

    const dispatch = useDispatch()

    const userLogin = useSelector(state => state.userLogin)
    const { userInfo } = userLogin

    const logoutHandler = () => {
        dispatch(logout())
    }

    return (
        <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark">
            <Container>
                <Navbar.Brand href="/">Carento</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/offers">Latest Offers</Nav.Link>
                        <Nav.Link href="/browse">Browse Cars</Nav.Link>
                        <Nav.Link href="/aboutus">About Us</Nav.Link>
                        <Nav.Link href="/contactus">Contact Us</Nav.Link>
                    </Nav>

                    {/**display username and profile if user is logged in */}
                    {userInfo ? (
                        <NavDropdown title={userInfo.name} id='username'>
                            <LinkContainer to='/profile'>
                                <NavDropdown.Item><i class="fas fa-user-circle"></i> Profile</NavDropdown.Item>
                            </LinkContainer>
                            <NavDropdown.Item onClick={logoutHandler}><i class="fas fa-sign-out-alt"></i> Logout</NavDropdown.Item>
                        </NavDropdown>
                    ) :
                        <Nav>
                            <Nav.Link href="/login"><i className='fas fa-user'></i> Log in</Nav.Link>
                            <Nav.Link href="/register"><i className='fas fa-sign-in-alt'></i> Register</Nav.Link>
                        </Nav>
                    }

                    {/**TODO: add navbar dropdown for companies */}

                </Navbar.Collapse>
            </Container>

        </Navbar>
    )
}

export default Header
