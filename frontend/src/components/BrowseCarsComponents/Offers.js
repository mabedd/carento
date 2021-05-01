import React, { useEffect } from 'react'
import { Table, Button, Row, Col, Container } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { LinkContainer } from 'react-router-bootstrap'
import { MDBIcon, MDBBtn } from 'mdbreact'

import './Offers.css'
import Rating from '../../components/Rating'
import Paginate from '../../components/Paginate'
import Message from '../../components/Message'
import Loader from '../../components/Loader'

import { listCars } from '../../actions/carActions'


const Offers = ({ history, match }) => {
    const defaultImage = 'data:image/jpeg;base64,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';
    //TODO: fetch gasoline, size, and rating from DB
    //TODO: fetch company name from DB

    //! Fix pagination
    // pagination
    //const pageNumber = match.params.pageNumber || 1

    const dispatch = useDispatch()

    const carList = useSelector((state) => state.carList)
    const { loading, error, cars, page, pages } = carList

    console.log(cars)

    useEffect(() => {
        //should be for admin or redirect to admin login
        // if (!adminInfo) {
        //     history.push('/admin/login')
        // }
        // fetch cars from the backend
        dispatch(listCars('', 1))
    }, [
        dispatch,
        history,
        //pageNumber,
    ])
    const apiURL = 'http://localhost:5000'
    return (
        <div className="container mt-5 mb-5">
            <h2 className='h1-responsive font-weight-bold text-center my-5'>Browse Cars</h2>
            <div className="d-flex justify-content-center row">
                <div className="col-md-10">

                    {cars ? cars.map((car) => (
                        <div className="row p-2 mb-3 bg-white border rounded">
                            <div className="col-md-3 mt-1">
                                <img className="img-fluid img-responsive rounded product-image" src={`${apiURL}/${car.image}` || defaultImage}></img>
                            </div>

                            <div className="col-md-6 mt-1">
                                <h5>{car.vendor}   {car.carModel}</h5>
                                <div className="d-flex flex-row">
                                    <div className="ratings mr-2">
                                        <Rating value={car.rating} />
                                    </div>
                                    <span>{car.rating}</span>
                                </div>
                                <div className="mt-1 mb-1 spec-1">
                                    <span className='p-1'><MDBIcon className='amber-text' icon="user-alt" size='lg' /> {car.size}</span>
                                    <span className="p-3"><MDBIcon className='amber-text' icon="road" size='lg' /> {car.totalMileage} km</span>
                                    <span className='p-3'><MDBIcon className='amber-text' icon="gas-pump" size='lg' /> {car.gasoline}</span>
                                    <span className='p-3'><i className='fas fa-calendar amber-text'></i> {car.carModel}</span>
                                    <span className='p-3'><i className='fas fa-palette amber-text'></i> {car.color}</span>
                                </div>
                                <p className="text-justify text-truncate para mb-0">
                                    There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.
                         <br></br>
                                    <br></br>
                                    <p className="text-justify text-truncate para mb-0">Offerd By: {car.companyName} </p>
                                    <br></br>
                                </p>
                            </div>
                            <div className="align-items-center align-content-center col-md-3 border-left mt-1">
                                <div className="d-flex flex-row align-items-center">
                                    <h4 className="mr-1">{car.price} SR / Day</h4>
                                </div>
                                <div className="d-flex flex-column mt-4">
                                    {car.status ? (
                                        <MDBBtn rounded color='success text-white' disabled><i className='fas fa-check' style={{ color: 'green' }}></i>  Available</MDBBtn>
                                    ) : (
                                        <MDBBtn rounded color='danger text-white' disabled><i className='fas fa-times' style={{ color: 'red' }}></i>  Not Available</MDBBtn>
                                    )}

                                    {car.status ? (
                                        <LinkContainer to={`/rentsummary/${car._id}`}>
                                            <MDBBtn rounded gradient='blue-gradient text-white'>Rent Now</MDBBtn>
                                        </LinkContainer>
                                    ) : (
                                        <MDBBtn rounded gradient='blue-gradient text-white' disabled>Rented</MDBBtn>
                                    )}

                                </div>
                            </div>
                        </div>
                    )) : ''}

                </div>
            </div>
        </div>
    )
}

export default Offers
