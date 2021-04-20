import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Form, Button, Row, Col, Container } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'

import Message from '../components/Message'
import Loader from '../components/Loader'
import './RegisterScreen.css'
import { loginCompany } from '../actions/companyActions'

const CompanyLoginScreen = ({ location, history }) => {

    //component level state
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const dispatch = useDispatch()

    const companyLogin = useSelector((state) => state.companyLogin)
    const { loading, error, companyInfo } = companyLogin

    // redirect to admin home panel in case of successful login
    const redirect = location.search ? location.search.split('=')[1] : '/company/car/create'

    useEffect(() => {
        //TODO: redirect after login to home
        if (companyLogin) {
            history.push(redirect)
        }
    }, [history, companyInfo, redirect])

    const submitHandler = (e) => {
        e.preventDefault()
        dispatch(loginCompany(email, password))
    }

    return (
        <div>
            <div style={{ backgroundImage: `url("/images/registerBG.jpg")` }}>
                <Container>
                    <div class="page-wrapper bg-gra-02 p-t-130 p-b-100 font-poppins">
                        <div class="wrapper wrapper--w680">
                            <div class="card card-4">
                                <div class="card-body">
                                    <h2 class="title text-center">Welcome Back</h2>

                                    {error && <Message variant='danger'>{error}</Message>}
                                    {loading && <Loader />}

                                    <form onSubmit={submitHandler}>
                                        <div class="row row-space">
                                            <div class="col-12">
                                                <div class="input-group">
                                                    <label class="label">Email</label>
                                                    <input class="input--style-4" type="text" placeholder="Your email ..." value={email} onChange={(e) => setEmail(e.target.value)}></input>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="row row-space">
                                            <div class="col-12">
                                                <div class="input-group">
                                                    <label class="label">Password</label>
                                                    <input class="input--style-4" type="password" placeholder="Your password" value={password} onChange={(e) => setPassword(e.target.value)} ></input>
                                                </div>
                                            </div>
                                        </div>


                                        <div class="p-t-15 text-center">
                                            <button class="btn btn-success btn-md" type="submit">Login</button>
                                        </div>

                                        <div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </Container>
            </div>
        </div>
    )
}

export default CompanyLoginScreen
