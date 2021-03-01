import React from 'react'

import './ContactForm.css'

const ContactForm = () => {//TODO: sumbilt handler for form submission
    return (
        <>
            <section className="my-5">

                <div className='row'>
                    <div className='col'>
                        <div className="card">
                            <div className="card-body">

                                <div className="form-header text-center">
                                    <h3 className="mt-2"><i className="fas fa-envelope" style={{ color: '#E4C00A' }}></i><br></br>Write to us:</h3>
                                </div>
                                <p className="dark-grey-text text-center">Your opinion matters.</p>

                                <div className="md-form">
                                    <i className="fas fa-user prefix grey-text"></i>
                                    <input type="text" id="form-name" className="form-control"></input>
                                    <label for="form-name">Your name</label>
                                </div>
                                <div className="md-form">
                                    <i className="fas fa-envelope prefix grey-text"></i>
                                    <input type="text" id="form-email" className="form-control"></input>
                                    <label for="form-email">Your email</label>
                                </div>
                                <div className="md-form">
                                    <i className="fas fa-tag prefix grey-text"></i>
                                    <input type="text" id="form-Subject" className="form-control"></input>
                                    <label for="form-Subject">Subject</label>
                                </div>
                                <div className="md-form">
                                    <i className="fas fa-pencil-alt prefix grey-text"></i>
                                    <textarea id="form-text" className="form-control md-textarea" rows="3"></textarea>
                                    <label for="form-text">Send message</label>
                                </div>
                                <div className="text-center">
                                    <button className="btn btn-light-blue">Submit</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row mt-5">

                    <div className="col">
                        <h2 className='text-center'>Visit Us</h2>

                        <div id="map-container-section" className="z-depth-1-half map-container-section mb-4" style={{ height: '400px' }}>
                            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14494.92687186604!2d46.7013209!3d24.7360891!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x3fbc5cb308e60dd8!2sPrince%20Sultan%20University!5e0!3m2!1sen!2ssa!4v1613829912443!5m2!1sen!2ssa" frameborder="0"
                                style={{ border: '0' }} allowfullscreen></iframe>
                        </div>

                        <div className="row text-center">
                            <div className="col-md-4">
                                <i className="fas fa-map-marker-alt fa-2x"></i>
                                <p>Riyadh, Rafha st.</p>
                                <p className="mb-md-0">Kingodm of Saudi Arabia</p>
                            </div>
                            <div className="col-md-4">
                                <i className="fas fa-phone fa-2x"></i>
                                <p>+ 966 123456789</p>
                            </div>
                            <div className="col-md-4">
                                <i className="fas fa-envelope fa-2x"></i>
                                <p>carento@gmail.com</p>
                            </div>
                        </div>

                    </div>

                </div>


            </section>
        </>
    )
}

export default ContactForm
