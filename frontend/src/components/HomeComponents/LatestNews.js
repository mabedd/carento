import React from "react";
import { MDBRow, MDBCol, MDBCardBody, MDBIcon, MDBBtn, MDBView, MDBMask } from "mdbreact";

const LatestNews = () => {
    return (
        <section className="text-center my-5">
            <h2 className="h1-responsive font-weight-bold my-5">
                Latest News
            </h2>
            <p className="grey-text w-responsive mx-auto mb-5">
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident, sunt in culpa qui officia deserunt mollit
                est laborum.
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
                        <h4 className="font-weight-bold my-3">Title of the news</h4>
                        <p className="grey-text">
                            Temporibus autem quibusdam et aut officiis debitis aut rerum
                            necessitatibus saepe eveniet ut et voluptates repudiandae.
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
                        <h4 className="font-weight-bold my-3">Title of the news</h4>
                        <p className="grey-text">
                            Temporibus autem quibusdam et aut officiis debitis aut rerum
                            necessitatibus saepe eveniet ut et voluptates repudiandae.
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
                        <h4 className="font-weight-bold my-3">Title of the news</h4>
                        <p className="grey-text">
                            Temporibus autem quibusdam et aut officiis debitis aut rerum
                            necessitatibus saepe eveniet ut et voluptates repudiandae.
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