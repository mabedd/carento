import axios from 'axios'
import {
    USER_DETAILS_FAIL, USER_DETAILS_REQUEST, USER_DETAILS_SUCCESS, USER_DETAILS_RESET,
    USER_LIST_FAIL, USER_LIST_REQUEST, USER_LIST_SUCCESS, USER_LIST_RESET,
    USER_LOGIN_FAIL, USER_LOGIN_REQUEST, USER_LOGIN_SUCCESS, USER_LOGOUT,
    USER_REGISTER_FAIL, USER_REGISTER_REQUEST, USER_REGISTER_SUCCESS,
    USER_UPDATE_PROFILE_FAIL, USER_UPDATE_PROFILE_REQUEST, USER_UPDATE_PROFILE_SUCCESS,
    USER_DELETE_REQUEST, USER_DELETE_SUCCESS, USER_DELETE_FAIL,
    USER_UPDATE_SUCCESS, USER_UPDATE_FAIL, USER_UPDATE_REQUEST
} from '../constants/userConstants'

// WORKS FINE 
export const login = (email, password) => async (dispatch) => {
    try {
        dispatch({
            type: USER_LOGIN_REQUEST
        })

        //config for sending requests
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }

        //make request
        const { data } = await axios.post('http://localhost:5000/api/renter/login', { email, password }, config)

        dispatch({
            type: USER_LOGIN_SUCCESS,
            payload: data
        })

        //users local storage
        localStorage.setItem('userInfo', JSON.stringify(data))

    } catch (error) {
        dispatch({//send error message in case of failuer
            type: USER_LOGIN_FAIL,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        })
    }
}

// WORK FINE
export const logout = () => (dispatch) => {
    localStorage.removeItem('userInfo')

    dispatch({ type: USER_LOGOUT })
    dispatch({ type: USER_DETAILS_RESET })
    dispatch({ type: USER_LIST_RESET })

    document.location.href = '/login'
}

// WORK FINE
export const register = (username, nationalId, phoneNumber, email, password, dateOfBirth) => async (dispatch) => {
    try {
        dispatch({
            type: USER_REGISTER_REQUEST
        })

        //config for sending requests
        const config = {
            headers: {
                'Content-Type': 'application/json',
            },
        }

        //make request
        const { data } = await axios.post('http://localhost:5000/api/renter/register', { username, nationalId, phoneNumber, email, password, dateOfBirth }, config)

        dispatch({
            type: USER_REGISTER_SUCCESS,
            payload: data
        })

        //login user after successful registeration
        dispatch({
            type: USER_LOGIN_SUCCESS,
            payload: data
        })

        //users local storage
        localStorage.setItem('userInfo', JSON.stringify(data))

    } catch (error) {
        dispatch({//send error message in case of failuer
            type: USER_REGISTER_FAIL,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        })
    }
}

export const getUserDetails = (id) => async (dispatch, getState) => {
    try {
        dispatch({
            type: USER_DETAILS_REQUEST,
        })

        //access logged in user
        const {
            userLogin: { userInfo },
        } = getState()

        //pass auth token
        const config = {
            headers: {
                Authorization: `${userInfo.token}`,
            },
        }

        //get request to user profile
        const { data } = await axios.get(`http://localhost:5000/api/renter/get-profile`, config)
        console.log(data)

        dispatch({
            type: USER_DETAILS_SUCCESS,
            payload: data.user,
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
            type: USER_DETAILS_FAIL,
            payload: message,
        })
    }
}

//TODO: check backend and do frontend
export const updateUserProfile = (user) => async (dispatch, getState) => {
    try {
        dispatch({
            type: USER_UPDATE_PROFILE_REQUEST,
        })

        //access logged in user
        const {
            userLogin: { userInfo },
        } = getState()

        //pass auth token
        const config = {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${userInfo.token}`,
            },
        }

        //put request to user profile
        const { data } = await axios.put(`http://localhost:5000/api/users/profile`, user, config)

        dispatch({
            type: USER_UPDATE_PROFILE_SUCCESS,
            payload: data,
        })
        dispatch({
            type: USER_LOGIN_SUCCESS,
            payload: data,
        })
        //save to storage
        localStorage.setItem('userInfo', JSON.stringify(data))

    } catch (error) {
        const message =
            error.response && error.response.data.message
                ? error.response.data.message
                : error.message
        if (message === 'Not authorized, token failed') {
            dispatch(logout())
        }
        dispatch({
            type: USER_UPDATE_PROFILE_FAIL,
            payload: message,
        })
    }
}

/******************************************* */
/**COMPANY ACTIONS */

//!! after registeration, company will be inserted to DB with pending status awaitng for manual approval

//TODO: add account status
export const companyRegister = (companyName, email, phoneNumber, password) => async (dispatch) => {
    try {
        dispatch({
            type: USER_REGISTER_REQUEST
        })

        //config for sending requests
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }

        //make request
        const { data } = await axios.post('http://localhost:5000/api/rental-company/register', { companyName, email, phoneNumber, password }, config)

        dispatch({
            type: USER_REGISTER_SUCCESS,
            payload: data
        })

        //login user after successful registeration
        dispatch({
            type: USER_LOGIN_SUCCESS,
            payload: data
        })

        //users local storage
        localStorage.setItem('userInfo', JSON.stringify(data))

    } catch (error) {
        dispatch({//send error message in case of failuer
            type: USER_REGISTER_FAIL,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        })
    }
}

export const listUsers = () => async (dispatch, getState) => {
    try {
        dispatch({
            type: USER_LIST_REQUEST,
        })

        const {
            adminLogin: { adminInfo },
        } = getState()

        const config = {
            headers: {
                Authorization: `${adminInfo.token}`,
            },
        }

        const { data } = await axios.get(`http://localhost:5000/api/renter/find-all-renters`, config)
        console.log(data);

        dispatch({
            type: USER_LIST_SUCCESS,
            payload: data.renter,
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
            type: USER_LIST_FAIL,
            payload: message,
        })
    }
}

//TODO:
export const listCompanyUsers = () => async (dispatch, getState) => {
    try {
        dispatch({
            type: USER_LIST_REQUEST,
        })

        const {
            companyLogin: { companyInfo },
        } = getState()

        const config = {
            headers: {
                Authorization: `${companyInfo.token}`,
            },
        }

        const { data } = await axios.get(`http://localhost:5000/api/renter/find-all-renters`, config)
        //console.log(data);
        dispatch({
            type: USER_LIST_SUCCESS,
            payload: data.renter,
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
            type: USER_LIST_FAIL,
            payload: message,
        })
    }
}



//TODO: do backend
export const deleteUser = (id) => async (dispatch, getState) => {
    try {
        dispatch({
            type: USER_DELETE_REQUEST,
        })

        const {
            userLogin: { userInfo },
        } = getState()

        const config = {
            headers: {
                Authorization: `${userInfo.token}`,
            },
        }

        await axios.delete(`http://localhost:5000/api/users/${id}`, config)

        dispatch({ type: USER_DELETE_SUCCESS })
    } catch (error) {
        const message =
            error.response && error.response.data.message
                ? error.response.data.message
                : error.message
        if (message === 'Not authorized, token failed') {
            dispatch(logout())
        }
        dispatch({
            type: USER_DELETE_FAIL,
            payload: message,
        })
    }
}

export const updateUser = (user) => async (dispatch, getState) => {
    try {
        dispatch({
            type: USER_UPDATE_REQUEST,
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

        const { data } = await axios.put(`http://localhost:5000/api/change-profile/${user._id}`, user, config)

        dispatch({ type: USER_UPDATE_SUCCESS })

        dispatch({ type: USER_DETAILS_SUCCESS, payload: data })

        dispatch({ type: USER_DETAILS_RESET })
    } catch (error) {
        const message =
            error.response && error.response.data.message
                ? error.response.data.message
                : error.message
        if (message === 'Not authorized, token failed') {
            dispatch(logout())
        }
        dispatch({
            type: USER_UPDATE_FAIL,
            payload: message,
        })
    }
}




