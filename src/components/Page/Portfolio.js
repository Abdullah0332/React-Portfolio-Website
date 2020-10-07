import React from 'react';
import Main from '../Common/Main';
import image from '../Images/header-bg.jpg';
import PortfolioDesc from '../Common/Portfolio/PortfolioDesc';

export default function About() {
    return (
        <div>
            <Main 
                title = "Portfolio"
                subtitle = "It's dedicated for GodJihyo :)"
                showButton={false}
                image={image}
            />
            <PortfolioDesc />
        </div>
    )
}
