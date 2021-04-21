import React, { useEffect } from 'react'
import { Table, Button, Row, Col, Container } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'

import Message from '../components/Message'
import Loader from '../components/Loader'
import Paginate from '../components/Paginate'
import Rating from '../components/Rating'

import { listCars } from '../actions/carActions'

const AdminListCarsScreen = ({ history, match }) => {

    // pagination
    const pageNumber = match.params.pageNumber || 1

    const dispatch = useDispatch()

    const carList = useSelector((state) => state.carList)
    const { loading, error, cars, page, pages } = carList

    // ONLY Admin can access
    const adminLogin = useSelector((state) => state.adminLogin)
    const { adminInfo } = adminLogin

    useEffect(() => {
        //should be for admin or redirect to admin login
        // if (!adminInfo) {
        //     history.push('/admin/login')
        // }
        // fetch cars from the backend
        dispatch(listCars('', pageNumber))
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
                        <h1>Carento Cars</h1>
                    </Col>
                </Row>
                {loading ? (<Loader />) : error ? (<Message variant='danger'>{error}</Message>) : (
                    <>
                        <Table striped bordered hover responsive className='table-sm'>
                            <thead>
                                <tr>
                                    <th>Company</th>
                                    <th>Plate</th>
                                    <th>Model</th>
                                    <th>Color</th>
                                    <th>Mileage</th>
                                    <th>Status</th>
                                    <th>Date Added</th>
                                </tr>
                            </thead>
                            <tbody>
                                {cars.map((car) => (
                                    <tr key={car._id}>
                                        <td>{car.companyId}</td>
                                        <td>{car.carPlate}</td>
                                        <td>{car.carModel}</td>
                                        <td>{car.color}</td>
                                        <td>{car.totalMileage}</td>
                                        <td>{car.status}</td>
                                        <td>{car.registrationDate}</td>
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

export default AdminListCarsScreen

