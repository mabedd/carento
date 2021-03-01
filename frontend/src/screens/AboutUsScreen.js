import React from 'react'
import { Container } from 'react-bootstrap'

import Info from '../components/AboutUsComponents/Info'
import Team from '../components/AboutUsComponents/Team'


const AboutUsScreen = () => {
    return (
        <>
            <Info />
            <Container>
                <Team />
            </Container>

        </>
    )
}

export default AboutUsScreen
