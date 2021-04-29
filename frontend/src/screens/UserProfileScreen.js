import React, { useState, useEffect } from 'react'
import { Table, Form, Button, Row, Col, Container } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { LinkContainer } from 'react-router-bootstrap'

import Message from '../components/Message'
import Loader from '../components/Loader'
import Rating from '../components/Rating'
import { getUserDetails, updateUserProfile } from '../actions/userActions'
import { listRenterOrders } from '../actions/orderActions'
import { USER_UPDATE_PROFILE_RESET } from '../constants/userConstants'


const UserProfileScreen = ({ location, history }) => {

    //state
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phoneNumber, setPhoneNumber] = useState('')
    const [nationalId, setNationalId] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [message, setMessage] = useState(null)

    const dispatch = useDispatch()

    //get user details from state
    const userDetails = useSelector((state) => state.userDetails)
    const { loading, error, user } = userDetails

    //for checking that user is logged in
    const userLogin = useSelector((state) => state.userLogin)
    const { userInfo } = userLogin

    const orderListRenter = useSelector((state) => state.orderListRenter)
    const { loading: loadingOrders, error: errorOrders, orders } = orderListRenter

    //for checking that user is logged in
    const userUpdateProfile = useSelector((state) => state.userUpdateProfile)
    const { success } = userUpdateProfile

    useEffect(() => {
        if (!userInfo) {
            history.push('/login')
        } else {
            if (!user.username) {
                dispatch({ type: USER_UPDATE_PROFILE_RESET })
                dispatch(getUserDetails('profile'))
                dispatch(listRenterOrders())
            } else {
                setName(user.username)
                setEmail(user.email)
                setPhoneNumber(user.phoneNumber)
                setNationalId(user.nationalId)
            }
        }
        //dispatch(getUserDetails('profile'))
    }, [dispatch, history, userInfo, success])


    const submitHandler = (e) => {
        e.preventDefault()
        if (password !== confirmPassword) {
            setMessage('Passwords do not match')
        } else {
            dispatch(updateUserProfile({ id: user._id, name, email, password }))
        }
    }

    return (
        <Container className='justify-content-center p-3'>

            <Row className='mt-5'>
                <Col>
                    <h2 className='text-center'>User Profile</h2>

                    {message && <Message variant='danger'>{message}</Message>}
                    {error && <Message variant='danger'>{error}</Message>}
                    {success && <Message variant='success'>Profile Updated</Message>}

                    <Form onSubmit={submitHandler}>
                        <Row>
                            <Col md={6}>
                                <Form.Group controlId='name'>
                                    <Form.Label>Name</Form.Label>
                                    <Form.Control
                                        type='text'
                                        placeholder='Enter name'
                                        value={user.username}
                                        onChange={(e) => setName(e.target.value)}
                                    ></Form.Control>
                                </Form.Group>

                                <Form.Group controlId='email'>
                                    <Form.Label>Email Address</Form.Label>
                                    <Form.Control
                                        type='email'
                                        placeholder='Enter email'
                                        value={user.email}
                                        onChange={(e) => setEmail(e.target.value)}
                                    ></Form.Control>
                                </Form.Group>

                                <Form.Group controlId='pnum'>
                                    <Form.Label>Phone Number</Form.Label>
                                    <Form.Control
                                        type='number'
                                        placeholder='Enter phone number'
                                        value={user.phoneNumber}
                                        onChange={(e) => setPhoneNumber(e.target.value)}
                                    ></Form.Control>
                                </Form.Group>
                            </Col>

                            <Col md={6}>
                                <Form.Group controlId='nationalid'>
                                    <Form.Label>National ID</Form.Label>
                                    <Form.Control
                                        type='text'
                                        placeholder='Enter national id'
                                        value={user.nationalId}
                                        onChange={(e) => setNationalId(e.target.value)}
                                    ></Form.Control>
                                </Form.Group>

                                <Form.Group controlId='password'>
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control
                                        type='password'
                                        placeholder='Enter password'
                                        value={user.password}
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
                            </Col>
                        </Row>

                        <Row className='justify-content-center'>
                            <Form.Group controlId='rating'>
                                <Form.Label>Rating</Form.Label>
                                <Rating value={user.rating} />
                            </Form.Group>
                        </Row>

                        <Row className='justify-content-center'>
                            <Button type='submit' variant='primary'>
                                Update
                            </Button>
                        </Row>

                    </Form>
                </Col>
            </Row>



            <Col className='mt-5'>
                <h2 className='text-center'>Rents</h2>
                <Table striped bordered hover responsive className='table-sm'>
                    <thead>
                        <tr>
                            <th>RENT ID</th>
                            <th>CAR ID</th>
                            <th>DURATION</th>
                            <th>START DATE</th>
                            <th>END DATE</th>
                            <th>STATUS</th>
                            <th>RATE</th>
                            <th>RAISE TICKET</th>
                        </tr>
                    </thead>
                    <tbody>
                        {orders ? orders.map((order) => (
                            <tr key={order._id}>
                                <td>{order._id}</td>
                                <td>{order.carId}</td>
                                <td>{order.duration}</td>
                                <td>{order.startDate}</td>
                                <td>{order.endDate}</td>

                                <td>{order.status ? (
                                    <p>Active</p>
                                ) : (
                                    <p>Ended</p>
                                )}</td>

                                <td>
                                    <LinkContainer to={`/rate/${order.carId}`}>
                                        <Button className='btn btn-primary'>Rate</Button>
                                    </LinkContainer>
                                </td>
                                <td>
                                    <LinkContainer to={`/renter/raiseticket/${order._id}`}>
                                        <Button className='btn btn-primary'>Raise</Button>
                                    </LinkContainer>
                                </td>
                            </tr>
                        )) : ''}
                    </tbody>
                </Table>
            </Col>

        </Container>

    )
}

export default UserProfileScreen