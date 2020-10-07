import React, { Component } from 'react';
import SinglePortfolio from './SinglePortfolio';
import img1 from '../../Images/portfolio/01-thumbnail.jpg';
import img2 from '../../Images/portfolio/02-thumbnail.jpg';
import img3 from '../../Images/portfolio/03-thumbnail.jpg';
import img4 from '../../Images/portfolio/04-thumbnail.jpg';
import img5 from '../../Images/portfolio/05-thumbnail.jpg';
import img6 from '../../Images/portfolio/06-thumbnail.jpg';

const portfolio = [
    { title : 'Threads' , description : 'Illustration' , image : img1 },
    { title : 'Explore' , description : 'Graphic Design' , image : img2 },
    { title : 'Finish' , description : 'Identity' , image : img3 },
    { title : 'Lines' , description : 'Branding' , image : img4 },
    { title : 'Southwest' , description : 'Website Design' , image : img5 },
    { title : 'Window' , description : 'Photography' , image : img6 }
]

export default class PortfolioDesc extends Component {
    render() {
        return (
            <div>
                <section className="bg-light" id="portfolio">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 text-center">
                            <h2 className="section-heading text-uppercase">Portfolio</h2>
                            <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
                            </div>
                        </div>
                        <div className="row">
                            {portfolio.map((item , index) => {
                                return <SinglePortfolio {...item} key={index} />
                            })}
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}
