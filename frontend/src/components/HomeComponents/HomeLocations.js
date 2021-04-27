import React from 'react';
import { MDBCard, MDBCardTitle, MDBBtn, MDBRow, MDBCol, MDBIcon } from 'mdbreact';

const HomeLocations = () => {
    return (
        <>
            <h2 className='text-center h1-responsive font-weight-bold my-5'>Our Locations</h2>
            <MDBRow>
                <MDBCol md='6'>
                    <MDBCard
                        className='card-image'
                        style={{
                            backgroundImage:
                                "url('https://cdn.hipwallpaper.com/i/2/35/hC4f1L.jpg')"
                        }}
                    >
                        <div className='text-white text-center d-flex align-items-center rgba-black-strong py-5 px-4'>
                            <div>
                                <MDBCardTitle tag='h3' className='pt-2'>
                                    <strong>Riyadh</strong>
                                </MDBCardTitle>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                    Repellat fugiat, laboriosam, voluptatem, optio vero odio nam sit
                                    officia accusamus minus error nisi architecto nulla ipsum
                                    dignissimos. Odit sed qui, dolorum!
                                </p>
                                <MDBBtn gradient='blue'>
                                    <MDBIcon icon='clone left' disabled /> Available
                            </MDBBtn>
                            </div>
                        </div>
                    </MDBCard>
                </MDBCol>

                <MDBCol md='6'>
                    <MDBCard
                        className='card-image'
                        style={{
                            backgroundImage:
                                "url('https://i.pinimg.com/originals/26/9d/3c/269d3cdb6feaca2952f214b33a32558b.jpg')"
                        }}
                    >
                        <div className='text-white text-center d-flex align-items-center rgba-indigo-strong py-5 px-4'>
                            <div>
                                <MDBCardTitle tag='h3' className='pt-2'>
                                    <strong>Jeddah</strong>
                                </MDBCardTitle>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                    Repellat fugiat, laboriosam, voluptatem, optio vero odio nam sit
                                    officia accusamus minus error nisi architecto nulla ipsum
                                    dignissimos. Odit sed qui, dolorum!
                                </p>
                                <MDBBtn gradient='blue'>
                                    <MDBIcon icon='clone left' /> Coming soon
                            </MDBBtn>
                            </div>
                        </div>
                    </MDBCard>
                </MDBCol>
            </MDBRow>
        </>
    )
}

export default HomeLocations;