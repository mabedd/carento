import { CART_SAVE_PAYMENT_METHOD } from '../constants/cartConstants'

export const cartReducer = (state = {}, action) => {

    switch (action.type) {

        case CART_SAVE_PAYMENT_METHOD:
            return {
                ...state,
                paymentMethod: action.payload,
            }

        default:
            return state
    }
}