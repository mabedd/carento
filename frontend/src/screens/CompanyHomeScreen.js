import React from 'react'
import { Container, Button } from 'react-bootstrap'

import IntroSection from '../components/CompanyHomeComponents/IntroSection'
import Features from '../components/CompanyHomeComponents/Features'

const CompanyHomeScreen = () => {
    return (
        <>
            <IntroSection />
            <Container>
                <Features />
            </Container>
            <div className='text-center'>
                <Button variant="btn btn-indigo text-white mb-2" size="lg" block href='/company/register'>
                    List your cars with us
                </Button>
            </div>
        </>
    )
}

export default CompanyHomeScreen

