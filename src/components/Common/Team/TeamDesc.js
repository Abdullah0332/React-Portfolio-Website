import React, { Component } from 'react';
import SingleTeam from './SingleTeam';
import img1 from '../../Images/team/1.jpg';
import img2 from '../../Images/team/2.jpg';
import img3 from '../../Images/team/3.jpg';

const Teams =[
    {name: 'Kay Garland', position: 'Lead Designer', image: img1},
    {name: 'Larry Parker', position: 'Lead Marketer', image: img2},
    {name: 'Diana Pertersen', position: 'Lead Developer', image: img3}
]

export default class TeamDesc extends Component {
    render() {
        return (
            <div>
                <section className="bg-light" id="team">
                    <div className="container">
                    <div className="row">
                        <div className="col-lg-12 text-center">
                        <h2 className="section-heading text-uppercase">Our Amazing Team</h2>
                        <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
                        </div>
                    </div>
                    <div className="row">
                        {Teams.map((member , index) => {
                            return <SingleTeam {...member} key={index} />
                        })}
                    </div>
                    <div className="row">
                        <div className="col-lg-8 mx-auto text-center">
                        <p className="large text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut eaque, laboriosam veritatis, quos non quis ad perspiciatis, totam corporis ea, alias ut unde.</p>
                        </div>
                    </div>
                    </div>
                </section>
            </div>
        )
    }
}
