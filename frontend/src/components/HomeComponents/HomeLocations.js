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
                                    The platform launched mainly in Riyadh under the sponsorship of Prince Sultan University.
                                    The paltform was and idea of a senior project in College of Computer.
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
                                "url('https://as2.ftcdn.net/jpg/03/57/48/49/500_F_357484998_hJKSHvELmWbMEow7nSkgwhw05glEOFgv.jpg')"
                        }}
                    >
                        <div className='text-white text-center d-flex align-items-center rgba-indigo-strong py-5 px-4'>
                            <div>
                                <MDBCardTitle tag='h3' className='pt-2'>
                                    <strong>Jeddah</strong>
                                </MDBCardTitle>
                                <p>
                                    Carento system is going to be launced in Jeddah. The system was authorized by DOT and all agreements have been signed.
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