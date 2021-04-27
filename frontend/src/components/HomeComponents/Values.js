import React from "react";
import { MDBRow, MDBCol, MDBIcon } from "mdbreact";

const Values = () => {
    return (
        <section className="text-center my-5">
            <h2 className="h1-responsive font-weight-bold my-5">
                Carento Values
        </h2>
            <p className="lead grey-text w-responsive mx-auto mb-5">
                Carento is an online platform that was mainly found to help car rental parties in all aspects.
            </p>
            {/**values first line */}
            <MDBRow>
                <MDBCol md="4">
                    <MDBIcon icon="smile-beam" size="3x" className="amber-text" />
                    <h5 className="font-weight-bold my-4">Honesty</h5>
                    <p className="grey-text mb-md-0 mb-5">
                        We provide our services that are going to satisfy and relief our clients with honesty
                    </p>
                </MDBCol>
                <MDBCol md="4">
                    <MDBIcon icon="user-tie" size="3x" className="green-text" />
                    <h5 className="font-weight-bold my-4">Integrity</h5>
                    <p className="grey-text mb-md-0 mb-5">
                        We will assist you and give you our advices in an integral way to assist you
                    </p>
                </MDBCol>
                <MDBCol md="4">
                    <MDBIcon icon="handshake" size="3x" className="red-text" />
                    <h5 className="font-weight-bold my-4">Respect</h5>
                    <p className="grey-text mb-md-0 mb-5">
                        Carento respects their own clients and other competitors in this domain
                    </p>
                </MDBCol>
            </MDBRow>

            <br>



            </br>

            {/** values second line */}
            <MDBRow>
                <MDBCol md="4">
                    <MDBIcon icon="thumbs-up" size="3x" className="amber-text" />
                    <h5 className="font-weight-bold my-4">High Standards</h5>
                    <p className="grey-text mb-md-0 mb-5">
                        Our standards are high that complies with our clients
                    </p>
                </MDBCol>
                <MDBCol md="4">
                    <MDBIcon icon="user-check" size="3x" className="green-text" />
                    <h5 className="font-weight-bold my-4">Satisfaction</h5>
                    <p className="grey-text mb-md-0 mb-5">
                        Our services are designed to satisfy and relief our clients
                    </p>
                </MDBCol>
                <MDBCol md="4">
                    <MDBIcon far icon="building" size="3x" className="red-text" />
                    <h5 className="font-weight-bold my-4">Competency</h5>
                    <p className="grey-text mb-md-0 mb-5">
                        We aim an look for honorable competition with other competitors
                    </p>
                </MDBCol>
            </MDBRow>
        </section>
    );
}

export default Values;