import React, { useEffect } from 'react'
import { Table, Button, Row, Col, Container } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'

import Message from '../components/Message'
import Loader from '../components/Loader'
import Paginate from '../components/Paginate'
import Rating from '../components/Rating'

import { listUsers } from '../actions/userActions'

const AdminListRenterScreen = ({ history, match }) => {

    // pagination
    const pageNumber = match.params.pageNumber || 1

    const dispatch = useDispatch()

    const userList = useSelector((state) => state.userList)
    const { loading, error, users, page, pages } = userList


    // MUST be for admin
    const adminLogin = useSelector((state) => state.adminLogin)
    const { adminInfo } = adminLogin

    console.log(users)

    useEffect(() => {
        //should be for admin
        // if (!adminInfo || !adminInfo.isAdmin) {
        //     history.push('/admin/login')
        // }

        dispatch(listUsers('', pageNumber))
    }, [
        dispatch,
        history,
        adminInfo,
        pageNumber,
    ])
    // {
    //     loading ? (<Loader />) : error ? (<Message variant='danger'>{error}</Message>) : (
    //     )
    // }
    return (
        <>
            <Container>
                <Row className='align-items-center'>
                    <Col>
                        <h1 className='text-center mt-5'>Renters</h1>
                    </Col>
                </Row>

                <>
                    <Table striped bordered hover responsive className='table-sm'>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>National ID</th>
                                <th>Date of Birth</th>
                                <th>Phone Number</th>
                                <th>Email</th>
                                <th>Blacklisted ?</th>
                                <th>Rating</th>
                            </tr>
                        </thead>

                        <tbody>
                            {users && users.length > 0 && users.map((user) => (
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

            </Container>
        </>
    )
}

export default AdminListRenterScreen

