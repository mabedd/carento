import React from 'react'
import { Container } from 'react-bootstrap'

import CheckoutSteps from '../components/CheckoutSteps'
import Rating from '../components/Rating'

const RentSummaryScreen = () => {

    //TODO: add state and submit handler
    //TODO: calculate price


    return (
        <Container className='p-5'>
            <CheckoutSteps step1 step2 step3 />
            <section>

                <div class="row">

                    <div class="col-lg-8">

                        <div class="card wish-list mb-3">
                            <div class="card-body">

                                <h5 class="mb-4">Rent Summary</h5>

                                <div class="row mb-4">
                                    <div class="col-md-5 col-lg-3 col-xl-3">
                                        <div class="view zoom overlay z-depth-1 rounded mb-3 mb-md-0">
                                            <img class="img-fluid w-100"
                                                src="/images/featuredOffers1.jpg" alt="Sample"></img>
                                            <a href="#!">
                                            </a>
                                        </div>
                                    </div>
                                    <div class="col-md-7 col-lg-9 col-xl-9">
                                        <div>
                                            <div class="d-flex justify-content-between">
                                                <div>
                                                    <h5>Toyta Yaris 2020</h5>
                                                    <p class="mb-3 text-muted text-uppercase small">500 km</p>
                                                    <p class="mb-2 text-muted text-uppercase small">4 passengers</p>
                                                    <p class="mb-3 text-muted text-uppercase small">91 gasoline</p>
                                                </div>
                                                <div>
                                                    <span>Offerd by: Avis</span>
                                                </div>
                                            </div>
                                            <div class="d-flex justify-content-between align-items-center">
                                                <div>
                                                    <Rating />
                                                    <a href="#!" type="button" class="card-link-secondary small text-uppercase"><i
                                                        class="fas fa-calendar mr-1"></i> 1 day </a>
                                                </div>
                                                <p class="mb-0"><span><strong>99 SR</strong></span></p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <p class="text-primary mb-0"><i class="fas fa-info-circle mr-1"></i> Do not delay the purchase, adding
                                items to your cart does not mean booking them.</p>

                            </div>
                        </div>

                        <div class="card mb-3">
                            <div class="card-body">

                                <h5 class="mb-4">Rent Duration</h5>

                                <p class="mb-0"> Sun 1/1/2020 - Mon 1/2/2020</p>
                            </div>
                        </div>

                        <div class="card mb-3">
                            <div class="card-body">

                                <h5 class="mb-4">We accept</h5>

                                <i class="fab fa-paypal fa-2x mr-2" style={{ color: '#3B7BBF' }}></i>
                                <i class="fab fa-cc-visa fa-2x mr-2" style={{ color: '#172274' }}></i>
                                <i class="fas fa-money-bill-wave fa-2x mr-2" style={{ color: '#008000' }}></i>

                            </div>
                        </div>

                    </div>

                    <div class="col-lg-4">

                        <div class="card mb-3">
                            <div class="card-body">

                                <h5 class="mb-3">The total amount of</h5>

                                <ul class="list-group list-group-flush">
                                    <li class="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                                        Toyta Yaris 2020
                                    <span>99 SR</span>
                                    </li>

                                    <li class="list-group-item d-flex justify-content-between align-items-center border-0 px-0 mb-3">
                                        <div>
                                            <strong>The total amount of</strong>
                                            <strong>
                                                <p class="mb-0">(including VAT)</p>
                                            </strong>
                                        </div>
                                        <span><strong>115 SR</strong></span>
                                    </li>
                                </ul>

                                <button type="button" class="btn btn-primary btn-block waves-effect waves-light">go to payment</button>

                            </div>
                        </div>

                        <div class="card mb-3">
                            <div class="card-body">

                                <a class="dark-grey-text d-flex justify-content-between" data-toggle="collapse" href="#collapseExample1"
                                    aria-expanded="false" aria-controls="collapseExample1">
                                    Add a discount code (optional)
                                <span><i class="fas fa-chevron-down pt-1"></i></span>
                                </a>

                                <div class="collapse" id="collapseExample1">
                                    <div class="mt-3">
                                        <div class="md-form md-outline mb-0">
                                            <input type="text" id="discount-code1" class="form-control font-weight-light"
                                                placeholder="Enter discount code"></input>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>

            </section>
        </Container>
    )
}

export default RentSummaryScreen
