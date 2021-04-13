import React from 'react'
import { Container, Row } from 'react-bootstrap'

const AdminHomeScreen = () => {
    return (
        <>
            <Container>
                <h1 className='text-center mt-5'>Welcome Back</h1>
                <h3 className='text-center p-3'>Where Would you Like to Go ?</h3>
                <Container className='m-3'>

                    <Row className='text-center d-flex justify-content-center p-3'>
                        <div class="card m-2 bg-info " style={{ width: '18rem' }}>
                            <span className='fas fa-user fa-2x mt-3'></span>
                            <div class="card-body">
                                <h5 class="card-title">Renters</h5>
                                <p class="card-text text-white">See all renters registered in the system with their details.</p>
                                <a href="/admin/renterslist" class="btn btn-warning">Renters Panel</a>
                            </div>
                        </div>

                        <div class="card m-2 bg-info " style={{ width: '18rem' }}>
                            <span className='fas fa-building fa-2x mt-3'></span>
                            <div class="card-body">
                                <h5 class="card-title">Rental Companies</h5>
                                <p class="card-text text-white">See all companies registered in the system with their details.</p>
                                <a href="/admin/companieslist" class="btn btn-warning">Companies Panel</a>
                            </div>
                        </div>
                    </Row>

                    <Row className='text-center d-flex justify-content-center p-3'>
                        <div class="card m-2 bg-info " style={{ width: '18rem' }}>
                            <span className='fas fa-car fa-2x mt-3'></span>
                            <div class="card-body">
                                <h5 class="card-title">Cars</h5>
                                <p class="card-text text-white">See all cars registered in the system with their details.</p>
                                <a href="/admin/carslist" class="btn btn-warning">Cars Panel</a>
                            </div>
                        </div>

                        <div class="card m-2 bg-info " style={{ width: '18rem' }}>
                            <span className='fas fa-receipt fa-2x mt-3'></span>
                            <div class="card-body">
                                <h5 class="card-title">Rents</h5>
                                <p class="card-text text-white">See all rents registered in the system with their details.</p>
                                <a href="/admin/orderslist" class="btn btn-warning">Rents Panel</a>
                            </div>
                        </div>
                    </Row>

                </Container>
            </Container>

        </>
    )
}

export default AdminHomeScreen
