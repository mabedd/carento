import React from 'react'
import { MDBRow, MDBCol, MDBIcon } from "mdbreact";

const Features = () => {
    return (
        <>
            <h2 className="h1-responsive font-weight-bold text-center my-5">
                Do you Want to Start Offering Your Cars Safely?
            </h2>
            <p className="lead grey-text w-responsive text-center mx-auto mb-5">
                With carento, you can safely use our platform to offer your cars to large number of renters
            </p>
            <MDBRow>
                <MDBCol lg="7">
                    <MDBRow className="mb-3">
                        <MDBCol size="1">
                            <MDBIcon icon="share" size="lg" className="indigo-text" />
                        </MDBCol>
                        <MDBCol xl="10" md="11" size="10">
                            <h5 className="font-weight-bold mb-3">Increase Interest</h5>
                            <p className="grey-text">
                                Now on Carento, your cars and offers are reaching larger number of renters other than traditional renting process.
                            </p>
                        </MDBCol>
                    </MDBRow>
                    <MDBRow className="mb-3">
                        <MDBCol size="1">
                            <MDBIcon icon="share" size="lg" className="indigo-text" />
                        </MDBCol>
                        <MDBCol xl="10" md="11" size="10">
                            <h5 className="font-weight-bold mb-3">Technology Dependent</h5>
                            <p className="grey-text">
                                Transform all your paper and traditional work to new digitalized work with Carento. We will replace all of your work with new automated work.
                            </p>
                        </MDBCol>
                    </MDBRow>
                    <MDBRow className="mb-3">
                        <MDBCol size="1">
                            <MDBIcon icon="share" size="lg" className="indigo-text" />
                        </MDBCol>
                        <MDBCol xl="10" md="11" size="10">
                            <h5 className="font-weight-bold mb-3">Increase Customer Satisfaction</h5>
                            <p className="grey-text">
                                With Carento, you will increase customers satisfaction through our system transparecny and truted process.
                            </p>
                        </MDBCol>
                    </MDBRow>
                </MDBCol>
                <MDBCol lg="5" className="text-center text-lg-left">
                    <img
                        className="img-fluid"
                        src="/images/company.png"
                        alt=""
                    />
                </MDBCol>
            </MDBRow>
        </>
    )
}

export default Features
