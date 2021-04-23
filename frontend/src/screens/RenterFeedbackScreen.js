import React, { useState, useEffect } from 'react'
import { Row } from 'react-bootstrap'
import { Container } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'

import { rateCar } from '../actions/carActions'
import { CAR_RATE_RESET } from '../constants/carConstants'
import { getOrderDetails } from '../actions/orderActions'
import Loader from '../components/Loader'
import Message from '../components/Message'
import Rating from '../components/Rating'

const RenterFeedbackScreen = ({ location, match }) => {

    //component level state
    const [message, setMessage] = useState('')
    const [rating, setRating] = useState(0)

    const dispatch = useDispatch()

    //!! FIX
    // const rentDetails = useSelector((state) => state.rentDetails)
    // const { error, rent } = rentDetails

    const userLogin = useSelector((state) => state.userLogin)
    const { userInfo } = userLogin

    const carRate = useSelector((state) => state.carRate)
    const { success: sucessRate, error: errorRate } = carRate

    // redirect to thank you screen
    const redirect = location.search ? location.search.split('=')[1] : '/'

    // useEffect(() => {
    //     if (sucessCarReview) {
    //         setRating(0)
    //         setMessage('')
    //     }
    //     if (!rent._id || rent._id !== match.params.id) {
    //         dispatch(getOrderDetails(match.params.id))
    //         dispatch({ type: CAR_RATE_RESET })
    //     }
    // }, [dispatch, match, sucessCarReview])

    const submitHandler = (e) => {
        e.preventDefault()
        dispatch(
            rateCar(match.params.id, {
                rating,
                message,
            })
        )
    }


    return (
        <div>
            <div style={{ backgroundImage: `url("/images/registerBG.jpg")` }}>
                <Container>
                    <div class="page-wrapper bg-gra-02 p-t-130 p-b-100 font-poppins">
                        <div class="wrapper wrapper--w680">
                            <div class="card card-4">
                                <div class="card-body">
                                    <h2 class="title text-center">Your Opinion Matters</h2>


                                    <form onSubmit={submitHandler}>

                                        <div class="row row-space">
                                            <div class="col-12">
                                                <div class="input-group">
                                                    <label class="label">Message</label>
                                                    <input class="input--style-4" type="text" placeholder="Your message" value={message} onChange={(e) => setMessage(e.target.value)} ></input>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="row row-space">
                                            <div class="col-12">
                                                <div class="input-group">
                                                    <label class="label">Rating</label>
                                                    <select class="input--style-4" id="sel1" value={rating} onChange={(e) => setRating(e.target.value)}>
                                                        <option>1</option>
                                                        <option>2</option>
                                                        <option>3</option>
                                                        <option>4</option>
                                                        <option>5</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="p-t-15 text-center">
                                            <button class="btn btn-success btn-md" type="submit">Submit</button>
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

export default RenterFeedbackScreen
