import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { Row, Col, Container } from 'react-bootstrap'

import { companyRegister } from '../actions/userActions'
import Message from '../components/Message'
import Loader from '../components/Loader'
import './RegisterScreen.css'

const CompanyRegister = ({ location, history }) => {

    // TODO: remove auto login

    //state
    const [name, setName] = useState('')
    const [contactnum, setContactnum] = useState('')
    const [address, setAddress] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [email, setEmail] = useState('')

    const [message, setMessage] = useState(null)

    const dispatch = useDispatch()

    const userRegister = useSelector((state) => state.userRegister)
    const { loading, error, userInfo } = userRegister

    const redirect = location.search ? location.search.split('=')[1] : '/'

    useEffect(() => {
        if (userInfo) {
            history.push(redirect)
        }
    }, [history, userInfo, redirect])

    const submitHandler = (e) => {
        e.preventDefault()
        //compare passwords
        if (password !== confirmPassword) {
            setMessage('Passwords do not match')
        } else { //everything is fine just register the user
            dispatch(companyRegister(name, email, contactnum, password))
            //display a message for success registeration and pending status
            setMessage('Your request has been sent. We will contact you soon')
        }
    }


    return (
        <div style={{ backgroundImage: `url("/images/registerBG.jpg")` }}>
            <Container>
                <div class="page-wrapper bg-gra-02 p-t-130 p-b-100 font-poppins">
                    <div class="wrapper wrapper--w680">
                        <div class="card card-4">
                            <div class="card-body">
                                <h2 class="title text-center">Welcome to Carento Family</h2>

                                {message && <Message variant='success'>{message}</Message>}
                                {error && <Message variant='danger'>{error}</Message>}
                                {loading && <Loader />}

                                <form onSubmit={submitHandler}>
                                    <div class="row row-space">
                                        <div class="col-6">
                                            <div class="input-group">
                                                <label class="label">Name</label>
                                                <input class="input--style-4" type="text" placeholder="Company name ..." value={name} onChange={(e) => setName(e.target.value)}></input>
                                            </div>
                                        </div>
                                        <div class="col-6">
                                            <div class="input-group">
                                                <label class="label">Email</label>
                                                <input class="input--style-4" type="email" placeholder="Company email ..." value={email} onChange={(e) => setEmail(e.target.value)}></input>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="row row-space">
                                        <div class="col-6">
                                            <div class="input-group">
                                                <label class="label">Contact Number</label>
                                                <input class="input--style-4" type="text" placeholder="+966....." value={contactnum} onChange={(e) => setContactnum(e.target.value)}></input>
                                            </div>
                                        </div>
                                        <div class="col-6">
                                            <div class="input-group">
                                                <label class="label">Address</label>
                                                <input class="input--style-4" type="text" placeholder="Company address ..." value={address} onChange={(e) => setAddress(e.target.value)} ></input>
                                            </div>
                                        </div>
                                    </div>



                                    <div class="row row-space">
                                        <div class="col-6">
                                            <div class="input-group">
                                                <label class="label">Password</label>
                                                <input class="input--style-4" type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)}></input>
                                            </div>
                                        </div>
                                        <div class="col-6">
                                            <div class="input-group">
                                                <label class="label">Confirm Password</label>
                                                <input class="input--style-4" type="password" placeholder="Confirm password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)}></input>
                                            </div>
                                        </div>
                                    </div>


                                    <div class="p-t-15 text-center">
                                        <button class="btn btn-success btn-md" type="submit">Submit</button>
                                    </div>

                                    <div>
                                        <Row className='py-3 text-center'>
                                            <Col className='text-dark'>
                                                Have an Account?{' '}
                                                <Link to={redirect ? `/login?redirect=${redirect}` : '/login'}>
                                                    Login
                                                </Link>
                                            </Col>
                                        </Row>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default CompanyRegister
