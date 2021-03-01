import React, { useEffect } from 'react'
import { LinkContainer } from 'react-router-bootstrap'
import { Table, Button, Container } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'

import Rating from '../components/Rating'
import Message from '../components/Message'
import Loader from '../components/Loader'
import { listUsers } from '../actions/userActions'

const CompanyUserListScreen = () => {

    const dispatch = useDispatch()

    const userList = useSelector(state => state.userList)
    const { loading, error, users } = userList

    //get user info 
    const userLogin = useSelector(state => state.userList)
    const { userInfo } = userLogin

    useEffect(() => {
        //TODO: check if user is company or not and redirect to login if not
        dispatch(listUsers())
    }, [dispatch])

    //TODO: add delete handler

    //TODO: add this to table
    /**                 {loading ? <Loader /> : error ? <Message variant='danger'>{error}</Message>
                    : (*/

    return (
        <>
            <Container>
                <h1 className='text-center'>Users</h1>
                <Table striped bordered hover responsive className='table-sm'>
                    <thead>
                        <tr>
                            <th>NAME</th>
                            <th>ID</th>
                            <th>EMAIL</th>
                            <th>PHONE NUMBER</th>
                            <th>RENTS</th>
                            <th>AGE</th>
                            <th>RATING</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/**TODO: loop throguh users and display their info */}
                    </tbody>
                </Table>
            </Container>
        </>
    )
}

export default CompanyUserListScreen
