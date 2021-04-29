import axios from 'axios'

import { logout } from '../actions/userActions'
import {
    COMPANY_LOGIN_FAIL, COMPANY_LOGIN_REQUEST, COMPANY_LOGIN_SUCCESS, COMPANY_LOGOUT,
    COMPANY_LIST_FAIL, COMPANY_LIST_REQUEST, COMPANY_LIST_RESET, COMPANY_LIST_SUCCESS,
    COMPANY_DETAILS_FAIL, COMPANY_DETAILS_REQUEST, COMPANY_DETAILS_SUCCESS,
    COMPANY_LIST_RENTERS_REQUEST, COMPANY_LIST_RENTERS_SUCCESS, COMPANY_LIST_RENTERS_FAIL
} from '../constants/compnayConstants'

export const loginCompany = (email, password) => async (dispatch) => {
    try {
        dispatch({
            type: COMPANY_LOGIN_REQUEST
        })

        //config for sending requests
        const config = {
            headers: {
                'Content-Type': 'application/json',
            }
        }

        //make request
        const { data } = await axios.post('/api/rental-company/login', { email, password }, config)

        console.log(data.id)

        dispatch({
            type: COMPANY_LOGIN_SUCCESS,
            payload: data
        })

        //users local storage
        localStorage.setItem('companyInfo', JSON.stringify(data))

    } catch (error) {
        dispatch({//send error message in case of failuer
            type: COMPANY_LOGIN_FAIL,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        })
    }
}

export const listCompanies = () => async (dispatch, getState) => {
    try {
        dispatch({
            type: COMPANY_LIST_REQUEST,
        })

        const {
            adminLogin: { adminInfo },
        } = getState()

        const config = {
            headers: {
                Authorization: `${adminInfo.token}`,
            },
        }

        const { data } = await axios.get(`http://localhost:5000/api/rental-company/find-all-companies`, config)
        //console.log(data)
        dispatch({
            type: COMPANY_LIST_SUCCESS,
            payload: data.company,
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
            type: COMPANY_LIST_FAIL,
            payload: message,
        })
    }
}

export const getCompanyDetails = (id) => async (dispatch, getState) => {
    try {
        dispatch({
            type: COMPANY_DETAILS_REQUEST,
        })

        //access logged in user
        const {
            companyLogin: { companyInfo },
        } = getState()

        //pass auth token
        const config = {
            headers: {
                Authorization: `${companyInfo.token}`,
            },
        }

        //get request to user profile
        const { data } = await axios.get(`http://localhost:5000/api/rental-company/get-profile`, config)
        //console.log(data)

        dispatch({
            type: COMPANY_DETAILS_SUCCESS,
            payload: data.rentalCompany,
        })

    } catch (error) { //send error message and logout user
        const message =
            error.response && error.response.data.message
                ? error.response.data.message
                : error.message
        if (message === 'Not authorized, token failed') {
            dispatch(logout())
        }
        dispatch({
            type: COMPANY_DETAILS_FAIL,
            payload: message,
        })
    }
}

export const listCompanyRenters = (id) => async (dispatch, getState) => {
    try {
        dispatch({
            type: COMPANY_LIST_RENTERS_REQUEST,
        })

        //access logged in user
        const {
            companyLogin: { companyInfo },
        } = getState()

        //pass auth token
        const config = {
            headers: {
                Authorization: `${companyInfo.token}`,
            },
        }

        //get request to user profile
        const { data } = await axios.get(`http://localhost:5000/api/rental-company/get-profile`, config)
        console.log(data)

        dispatch({
            type: COMPANY_LIST_RENTERS_SUCCESS,
            payload: data.rentalCompany,
        })

    } catch (error) { //send error message and logout user
        const message =
            error.response && error.response.data.message
                ? error.response.data.message
                : error.message
        if (message === 'Not authorized, token failed') {
            dispatch(logout())
        }
        dispatch({
            type: COMPANY_LIST_RENTERS_FAIL,
            payload: message,
        })
    }
}