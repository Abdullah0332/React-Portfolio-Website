import React, { Component } from 'react';
import Main from '../Common/Main';
import AboutDesc from '../Common/AboutDesc'
import ServicesDesc from '../Common/Services/ServicesDesc';
import PortfolioDesc from '../Common/Portfolio/PortfolioDesc';
import TeamDesc from '../Common/Team/TeamDesc';
import Clients from '../Common/Clients';
import Contact from '../Common/Contact/Contact';
import Footer from '../Common/Footer'

import image from '../Images/header-bg.jpg';

export default class Home extends Component{
    render() {
        return (
            <div>
                <Main 
                    title="Welcome To Our Studio!"
                    subtitle="IT'S NICE TO MEET YOU"
                    button="TELL ME MORE"
                    link="/services"
                    showButton={true}
                    buttonText="TELL ME MORE"
                    image={image}
                />
                <ServicesDesc />
                <PortfolioDesc />
                <AboutDesc />
                <TeamDesc />
                <Clients />
                <Contact />
                <Footer />
            </div>
        )
    }
}
 