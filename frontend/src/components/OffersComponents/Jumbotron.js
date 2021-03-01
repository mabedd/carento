import React from 'react'
import { MDBJumbotron, MDBContainer } from "mdbreact";

const Jumbotron = () => {
    return (
        <MDBJumbotron fluid className='cloudy-knoxville-gradient'>
            <MDBContainer>
                <h2 className="display-4 text-center">Carento Offers</h2>
                <p className="lead text-center">Choose a car that suits your needs with the best prices.</p>
            </MDBContainer>
        </MDBJumbotron>
    )
}

export default Jumbotron
