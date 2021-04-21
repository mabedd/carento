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

    // ONLY Admin can access
    const adminLogin = useSelector((state) => state.adminLogin)
    const { adminInfo } = adminLogin

    useEffect(() => {
        //should be for admin or redirect to admin login
        if (!adminInfo) {
            history.push('admin/login')
        }
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
                        <h1>Renters</h1>
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
                                    <th>Name</th>
                                    <th>National ID</th>
                                    <th>Date of Birth</th>
                                    <th>Rating</th>
                                    <th>Phone Number</th>
                                    <th>Email</th>
                                    <th>Blacklisted</th>
                                    <th></th>
                                </tr>
                            </thead>

                            <tbody>
                                {users.map((user) => (
                                    <tr>
                                        <td>{user.username}</td>
                                        <td>{user.nationalId}</td>
                                        <td>{user.dateOfBirth}</td>
                                        <td>{user.phoneNumber}</td>
                                        <td>{user.email}</td>
                                        <td>{user.isBlackListed}</td>
                                        <td><Rating value={user.rating} /></td>
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

