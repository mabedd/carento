import React, { useState } from 'react'
import { Form, Button, Col, Container } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'

import CheckoutSteps from '../components/CheckoutSteps'
import { savePaymentMethod } from '../actions/cartActions'

const PaymentScreen = ({ history }) => {

    //default payment method is paypal
    const [paymentMethod, setPaymentMethod] = useState('PayPal')

    const dispatch = useDispatch()

    const submitHandler = (e) => {
        e.preventDefault()
        dispatch(savePaymentMethod(paymentMethod))
        history.push('/placeorder')
    }

    return (//TODO: show payment amount under the form
        <Container className='p-5'>
            <CheckoutSteps step1 step2 step3 step4 />
            <div class="container">
                <div class="row d-flex justify-content-center">
                    <aside class="col-sm-6">
                        <h3 className='text-uppercase text-center mb-2'>Pay to finalize your rent</h3>
                        <article class="card">
                            <div class="card-body p-5">

                                <ul class="nav bg-light nav-pills rounded nav-fill mb-3" role="tablist">
                                    <li class="nav-item">
                                        <a class="nav-link active" data-toggle="pill" href="#nav-tab-card">
                                            <i class="fa fa-credit-card"></i> Credit Card</a></li>
                                    <li class="nav-item">
                                        <a class="nav-link" data-toggle="pill" href="#nav-tab-paypal">
                                            <i class="fab fa-paypal"></i>  Paypal</a></li>
                                    <li class="nav-item">
                                        <a class="nav-link" data-toggle="pill" href="#nav-tab-bank">
                                            <i class="fa fa-money-bill-wave"></i>  Bank Transfer</a></li>
                                </ul>

                                <div class="tab-content">
                                    <div class="tab-pane fade show active" id="nav-tab-card">
                                        <p class="alert alert-success">Some text success or error</p>
                                        <form role="form">
                                            <div class="form-group">
                                                <label for="username">Full name (on the card)</label>
                                                <input type="text" class="form-control" name="username" placeholder="" required=""></input>
                                            </div>

                                            <div class="form-group">
                                                <label for="cardNumber">Card number</label>
                                                <div class="input-group">
                                                    <input type="text" class="form-control" name="cardNumber" placeholder=""></input>
                                                    <div class="input-group-append">
                                                        <span class="input-group-text text-muted">
                                                            <i class="fab fa-cc-visa"></i>   <i class="fab fa-cc-amex"></i>
                                                            <i class="fab fa-cc-mastercard"></i>
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>

                                            <div class="row">
                                                <div class="col-sm-8">
                                                    <div class="form-group">
                                                        <label><span class="hidden-xs">Expiration</span> </label>
                                                        <div class="input-group">
                                                            <input type="number" class="form-control" placeholder="MM" name=""></input>
                                                            <input type="number" class="form-control" placeholder="YY" name=""></input>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="col-sm-4">
                                                    <div class="form-group">
                                                        <label data-toggle="tooltip" title="" data-original-title="3 digits code on back side of the card">CVV <i class="fa fa-question-circle"></i></label>
                                                        <input type="number" class="form-control" required=""></input>
                                                    </div>
                                                </div>
                                            </div>
                                            <a href='/placeorder'><button class="subscribe btn btn-primary btn-block" type="button"> Confirm  </button></a>
                                        </form>
                                    </div>
                                    <div class="tab-pane fade" id="nav-tab-paypal">
                                        <p>Paypal is easiest way to pay online</p>
                                        <p>
                                            <button type="button" class="btn btn-primary"> <i class="fab fa-paypal"></i> Log in my Paypal </button>
                                        </p>
                                        <p><strong>Note:</strong> Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                        tempor incididunt ut labore et dolore magna aliqua. </p>
                                    </div>
                                    <div class="tab-pane fade" id="nav-tab-bank">
                                        <p>Bank accaunt details</p>
                                        <dl class="param">
                                            <dt>BANK: </dt>
                                            <dd> THE WORLD BANK</dd>
                                        </dl>
                                        <dl class="param">
                                            <dt>Accaunt number: </dt>
                                            <dd> 12345678912345</dd>
                                        </dl>
                                        <dl class="param">
                                            <dt>IBAN: </dt>
                                            <dd> 123456789</dd>
                                        </dl>
                                        <p><strong>Note:</strong> Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                        tempor incididunt ut labore et dolore magna aliqua. </p>
                                    </div>
                                </div>

                            </div>
                        </article>


                    </aside>
                </div>

            </div>

            <br></br><br></br>
        </Container>
    )
}

export default PaymentScreen
