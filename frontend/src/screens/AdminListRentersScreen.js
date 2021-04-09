import React, { useEffect } from 'react'
import { Container } from 'react-router-bootstrap'
import { Table, Button, Row, Col } from 'react-bootstrap'
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
                        <h1>Renters</h1>
                    </Col>
                    <Col className='text-right'>
                        <Button className='my-3'>
                            <i className='fas fa-plus'></i> Create Product
          </Button>
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
                                    <th>ID</th>
                                    <th>NAME</th>
                                    <th>PRICE</th>
                                    <th>CATEGORY</th>
                                    <th>BRAND</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>

                                <tr>
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

export default AdminListRenterScreen

