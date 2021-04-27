import React from "react";
import { MDBRow, MDBCol, MDBCardBody, MDBIcon, MDBBtn, MDBView, MDBMask } from "mdbreact";

const LatestNews = () => {
    return (
        <section className="text-center my-5">
            <h2 className="h1-responsive font-weight-bold my-5">
                Latest News
            </h2>
            <p className="grey-text w-responsive mx-auto mb-5">
                Stay tuned and see Carento latest news and achievements
            </p>

            <MDBRow className="text-center">
                <MDBCol lg="4" md="12" className="mb-lg-0 mb-4">
                    <MDBView className="overlay rounded z-depth-1" waves>
                        <img
                            src="/images/news1.jpg"
                            alt=""
                            className="img-fluid"
                        />
                        <a href="#!">
                            <MDBMask overlay="white-slight" />
                        </a>
                    </MDBView>
                    <MDBCardBody className="pb-0">
                        <h4 className="font-weight-bold my-3"> Coming Soon to Eastren Province</h4>
                        <p className="grey-text">
                            As Carento platform going wider inside Saudi Arabia it is going to be launched inside Eastren Province to cover more customers
                        </p>
                        <MDBBtn gradient="blue" size="sm">
                            <MDBIcon far icon="clone" className="left" /> Read More
                        </MDBBtn>
                    </MDBCardBody>
                </MDBCol>
                <MDBCol lg="4" md="12" className="mb-lg-0 mb-4">
                    <MDBView className="overlay rounded z-depth-1" waves>
                        <img
                            src="/images/news2.jpg"
                            alt=""
                            className="img-fluid"
                        />
                        <a href="#!">
                            <MDBMask overlay="white-slight" />
                        </a>
                    </MDBView>
                    <MDBCardBody className="pb-0">
                        <h4 className="font-weight-bold my-3">New Cars are Coming</h4>
                        <p className="grey-text">
                            Carento car providers are offering their latest cars models on Carento platform to be available for retners through the platform
                        </p>
                        <MDBBtn gradient="blue" size="sm">
                            <MDBIcon far icon="clone" className="left" /> Read More
                        </MDBBtn>
                    </MDBCardBody>
                </MDBCol>
                <MDBCol lg="4" md="12" className="mb-lg-0 mb-4">
                    <MDBView className="overlay rounded z-depth-1" waves>
                        <img
                            src="/images/news3.jpg"
                            alt=""
                            className="img-fluid"
                        />
                        <a href="#!">
                            <MDBMask overlay="white-slight" />
                        </a>
                    </MDBView>
                    <MDBCardBody className="pb-0">
                        <h4 className="font-weight-bold my-3">Maintenance Policies</h4>
                        <p className="grey-text">
                            Carento new policies for car maintenance stricts the maintenance process to ensure high quality cars for renters
                        </p>
                        <MDBBtn gradient="blue" size="sm">
                            <MDBIcon far icon="clone" className="left" /> Read More
                        </MDBBtn>
                    </MDBCardBody>
                </MDBCol>
            </MDBRow>
        </section>
    );
}

export default LatestNews;