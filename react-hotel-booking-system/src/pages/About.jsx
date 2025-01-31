// eslint-disable-next-line no-unused-vars
import React, { Component } from 'react'
import Img1 from '../assets/images/about-us-video.jpg'
import Img2 from '../assets/images/user-picture.jpg'
import Img3 from '../assets/images/user2-picture.jpg'
import Img4 from '../assets/images/user3-picture.jpg'
import Img5 from '../assets/images/user4-picture.jpg'
import { Link } from 'react-router-dom'

export class About extends Component {
  render() {
    return (
        <div>
            <div className="htlfndr-about-us">
            <main id="htlfndr-main-content" className="htlfndr-main-content" role="main">
                <article>
                    <div className="h5 text-center text-uppercase">About us</div>
                    <h1 className="text-center">What We Do Everyday</h1>
                    <div className="htlfndr-section-under-title-line"></div>
                    <div className="htlfndr-text">
                        <p>Neque cursus curae ante scelerisque vehicula porttitor natoque risus vitae lacinia felis elit
                            netus sed iaculis</p>
                        <p> interdum nullam sem habitasse vulputate reetturpis fringilla duis suspendisse arcu</p>
                        <p>Ullamcorper scelerisque elit quam dignissim velit lacus urna quam interdum quisque bibendum
                            platea iaculis</p>
                        <p> blandit dapibus non natoque purus pellentesque</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas iaculis mauris nec lacus
                            suscipit, et gravida </p>
                        <p>magna volutpat. Nullam consequat rhoncus lacinia. Ut rhoncus velit ut sem elementum
                            porttitor. </p>
                    </div>
                </article>
                <article className="htlfndr-creative-team">
                    <div className="htlfndr-video-block"> <img src={Img1} alt='' />
                        <div className="htlfndr-video-title">
                            <div className="htlfndr-button-play"></div>
                            <p className="htlfndr-title-first"><b>Work hard. Travel simple.</b></p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
                        </div>
                    </div>
                    <p className="text-center htlfndr-font-24"><i className="fa fa-users"></i></p>
                    <h1 className="text-center">Out Creative Team</h1>
                    <hr />
                    <p className="small text-center">Neque cursus curae ante scelerisque vehicula porttitor natoque risus
                        vitae lacinia felis elit</p>
                    <p className="small text-center">netus sed iaculis interdum nullam sem habitasse vulputate laoreet
                        turpis fringilla duis suspendisse arcu</p>
                    <div className="row container">
                        <div className="col-md-3 col-sm-6 col-xs-6">
                            <div className="htlfndr-user-person-navigation">
                                <div className="htlfndr-user-avatar"> <img alt="user avatar" src={Img2} />
                                </div>
                                <h3 className="htlfndr-user-name">john brown</h3>
                                <h6 className="htlfndr-user-membership">director</h6>
                                <p className="text-center">Neque cursus curae ante scelei que vehicula porttitor natoque risus
                                    vitae lacinia felis elit netu</p>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-6 col-xs-6">
                            <div className="htlfndr-user-person-navigation">
                                <div className="htlfndr-user-avatar"> <img alt="user avatar" src={Img3} />
                                </div>
                                <h3 className="htlfndr-user-name">sara smith</h3>
                                <h6 className="htlfndr-user-membership">director</h6>
                                <p className="text-center">Neque cursus curae ante scelei que vehicula porttitor natoque risus
                                    vitae lacinia felis elit netu</p>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-6 col-xs-6">
                            <div className="htlfndr-user-person-navigation">
                                <div className="htlfndr-user-avatar"> <img alt="user avatar" src={Img4} />
                                </div>
                                <h3 className="htlfndr-user-name">david jacson</h3>
                                <h6 className="htlfndr-user-membership">founder & Director</h6>
                                <p className="text-center">Neque cursus curae ante scelei que vehicula porttitor natoque risus
                                    vitae lacinia felis elit netu</p>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-6 col-xs-6">
                            <div className="htlfndr-user-person-navigation">
                                <div className="htlfndr-user-avatar"> <img alt="user avatar" src={Img5} />
                                </div>
                                <h3 className="htlfndr-user-name">Anna Pedersen</h3>
                                <h6 className="htlfndr-user-membership">CHIEF OPERATING OFFICER</h6>
                                <p className="text-center">Neque cursus curae ante scelei que vehicula porttitor natoque risus
                                    vitae lacinia felis elit netu</p>
                            </div>
                        </div>
                    </div>
                </article>
                <article className="htlfndr-contact container">
                    <h1 className="text-center">Want to become Part of our Team?</h1>
                    <p className="text-center htlfndr-slogan">We are looking just for you!</p>
                    <p className="text-center htlfndr-font-24"> <i className="fa fa-paper-plane"></i> </p>
                    <p className="text-center"><Link className="btn-default" to="/contact-us#htlfndr-contact-us">Contact Us</Link></p>
                </article>
            </main>
        </div>
      </div>
    )
  }
}

export default About