import React, { useEffect } from 'react'
import { LinkContainer } from 'react-router-bootstrap'
import { Table, Button, Container } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'

import Rating from '../components/Rating'
import Message from '../components/Message'
import Loader from '../components/Loader'
import { listCompanyRenters } from '../actions/companyActions'

const CompanyUserListScreen = () => {

    const dispatch = useDispatch()

    const companyListRenters = useSelector(state => state && state.companyListRenters)
    console.log(useSelector(state => console.log('state', state)));
    const { loading, error, company= [] } = companyListRenters

    const companyLogin = useSelector(state => state.companyLogin)
    const { companyInfo } = companyLogin

    useEffect(() => {
        //TODO: check if user is company or not and redirect to login if not
        dispatch(listCompanyRenters())
    }, [dispatch])

    //TODO: add delete handler

    //TODO: add this to table
    /**                 {loading ? <Loader /> : error ? <Message variant='danger'>{error}</Message>
                    : (*/

    return (
        <>
            <Container className='mt-5'>
                <h1 className='text-center'>USERS</h1>
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
                        {company.renters && company.renters.length > 0 && company.renters.map((renter) => (
                            <tr key={renter && renter._id}>
                                <td>{renter && renter.username}</td>
                                <td>{renter && renter.email}</td>
                                <td>{renter && renter.phoneNumber}</td>
                                <td>{renter && renter.nationalId}</td>
                                <td><Rating value={renter && renter.rating} /></td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </Container>
        </>
    )
}

export default CompanyUserListScreen;
