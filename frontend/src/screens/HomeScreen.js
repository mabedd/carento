import React from 'react'
import { Container } from 'react-bootstrap'

import IntroSection from '../components/HomeComponents/IntroSection'
import HomeFeatures from '../components/HomeComponents/HomeFeatures'
import Values from '../components/HomeComponents/Values'
import HomeLocations from '../components/HomeComponents/HomeLocations'
import LatestNews from '../components/HomeComponents/LatestNews'
import MobileApp from '../components/HomeComponents/MobileApp'

const HomeScreen = () => {
    return (
        <>
            <IntroSection />
            <Container>
                <HomeFeatures />
            </Container>
            <div className='cloudy-knoxville-gradient'>
                <Container className='p-3'>
                    <Values />
                </Container>
            </div>
            <Container className='p-3'>
                <HomeLocations />
            </Container>
            <div className='cloudy-knoxville-gradient'>
                <Container className='p-3'>
                    <LatestNews />
                </Container>
            </div>
            <Container>
                <MobileApp />
            </Container>
        </>
    )
}

export default HomeScreen
