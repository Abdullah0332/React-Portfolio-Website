import React from 'react';
import Main from '../Common/Main';
import image from '../Images/header-bg.jpg';
import ServicesDesc from '../Common/Services/ServicesDesc'

export default function About() {
    return (
        <div>
            <Main 
                title = "Services"
                subtitle = "It's dedicated for GodJihyo :)"
                showButton={false}
                image={image}
            />
            <ServicesDesc />
        </div>
    )
}
