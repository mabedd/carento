import { COMPANY_LOGIN_FAIL, COMPANY_LOGIN_REQUEST, COMPANY_LOGIN_SUCCESS } from '../constants/compnayConstants'

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