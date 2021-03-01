import React from 'react'
import { Container } from 'react-bootstrap'

import ContactForm from '../components/ContactUsComponents/ContactForm'
import ContactJumbotron from '../components/ContactUsComponents/ContactJumbotron'

const ContactScreen = () => {
    return (
        <>
            <ContactJumbotron />
            <Container>
                <ContactForm />
            </Container>
        </>
    )
}

export default ContactScreen
