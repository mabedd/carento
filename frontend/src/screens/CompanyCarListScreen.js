import React, { useEffect } from 'react'
import { LinkContainer } from 'react-router-bootstrap'
import { Table, Button, Container, Row, Col } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'

import Rating from '../components/Rating'
import Message from '../components/Message'
import Loader from '../components/Loader'
import { listCars, deleteCar, createCar } from '../actions/carActions'
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

        //TODO: check if user is company or not and redirect to login if not
        if (companyInfo) {
            //TODO:
        }


        //afet successfully creating a car redirect to car edit screen
        if (successCreate) {
            history.push(`/company/car/${createdCar._id}/edit`)
        } else {
            dispatch(listCars())
        }
    }, [dispatch, history, companyInfo, successDelete, successCreate, createdCar])

    const createCarHandler = (car) => {
        dispatch(createCar())
    }


    const deleteHandler = (id) => {
        //display a confirmation message before delete
        if (window.confirm('Are you sure ?')) {
            dispatch(deleteCar(id))
        }
    }

    return (
        <>
            <Container>
                <Row className='align-items-center mt-3'>
                    <Col>
                        <h1>CARS</h1>
                    </Col>
                    <Col className='text-right'>
                        <Button className='my-3' href='/company/car/create'><i className='fas fa-plus'></i> Create Car</Button>
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
                                <th>TOTAL MILEAGE</th>
                                <th>STATUS</th>
                                <th>COLOR</th>
                                <th>BENEFITS</th>
                                <th>RATING</th>
                            </tr>
                        </thead>
                        <tbody>

                            {cars && cars.length > 0 && cars.map((car) => (
                                <tr key={car.companyId}>
                                    <td>{car.carPlate}</td>
                                    <td>{car.carModel}</td>
                                    <td>{car.color}</td>
                                    <td>{car.totalMileage}</td>
                                    <td>{car.price}</td>
                                    <td>{car.status}</td>
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
