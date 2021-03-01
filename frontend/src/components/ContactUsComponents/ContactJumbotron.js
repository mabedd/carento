import React from 'react'
import { MDBJumbotron, MDBContainer } from "mdbreact";

const ContactJumbotron = () => {
    return (
        <MDBJumbotron fluid className='mt-3'>
            <MDBContainer>
                <h2 className="display-4 text-center">Contact Us</h2>
                <p className="lead text-center">We would like to hear from you.</p>
            </MDBContainer>
        </MDBJumbotron>
    )
}

export default ContactJumbotron
