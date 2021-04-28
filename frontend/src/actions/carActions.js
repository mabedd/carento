import axios from 'axios'

import { logout } from './userActions'
import {
    CAR_LIST_REQUEST, CAR_LIST_SUCCESS, CAR_LIST_FAIL,
    CAR_DETAILS_REQUEST, CAR_DETAILS_SUCCESS, CAR_DETAILS_FAIL,
    CAR_DELETE_FAIL, CAR_DELETE_SUCCESS, CAR_DELETE_REQUEST,
    CAR_CREATE_FAIL, CAR_CREATE_REQUEST, CAR_CREATE_RESET, CAR_CREATE_SUCCESS,
    CAR_UPDATE_REQUEST, CAR_UPDATE_SUCCESS, CAR_UPDATE_FAIL, CAR_UPDATE_RESET,
    CAR_RATE_REQUEST, CAR_RATE_SUCCESS, CAR_RATE_FAIL, CAR_RATE_RESET,
} from '../constants/carConstants'


export const listCars = (keyword = '', pageNumber = '') => async (
    dispatch
) => {
    try {
        dispatch({ type: CAR_LIST_REQUEST })

        const { data } = await axios.get(
            `http://localhost:5000/api/car/find-all-cars`
        )

        console.log(data.car)

        dispatch({
            type: CAR_LIST_SUCCESS,
            payload: data.car,
        })

    } catch (error) {
        dispatch({
            type: CAR_LIST_FAIL,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        })
    }
}

export const listCompanyCars = (keyword = '', pageNumber = '') => async (
    dispatch, getState
) => {
    try {
        dispatch({ type: CAR_LIST_REQUEST })

        const {
            companyLogin: { companyInfo },
        } = getState()

        const config = {
            headers: {
                Authorization: `${companyInfo.token}`,
            },
        }

        const { data } = await axios.get(
            `http://localhost:5000/api/car/find-company-cars`,
            config
        )

        console.log(data.car)

        dispatch({
            type: CAR_LIST_SUCCESS,
            payload: data.car,
        })

    } catch (error) {
        dispatch({
            type: CAR_LIST_FAIL,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        })
    }
}


export const listCarDetails = (id) => async (dispatch) => {
    try {
        dispatch({ type: CAR_DETAILS_REQUEST })

        const { data } = await axios.get(`http://localhost:5000/api/car/get-car-details/${id}`)

        //console.log(data)

        dispatch({
            type: CAR_DETAILS_SUCCESS,
            payload: data.user,
        })
    } catch (error) {
        dispatch({
            type: CAR_DETAILS_FAIL,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        })
    }
}

export const deleteCar = (id) => async (dispatch, getState) => {
    try {
        dispatch({
            type: CAR_DELETE_REQUEST,
        })

        const {
            companyLogin: { companyInfo },
        } = getState()

        const config = {
            headers: {
                Authorization: `${companyInfo.token}`,
            },
        }

        await axios.delete(`http://localhost:5000/api/car/delete-car/${id}`, config)

        dispatch({
            type: CAR_DELETE_SUCCESS,
        })
    } catch (error) {
        const message =
            error.response && error.response.data.message
                ? error.response.data.message
                : error.message
        if (message === 'Not authorized, token failed') {
            dispatch(logout())
        }
        dispatch({
            type: CAR_DELETE_FAIL,
            payload: message,
        })
    }
}

export const createCar = (carPlate, carModel, color, totalMileage, price, vendor, size, gasoline) => async (dispatch, getState) => {
    try {
        dispatch({
            type: CAR_CREATE_REQUEST,
        })

        const {
            companyLogin: { companyInfo },
        } = getState()

        const config = {
            headers: {
                Authorization: `${companyInfo.token}`,
            },
        }

        const { data } = await axios.post(`http://localhost:5000/api/car/add-car`, { carPlate, carModel, color, size, gasoline, vendor, totalMileage, price }, config)
        console.log(data)
        //console.log(size)
        dispatch({
            type: CAR_CREATE_SUCCESS,
            payload: data,
        })

    } catch (error) {
        const message =
            error.response && error.response.data.message
                ? error.response.data.message
                : error.message
        if (message === 'Not authorized, token failed') {
            dispatch(logout())
        }
        dispatch({
            type: CAR_CREATE_FAIL,
            payload: message,
        })
    }
}

export const addCar = form => {

    return async (dispatch, getState) => {
        dispatch({
            type: CAR_CREATE_REQUEST,
        })


        const {
            companyLogin: { companyInfo },
        } = getState()

        const config = {
            headers: {
                Authorization: `${companyInfo.token}`,
            },
        }
        const res = await axios.post(`http://localhost:5000/api/car/add-car`, form, config)
        console.log(res)
    }
}

//TODO: do backend
export const updateCar = (car) => async (dispatch, getState) => {
    try {
        dispatch({
            type: CAR_UPDATE_REQUEST,
        })

        const {
            userLogin: { userInfo },
        } = getState()

        const config = {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${userInfo.token}`,
            },
        }

        //TODO: check
        const { data } = await axios.put(
            `http://localhost:5000/api/cars/${car.plate}`,
            car,
            config
        )

        dispatch({
            type: CAR_UPDATE_SUCCESS,
            payload: data,
        })
        dispatch({ type: CAR_DETAILS_SUCCESS, payload: data })
    } catch (error) {
        const message =
            error.response && error.response.data.message
                ? error.response.data.message
                : error.message
        if (message === 'Not authorized, token failed') {
            dispatch(logout())
        }
        dispatch({
            type: CAR_UPDATE_FAIL,
            payload: message,
        })
    }
}

export const rateCar = (carId, rating) => async (dispatch, getState) => {
    try {
        dispatch({
            type: CAR_RATE_REQUEST,
        })

        const {
            userLogin: { userInfo },
        } = getState()

        const config = {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `${userInfo.token}`,
            },
        }

        const data = await axios.put(
            `http://localhost:5000/api/car/rate-car/${carId}`,
            rating,
            config
        )

        console.log(data)

        dispatch({
            type: CAR_RATE_SUCCESS,
        })

    } catch (error) {
        const message =
            error.response && error.response.data.message
                ? error.response.data.message
                : error.message
        if (message === 'Not authorized, token failed') {
            dispatch(logout())
        }
        dispatch({
            type: CAR_RATE_FAIL,
            payload: message,
        })
    }
}