import {
    COMPANY_LOGIN_FAIL, COMPANY_LOGIN_REQUEST, COMPANY_LOGIN_SUCCESS, COMPANY_LOGOUT,
    COMPANY_LIST_FAIL, COMPANY_LIST_REQUEST, COMPANY_LIST_SUCCESS, COMPANY_LIST_RESET,
    COMPANY_DETAILS_FAIL, COMPANY_DETAILS_REQUEST, COMPANY_DETAILS_SUCCESS, COMPANY_DETAILS_RESET
} from '../constants/compnayConstants'

export const companyLoginReducer = (state = {}, action) => {
    switch (action.type) {
        case COMPANY_LOGIN_REQUEST:
            return { loading: true }
        case COMPANY_LOGIN_SUCCESS:
            return { loading: false, companyInfo: action.payload }
        case COMPANY_LOGIN_FAIL:
            return { loading: false, error: action.payload }
        case COMPANY_LOGOUT:
            return {}
        default:
            return state
    }
}

export const companyListReducer = (state = { companies: [] }, action) => {
    switch (action.type) {
        case COMPANY_LIST_REQUEST:
            return { loading: true }
        case COMPANY_LIST_SUCCESS:
            return { loading: false, companies: action.payload }
        case COMPANY_LIST_FAIL:
            return { loading: false, error: action.payload }
        case COMPANY_LIST_RESET:
            return { companies: [] }
        default:
            return state
    }
}

export const companyDetailsReducer = (state = { company: {} }, action) => {
    switch (action.type) {
        case COMPANY_DETAILS_REQUEST:
            return { ...state, loading: true }
        case COMPANY_DETAILS_SUCCESS:
            return { loading: false, company: action.payload }
        case COMPANY_DETAILS_FAIL:
            return { loading: false, error: action.payload }
        case COMPANY_DETAILS_RESET:
            return { company: {} }
        default:
            return state
    }
}