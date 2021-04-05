// export const register = (name, nationalID, pnum, email, password, dob) => async (dispatch) => {
//     try {
//         dispatch({
//             type: USER_REGISTER_REQUEST
//         })

//         //config for sending requests
//         const config = {
//             headers: {
//                 'Content-Type': 'application/json',
//             },
//         }

//         //make request
//         const { data } = await axios.post('/api/renter/register', { name, nationalID, pnum, email, password, dob }, config)

//         dispatch({
//             type: USER_REGISTER_SUCCESS,
//             payload: data
//         })

//         //login user after successful registeration
//         dispatch({
//             type: USER_LOGIN_SUCCESS,
//             payload: data
//         })

//         //users local storage
//         localStorage.setItem('userInfo', JSON.stringify(data))

//     } catch (error) {
//         dispatch({//send error message in case of failuer
//             type: USER_REGISTER_FAIL,
//             payload:
//                 error.response && error.response.data.message
//                     ? error.response.data.message
//                     : error.message,
//         })
//     }
// }
