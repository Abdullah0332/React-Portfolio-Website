import React, { Component } from 'react';
import creative_market from '../Images/logos/creative-market.jpg';
import designmodo from '../Images/logos/designmodo.jpg';
import envato from '../Images/logos/envato.jpg';
import themeforest from '../Images/logos/themeforest.jpg';

export default class Clients extends Component {
    render() {
        return (
            <div>
                  <section className="py-5">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-3 col-sm-6">
                                <a href="none">
                                    <img className="img-fluid d-block mx-auto" src={creative_market} alt="" />
                                </a>
                                </div>
                                <div className="col-md-3 col-sm-6">
                                <a href="none">
                                    <img className="img-fluid d-block mx-auto" src={designmodo} alt="" />
                                </a>
                                </div>
                                <div className="col-md-3 col-sm-6">
                                <a href="none">
                                    <img className="img-fluid d-block mx-auto" src={envato} alt="" />
                                </a>
                                </div>
                                <div className="col-md-3 col-sm-6">
                                <a href="none">
                                    <img className="img-fluid d-block mx-auto" src={themeforest} alt="" />
                                </a>
                                </div>
                            </div>
                        </div>
                    </section>
            </div>
        )
    }
}

