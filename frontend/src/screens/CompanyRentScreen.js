import React, { useEffect } from 'react'
import { LinkContainer } from 'react-router-bootstrap'
import { Table, Button, Container, Row, Col } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'

import Rating from '../components/Rating'
import Message from '../components/Message'
import Loader from '../components/Loader'
import { listOrders } from '../actions/orderActions'
import { CAR_CREATE_RESET } from '../constants/carConstants'

const CompanyRentScreen = ({ history, match }) => {

    const dispatch = useDispatch()

    const orderList = useSelector(state => state.orderList)
    const { loading, error, orders } = orderList

    const companyLogin = useSelector(state => state.companyLogin)
    const { companyInfo } = companyLogin

    useEffect(() => {
        //dispatch({ type: CAR_CREATE_RESET })

        //TODO: check if user is company or not and redirect to login if not
        if (companyInfo) {
            //TODO:
        }

        dispatch(listCars())

    }, [dispatch, history, companyInfo])


    return (
        <>
            <Container>
                <Row className='align-items-center mt-3'>
                    <Col>
                        <h1>RENTS</h1>
                    </Col>
                    <Col className='text-right'>
                        <Button className='my-3' href='/company/car/create'><i className='fas fa-plus'></i> Create Car</Button>
                    </Col>
                </Row>

                <Container className='mt-5'>
                    <Table striped bordered hover responsive className='table-sm'>
                        <thead>
                            <tr>
                                <th>CAR ID</th>
                                <th>RENTER ID</th>
                                <th>TOTAL MILEAGE</th>
                                <th>DURATION</th>
                                <th>START DATE</th>
                                <th>END DATE</th>
                                <th>PRICE</th>
                                <th>RENTER RATE</th>
                                <th>COMPANY RATE</th>
                                <th>STATUS</th>
                            </tr>
                        </thead>
                        <tbody>

                            {orders.map((order) => (
                                <tr key={order.carId}>
                                    <td>{order.renterId}</td>
                                    <td>{order.mileage}</td>
                                    <td>{order.duration}</td>
                                    <td>{order.startDate}</td>
                                    <td>{order.endDate}</td>
                                    <td>{order.price}</td>
                                    <td><Rating value={order.rateByRenter} /></td>
                                    <td><Rating value={order.rateByCompany} /></td>
                                    <td>{order.status}</td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                </Container>
            </Container>

        </>
    )
}

export default CompanyRentScreen
