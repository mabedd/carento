import React, { useEffect } from 'react'
import { Table, Button, Row, Col, Container } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'

import Message from '../components/Message'
import Loader from '../components/Loader'
import Paginate from '../components/Paginate'
import Rating from '../components/Rating'
import { listCompanies } from '../actions/companyActions'
import { activateCompany } from '../actions/adminActions'

const AdminListCompaniesScreen = ({ history, match }) => {

    // pagination
    const pageNumber = match.params.pageNumber || 1

    const dispatch = useDispatch()

    // const userList = useSelector((state) => state.userList)
    // const { loading, error, users, page, pages } = userList

    const companyList = useSelector((state) => state.companyList)
    const { loading, error, companies, page, pages } = companyList



    // MUST be for admin
    const adminLogin = useSelector((state) => state.adminLogin)
    const { adminInfo } = adminLogin

    const activateHandler = (id) => {
        //TODO: change company status from deactivated to activated
        //dispatch(activateCompany)
    }

    useEffect(() => {
        //should be for admin
        // if (!adminInfo || !adminInfo.isAdmin) {
        //     history.push('/admin/login')
        // }

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
                <Row className=' align-items-center'>
                    <Col>
                        <h1 className='text-center mt-5'>Carento Rental Companies</h1>
                    </Col>
                </Row>

                {loading ? (<Loader />) : error ? (<Message variant='danger'>{error}</Message>) : (
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
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>

                                {companies && companies.length > 0 && companies.map((company) => (
                                    <tr>
                                        <td>{company.companyName}</td>
                                        <td>{company.email}</td>
                                        <td>{company.phoneNumber}</td>

                                        <td>{company.status ? (
                                            <i className='fas fa-check' style={{ color: 'green' }}></i>
                                        ) : (
                                            <i className='fas fa-times' style={{ color: 'red' }}></i>
                                        )}</td>

                                        <td>{company.createdAt}</td>
                                        <td>{company.endOfRegistrationDate}</td>
                                        <td><Rating value={company.rating} /></td>
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

