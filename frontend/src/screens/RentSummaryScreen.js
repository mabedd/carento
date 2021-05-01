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
    const defaultImage = 'data:image/jpeg;base64,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';
    const apiURL = 'http://localhost:5000'

    const dispatch = useDispatch()

    const carDetails = useSelector((state) => state.carDetails)
    const { loading, error, car } = carDetails

    const userLogin = useSelector((state) => state.userLogin)
    const { userInfo } = userLogin

    const orderDetails = useSelector((state) => state.orderDetails)
    const { loading: loadingDetails, error: errorDetails, order } = orderDetails

    // rent duration
    const [startDate, setStartDate] = useState(new Date())
    const [endDate, setEndDate] = useState(new Date())
    // calculate number of day
    const [rentDuration, setRentDuration] = useState(0)
    const [rentPrice, setRentPirce] = useState(0)

    // calculate rent duration based on dates
    useEffect(() => {
        const diffTime = Math.abs(endDate - startDate)
        setRentDuration(Math.ceil(diffTime / (1000 * 60 * 60 * 24)))
    }, [endDate, startDate])

    // calculate rent price with VAT
    useEffect(() => {
        const initialPrice = car.price * rentDuration
        setRentPirce(initialPrice + (initialPrice * 0.15))
    }, [rentDuration])

    useEffect(() => {
        if (!car._id || car._id !== match.params.id) {
            dispatch(listCarDetails(match.params.id))
        }
    }, [dispatch, match])

    useEffect(() => {
        if (!userInfo) {
            history.push('/login')
        }
    })

    //carId, renterId, mileage, duration, startDate, endDate, price
    const rentHandler = () => {
        dispatch(createOrder(rentDuration, rentPrice, car._id))
        history.push('/placeorder')
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
                                                src={`${apiURL}/${car.image}` || defaultImage} alt="Sample"></img>
                                            <a href="#!">
                                            </a>
                                        </div>
                                    </div>
                                    <div class="col-md-7 col-lg-9 col-xl-9">
                                        <div>
                                            <div class="d-flex justify-content-between">
                                                <div>
                                                    <h5>{car.vendor}</h5>
                                                    <p class="mb-3 text-muted text-uppercase small">{car.carModel}</p>
                                                    <p class="mb-2 text-muted text-uppercase small">Size: {car.size} passengers</p>
                                                    <p class="mb-3 text-muted text-uppercase small">Gasoline: {car.gasoline}</p>
                                                </div>
                                                <div>
                                                    <span>Offerd by: {car.companyName}</span>
                                                </div>
                                            </div>
                                            <div class="d-flex justify-content-between align-items-center">
                                                <div>
                                                    <Rating value={car.rating} />
                                                </div>
                                                <p class="mb-0"><span><strong>{car.price} SR / day</strong></span></p>
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
                                        {car.vendor}      {car.carModel}
                                        <span>{car.price} SR</span>
                                    </li>

                                    <li class="list-group-item d-flex justify-content-between align-items-center border-0 px-0 mb-3">
                                        <div>
                                            <strong>The total amount of</strong>
                                            <strong>
                                                <p class="mb-0">(including VAT)</p>
                                            </strong>
                                        </div>
                                        <span><strong>{rentPrice} SR / day</strong></span>
                                    </li>
                                </ul>
                                <button type="button" class="btn btn-primary btn-block waves-effect waves-light" type='submit' onClick={rentHandler}>Rent Now</button>
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
