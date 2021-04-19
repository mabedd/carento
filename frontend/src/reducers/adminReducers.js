import {
    ADMIN_LOGIN_FAIL, ADMIN_LOGIN_REQUEST, ADMIN_LOGIN_SUCCESS, ADMIN_LOGOUT,
    ADMIN_ACTIVATE_COMPANY_FAIL, ADMIN_ACTIVATE_COMPANY_REQUEST, ADMIN_ACTIVATE_COMPANY_SUCCESS,
    ADMIN_BLACKLIST_COMPANY_FAIL, ADMIN_BLACKLIST_COMPANY_REQUEST, ADMIN_BLACKLIST_COMPANY_SUCCESS,
    ADMIN_BLACKLIST_RENTER_FAIL, ADMIN_BLACKLIST_RENTER_REQUEST, ADMIN_BLACKLIST_RENTER_SUCCESS
} from '../constants/adminConstants'

export const adminLoginReducer = (state = {}, action) => {
    switch (action.type) {
        case ADMIN_LOGIN_REQUEST:
            return { loading: true }
        case ADMIN_LOGIN_SUCCESS:
            return { loading: false, adminInfo: action.payload }
        case ADMIN_LOGIN_FAIL:
            return { loading: false, error: action.payload }
        case ADMIN_LOGOUT:
            return {}
        default:
            return state
    }
}

export const adminActivateCompanyReducer = (state = { company: {} }, action) => {
    switch (action.type) {
        case ADMIN_ACTIVATE_COMPANY_REQUEST:
            return { loading: true }
        case ADMIN_ACTIVATE_COMPANY_SUCCESS:
            return { loading: false, success: true, companyInfo: action.payload }
        case ADMIN_ACTIVATE_COMPANY_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state
    }
}

export const adminBlacklistCompanyReducer = (state = {}, action) => {
    switch (action.type) {
        case ADMIN_BLACKLIST_COMPANY_REQUEST:
            return { loading: true }
        case ADMIN_BLACKLIST_COMPANY_SUCCESS:
            return { loading: false, success: true, companyInfo: action.payload }
        case ADMIN_BLACKLIST_COMPANY_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state
    }
}

export const adminBlacklistRenterReducer = (state = {}, action) => {
    switch (action.type) {
        case ADMIN_BLACKLIST_RENTER_REQUEST:
            return { loading: true }
        case ADMIN_BLACKLIST_RENTER_SUCCESS:
            return { loading: false, success: true, userInfo: action.payload }
        case ADMIN_BLACKLIST_RENTER_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state
    }
}

