import React from 'react';
import Main from '../Common/Main';
import image from '../Images/header-bg.jpg';
import TeamDesc from '../Common/Team/TeamDesc'

export default function About() {
    return (
        <div>
            <Main 
                title = "Our Team"
                subtitle = "It's dedicated for GodJihyo :)"
                showButton={false}
                image={image}
            />
            <TeamDesc />
        </div>
    )
}
