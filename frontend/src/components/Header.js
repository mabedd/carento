import React from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { Nav, Navbar, Container, NavDropdown } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap';

import { logout } from '../actions/userActions'

const Header = () => {

    const dispatch = useDispatch()

    const userLogin = useSelector(state => state.userLogin)
    const { userInfo } = userLogin

    const companyLogin = useSelector(state => state.companyLogin)
    const { companyInfo } = companyLogin

    const adminLogin = useSelector(state => state.adminLogin)
    const { adminInfo } = adminLogin

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

                    {userInfo ? (
                        <NavDropdown title={userInfo.username} id='username'>
                            <LinkContainer to='/profile'>
                                <NavDropdown.Item><i class="fas fa-user-circle"></i> Profile</NavDropdown.Item>
                            </LinkContainer>
                            <NavDropdown.Item onClick={logoutHandler}><i class="fas fa-sign-out-alt"></i> Logout</NavDropdown.Item>
                        </NavDropdown>

                    ) : companyInfo ? (
                        <NavDropdown title={companyInfo.companyName} id='username'>
                            <LinkContainer to='/company/profile'>
                                <NavDropdown.Item><i class="fas fa-user-circle"></i> Profile</NavDropdown.Item>
                            </LinkContainer>
                            <LinkContainer to='/company/userlist'>
                                <NavDropdown.Item><i class="fas fa-users"></i> Renters</NavDropdown.Item>
                            </LinkContainer>
                            <LinkContainer to='/company/carslist'>
                                <NavDropdown.Item><i class="fas fa-car"></i> Cars</NavDropdown.Item>
                            </LinkContainer>
                            <LinkContainer to='/company/orders'>
                                <NavDropdown.Item><i class="fas fa-receipt"></i> Rents</NavDropdown.Item>
                            </LinkContainer>
                            <NavDropdown.Item onClick={logoutHandler}><i class="fas fa-sign-out-alt"></i> Logout</NavDropdown.Item>
                        </NavDropdown>

                    ) : adminInfo ? (
                        <NavDropdown title={adminInfo.username} id='username'>
                            <LinkContainer to='/admin/companieslist'>
                                <NavDropdown.Item><i class="fas fa-building"></i> Rental Companies</NavDropdown.Item>
                            </LinkContainer>
                            <LinkContainer to='/admin/renterslist'>
                                <NavDropdown.Item><i class="fas fa-users"></i> Renters</NavDropdown.Item>
                            </LinkContainer>
                            <LinkContainer to='/admin/carslist'>
                                <NavDropdown.Item><i class="fas fa-car"></i> Cars</NavDropdown.Item>
                            </LinkContainer>
                            <LinkContainer to='/admin/orderslist'>
                                <NavDropdown.Item><i class="fas fa-receipt"></i> Rents</NavDropdown.Item>
                            </LinkContainer>
                            <LinkContainer to='/company/orders'>
                                <NavDropdown.Item><i class="fas fa-question-circle"></i>Tickets</NavDropdown.Item>
                            </LinkContainer>
                            <NavDropdown.Item onClick={logoutHandler}><i class="fas fa-sign-out-alt"></i> Logout</NavDropdown.Item>
                        </NavDropdown>
                    ) :
                        <Nav>
                            <Nav.Link href="/login"><i className='fas fa-user'></i> Log in</Nav.Link>
                            <Nav.Link href="/register"><i className='fas fa-sign-in-alt'></i> Register</Nav.Link>
                        </Nav>
                    }

                </Navbar.Collapse>
            </Container>

        </Navbar>
    )
}

export default Header
