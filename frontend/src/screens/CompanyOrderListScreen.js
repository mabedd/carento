import React, { useEffect } from 'react'
import { LinkContainer } from 'react-router-bootstrap'
import { Table, Button, Container } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'

import Message from '../components/Message'
import Loader from '../components/Loader'
import Rating from '../components/Rating'
import { listOrders } from '../actions/orderActions'

const CompanyOrderListScreen = ({ history }) => {

    const dispatch = useDispatch()

    const orderList = useSelector((state) => state.orderList)
    const { loading, error, orders } = orderList

    const companyLogin = useSelector((state) => state.companyLogin)
    const { companyInfo } = companyLogin

    useEffect(() => {
        dispatch(listOrders())

        //TODO: add checking if company or not
        /*         if (userInfo && userInfo.isAdmin) {
                    dispatch(listOrders())
                } else {
                    history.push('/login')
                } */
    }, [dispatch, history, companyInfo])

    //TODO: add this inside return
    /*     {loading ? (
            <Loader />
        ) : error ? (
            <Message variant='danger'>{error}</Message>
        ) : ( */

    //TODO: map through orders inside DB

    return (
        <>
            <Container>
                <h1>Orders</h1>

                <Table striped bordered hover responsive className='table-sm'>
                    <thead>
                        <tr>
                            <th>Car ID</th>
                            <th>Renter ID</th>
                            <th>Mileage</th>
                            <th>Duration</th>
                            <th>Start Date</th>
                            <th>End Date</th>
                            <th>Price</th>
                            <th>Paid</th>
                            <th>Renter Rating</th>
                            <th>Company Rating</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {orders && orders.length > 0 && orders.map((order) => (
                            <tr>
                                <td>{order.carId}</td>
                                <td>{order.renterId}</td>
                                <td>{order.mileage}</td>
                                <td>{order.duration}</td>
                                <td>{order.startDate}</td>
                                <td>{order.endDate}</td>
                                <td>{order.price}</td>
                                <td>{order.isPaid}</td>
                                <td><Rating value={order.rateByRenter} /></td>
                                <td><Rating value={order.rateByCompany} /></td>
                                <td>{order.status}</td>
                            </tr>
                        ))}
                    </tbody>
                </Table>

            </Container>

        </>
    )
}

export default CompanyOrderListScreen