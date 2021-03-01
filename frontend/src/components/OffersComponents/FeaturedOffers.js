import React from 'react';
import { MDBRow, MDBCol, MDBCard, MDBCardImage, MDBCardBody, MDBCardTitle, MDBCardText, MDBCardFooter, MDBTooltip, MDBBtn, MDBIcon } from 'mdbreact';

import Rating from '../../components/Rating'
import { Col, Row } from 'react-bootstrap';

const FeaturedOffers = () => { //TODO: fetch from DB later on using map function
    return (
        <section className='text-center my-5'>
            <h2 className='h1-responsive font-weight-bold text-center my-5'>Featured Offers</h2>
            <MDBRow>
                <MDBCol lg='4' md='12' className='mb-lg-0 mb-4'>
                    <MDBCard wide ecommerce>
                        <MDBCardImage
                            cascade
                            src='/images/featuredOffers1.jpg'
                            top
                            alt='sample photo'
                        />
                        <MDBCardBody cascade className='text-center'>
                            <a href='#!' className='text-muted'>
                                <h5>SEDAN</h5>
                            </a>
                            <MDBCardTitle>
                                <strong>
                                    <a href='#!' className='light-blue-text'>Toyotal Corolla 2021</a>
                                </strong>
                            </MDBCardTitle>
                            <MDBCardText>
                                <div>
                                    <Row>
                                        <Col md={4}>
                                            <MDBIcon className='amber-text' icon="user-alt" size='lg' /><span> 4</span>
                                        </Col>
                                        <Col md={4}>
                                            <MDBIcon className='amber-text' icon="road" size='lg' /><span> 500 KM</span>
                                        </Col>
                                        <Col md={4}>
                                            <MDBIcon className='amber-text' icon="gas-pump" size='lg' /><span> 91</span>
                                        </Col>
                                    </Row>
                                </div>
                                <span className='h4 font-weight-bold'><strong className='light-blue-text'>99SR / Day</strong></span>
                                <Rating />
                            </MDBCardText>
                            <MDBCardFooter className='px-1'>
                                <div>
                                    <span className=''>
                                        <MDBBtn rounded gradient='peach'>Rent Now</MDBBtn>
                                    </span>
                                    <br></br>
                                    <span>Offerd By:</span>
                                </div>
                            </MDBCardFooter>
                        </MDBCardBody>
                    </MDBCard>
                </MDBCol>


                <MDBCol lg='4' md='12' className='mb-lg-0 mb-4'>
                    <MDBCard wide ecommerce>
                        <MDBCardImage
                            cascade
                            src='/images/featuredOffers2.jpg'
                            top
                            alt='sample photo'
                        />
                        <MDBCardBody cascade className='text-center'>
                            <a href='#!' className='text-muted'>
                                <h5>SEDAN</h5>
                            </a>
                            <MDBCardTitle>
                                <strong>
                                    <a href='#!' className='light-blue-text'>Hyundia Sonata 2019</a>
                                </strong>
                            </MDBCardTitle>
                            <MDBCardText>
                                <div>
                                    <Row>
                                        <Col md={4}>
                                            <MDBIcon className='amber-text' icon="user-alt" size='lg' /><span> 4</span>
                                        </Col>
                                        <Col md={4}>
                                            <MDBIcon className='amber-text' icon="road" size='lg' /><span>1000 KM</span>
                                        </Col>
                                        <Col md={4}>
                                            <MDBIcon className='amber-text' icon="gas-pump" size='lg' /><span> 91</span>
                                        </Col>
                                    </Row>
                                </div>
                                <span className='h4 font-weight-bold'><strong className='light-blue-text'>149SR / Day</strong></span>
                                <Rating />
                            </MDBCardText>
                            <MDBCardFooter className='px-1'>
                                <div>
                                    <span className=''>
                                        <MDBBtn rounded gradient='peach'>Rent Now</MDBBtn>
                                    </span>
                                    <br></br>
                                    <span>Offerd By:</span>
                                </div>
                            </MDBCardFooter>
                        </MDBCardBody>
                    </MDBCard>
                </MDBCol>


                <MDBCol lg='4' md='12' className='mb-lg-0 mb-4'>
                    <MDBCard wide ecommerce>
                        <MDBCardImage
                            cascade
                            src='/images/featuredOffers3.jpg'
                            top
                            alt='sample photo'
                        />
                        <MDBCardBody cascade className='text-center'>
                            <a href='#!' className='text-muted'>
                                <h5>SUV</h5>
                            </a>
                            <MDBCardTitle>
                                <strong>
                                    <a href='#!' className='light-blue-text'>Honda Pilot 2020</a>
                                </strong>
                            </MDBCardTitle>
                            <MDBCardText>
                                <div>
                                    <Row>
                                        <Col md={4}>
                                            <MDBIcon className='amber-text' icon="user-alt" size='lg' /><span> 6</span>
                                        </Col>
                                        <Col md={4}>
                                            <MDBIcon className='amber-text' icon="road" size='lg' /><span> 500 KM</span>
                                        </Col>
                                        <Col md={4}>
                                            <MDBIcon className='amber-text' icon="gas-pump" size='lg' /><span> 95</span>
                                        </Col>
                                    </Row>
                                </div>
                                <span className='h4 font-weight-bold'><strong className='light-blue-text'>999SR / Day</strong></span>
                                <Rating />
                            </MDBCardText>
                            <MDBCardFooter className='px-1'>
                                <div>
                                    <span className=''>
                                        <MDBBtn rounded gradient='peach'>Rent Now</MDBBtn>
                                    </span>
                                    <br></br>
                                    <span>Offerd By:</span>
                                </div>
                            </MDBCardFooter>
                        </MDBCardBody>
                    </MDBCard>
                </MDBCol>
            </MDBRow>
        </section>
    );
};

export default FeaturedOffers;