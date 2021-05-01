import axios from 'axios'

import { logout } from '../actions/userActions'
import {
    ADMIN_LOGIN_FAIL, ADMIN_LOGIN_REQUEST, ADMIN_LOGIN_SUCCESS,
    ADMIN_ACTIVATE_COMPANY_FAIL, ADMIN_ACTIVATE_COMPANY_REQUEST, ADMIN_ACTIVATE_COMPANY_SUCCESS,
    ADMIN_BLACKLIST_COMPANY_FAIL, ADMIN_BLACKLIST_COMPANY_REQUEST, ADMIN_BLACKLIST_COMPANY_SUCCESS,
    ADMIN_BLACKLIST_RENTER_FAIL, ADMIN_BLACKLIST_RENTER_REQUEST, ADMIN_BLACKLIST_RENTER_SUCCESS
} from '../constants/adminConstants'

export const loginAdmin = (email, password) => async (dispatch) => {
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
        const { data } = await axios.post('/api/admin/login', { email, password }, config)

        dispatch({
            type: ADMIN_LOGIN_SUCCESS,
            payload: data
        })

        //users local storage
        localStorage.setItem('adminInfo', JSON.stringify(data))

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

export const activateCompany = (id) => async (dispatch, getState) => {
    try {
        dispatch({
            type: ADMIN_ACTIVATE_COMPANY_REQUEST,
        })

        const {
            adminLogin: { adminInfo },
        } = getState()

        const config = {
            headers: {
                Authorization: `${JSON.parse(localStorage.getItem('adminInfo')).token || adminInfo.token}`,
            },
        }

        await axios.put(
            `/api/rental-company/activate/${id}`,
            config
        )

        dispatch({
            type: ADMIN_ACTIVATE_COMPANY_SUCCESS,
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
            type: ADMIN_ACTIVATE_COMPANY_FAIL,
            payload: message,
        })
    }
}

export const blacklistRenter = (id) => async (dispatch, getState) => {
    try {
        dispatch({
            type: ADMIN_BLACKLIST_RENTER_REQUEST,
        })

        const {
            adminLogin: { adminInfo },
        } = getState()

        const config = {
            headers: {
                Authorization: `${JSON.parse(localStorage.getItem('adminInfo')).token || adminInfo.token}`,
            },
        }

        await axios.put(
            `/api/renter/blacklist/${id}`,
            config
        )

        dispatch({
            type: ADMIN_BLACKLIST_RENTER_SUCCESS,
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
            type: ADMIN_BLACKLIST_RENTER_FAIL,
            payload: message,
        })
    }
}


