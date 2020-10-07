import React from 'react';
import Main from '../Common/Main';
import image from '../Images/header-bg.jpg';
import AboutDesc from '../Common/AboutDesc'

export default function About() {
    return (
        <div>
            <Main 
                title = "About Me!"
                subtitle = "It's dedicated for GodJihyo :)"
                showButton={false}
                image={image}
            />
            <AboutDesc />
        </div>
    )
}
