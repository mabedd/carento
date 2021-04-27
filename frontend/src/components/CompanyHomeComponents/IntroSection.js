import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import {
    MDBNavbar,
    MDBNavbarBrand,
    MDBNavbarNav,
    MDBNavItem,
    MDBNavLink,
    MDBNavbarToggler,
    MDBCollapse,
    MDBMask,
    MDBRow,
    MDBCol,
    MDBFormInline,
    MDBBtn,
    MDBView,
    MDBContainer
} from 'mdbreact';
import './IntroSection.css';
//TODO: change the REGISTER NOW LINK

class IntroSection extends React.Component {
    state = {
        collapsed: false
    };

    handleTogglerClick = () => {
        this.setState({
            collapsed: !this.state.collapsed
        });
    };
    componentDidMount() {
        document.querySelector('nav').style.height = '65px';
    }
    componentWillUnmount() {
        document.querySelector('nav').style.height = 'auto';
    }
    render() {
        const navStyle = { marginTop: '4rem' };
        const overlay = (
            <div
                id='sidenav-overlay'
                style={{ backgroundColor: 'transparent' }}
                onClick={this.handleTogglerClick}
            />
        );

        const { collapsed } = this.state;
        return (
            <div id='parallaxintro'>
                <MDBView
                    src={'/images/companyIntro.jpg'}
                    fixed
                >
                    <MDBMask className='rgba-white-light' />
                    <MDBContainer
                        className='d-flex justify-content-center align-items-center'
                        style={{ height: '100%', width: '100%', paddingTop: '15rem' }}
                    >
                        <MDBRow>
                            <MDBCol md='12' className='mb-4 white-text text-center'>
                                <h1 className='display-3 mb-0 pt-md-5 pt-5 white-text font-weight-bold'>
                                    <span className='indigo-text font-weight-bold text-white'>CARENTO</span>
                                </h1>
                                <hr className='hr-light my-4' />
                                <h5 className='text-uppercase pt-md-5 pt-sm-2 pt-5 pb-md-5 pb-sm-3 pb-5 white-text font-weight-bold'>
                                    Let Your Cars Work for YOU
                                </h5>
                                <MDBBtn
                                    className='btn-indigo text-white'
                                    size='lg'
                                    href='/company/register'
                                >
                                    Register Now
                                </MDBBtn>
                            </MDBCol>
                        </MDBRow>
                    </MDBContainer>
                </MDBView>
            </div>
        );
    }
}

export default IntroSection;