import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Form, Button, Container } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'

import Message from '../components/Message'
import Loader from '../components/Loader'
import { listCarDetails, updateCar } from '../actions/carActions'
import { CAR_UPDATE_RESET } from '../constants/carConstants'

const CompanyCarEditScreen = ({ match, history }) => {

    //TODO: chagen car ID to car Plate as it is uniqe

    //get user id from URL
    const carPlate = match.params.carPlate

    //car info
    const [plate, setPlate] = useState('')
    const [price, setPrice] = useState('')
    const [model, setModel] = useState()
    const [mileage, setMileage] = useState('')
    const [status, setStatus] = useState('')
    const [color, setColor] = useState('')
    const [rents, setRents] = useState('')
    const [benefits, setBenefits] = useState('')
    const [image, setImage] = useState('')

    const dispatch = useDispatch()

    const carDetails = useSelector((state) => state.carDetails)
    const { loading, error, car } = carDetails

    const carUpdate = useSelector((state) => state.carUpdate)
    const { loading: loadingUpdate, error: errorUpdate, success: successUpdate } = carUpdate

    const companyLogin = useSelector(state => state.companyLogin)
    const { companyInfo } = companyLogin

    useEffect(() => {
        if (successUpdate) {
            dispatch({ type: CAR_UPDATE_RESET })
            history.push('/caompany/carlist')
        } else {
            if (!car.plate) {
                dispatch(listCarDetails(carPlate))
            } else {
                setPlate(car.plate)
                setPrice(car.price)
                setModel(car.model)
                setMileage(car.mileage)
                setStatus(car.status)
                setColor(car.color)
                //setRents(car.rents)
                setBenefits(car.benefits)
                setImage(car.image)
            }
        }

    }, [dispatch, history, carPlate, car, successUpdate])

    const submitHandler = (e) => {
        e.preventDefault()
        //update car with form info
        dispatch(updateCar({
            plate,
            price,
            model,
            mileage,
            status,
            color,
            benefits,
            image
        }))
    }

    return (
        <>
            <Link to='/company/carlist' className='btn btn-light my-3'>
                Go Back
            </Link>
            <Container>
                <h1>Edit Car</h1>
                {loadingUpdate && <Loader />}
                {errorUpdate && <Message variant='danger'>{errorUpdate}</Message>}
                {loading ? (
                    <Loader />
                ) : error ? (
                    <Message variant='danger'>{error}</Message>
                ) : (
                    <Form onSubmit={submitHandler}>
                        <Form.Group controlId='name'>
                            <Form.Label>Plate</Form.Label>
                            <Form.Control
                                type='text'
                                placeholder='Enter plate'
                                value={plate}
                                onChange={(e) => setPlate(e.target.value)}
                            ></Form.Control>
                        </Form.Group>

                        <Form.Group controlId='price'>
                            <Form.Label>Price</Form.Label>
                            <Form.Control
                                type='number'
                                placeholder='Enter price'
                                value={price}
                                onChange={(e) => setPrice(e.target.value)}
                            ></Form.Control>
                        </Form.Group>

                        <Form.Group controlId='model'>
                            <Form.Label>Price</Form.Label>
                            <Form.Control
                                type='text'
                                placeholder='Enter model'
                                value={model}
                                onChange={(e) => setModel(e.target.value)}
                            ></Form.Control>
                        </Form.Group>

                        <Form.Group controlId='mileage'>
                            <Form.Label>Mileage</Form.Label>
                            <Form.Control
                                type='text'
                                placeholder='Enter mileage'
                                value={mileage}
                                onChange={(e) => setMileage(e.target.value)}
                            ></Form.Control>
                        </Form.Group>

                        <Form.Group controlId='status'>
                            <Form.Label>Status</Form.Label>
                            <Form.Control
                                type='text'
                                placeholder='Enter status'
                                value={status}
                                onChange={(e) => setStatus(e.target.value)}
                            ></Form.Control>
                        </Form.Group>

                        <Form.Group controlId='color'>
                            <Form.Label>Color</Form.Label>
                            <Form.Control
                                type='text'
                                placeholder='Enter color'
                                value={color}
                                onChange={(e) => setColor(e.target.value)}
                            ></Form.Control>
                        </Form.Group>

                        <Form.Group controlId='benefits'>
                            <Form.Label>Benefits</Form.Label>
                            <Form.Control
                                type='text'
                                placeholder='Enter benefits'
                                value={benefits}
                                onChange={(e) => setBenefits(e.target.value)}
                            ></Form.Control>
                        </Form.Group>

                        <Form.Group controlId='image'>
                            <Form.Label>Image</Form.Label>
                            <Form.Control
                                type='text'
                                placeholder='Enter image url'
                                value={image}
                                onChange={(e) => setImage(e.target.value)}
                            ></Form.Control>
                        </Form.Group>

                        <Button type='submit' variant='primary'>
                            Update
                                </Button>
                    </Form>
                )}
            </Container>
        </>
    )
}

export default CompanyCarEditScreen