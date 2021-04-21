import axios from 'axios'

import { logout } from '../actions/userActions'
import {
    COMPANY_LOGIN_FAIL, COMPANY_LOGIN_REQUEST, COMPANY_LOGIN_SUCCESS, COMPANY_LOGOUT,
    COMPANY_LIST_FAIL, COMPANY_LIST_REQUEST, COMPANY_LIST_RESET, COMPANY_LIST_SUCCESS
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
        const { data } = await axios.post('http://localhost:5000/api/rental-company/login', { email, password }, config)

        console.log(data.id)

        dispatch({
            type: COMPANY_LOGIN_SUCCESS,
            payload: data
        })

        //users local storage
        localStorage.setItem('userInfo', JSON.stringify(data))

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

        // const config = {
        //     headers: {
        //         Authorization: `Bearer ${userInfo.token}`,
        //     },
        // }

        const { data } = await axios.get(`http://localhost:5000/api/rental-company/find-all-companies`)
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