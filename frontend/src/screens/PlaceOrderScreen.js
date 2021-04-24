import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { Container, Table } from 'react-bootstrap'
import { Checkmark } from 'react-checkmark'

import Message from '../components/Message'
import Loader from '../components/Loader'
import Rating from '../components/Rating'
import CheckoutSteps from '../components/CheckoutSteps'
import { getOrderDetails } from '../actions/orderActions'
import { listCarDetails } from '../actions/carActions'

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

    //TODO: add this in the return
    /*     loading ? (
            <Loader />
        ) : error ? (
            <Message variant='danger'>{error}</Message>
        ) : ( */
    //TODO: add rent info in the page with check mark 
    return (
        <>
            <Container className='p-5'>
                <CheckoutSteps step1 step2 step3 step4 step5 />
                <div className='justify-content-center text-center'>
                    <Checkmark size='xxLarge' />
                    <h2>Congrats Your Rent has been Regsitered Successfully</h2>
                    <h4 className='text-center'>Please collect your car from (CompanyName) </h4>
                </div>

                <div className='justify-content-center mt-5 text-center'>
                    <h2>Rent Information</h2>
                    <Table striped bordered hover responsive className='table-sm'>
                        <thead>
                            <tr>
                                <th>Car Plate</th>
                                <th>Car Vendor</th>
                                <th>Car Model</th>
                                <th>Car Color</th>
                                <th>Car Gasoline</th>
                                <th>Rent Mileage</th>
                                <th>Rent Duration</th>
                                <th>Rent Start Date</th>
                                <th>Rent End Date</th>
                                <th>Rent Price</th>
                                <th>Paid ?</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                        </tbody>
                    </Table>
                </div>
            </Container>
        </>
    )



}

export default PlaceOrderScreen
