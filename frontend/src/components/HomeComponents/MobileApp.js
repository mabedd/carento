import React from "react";
import { MDBRow, MDBCol, MDBIcon } from "mdbreact";

const FeaturesPage = () => {
    return (
        <section className="my-5">
            <h2 className="h1-responsive font-weight-bold text-center my-5">
                Try Carento on your Smart Phone
            </h2>
            <p className="lead grey-text w-responsive text-center mx-auto mb-5">
                You can use our mobile application that is available on Google Play store and save the time.
            </p>

            <MDBRow>
                <MDBCol md="4">
                    <MDBRow className="mb-3">
                        <MDBCol size="2">
                            <MDBIcon
                                icon="flag-checkered"
                                size="2x"
                                className="deep-purple-text"
                            />
                        </MDBCol>
                        <MDBCol size="10">
                            <h5 className="font-weight-bold mb-3">International</h5>
                            <p className="grey-text">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                Reprehenderit maiores nam, aperiam minima assumenda deleniti
                                hic.
                            </p>
                        </MDBCol>
                    </MDBRow>
                    <MDBRow className="mb-3">
                        <MDBCol size="2">
                            <MDBIcon icon="flask" size="2x" className="deep-purple-text" />
                        </MDBCol>
                        <MDBCol size="10">
                            <h5 className="font-weight-bold mb-3">Experimental</h5>
                            <p className="grey-text">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                Reprehenderit maiores nam, aperiam minima assumenda deleniti
                                hic.
                            </p>
                        </MDBCol>
                    </MDBRow>
                    <MDBRow className="mb-3">
                        <MDBCol size="2">
                            <MDBIcon icon="glass-martini" size="2x" className="deep-purple-text" />
                        </MDBCol>
                        <MDBCol size="10">
                            <h5 className="font-weight-bold mb-3">Relaxing</h5>
                            <p className="grey-text">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                Reprehenderit maiores nam, aperiam minima assumenda deleniti
                                hic.
                            </p>
                        </MDBCol>
                    </MDBRow>
                </MDBCol>
                <MDBCol md="4" className="text-name">
                    <img
                        className="img-fluid"
                        src="https://mdbootstrap.com/img/Mockups/Transparent/Small/iphone-portfolio1.png"
                        alt=""
                    />
                </MDBCol>
                <MDBCol md="4">
                    <MDBRow className="mb-3">
                        <MDBCol size="2">
                            <MDBIcon icon="heart" size="2x" className="deep-purple-text" />
                        </MDBCol>
                        <MDBCol size="10">
                            <h5 className="font-weight-bold mb-3">Beloved</h5>
                            <p className="grey-text">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                Reprehenderit maiores nam, aperiam minima assumenda deleniti
                                hic.
                </p>
                        </MDBCol>
                    </MDBRow>
                    <MDBRow className="mb-3">
                        <MDBCol size="2">
                            <MDBIcon icon="bolt" size="2x" className="deep-purple-text" />
                        </MDBCol>
                        <MDBCol size="10">
                            <h5 className="font-weight-bold mb-3">Rapid</h5>
                            <p className="grey-text">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                Reprehenderit maiores nam, aperiam minima assumenda deleniti
                                hic.
                            </p>
                        </MDBCol>
                    </MDBRow>
                    <MDBRow className="mb-3">
                        <MDBCol size="2">
                            <MDBIcon icon="magic" size="2x" className="deep-purple-text" />
                        </MDBCol>
                        <MDBCol size="10">
                            <h5 className="font-weight-bold mb-3">Magical</h5>
                            <p className="grey-text">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                Reprehenderit maiores nam, aperiam minima assumenda deleniti
                                hic.
                            </p>
                        </MDBCol>
                    </MDBRow>
                </MDBCol>
            </MDBRow>
        </section>
    );
}

export default FeaturesPage;