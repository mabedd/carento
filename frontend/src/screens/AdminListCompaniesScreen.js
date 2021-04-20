import React, { useEffect } from 'react'
import { Container } from 'react-router-bootstrap'
import { Table, Button, Row, Col } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'

import Message from '../components/Message'
import Loader from '../components/Loader'
import Paginate from '../components/Paginate'
import Rating from '../components/Rating'
import { listCompanies } from '../actions/userActions'
import { activateCompany } from '../actions/adminActions'

const AdminListCompaniesScreen = ({ history, match }) => {

    // pagination
    const pageNumber = match.params.pageNumber || 1

    const dispatch = useDispatch()

    //! check if compay and renter be from the same reducer
    const userList = useSelector((state) => state.userList)
    const { loading, error, users, page, pages } = userList


    // MUST be for admin
    const adminLogin = useSelector((state) => state.adminLogin)
    const { adminInfo } = adminLogin

    const activateHandler = (id) => {
        //TODO: change company status from deactivated to activated
        //dispatch(activateCompany)
    }

    useEffect(() => {
        //should be for admin
        if (!adminInfo || !adminInfo.isAdmin) {
            history.push('/admin/login')
        }

        dispatch(listCompanies('', pageNumber))
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

                                {users.map((user) => (
                                    <tr>
                                        <td>{user.companyName}</td>
                                        <td>{user.email}</td>
                                        <td>{user.phoneNumber}</td>
                                        <td>{user.status}</td>
                                        <td>{user.registrationDate}</td>
                                        <td>{user.endOfRegistrationDate}</td>
                                        <td>Rating <Rating /></td>
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

export default AdminListCompaniesScreen

