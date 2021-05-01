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

    return (
        <div className="container mt-5 mb-5">
            <h2 className='h1-responsive font-weight-bold text-center my-5'>Browse Cars</h2>
            <div className="d-flex justify-content-center row">
                <div className="col-md-10">

                    {cars ? cars.map((car) => (
                        <div className="row p-2 mb-3 bg-white border rounded">
                            <div className="col-md-3 mt-1">
                                <img className="img-fluid img-responsive rounded product-image" src={car.image}></img>
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
