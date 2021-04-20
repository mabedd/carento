import React, { useEffect } from 'react'
import { Container } from 'react-router-bootstrap'
import { Table, Button, Row, Col } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'

import Message from '../components/Message'
import Loader from '../components/Loader'
import Paginate from '../components/Paginate'
import Rating from '../components/Rating'
import { listOrders } from '../actions/orderActions'

const AdminListOrderScreen = ({ history, match }) => {

    // pagination
    const pageNumber = match.params.pageNumber || 1

    const dispatch = useDispatch()

    const orderList = useSelector((state) => state.orderList)
    const { loading, error, orders, page, pages } = orderList


    // MUST be for admin
    const adminLogin = useSelector((state) => state.adminLogin)
    const { adminInfo } = adminLogin

    useEffect(() => {
        //should be for admin
        if (!adminInfo || !adminInfo.isAdmin) {
            history.push('/admin/login')
        }

        dispatch(listOrders('', pageNumber))
    }, [
        dispatch,
        history,
        adminInfo,
        pageNumber,
    ])

    return (
        <>
            <Container>
                <Row className='align-items-center'>
                    <Col>
                        <h1>Rents</h1>
                    </Col>
                </Row>
                {loading ? (
                    <Loader />
                ) : error ? (
                    <Message variant='danger'>{error}</Message>
                ) : (
                    <>
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
                                {orders.map((order) => (
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
                        <Paginate pages={pages} page={page} />
                    </>
                )}

            </Container>
        </>
    )
}

export default AdminListOrderScreen

