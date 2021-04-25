import {
    ORDER_CREATE_FAIL, ORDER_CREATE_REQUEST, ORDER_CREATE_SUCCESS,
    ORDER_DETAILS_FAIL, ORDER_DETAILS_REQUEST, ORDER_DETAILS_SUCCESS,
    ORDER_LIST_FAIL, ORDER_LIST_RENTER_FAIL, ORDER_LIST_RENTER_REQUEST, ORDER_LIST_RENTER_SUCCESS, ORDER_LIST_REQUEST, ORDER_LIST_SUCCESS,
    ORDER_PAY_FAIL, ORDER_PAY_REQUEST, ORDER_PAY_SUCCESS
} from '../constants/orderConstants'
import { logout } from './userActions'
import axios from 'axios'

export const createOrder = (duration, price, carId) => async (dispatch, getState) => {
    console.log(duration)
    console.log(price)
    console.log(carId)
    try {
        dispatch({
            type: ORDER_CREATE_REQUEST,
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

        const { data } = await axios.post(`http://localhost:5000/api/rent/add-rent`, { duration, price, carId }, config)
        console.log(data)

        dispatch({
            type: ORDER_CREATE_SUCCESS,
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
            type: ORDER_CREATE_FAIL,
            payload: message,
        })
    }
}

export const getOrderDetails = (id) => async (dispatch, getState) => {
    try {
        dispatch({
            type: ORDER_DETAILS_REQUEST,
        })

        const {
            userLogin: { userInfo },
        } = getState()

        const config = {
            headers: {
                Authorization: `${userInfo.token}`,
            },
        }

        console.log(data)

        const { data } = await axios.get(`http://localhost:5000/api/rents/${id}`, config)

        dispatch({
            type: ORDER_DETAILS_SUCCESS,
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
            type: ORDER_DETAILS_FAIL,
            payload: message,
        })
    }
}

//TODO: do backend
export const payOrder = (orderId, paymentResult) => async (dispatch, getState) => {
    try {
        dispatch({
            type: ORDER_PAY_REQUEST,
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

        const { data } = await axios.put(
            `http://localhost:5000/api/orders/${orderId}/pay`,
            paymentResult,
            config
        )

        dispatch({
            type: ORDER_PAY_SUCCESS,
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
            type: ORDER_PAY_FAIL,
            payload: message,
        })
    }
}

export const listOrders = () => async (dispatch, getState) => {
    try {
        dispatch({
            type: ORDER_LIST_REQUEST,
        })

        const {
            adminLogin: { adminInfo },
        } = getState()

        const config = {
            headers: {
                Authorization: `${adminInfo.token}`,
            },
        }


        const { data } = await axios.get(`http://localhost:5000/api/rent/find-all-rents`, config)

        console.log(data)

        dispatch({
            type: ORDER_LIST_SUCCESS,
            payload: data.car,
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
            type: ORDER_LIST_FAIL,
            payload: message,
        })
    }
}

export const listRenterOrders = () => async (dispatch, getState) => {
    try {
        dispatch({
            type: ORDER_LIST_RENTER_REQUEST,
        })

        const {
            userLogin: { userInfo },
        } = getState()

        const config = {
            headers: {
                Authorization: `${userInfo.token}`,
            },
        }

        const { data } = await axios.get(`http://localhost:5000/api/rent/find-renter-rents`, config)

        console.log(data)

        dispatch({
            type: ORDER_LIST_RENTER_SUCCESS,
            payload: data.rent,
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
            type: ORDER_LIST_RENTER_FAIL,
            payload: message,
        })
    }
}
