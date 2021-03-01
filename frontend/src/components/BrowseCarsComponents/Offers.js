import React from 'react'
import { MDBIcon, MDBBtn } from 'mdbreact'

import './Offers.css'
import Rating from '../../components/Rating'


const Offers = () => {
    return (
        <div className="container mt-5 mb-5">
            <h2 className='h1-responsive font-weight-bold text-center my-5'>More Offers</h2>
            <div className="d-flex justify-content-center row">
                <div className="col-md-10">

                    <div className="row p-2 bg-white border rounded">
                        <div className="col-md-3 mt-1">
                            <img className="img-fluid img-responsive rounded product-image" src="/images/featuredOffers1.jpg"></img>
                        </div>
                        <div className="col-md-6 mt-1">
                            <h5>Toyota Camry</h5>
                            <div className="d-flex flex-row">
                                <div className="ratings mr-2">
                                    <Rating />
                                </div>
                                <span>3.5</span>
                            </div>
                            <div className="mt-1 mb-1 spec-1">
                                <span className='p-1'><MDBIcon className='amber-text' icon="user-alt" size='lg' /> 4</span>
                                <span className="p-3"><MDBIcon className='amber-text' icon="road" size='lg' /> 500 km</span>
                                <span className='p-3'><MDBIcon className='amber-text' icon="gas-pump" size='lg' /> 91</span>
                            </div>
                            <p className="text-justify text-truncate para mb-0">
                                There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.
                                <br></br>
                                <br></br>
                                <p className="text-justify text-truncate para mb-0">Offerd By: </p>
                                <br></br>
                            </p>
                        </div>
                        <div className="align-items-center align-content-center col-md-3 border-left mt-1">
                            <div className="d-flex flex-row align-items-center">
                                <h4 className="mr-1">49 SR / Day</h4>
                            </div>
                            <div className="d-flex flex-column mt-4">
                                <MDBBtn rounded gradient='peach'>Rent Now</MDBBtn>
                                <MDBBtn rounded gradient='blue-gradient text-white'>More Details</MDBBtn>
                            </div>
                        </div>
                    </div>

                    <div className="row p-2 bg-white border rounded mt-3">
                        <div className="col-md-3 mt-1">
                            <img className="img-fluid img-responsive rounded product-image" src="/images/featuredOffers1.jpg"></img>
                        </div>
                        <div className="col-md-6 mt-1">
                            <h5>Toyota Camry</h5>
                            <div className="d-flex flex-row">
                                <div className="ratings mr-2">
                                    <Rating />
                                </div>
                                <span>3.5</span>
                            </div>
                            <div className="mt-1 mb-1 spec-1">
                                <span className='p-1'><MDBIcon className='amber-text' icon="user-alt" size='lg' /> 4</span>
                                <span className="p-3"><MDBIcon className='amber-text' icon="road" size='lg' /> 500 km</span>
                                <span className='p-3'><MDBIcon className='amber-text' icon="gas-pump" size='lg' /> 91</span>
                            </div>
                            <p className="text-justify text-truncate para mb-0">
                                There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.
                                <br></br>
                                <br></br>
                                <p className="text-justify text-truncate para mb-0">Offerd By: </p>
                                <br></br>
                            </p>
                        </div>
                        <div className="align-items-center align-content-center col-md-3 border-left mt-1">
                            <div className="d-flex flex-row align-items-center">
                                <h4 className="mr-1">49 SR / Day</h4>
                            </div>
                            <div className="d-flex flex-column mt-4">
                                <MDBBtn rounded gradient='peach'>Rent Now</MDBBtn>
                                <MDBBtn rounded gradient='blue-gradient text-white'>More Details</MDBBtn>
                            </div>
                        </div>
                    </div>

                    <div className="row p-2 bg-white border rounded mt-3">
                        <div className="col-md-3 mt-1">
                            <img className="img-fluid img-responsive rounded product-image" src="/images/featuredOffers1.jpg"></img>
                        </div>
                        <div className="col-md-6 mt-1">
                            <h5>Toyota Camry</h5>
                            <div className="d-flex flex-row">
                                <div className="ratings mr-2">
                                    <Rating />
                                </div>
                                <span>3.5</span>
                            </div>
                            <div className="mt-1 mb-1 spec-1">
                                <span className='p-1'><MDBIcon className='amber-text' icon="user-alt" size='lg' /> 4</span>
                                <span className="p-3"><MDBIcon className='amber-text' icon="road" size='lg' /> 500 km</span>
                                <span className='p-3'><MDBIcon className='amber-text' icon="gas-pump" size='lg' /> 91</span>
                            </div>
                            <p className="text-justify text-truncate para mb-0">
                                There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.
                                <br></br>
                                <br></br>
                                <p className="text-justify text-truncate para mb-0">Offerd By: </p>
                                <br></br>
                            </p>
                        </div>
                        <div className="align-items-center align-content-center col-md-3 border-left mt-1">
                            <div className="d-flex flex-row align-items-center">
                                <h4 className="mr-1">49 SR / Day</h4>
                            </div>
                            <div className="d-flex flex-column mt-4">
                                <MDBBtn rounded gradient='peach'>Rent Now</MDBBtn>
                                <MDBBtn rounded gradient='blue-gradient text-white'>More Details</MDBBtn>
                            </div>
                        </div>
                    </div>



                </div>
            </div>
        </div>
    )
}

export default Offers
