import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { Container, Table } from 'react-bootstrap'

import Message from '../components/Message'
import Loader from '../components/Loader'
import Rating from '../components/Rating'
import CheckoutSteps from '../components/CheckoutSteps'
import { getOrderDetails } from '../actions/orderActions'
import { listCarDetails } from '../actions/carActions'
import { Link } from 'react-router-dom'

const PlaceOrderScreen = ({ match }) => {

    //get order id from url
    const orderId = match.params.id

    const dispatch = useDispatch()

    //get order details state from order details
    const orderDetails = useSelector((state) => state.orderDetails)
    const { order, loading, error } = orderDetails

    useEffect(() => {
        //if the order id passed in the url isnt valid, display the latest order
        if (!order || order._id !== orderId) {
            dispatch(getOrderDetails(orderId))
        }
    }, [order, orderId])

    return (
        <>
            <Container className='p-5'>
                <CheckoutSteps step1 step2 step3 step4 step5 />
                <div className='justify-content-center text-center'>
                    <h2>Congrats Your Rent has been Regsitered Successfully</h2>
                    <Link to='/profile'>Order details</Link>
                </div>

                <div className='justify-content-center mt-5 text-center'>

                </div>
            </Container>
        </>
    )



}

export default PlaceOrderScreen
