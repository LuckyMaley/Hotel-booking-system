import React, { Component } from 'react'
import Img1 from '../assets/images/29572el_chaise_longue_o_cheslon.jpg'
import Img2 from '../assets/images/kitchen-island1.jpg'
import Img3 from '../assets/images/5053563227_ee0db21ca5_b.jpg'
import Img4 from '../assets/images/83890-Web1.jpg'
import Img5 from '../assets/images/top-destination-1.jpg'
import Img6 from '../assets/images/5690083711_44634c54f8_b.jpg'
import Img7 from '../assets/images/top-destination-2.jpg'
import { Link } from 'react-router-dom'


export class Blog extends Component {
    componentDidMount() {
        this.loadTwitterWidgets;
    }
    loadTwitterWidgets = () => {
        if (!document.getElementById('twitter-wjs')) {
            const script = document.createElement('script')
            script.id = 'twitter-wjs'
            script.src = /^http:/.test(document.location)
            ? 'http://platform.twitter.com/widgets.js'
            : 'https://platform.twitter.com/widgets.js'
            script.async = true
            const firstScript = document.getElementsByTagName('script')[0]
            firstScript.parentNode.insertBefore(script, firstScript)
        }
    }
  render() {
    return (
        <div>
            <div className="container">
            <div className="row htlfndr-page-content">
                <main id="htlfndr-main-content" className="col-sm-12 col-md-8 col-lg-9" role="main">
                    <article className="post htlfndr-post">
                        <header className="htlfndr-entry-header"> <Link to="/blog-single">
                                <h2 className="htlfndr-entry-title">Amazing Standard Blog Post</h2>
                            </Link>
                            <div className="htlfndr-entry-meta"> <span className="htlfndr-posted-by">Posted by <Link to="#">Frank
                                        Mills</Link></span> <span className="htlfndr-post-date"><Link to="#"><time
                                            dateTime="2015-08-25">23 July 2015</time></Link></span> <span
                                    className="htlfndr-post-time"><Link to="#"><time dateTime="18:00">at 06 : 00
                                            PM</time></Link></span> <span className="htlfndr-category-link"><Link to="#">travel
                                        stories</Link></span> <span className="htlfndr-post-comments"><Link to="#">24</Link>
                                    Comments</span> </div>
                        </header> <Link to="#" className="htlfndr-post-thumbnail"> <img
                                src={Img1} alt="post image" /> </Link>
                        <div className="htlfndr-entry-content">
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. At dignissimos dolorum ducimus
                                modi neque quibusdam rerum similique velit? Aspernatur culpa delectus dicta hic itaque
                                laboriosam laudantium libero, perferendis quod sapiente. dicta hic itaque laboriosam
                                laudantium libero, perferendis quod sapiente.</p> <Link to="/blog-single"
                                className="htlfndr-more-link">read more</Link>
                        </div>
                    </article>
                    <article className="post htlfndr-post htlfndr-slider-post">
                        <header className="htlfndr-entry-header"> <Link to="/blog-single">
                                <h2 className="htlfndr-entry-title">Slider Blog Post</h2>
                            </Link>
                            <div className="htlfndr-entry-meta"> <span className="htlfndr-posted-by">Posted by <Link to="#">Sara
                                        Mills</Link></span> <span className="htlfndr-post-date"><Link to="#"><time
                                            dateTime="2015-08-25">23 July 2015</time></Link></span> <span
                                    className="htlfndr-post-time"><Link to="#"><time dateTime="18:00">at 02 : 00
                                            PM</time></Link></span> <span className="htlfndr-category-link"><Link to="#">travel
                                        stories</Link></span> <span className="htlfndr-post-comments"><Link to="#">18</Link>
                                    comments</span> </div>
                        </header>
                        <div className="owl-carousel htlfndr-post-thumbnail">
                            <div className="htlfndr-post-slide-wrapper"> <img src={Img2}
                                    alt="room picture" /> </div>
                            <div className="htlfndr-post-slide-wrapper"> <img src={Img3}
                                    alt="room picture" /> </div>
                            <div className="htlfndr-post-slide-wrapper"> <img src={Img4} alt="room picture" />
                            </div>
                            <div className="htlfndr-post-slide-wrapper"> <img src={Img5}
                                    alt="room picture" /> </div>
                            <div className="htlfndr-post-slide-wrapper"> <img src={Img1}
                                    alt="room picture" /> </div>
                        </div>
                        <div className="htlfndr-entry-content">
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. At dignissimos dolorum ducimus
                                modi neque quibusdam rerum similique velit? Aspernatur culpa delectus dicta hic itaque
                                laboriosam laudantium libero, perferendis quod sapiente. dicta hic itaque laboriosam
                                laudantium libero, perferendis quod sapiente.</p> <Link to="/blog-single"
                                className="htlfndr-more-link">read more</Link>
                        </div>
                    </article>
                    <article className="post htlfndr-post htlfndr-post-format-quote">
                        <header className="htlfndr-entry-header"> <Link to="/blog-single">
                                <h2 className="htlfndr-entry-title">Quote Post Type</h2>
                            </Link>
                            <div className="htlfndr-entry-meta"> <span className="htlfndr-posted-by">Posted by <Link
                                        to="#">Admin</Link></span> <span className="htlfndr-post-date"><Link to="#"><time
                                            dateTime="2015-08-25">23 July 2015</time></Link></span> <span
                                    className="htlfndr-post-time"><Link to="#"><time dateTime="18:00">at 07 : 00
                                            PM</time></Link></span> <span className="htlfndr-category-link"><Link
                                        to="#">services</Link></span> <span className="htlfndr-post-comments"><Link to="#">24</Link>
                                    comments</span> </div>
                        </header>
                        <div className="htlfndr-entry-content">
                            <blockquote>
                                <p>Quam habitasse odio habitasse ultrices dis varius ultrices imperdiet aliquam aliquam
                                    etiam</p>
                            </blockquote>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. At dignissimos dolorum ducimus
                                modi neque quibusdam rerum similique velit? Aspernatur culpa delectus dicta hic itaque
                                laboriosam laudantium libero, perferendis quod sapiente. dicta hic itaque laboriosam
                                laudantium libero, perferendis quod sapiente.</p> <Link to="#" className="htlfndr-more-link">read
                                more</Link>
                        </div>
                    </article>
                    <article className="post htlfndr-post htlfndr-post-format-video">
                        <header className="htlfndr-entry-header"> <Link to="/blog-single">
                                <h2 className="htlfndr-entry-title">Vimeo Video Blog Post</h2>
                            </Link>
                            <div className="htlfndr-entry-meta"> <span className="htlfndr-posted-by">Posted by <Link to="#">Frank
                                        Mills</Link></span> <span className="htlfndr-post-date"><Link to="#"><time
                                            dateTime="2015-08-25">23 July 2015</time></Link></span> <span
                                    className="htlfndr-post-time"><Link to="#"><time dateTime="18:00">at 06 : 00
                                            PM</time></Link></span> <span className="htlfndr-category-link"><Link to="#">trending
                                        now</Link></span> <span className="htlfndr-post-comments"><Link to="#">24</Link>
                                    Comments</span> </div>
                        </header>
                        <div className="htlfndr-iframe-wrapper htlfndr-post-thumbnail"> <iframe
                                src="https://player.vimeo.com/video/27246366" allowfullscreen></iframe>
                            <p><Link to="https://vimeo.com/27246366">The Hotel</Link> from <Link
                                    to="https://vimeo.com/homembala">HOMEMBALA</Link> on <Link
                                    to="https://vimeo.com">Vimeo</Link>.</p>
                        </div>
                        <div className="htlfndr-entry-content">
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. At dignissimos dolorum ducimus
                                modi neque quibusdam rerum similique velit? Aspernatur culpa delectus dicta hic itaque
                                laboriosam laudantium libero, perferendis quod sapiente. dicta hic itaque laboriosam
                                laudantium libero, perferendis quod sapiente.</p> <Link to="/blog-single"
                                className="htlfndr-more-link">read more</Link>
                        </div>
                    </article>
                    <article className="post htlfndr-post htlfndr-post-format-video">
                        <header className="htlfndr-entry-header"> <Link to="/blog-single">
                                <h2 className="htlfndr-entry-title">YouTube Blog Post</h2>
                            </Link>
                            <div className="htlfndr-entry-meta"> <span className="htlfndr-posted-by">Posted by <Link to="#">Frank
                                        Mills</Link></span> <span className="htlfndr-post-date"><Link to="#"><time
                                            dateTime="2015-08-25">23 July 2015</time></Link></span> <span
                                    className="htlfndr-post-time"><Link to="#"><time dateTime="18:00">at 06 : 00
                                            PM</time></Link></span> <span className="htlfndr-category-link"><Link to="#">trending
                                        now</Link></span> <span className="htlfndr-post-comments"><Link to="#">24</Link>
                                    Comments</span> </div>
                        </header>
                        <div className="htlfndr-iframe-wrapper htlfndr-post-thumbnail"> <iframe
                                src="https://www.youtube.com/embed/AlCqyZEXM1I" allowfullscreen></iframe> </div>
                        <div className="htlfndr-entry-content">
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. At dignissimos dolorum ducimus
                                modi neque quibusdam rerum similique velit? Aspernatur culpa delectus dicta hic itaque
                                laboriosam laudantium libero, perferendis quod sapiente. dicta hic itaque laboriosam
                                laudantium libero, perferendis quod sapiente.</p> <Link to="#" className="htlfndr-more-link">read
                                more</Link>
                        </div>
                    </article>
                    <article className="post htlfndr-post">
                        <header className="htlfndr-entry-header">
                            <h2 className="htlfndr-entry-title">Simple Blog Post</h2>
                            <div className="htlfndr-entry-meta"> <span className="htlfndr-posted-by">Posted by <Link to="#">Frank
                                        Mills</Link></span> <span className="htlfndr-post-date"><Link to="#"><time
                                            dateTime="2015-08-25">23 July 2015</time></Link></span> <span
                                    className="htlfndr-post-time"><Link to="#"><time dateTime="18:00">at 06 : 00
                                            PM</time></Link></span> <span className="htlfndr-category-link"><Link to="#">trending
                                        now</Link></span> <span className="htlfndr-post-comments"><Link to="#">18</Link>
                                    comments</span> </div>
                        </header>
                        <div className="htlfndr-entry-content">
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. At dignissimos dolorum ducimus
                                modi neque quibusdam rerum similique velit? Aspernatur culpa delectus dicta hic itaque
                                laboriosam laudantium libero, perferendis quod sapiente. dicta hic itaque laboriosam
                                laudantium libero, perferendis quod sapiente.</p> <Link to="/blog-single"
                                className="htlfndr-more-link">read more</Link>
                        </div>
                    </article>
                    <nav className="htlfndr-pagination">
                        <ul className="pagination">
                            <li className="htlfndr-left"> <Link to="#" aria-label="Previous"> <span aria-hidden="true"
                                        className="fa fa-angle-left"></span> </Link> </li>
                            <li className="current"><Link to="#">1</Link></li>
                            <li><Link to="#">2</Link></li>
                            <li><Link to="#">3</Link></li>
                            <li><Link to="#">4</Link></li>
                            <li className="htlfndr-right"> <Link to="#" aria-label="Next"> <span aria-hidden="true"
                                        className="fa fa-angle-right"></span> </Link> </li>
                        </ul>
                    </nav>
                </main>
                <aside id="htlfndr-right-sidebar"
                    className="col-sm-12 col-md-4 col-lg-3 htlfndr-sidebar htlfndr-sidebar-in-right" role="complementary">
                    <div className="widget">
                        <form action="#" className="htlfndr-blog-search-form" method="get" role="search"> <label
                                htmlFor="htlfndr-blog-search-field" className="sr-only">Search for:</label> <input type="search"
                                title="Search for:" name="s" value placeholder="Search" id="htlfndr-blog-search-field"
                                className="htlfndr-blog-search-field" /> <input type="submit" value="search"
                                className="htlfndr-blog-search-submit" /> </form>
                    </div>
                    <div className="widget htlfndr-near-properties">
                        <div className="htlfndr-widget-main-content">
                            <h3 className="widget-title">properties near</h3>
                            <div className="htlfdr-hotel-post">
                                <div className="htlfndr-post-inner htlfndr-table-view">
                                    <div className="htlfndr-hotel-thumbnail"> <Link to="/hotel-page-v1"> <img
                                                src={Img4} alt="hotel pic" /> </Link> </div>
                                    <div className="htlfndr-hotel-info"> <Link to="/hotel-page-v1">
                                            <h6>Ruzzini Palace Hotel</h6>
                                        </Link>
                                        <div className="htlfndr-rating-stars"> <i className="fa fa-star htlfndr-star-color"></i>
                                            <i className="fa fa-star htlfndr-star-color"></i> <i
                                                className="fa fa-star htlfndr-star-color"></i> <i
                                                className="fa fa-star htlfndr-star-color"></i> <i
                                                className="fa fa-star htlfndr-star-color"></i> </div>
                                        <p className="htlfndr-hotel-price"><span>per night</span> <span
                                                className="htlfndr-cost-normal">$150</span> </p>
                                    </div>
                                </div>
                            </div>
                            <div className="htlfdr-hotel-post">
                                <div className="htlfndr-post-inner htlfndr-table-view">
                                    <div className="htlfndr-hotel-thumbnail"> <Link to="/hotel-page-v3"> <img
                                                src={Img3} alt="hotel pic" /> </Link> </div>
                                    <div className="htlfndr-hotel-info"> <Link to="/hotel-page-v3">
                                            <h6>Foscari Palace</h6>
                                        </Link>
                                        <div className="htlfndr-rating-stars"> <i className="fa fa-star htlfndr-star-color"></i>
                                            <i className="fa fa-star htlfndr-star-color"></i> <i
                                                className="fa fa-star htlfndr-star-color"></i> <i className="fa fa-star"></i> <i
                                                className="fa fa-star"></i> </div>
                                        <p className="htlfndr-hotel-price"><span>per night</span> <span
                                                className="htlfndr-cost-normal">$200</span> </p>
                                    </div>
                                </div>
                            </div>
                            <div className="htlfdr-hotel-post">
                                <div className="htlfndr-post-inner htlfndr-table-view">
                                    <div className="htlfndr-hotel-thumbnail"> <Link to="/hotel-page-v1"> <img
                                                src={Img6} alt="hotel pic" /> </Link> </div>
                                    <div className="htlfndr-hotel-info> <Link to=hotel-page-v1.html>
                                            <h6>Carnival Hotel</h6>
                                        </Link>
                                        <div className="htlfndr-rating-stars> <i className="fa fa-star htlfndr-star-color"></i>
                                            <i className="fa fa-star htlfndr-star-color"></i> <i
                                                className="fa fa-star htlfndr-star-color"></i> <i
                                                className="fa fa-star htlfndr-star-color"></i> <i className="fa fa-star"></i>
                                        </div>
                                        <p className="htlfndr-hotel-price"><span>per night</span> <span
                                                className="htlfndr-cost-normal">$400</span> </p>
                                    </div>
                                </div>
                            </div>
                            <div className="htlfdr-hotel-post">
                                <div className="htlfndr-post-inner htlfndr-table-view">
                                    <div className="htlfndr-hotel-thumbnail"> <Link to="/hotel-page-v3"> <img
                                                src={Img7} alt="hotel pic" /> </Link> </div>
                                    <div className="htlfndr-hotel-info"> <Link to="/hotel-page-v3">
                                            <h6>Hilton Molino</h6>
                                        </Link>
                                        <div className="htlfndr-rating-stars"> <i className="fa fa-star htlfndr-star-color"></i>
                                            <i className="fa fa-star htlfndr-star-color"></i> <i
                                                className="fa fa-star htlfndr-star-color"></i> <i className="fa fa-star"></i> <i
                                                className="fa fa-star"></i> </div>
                                        <p className="htlfndr-hotel-price"><span>per night</span> <span
                                                className="htlfndr-cost-normal">$350</span> </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    <div className="widget htlfndr-widget-archive">
                        <div className="htlfndr-widget-main-content htlfndr-widget-padding">
                            <h3 className="widget-title">archives</h3>
                            <ul>
                                <li><Link to="#">august 2015</Link></li>
                                <li><Link to="#">july 2015</Link></li>
                                <li><Link to="#">june 2015</Link></li>
                                <li><Link to="#">may 2015</Link></li>
                                <li><Link to="#">april 2015</Link></li>
                                <li><Link to="#">march 2015</Link></li>
                                <li><Link to="#">february 2015</Link></li>
                                <li><Link to="#">january 2015</Link></li>
                                <li><Link to="#">december 2014</Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className="widget htlfndr-widget-category">
                        <div className="htlfndr-widget-main-content htlfndr-widget-padding">
                            <h3 className="widget-title">categories</h3>
                            <ul>
                                <li><Link to="#">photos</Link></li>
                                <li><Link to="#">travel stories</Link></li>
                                <li><Link to="#">trending now</Link></li>
                                <li><Link to="#">places to go</Link></li>
                                <li><Link to="#">services</Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className="widget htlfndr-widget-twitter">
                        <div className="htlfndr-widget-main-content htlfndr-widget-padding">
                            <h3 className="widget-title">twitter feed</h3> <Link className="twitter-timeline"
                                to="https://twitter.com/Wishmaker88" data-widget-id="636886660064649216"
                                data-chrome="noheader noborders noscrollbar nofooter" data-tweet-limit="3"
                                data-screen-name="bestwebsoft" data-show-replies="false">Tweets from @bestwebsoft</Link>
                           
                        </div>
                    </div>
                    <div className="widget htlfndr-widget-help">
                        <div className="htlfndr-widget-main-content htlfndr-widget-padding">
                            <h3 className="widget-title">need our help</h3> <span>24/7 dedicated customer support</span>
                            <p className="htlfndr-phone">+(000) 000-000-000</p>
                            <p className="htlfndr-mail"><Link to="/cdn-cgi/l/email-protection" className="__cf_email__"
                                    data-cfemail="bac9cfcacad5c8cefad8dfc9cecddfd8c9d5dcce94c0dfd4dedfc9d194d9d5d7">[email&#160;protected]</Link>
                            </p>
                        </div>
                    </div>
                </aside>
            </div>
        </div>
      </div>
    )
  }
}

export default Blog