import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { LinkContainer } from 'react-router-bootstrap'
import { Container } from 'react-bootstrap'
import DatePicker from "react-datepicker"
import 'react-datepicker/dist/react-datepicker.css'

import Message from '../components/Message'
import Loader from '../components/Loader'
import Paginate from '../components/Paginate'
import CheckoutSteps from '../components/CheckoutSteps'
import Rating from '../components/Rating'
import { listCarDetails } from '../actions/carActions'
import { createOrder } from '../actions/orderActions'

const RentSummaryScreen = ({ history, match }) => {

    const dispatch = useDispatch()

    const carDetails = useSelector((state) => state.carDetails)
    const { loading, error, car } = carDetails

    const userLogin = useSelector((state) => state.userLogin)
    const { userInfo } = userLogin

    // rent duration
    const [startDate, setStartDate] = useState(new Date())
    const [endDate, setEndDate] = useState(new Date())
    // calculate number of day
    const diffTime = Math.abs(endDate - startDate)
    const rentDuration = Math.ceil(diffTime / (1000 * 60 * 60 * 24))

    // price calculation
    const initialPrice = car.price * rentDuration
    const rentPrice = initialPrice + (initialPrice * 0.15) // price with VAT

    useEffect(() => {
        if (!car._id || car._id !== match.params.id) {
            dispatch(listCarDetails(match.params.id))
        }
    }, [dispatch, match])

    //TODO:
    //carId, renterId, mileage, duration, startDate, endDate, price
    const rentHandler = () => {
        dispatch(createOrder())
    }

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
                                                    <h5>{car.carModel}</h5>
                                                    <p class="mb-3 text-muted text-uppercase small">{car.totalMileage}</p>
                                                    <p class="mb-2 text-muted text-uppercase small">{car.size}</p>
                                                    <p class="mb-3 text-muted text-uppercase small">{car.gasoline}</p>
                                                </div>
                                                <div>
                                                    <span>Offerd by: {car.companyId}</span>
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
                                from: <DatePicker selected={startDate} onChange={date => setStartDate(date)} />
                                to: <DatePicker selected={endDate} onChange={date => setEndDate(date)} />
                                <h5 className='mt-2'>Number of days: {rentDuration}</h5>
                            </div>
                        </div>

                        <div class="card mb-3">
                            <div class="card-body">
                                <h5 class="mb-4">Payment Type</h5>
                                <p>Right now Carento supports only cash payment at the point of sale</p>
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
                                    <span>{car.price} SR</span>
                                    </li>

                                    <li class="list-group-item d-flex justify-content-between align-items-center border-0 px-0 mb-3">
                                        <div>
                                            <strong>The total amount of</strong>
                                            <strong>
                                                <p class="mb-0">(including VAT)</p>
                                            </strong>
                                        </div>
                                        <span><strong>{rentPrice} SR</strong></span>
                                    </li>
                                </ul>
                                <LinkContainer className='btn btn-primary btn-block waves-effect waves-light' to='/placeorder'>
                                    <button type="button" class="btn btn-primary btn-block waves-effect waves-light" type='submit' onClick={rentHandler}>Rent Now</button>
                                </LinkContainer>
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
