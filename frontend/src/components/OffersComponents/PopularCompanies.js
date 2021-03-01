import React from "react";
import { MDBRow, MDBCol, MDBIcon } from "mdbreact";
import { Row, Col, Image, Figure } from 'react-bootstrap'

const FeaturesPage = () => {
    return (
        <section className="text-center my-5">
            <h2 className='h1-responsive font-weight-bold text-center my-5'>Popular Companies</h2>
            <Row>
                <Col>
                    <Image src='/images/avis.png' />
                </Col>
                <Col>
                    <Image src='/images/theeb.png' />
                </Col>
                <Col>
                    <Image src='/images/enterprise.png' />
                </Col>
            </Row>
        </section>
    );
}

export default FeaturesPage;