import React from 'react'
import { MDBRow, MDBCol, MDBIcon } from "mdbreact";

const Features = () => {
    return (
        <>
            <h2 className="h1-responsive font-weight-bold text-center my-5">
                Do you want to start offering your cars?
            </h2>
            <p className="lead grey-text w-responsive text-center mx-auto mb-5">
                With carento, you can take a look at the best cars with best prices provided by a high reputable car rental companies
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
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit
                                enim ad minima veniam, quis nostrum exercitationem ullam.
                                Reprehenderit maiores aperiam assumenda deleniti hic.
                                </p>
                        </MDBCol>
                    </MDBRow>
                    <MDBRow className="mb-3">
                        <MDBCol size="1">
                            <MDBIcon icon="share" size="lg" className="indigo-text" />
                        </MDBCol>
                        <MDBCol xl="10" md="11" size="10">
                            <h5 className="font-weight-bold mb-3">Technology</h5>
                            <p className="grey-text">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit
                                enim ad minima veniam, quis nostrum exercitationem ullam.
                                Reprehenderit maiores aperiam assumenda deleniti hic.
                                </p>
                        </MDBCol>
                    </MDBRow>
                    <MDBRow className="mb-3">
                        <MDBCol size="1">
                            <MDBIcon icon="share" size="lg" className="indigo-text" />
                        </MDBCol>
                        <MDBCol xl="10" md="11" size="10">
                            <h5 className="font-weight-bold mb-3">Customer Satisfaction</h5>
                            <p className="grey-text">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit
                                enim ad minima veniam, quis nostrum exercitationem ullam.
                                Reprehenderit maiores aperiam assumenda deleniti hic.
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
