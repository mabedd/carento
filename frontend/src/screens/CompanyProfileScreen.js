import React, { useState, useEffect } from 'react'
import { Table, Form, Button, Row, Col, Container } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'

import Message from '../components/Message'
import Loader from '../components/Loader'
import Rating from '../components/Rating'
import { getUserDetails, updateUserProfile } from '../actions/userActions'

const CompanyProfileScreen = ({ history, match }) => {

    //state
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [message, setMessage] = useState(null)

    const dispatch = useDispatch()

    //get user details from state
    const userDetails = useSelector((state) => state.userDetails)
    const { loading, error, user } = userDetails

    //for checking that user is logged in
    const companyLogin = useSelector((state) => state.companyLogin)
    const { companyInfo } = companyLogin

    const userUpdateProfile = useSelector((state) => state.userUpdateProfile)
    const { success } = userUpdateProfile

    useEffect(() => {
        if (!companyInfo) {
            //history.push('/company/login')
        } else {
            if (!user.companyName) { //check for user name
                dispatch(getUserDetails('profile'))
            } else {//set form fields
                setName(user.companyName)
                setEmail(user.email)
            }
        }
    }, [dispatch, history, companyInfo, user])


    const submitHandler = (e) => {
        e.preventDefault()
        if (password !== confirmPassword) {
            setMessage('Passwords do not match')
        } else {
            dispatch(updateUserProfile({ id: user._id, name, email, password }))
        }
    }

    return (
        <>
            <Container className='justify-content-center p-3'>
                <Row>
                    <Col md={6}>
                        <h2 className='text-center'>Company Profile</h2>

                        {message && <Message variant='danger'>{message}</Message>}
                        {error && <Message variant='danger'>{error}</Message>}
                        {success && <Message variant='success'>Profile Updated</Message>}
                        {loading && <Loader />}

                        <Form onSubmit={submitHandler}>
                            <Form.Group controlId='name'>
                                <Form.Label>Name</Form.Label>
                                <Form.Control
                                    type='name'
                                    placeholder='Enter name'
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                ></Form.Control>
                            </Form.Group>

                            <Form.Group controlId='email'>
                                <Form.Label>Email Address</Form.Label>
                                <Form.Control
                                    type='email'
                                    placeholder='Enter email'
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                ></Form.Control>
                            </Form.Group>

                            <Form.Group controlId='password'>
                                <Form.Label>Password</Form.Label>
                                <Form.Control
                                    type='password'
                                    placeholder='Enter password'
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                ></Form.Control>
                            </Form.Group>

                            <Form.Group controlId='confirmPassword'>
                                <Form.Label>Confirm Password</Form.Label>
                                <Form.Control
                                    type='password'
                                    placeholder='Confirm password'
                                    value={confirmPassword}
                                    onChange={(e) => setConfirmPassword(e.target.value)}
                                ></Form.Control>
                            </Form.Group>

                            <Form.Group controlId='rating'>
                                <Form.Label>Rating</Form.Label>
                                <Rating />
                            </Form.Group>

                            <Button type='submit' variant='primary'>
                                Update
                        </Button>
                        </Form>
                    </Col>

                    <Col md={6}>
                        <h2 className='text-center'>Rents</h2>
                        <Table striped bordered hover responsive className='table-sm'>
                            <thead>
                                <tr>
                                    <th>PLATE</th>
                                    <th>MODEL</th>
                                    <th>DURATION</th>
                                    <th>PRICE</th>
                                    <th>COMPANY</th>
                                </tr>
                            </thead>
                        </Table>
                    </Col>
                </Row>
            </Container>

        </>
    )
}

export default CompanyProfileScreen
