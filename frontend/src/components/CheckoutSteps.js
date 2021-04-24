import React from 'react'
import { Nav } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

const CheckoutSteps = ({ step1, step2, step3, step4, step5 }) => {
    return (
        <Nav className='justify-content-center mb-4 h5'>
            <Nav.Item>
                {step1 ? (
                    <LinkContainer to='/login'>
                        <Nav.Link>Sign In</Nav.Link>
                    </LinkContainer>
                ) : (
                    <Nav.Link disabled>Sign In</Nav.Link>
                )}
            </Nav.Item>

            <Nav.Item>
                {step2 ? (
                    <LinkContainer to='/browse'>
                        <Nav.Link>Choose Car</Nav.Link>
                    </LinkContainer>
                ) : (
                    <Nav.Link disabled>Choose Car</Nav.Link>
                )}
            </Nav.Item>

            <Nav.Item>
                {step3 ? (
                    <LinkContainer to='/rentsummary'>
                        <Nav.Link>Review Rent</Nav.Link>
                    </LinkContainer>
                ) : (
                    <Nav.Link disabled>Review Rent</Nav.Link>
                )}
            </Nav.Item>

            <Nav.Item>
                {step4 ? (
                    <LinkContainer to='/payment'>
                        <Nav.Link>Place Rent</Nav.Link>
                    </LinkContainer>
                ) : (
                    <Nav.Link disabled>Place Rent</Nav.Link>
                )}
            </Nav.Item>
        </Nav>
    )
}

export default CheckoutSteps