import React, { useEffect } from 'react'
import { Container } from 'react-router-bootstrap'
import { Table, Button, Row, Col } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'

import Message from '../components/Message'
import Loader from '../components/Loader'
import Paginate from '../components/Paginate'
import Rating from '../components/Rating'
import { listUsers } from '../actions/userActions'
import { activateCompany } from '../actions/adminActions'

const AdminListCompaniesScreen = ({ history, match }) => {

    //TODO: add activate account functionality

    // pagination
    const pageNumber = match.params.pageNumber || 1

    const dispatch = useDispatch()

    const userList = useSelector((state) => state.userList)
    const { loading, error, users, page, pages } = userList

    //TODO:
    // MUST be for admin
    //const adminLogin = useSelector((state) => state.adminLogin)
    //const { adminInfo } = adminLogin

    // useEffect(() => {
    //     //TODO: should be for admin
    //     if (!adminInfo || !adminInfo.isAdmin) {
    //       history.push('/login')
    //     }
    // }, [
    //     dispatch,
    //     history,
    //     adminInfo,
    //     pageNumber,
    // ])

    return (
        <>
            <Container>
                <Row className='align-items-center'>
                    <Col>
                        <h1>Carento Rental Companies</h1>
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
                                    <th>Email</th>
                                    <th>Contact Number</th>
                                    <th>Status</th>
                                    <th>Registeration Date</th>
                                    <th>End of Registeration Date</th>
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

export default AdminListCompaniesScreen

