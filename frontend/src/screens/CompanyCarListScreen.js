import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { LinkContainer } from 'react-router-bootstrap'
import { Table, Button, Container, Row, Col } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'

import Rating from '../components/Rating'
import Message from '../components/Message'
import Loader from '../components/Loader'
import { listCompanyCars, deleteCar, createCar } from '../actions/carActions'
import { CAR_CREATE_RESET } from '../constants/carConstants'

const CompanyCarListScreen = ({ history, match }) => {

    const dispatch = useDispatch()

    const carList = useSelector(state => state.carList)
    const { loading, error, cars } = carList

    const companyLogin = useSelector(state => state.companyLogin)
    const { companyInfo } = companyLogin

    const carDelete = useSelector(state => state.carDelete)
    const { loading: loadingDelete, error: errorDelete, success: successDelete } = carDelete

    const carCreate = useSelector(state => state.carCreate)
    const { loading: loadingCreate, error: errorCreate, success: successCreate, car: createdCar } = carCreate

    useEffect(() => {
        dispatch({ type: CAR_CREATE_RESET })

        if (!companyInfo) {
            history.push('/company/login')
        } else {
            dispatch(listCompanyCars())
        }

        //afet successfully creating a car redirect to car edit screen
        if (successCreate) {
            history.push(`/company/car/${createdCar._id}/edit`)
        } else {
            dispatch(listCompanyCars())
        }
    }, [dispatch, history, companyInfo, successDelete, successCreate, createdCar])


    const deleteHandler = (id) => {
        //display a confirmation message before delete
        if (window.confirm('Are you sure ?')) {
            dispatch(deleteCar(id))
        }
    }

    const markRentHandler = () => {
        //TODO:
    }

    const markReturnHandler = () => {
        //TODO:
    }

    return (
        <>
            <Container>
                <Row className='align-items-center mt-3'>
                    <Col>
                        <h1 className='mt-5'>CARS</h1>
                    </Col>
                    <Col className='text-right'>
                        <Link className='my-3' to='/company/car/create'><i className='fas fa-plus'></i> Create Car</Link>
                    </Col>
                </Row>

                {loadingDelete && <Loader />}
                {errorDelete && <Message variant='danger'>{errorDelete}</Message>}

                {loadingCreate && <Loader />}
                {errorCreate && <Message variant='danger'>{errorCreate}</Message>}

                <Container className='mt-5'>
                    <Table striped bordered hover responsive className='table-sm'>
                        <thead>
                            <tr>
                                <th>PLATE</th>
                                <th>MODEL</th>
                                <th>COLOR</th>
                                <th>PRICE</th>
                                <th>VENDOR</th>
                                <th>GASOLINE</th>
                                <th>SIZE</th>
                                <th>RATING</th>
                                <th>STATUS</th>
                                <th>RENTED ?</th>
                                <th>DELETE</th>
                            </tr>
                        </thead>
                        <tbody>

                            {cars && cars.length > 0 && cars.map((car) => (
                                <tr key={car.companyId}>
                                    <td>{car.carPlate}</td>
                                    <td>{car.carModel}</td>
                                    <td>{car.color}</td>
                                    <td>{car.price}</td>
                                    <td>{car.vendor}</td>
                                    <td>{car.gasoline}</td>
                                    <td>{car.size}</td>
                                    <td><Rating value={car.rating} /></td>

                                    <td>
                                        {car.status ? (
                                            <i className='fas fa-check' style={{ color: 'green' }}></i>
                                        ) : (
                                            <i className='fas fa-times' style={{ color: 'red' }}></i>
                                        )}
                                    </td>

                                    <td>{car.status ? (
                                        <Button>Mark as returned</Button>
                                    ) : (
                                        <Button>Mark as rented</Button>
                                    )}</td>

                                    <td><Button variant='danger' onClick={() => deleteHandler(car._id)}>Delete</Button></td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                </Container>
            </Container>

        </>
    )
}

export default CompanyCarListScreen
