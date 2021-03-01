import React, { useState, useEffect } from 'react'
import { Table, Form, Button, Row, Col, Container } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../components/Message'
import Loader from '../components/Loader'
import { getUserDetails, updateUserProfile } from '../actions/userActions'

const UserProfileScreen = ({ location, history }) => {//TODO: change style - add previous rents - user rating

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
    const userLogin = useSelector((state) => state.userLogin)
    const { userInfo } = userLogin

    //for checking that user is logged in
    const userUpdateProfile = useSelector((state) => state.userUpdateProfile)
    const { success } = userUpdateProfile

    //TODO: uncomment to make it protected route
    /*     useEffect(() => {
            if (!userInfo) {
                history.push('/login')
            } else {
                if (!user.name) { //check for user name
                    dispatch(getUserDetails('profile'))
                } else {//set form fields
                    setName(user.name)
                    setEmail(user.email)
                }
            }
        }, [dispatch, history, userInfo, user]) */

    const submitHandler = (e) => {
        e.preventDefault()
        if (password !== confirmPassword) {
            setMessage('Passwords do not match')
        } else {
            dispatch(updateUserProfile({ id: user._id, name, email, password }))
        }
    }

    return (//TODO: change style
        <Container>
            <Row>
                <Col md={3}>
                    <h2>User Profile</h2>

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

                        <Button type='submit' variant='primary'>
                            Update
                                </Button>
                    </Form>

                </Col>
            </Row>
        </Container>

    )
}

export default UserProfileScreen