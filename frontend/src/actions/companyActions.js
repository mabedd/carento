import axios from 'axios'

import { logout } from '../actions/userActions'
import {
    COMPANY_LOGIN_FAIL, COMPANY_LOGIN_REQUEST, COMPANY_LOGIN_SUCCESS, COMPANY_LOGOUT
} from '../constants/compnayConstants'

export const companyLogin = (email, password) => async (dispatch) => {
    try {
        dispatch({
            type: COMPANY_LOGIN_REQUEST
        })

        //config for sending requests
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }

        //make request
        const { data } = await axios.post('http://localhost:5000/api/rental-company/login', { email, password }, config)

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