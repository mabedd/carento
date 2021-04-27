import React from "react";
import { MDBRow, MDBCol, MDBIcon } from "mdbreact";

const FeaturesPage = () => {
    return (
        <>
            <section className="my-5">
                <h2 className="h1-responsive font-weight-bold text-center my-5">
                    Do you want to rent a car?
            </h2>
                <p className="lead grey-text w-responsive text-center mx-auto mb-5">
                    With carento, you can take a look at the best cars with best prices provided by a high reputable car rental companies
                </p>
                <MDBRow>
                    <MDBCol lg="5" className="text-center text-lg-left">
                        <img
                            className="img-fluid"
                            src="/images/rent.png"
                            alt=""
                        />
                    </MDBCol>
                    <MDBCol lg="7">
                        <MDBRow className="mb-3">
                            <MDBCol size="1">
                                <MDBIcon icon="share" size="lg" className="indigo-text" />
                            </MDBCol>
                            <MDBCol xl="10" md="11" size="10">
                                <h5 className="font-weight-bold mb-3">Safety</h5>
                                <p className="grey-text">
                                    Take your ride with Carento and we will assure you a completely safe process from the beginning to the end.
                                </p>
                            </MDBCol>
                        </MDBRow>
                        <MDBRow className="mb-3">
                            <MDBCol size="1">
                                <MDBIcon icon="share" size="lg" className="indigo-text" />
                            </MDBCol>
                            <MDBCol xl="10" md="11" size="10">
                                <h5 className="font-weight-bold mb-3">Best Prices</h5>
                                <p className="grey-text">
                                    Carento partners are providing their cars with best prices and features that will satisfy your needs.
                                </p>
                            </MDBCol>
                        </MDBRow>
                        <MDBRow className="mb-3">
                            <MDBCol size="1">
                                <MDBIcon icon="share" size="lg" className="indigo-text" />
                            </MDBCol>
                            <MDBCol xl="10" md="11" size="10">
                                <h5 className="font-weight-bold mb-3">Satisfaction</h5>
                                <p className="grey-text">
                                    Our clients are our main priority here. We will satisfy their needs with as much as we can and we will provide them with whatever they need.
                                </p>
                            </MDBCol>
                        </MDBRow>
                    </MDBCol>
                </MDBRow>



            </section>
        </>


    );
}

export default FeaturesPage;