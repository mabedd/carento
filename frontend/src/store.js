import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

import { userLoginReducer, userRegisterReducer, userDetailsReducer, userUpdateProfileReducer, userListReducer, userDeleteReducer, userUpdateReducer } from './reducers/userReducers'
import { cartReducer } from './reducers/cartReducers'
import { orderCreateReducer, orderDetailsReducer, orderPayReducer, orderListReducer } from './reducers/orderReducers'
import { carListReducer, carDeleteReducer, carDetailsReducer, carCreateReducer, carUpdateReducer } from './reducers/carReducers'

const reducer = combineReducers({
    userLogin: userLoginReducer,
    userRegister: userRegisterReducer,
    userDetails: userDetailsReducer,
    userUpdateProfile: userUpdateProfileReducer,
    //company reducers
    userList: userListReducer,
    userDelete: userDeleteReducer,
    userUpdate: userUpdateReducer,

    carList: carListReducer,
    carDetails: carDetailsReducer,
    carDelete: carDeleteReducer,
    carCreate: carCreateReducer,
    carUpdate: carUpdateReducer,

    cart: cartReducer,

    orderCreate: orderCreateReducer,
    orderDetails: orderDetailsReducer,
    orderPay: orderPayReducer,
    orderList: orderListReducer,
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