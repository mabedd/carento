import { CART_SAVE_PAYMENT_METHOD } from '../constants/cartConstants'

export const savePaymentMethod = (data) => (dispatch) => {
    dispatch({
        type: CART_SAVE_PAYMENT_METHOD,
        payload: data,
    })

    //save to localstorage
    localStorage.setItem('paymentMethod', JSON.stringify(data))
}