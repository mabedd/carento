import React from 'react'

const Info = () => {
    return ( //TODO: Change icons colors
        <>
            <div className="bg-light">
                <div className="container py-5">
                    <div className="row h-100 align-items-center py-5">
                        <div className="col-lg-6">
                            <h1 className="display-4">Who are we ?</h1>
                            <p className="lead text-muted mb-0">We are a renting solution that will provide the best rent service
                    </p>
                        </div>
                        <div className="col-lg-6 d-none d-lg-block"><img
                            src="../images/about1.png" alt=""
                            className="img-fluid"></img></div>
                    </div>
                </div>
            </div>

            <div className="bg-white py-5">
                <div className="container py-5">
                    <div className="row align-items-center mb-5">
                        <div className="col-lg-6 order-2 order-lg-1">
                            <i className="fa fa-bar-chart fa-2x mb-3 text-primary"></i>
                            <h2 className="font-weight-light">Statistics</h2>
                            <p className="font-italic text-muted mb-4">We have been at the market for several years serving more
                        than 5K users</p><a href="#" className="btn btn-info px-5 rounded-pill shadow-sm">Learn More</a>
                        </div>
                        <div className="col-lg-5 px-5 mx-auto order-1 order-lg-2"><img
                            src="../images/about2.jpg" alt=""
                            className="img-fluid mb-4 mb-lg-0"></img></div>
                    </div>
                    <div className="row align-items-center">
                        <div className="col-lg-5 px-5 mx-auto"><img
                            src="../images/about3.jpg" alt=""
                            className="img-fluid mb-4 mb-lg-0"></img></div>
                        <div className="col-lg-6"><i className="fa fa-leaf fa-2x mb-3 text-primary"></i>
                            <h2 className="font-weight-light">Sell and rent</h2>
                            <p className="font-italic text-muted mb-4">Wether you are a renter or a rental company, you can use our
                        service and suit yourself here</p><a href="#"
                                className="btn btn-info px-5 rounded-pill shadow-sm">Learn More</a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Info
