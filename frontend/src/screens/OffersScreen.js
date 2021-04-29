import React from 'react'
import { Container } from 'react-bootstrap'

import Jumbotron from '../components/OffersComponents/Jumbotron'
import FeaturedOffers from '../components/OffersComponents/FeaturedOffers'
import Offers from '../components/OffersComponents/Offers'
import PopularCompanies from '../components/OffersComponents/PopularCompanies'

// inline styling
const body = {
    height: ' 100%',
    margin: '0'
}

const bgimg = {
    background: "url(" + "https://images.pexels.com/photos/34153/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350" + ")",
    height: '100 %',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    position: 'relative',
    color: 'white',
    fontFamily: "Courier New",
    fontSize: '25px'
}

const topleft = {
    position: 'absolute',
    top: '0',
    left: '16px'
}

const bottomleft = {
    position: 'absolute',
    bottom: '0',
    left: '16px'
}

const middle = {
    position: 'absolute',
    top: '50 %',
    left: '50 %',
    transform: 'translate(-50 %, -50 %)',
    textAlign: 'center'
}

const hr = {
    margin: 'auto',
    width: '40 %'
}


const OffersScreen = () => {
    return (
        <>
            <body style={body}>
                <div style={bgimg}>
                    <div style={topleft}>
                        <p>Logo</p>
                    </div>
                    <div style={middle}>
                        <h1>COMING SOON</h1>
                        <hr style={hr}></hr>
                        <p>35 days left</p>
                    </div>
                    <div style={bottomleft}>
                        <p>Some text</p>
                    </div>
                </div>
            </body>

        </>
    )
}

export default OffersScreen
