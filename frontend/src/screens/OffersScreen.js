import React from 'react'
import { Container } from 'react-bootstrap'

import Jumbotron from '../components/OffersComponents/Jumbotron'
import FeaturedOffers from '../components/OffersComponents/FeaturedOffers'
import Offers from '../components/OffersComponents/Offers'
import PopularCompanies from '../components/OffersComponents/PopularCompanies'


const OffersScreen = () => {
    return (
        <>
            <Jumbotron />
            <Container>
                <FeaturedOffers />
            </Container>
            <div className='heavy-rain-gradient'>
                <Container className='p-3'>
                    <PopularCompanies />
                </Container>
            </div>
            <Offers />

        </>
    )
}

export default OffersScreen
