import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { Row, Col, Container } from 'react-bootstrap'

import { register } from '../actions/userActions'
import Message from '../components/Message'
import Loader from '../components/Loader'
import './RegisterScreen.css'

const RegisterScreen = ({ location, history }) => {

    //state
    const [name, setName] = useState('')
    const [nationalID, setNationalID] = useState('')
    const [pnum, setPnum] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [email, setEmail] = useState('')
    const [dob, setDob] = useState('')

    const [message, setMessage] = useState(null)

    const dispatch = useDispatch()

    const userRegister = useSelector((state) => state.userRegister)
    const { loading, error, userInfo, success } = userRegister

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
            dispatch(register(name, nationalID, pnum, email, password, dob))
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

                                {message && <Message variant='danger'>{message}</Message>}
                                {error && <Message variant='danger'>{error}</Message>}
                                {loading && <Loader />}
                                {success && <Message>You have been registered successfully</Message>}

                                <form onSubmit={submitHandler}>
                                    <div class="row row-space">
                                        <div class="col-6">
                                            <div class="input-group">
                                                <label class="label">Name</label>
                                                <input class="input--style-4" type="text" placeholder="Your name ..." value={name} onChange={(e) => setName(e.target.value)}></input>
                                            </div>
                                        </div>
                                        <div class="col-6">
                                            <div class="input-group">
                                                <label class="label">National ID</label>
                                                <input class="input--style-4" type="text" placeholder="Saudi citizenship or Iqama" value={nationalID} onChange={(e) => setNationalID(e.target.value)}></input>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="row row-space">
                                        <div class="col-6">
                                            <div class="input-group">
                                                <label class="label">Phone Number</label>
                                                <input class="input--style-4" type="text" placeholder="+966....." value={pnum} onChange={(e) => setPnum(e.target.value)}></input>
                                            </div>
                                        </div>
                                        <div class="col-6">
                                            <div class="input-group">
                                                <label class="label">Email</label>
                                                <input class="input--style-4" type="email" placeholder="Your email" value={email} onChange={(e) => setEmail(e.target.value)} ></input>
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


                                    <div class="row row-space justify-content-center">
                                        <div class="col-6">
                                            <div class="input-group">
                                                <label class="label">Date of Birth</label>
                                                <input class="input--style-4" type="date" placeholder="Your birthdate" value={dob} onChange={(e) => setDob(e.target.value)}></input>
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

export default RegisterScreen
