import React from "react";


const Footer = () => {
    return (
        <footer className="page-footer font-small" style={{ backgroundColor: '#2c3e50' }} >

            <div className="container">

                <div className="row text-center d-flex justify-content-center pt-5 mb-3">

                    <div className="col-md-2 mb-3">
                        <h6 className="text-uppercase font-weight-bold">
                            <a className="text-white" href="#">Latest Offers</a>
                        </h6>
                    </div>


                    <div className="col-md-2 mb-3">
                        <h6 className="text-uppercase font-weight-bold">
                            <a className="text-white" href="#">Browse Cars</a>
                        </h6>
                    </div>

                    <div className="col-md-2 mb-3">
                        <h6 className="text-uppercase font-weight-bold">
                            <a className="text-white" href="#">About Us</a>
                        </h6>
                    </div>

                    <div className="col-md-2 mb-3">
                        <h6 className="text-uppercase font-weight-bold">
                            <a className="text-white" href="#">Contact Us</a>
                        </h6>
                    </div>

                    <div className="col-md-2 mb-3">
                        <h6 className="text-uppercase font-weight-bold">
                            <a className="text-white" href="#">Register</a>
                        </h6>
                    </div>

                </div>

                <div className="row d-flex text-center justify-content-center mb-md-0 mb-4">

                    <div className="col-md-8 col-12 mt-5">
                        <p className="text-white">The purpose of CARENTO is to eliminate any
                        problem in car renting domain such as non – credible users, bad car condition, and late fines
                        payment. This can be done by offering a platform that connects all parties together and track
                        each one separately in a way that will make both sides satisfied with the system.</p>
                    </div>

                </div>

                <div className="row pb-3 mt-4 ">

                    <div className="col-md-12">

                        <div className="mb-5 d-flex justify-content-center">

                            <a className="fb-ic" href="#">
                                <i className="fab fa-twitter fa-2x white-text mr-4" > </i>
                            </a>
                            <a className="tw-ic" href="#">
                                <i className="fab fa-facebook fa-2x mr-4"> </i>
                            </a>
                            <a className="pin-ic" href="#">
                                <i className="fab fa-linkedin fa-2x mr-4 white-text"> </i>
                            </a>

                        </div>

                    </div>

                </div>

            </div>

            <div className="footer-copyright text-center py-3 text-white">© 2020 Copyright:
            <a href="https://mdbootstrap.com/"> CARENTO</a>
            </div>

        </footer>
    );
}

export default Footer;