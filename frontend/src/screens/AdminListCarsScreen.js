import React, { useEffect } from 'react'
import { Container } from 'react-router-bootstrap'
import { Table, Button, Row, Col } from 'react-bootstrap'
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

    //TODO:
    // MUST be for admin
    //const userLogin = useSelector((state) => state.userLogin)
    //const { userInfo } = userLogin

    // useEffect(() => {
    //     //TODO: should be for admin
    //     if (!userInfo || !userInfo.isAdmin) {
    //       history.push('/login')
    //     }
    // }, [
    //     dispatch,
    //     history,
    //     userInfo,
    //     pageNumber,
    // ])

    return (
        <>
            <Container>
                <Row className='align-items-center'>
                    <Col>
                        <h1>Cars</h1>
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

                                <tr>
                                    {/**TODO: fetch from DB */}
                                    <td>Plate</td>
                                    <td>Model</td>
                                    <td>Price</td>
                                    <td></td>
                                    <td>Rating <Rating /></td>
                                </tr>

                            </tbody>
                        </Table>
                        <Paginate pages={pages} page={page} isAdmin={true} />
                    </>
                )}

            </Container>
        </>
    )
}

export default AdminListCarsScreen

