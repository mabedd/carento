import React, { useState, useEffect } from 'react'
import { Row } from 'react-bootstrap'
import { Container } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'

import { RaiseTicket } from '../actions/userActions'
import Loader from '../components/Loader'
import Message from '../components/Message'
import Rating from '../components/Rating'

const RenterRaiseTicketScreen = ({ location, match }) => {

    //component level state
    const [ticket, setTicket] = useState('')
    const rentId = match.params.id

    const dispatch = useDispatch()

    const userLogin = useSelector((state) => state.userLogin)
    const { userInfo } = userLogin

    const userRaiseTicket = useSelector((state) => state.userRaiseTicket)
    const { success, error } = userRaiseTicket

    // redirect to thank you screen
    const redirect = location.search ? location.search.split('=')[1] : '/'

    useEffect(() => {
        if (success) {
            setTicket('')
        }

    }, [dispatch, match, success])

    const submitHandler = (e) => {
        e.preventDefault()
        dispatch(RaiseTicket(rentId, ticket))
    }


    return (
        <div>
            <div style={{ backgroundImage: `url("/images/registerBG.jpg")` }}>
                <Container>
                    <div class="page-wrapper bg-gra-02 p-t-130 p-b-100 font-poppins">
                        <div class="wrapper wrapper--w680">
                            <div class="card card-4">
                                <div class="card-body">
                                    <h2 class="title text-center">Your Opinion Matters</h2>
                                    <form onSubmit={submitHandler}>
                                        {success && <Message>Your ticket has been raised, Carento team will contact you soon</Message>}
                                        {error && <Message variant='danger'>{error}</Message>}
                                        <div class="row row-space">
                                            <div class="col-12">
                                                <div class="input-group">
                                                    <label class="label">Message</label>
                                                    <input class="input--style-4" type="text" placeholder="Your message" value={ticket} onChange={(e) => setTicket(e.target.value)} ></input>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="p-t-15 text-center">
                                            <button class="btn btn-success btn-md" type="submit">Submit</button>
                                        </div>

                                        <div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </Container>
            </div>
        </div>
    )
}

export default RenterRaiseTicketScreen

