import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

import { userLoginReducer, userRegisterReducer, userDetailsReducer, userUpdateProfileReducer, userListReducer, userDeleteReducer, userUpdateReducer } from './reducers/userReducers'
import { cartReducer } from './reducers/cartReducers'
import { orderCreateReducer, orderDetailsReducer, orderPayReducer, orderListReducer, orderListRenterReducer } from './reducers/orderReducers'
import { carListReducer, carDeleteReducer, carDetailsReducer, carCreateReducer, carUpdateReducer, carRateReducer } from './reducers/carReducers'
import { adminLoginReducer, adminActivateCompanyReducer, adminBlacklistCompanyReducer } from './reducers/adminReducers'
import { companyLoginReducer, companyListReducer, companyDetailsReducer } from './reducers/companyReducers'

const reducer = combineReducers({
    userLogin: userLoginReducer,
    userRegister: userRegisterReducer,
    userDetails: userDetailsReducer,
    userUpdateProfile: userUpdateProfileReducer,
    //company reducers
    userList: userListReducer,
    userDelete: userDeleteReducer,
    userUpdate: userUpdateReducer,
    companyLogin: companyLoginReducer,
    companyDetails: companyDetailsReducer,
    //admin reducers
    adminLogin: adminLoginReducer,
    adminActivateCompany: adminActivateCompanyReducer,
    adminBlacklistCompany: adminBlacklistCompanyReducer,
    companyList: companyListReducer,

    carList: carListReducer,
    carDetails: carDetailsReducer,
    carDelete: carDeleteReducer,
    carCreate: carCreateReducer,
    carUpdate: carUpdateReducer,
    carRate: carRateReducer,

    cart: cartReducer,

    orderCreate: orderCreateReducer,
    orderDetails: orderDetailsReducer,
    orderPay: orderPayReducer,
    orderList: orderListReducer,
    orderListRenter: orderListRenterReducer,
})

//user inital state
const userInfoFromStorage = localStorage.getItem('userInfo')
    ? JSON.parse(localStorage.getItem('userInfo')) : null

//all in all states
const initialState = {
    userLogin: { userInfo: userInfoFromStorage },
}

const middleware = [thunk]

const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middleware)))

export default store