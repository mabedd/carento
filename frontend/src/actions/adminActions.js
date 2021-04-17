import axios from 'axios'

import { logout } from '../actions/userActions'
import {
    ADMIN_LOGIN_FAIL, ADMIN_LOGIN_REQUEST, ADMIN_LOGIN_SUCCESS,
    ADMIN_ACTIVATE_COMPANY_FAIL, ADMIN_ACTIVATE_COMPANY_REQUEST, ADMIN_ACTIVATE_COMPANY_SUCCESS
} from '../constants/adminConstants'

export const adminLogin = (email, password) => async (dispatch) => {
    try {
        dispatch({
            type: ADMIN_LOGIN_REQUEST
        })

        //config for sending requests
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }

        //make request
        const { data } = await axios.post('http://localhost:5000/api/admin/login', { email, password }, config)

        dispatch({
            type: ADMIN_LOGIN_SUCCESS,
            payload: data
        })

        //users local storage
        localStorage.setItem('userInfo', JSON.stringify(data))

    } catch (error) {
        dispatch({//send error message in case of failuer
            type: ADMIN_LOGIN_FAIL,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        })
    }
}

export const activateCompany = (company) => async (dispatch, getState) => {
    try {
        dispatch({
            type: ADMIN_ACTIVATE_COMPANY_REQUEST,
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

        //TODO: change route similar to backend
        const { data } = await axios.put(
            `/api/company`,
            company,
            config
        )

        dispatch({
            type: ADMIN_ACTIVATE_COMPANY_SUCCESS,
            payload: data,
        })
        dispatch({ type: ADMIN_ACTIVATE_COMPANY_SUCCESS, payload: data })
    } catch (error) {
        const message =
            error.response && error.response.data.message
                ? error.response.data.message
                : error.message
        if (message === 'Not authorized, token failed') {
            dispatch(logout())
        }
        dispatch({
            type: ADMIN_ACTIVATE_COMPANY_FAIL,
            payload: message,
        })
    }
}

//TODO: admin blacklist user
