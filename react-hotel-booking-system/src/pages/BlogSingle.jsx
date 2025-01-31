import { Component } from 'react'
import Img1 from '../assets/images/single_blog.jpg'
import Img2 from '../assets/images/avatar1.png'
import Img3 from '../assets/images/user2-picture.jpg'
import Img4 from '../assets/images/83890-Web1.jpg'
import Img5 from '../assets/images/5053563227_ee0db21ca5_b.jpg'
import Img6 from '../assets/images/5690083711_44634c54f8_b.jpg'
import Img7 from '../assets/images/top-destination-2.jpg'
import { Link } from 'react-router-dom'

export class BlogSingle extends Component {
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
                <main id="htlfndr-main-content" className="col-sm-12 col-md-8 col-lg-9 htlfndr-single-blog-page" role="main">
                    <header className="htlfndr-entry-header">
                        <h1 className="htlfndr-single-title">Single Blog Post / Heading 1</h1>
                        <div className="htlfndr-entry-meta"> <span className="htlfndr-posted-by">Posted by <Link to="#">Frank
                                    Mills</Link></span> <span className="htlfndr-post-date"><Link to="#"><time
                                        dateTime="2015-08-25">23 July 2015</time></Link></span> <span
                                className="htlfndr-post-time"><Link to="#"><time dateTime="18:00">at 06 : 00 PM</time></Link></span>
                            <span className="htlfndr-category-link"><Link to="#">travel stories</Link></span> <span
                                className="htlfndr-post-comments"><Link to="#" className="htlfndr-comments">24</Link> Comments</span> </div>
                    </header>
                    <article className="htlfndr-single-blog-page"> <Link className="htlfndr-post-thumbnail" to="#"> <img
                                alt="post image" src={Img1} /> </Link>
                        <div className="htlfndr-entry-content"> Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Mauris interdum sollicitudin pellentesque. Duis id congue dolor. Sed at tortor sed magna
                            gravida scelerisque ut maximus leo. Curabitur iaculis sem quis faucibus mollis. Praesent est
                            odio, dapibus nec ornare ut, ultricies at lacus. Suspendisse et mi eget libero malesuada
                            ullamcorper.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vitae auctor
                            orci. Praesent id neque sit amet eros auctor varius at vel dui. Curabitur vitae semper
                            ipsum. Integer ligula nisl, aliquet a lacus eget, pharetra rutrum ex. Curabitur id arcu eu
                            magna pretium scelerisque. Integer turpis tortor, pellentesque quis efficitur vel, vulputate
                            ut mauris. Phasellus feugiat eu ante sed hendrerit. Nunc dapibus, libero ut varius vehicula,
                            augue metus efficitur eros, sed ullamcorper metus neque id justo. Mauris non dapibus odio,
                            efficitur aliquam sapien. Fusce elementum accumsan est, nec gravida nisi maximus vitae.
                            Aliquam rutrum magna cursus neque elementum, ac pulvinar augue consectetur. Curabitur eu
                            rutrum est, eget mollis ipsum. Sed cursus pellentesque dui a fringilla. Suspendisse a orci
                            non ante malesuada condimentum.Nam dignissim sapien dignissim, accumsan nulla in, vestibulum
                            eros. Aenean sollicitudin est a vehicula scelerisque. Duis ut tincidunt ipsum. Donec vel
                            ligula in orci elementum accumsan sodales id turpis. Donec luctus eros sed ultrices aliquam.
                            Maecenas orci augue, viverra vel justo quis, porta feugiat tellus. Nullam viverra est at
                            purus congue consectetur. Aenean vestibulum iaculis neque sit amet pulvinar.Pellentesque eu
                            aliquam elit, nec tincidunt erat. Phasellus est elit, ultricies vel ipsum et, ultrices
                            lobortis velit. Vivamus sem sem, sodales ac ante et, efficitur fermentum ex. Vestibulum
                            luctus molestie tortor. Fusce dictum placerat massa, et pellentesque est volutpat sed.
                            Aliquam erat volutpat. Pellentesque ac velit luctus, finibus turpis eu, pretium enim.
                            Pellentesque nec aliquet tellus. Proin bibendum elit et suscipit dictum. <h2>Heading 2</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris interdum sollicitudin
                                pellentesque. Duis id congue dolor. Sed at tortor sed magna gravida scelerisque ut
                                maximus leo. Curabitur iaculis sem quis faucibus mollis. Praesent est odio, dapibus nec
                                ornare ut, ultricies at lacus. Suspendisse et mi eget libero malesuada ullamcorper.</p>
                            <ul className="glyphicon glyphicon-ok">
                                <li className="glyphicon glyphicon-ok"> Neque porro quisquam est qui dolorem </li>
                                <li className="glyphicon glyphicon-ok"> Lorem ipsum dolor sit amet </li>
                                <li className="glyphicon glyphicon-ok"> Nam dignissim sapien dignissim </li>
                                <li className="glyphicon glyphicon-ok"> Pellentesque eu aliquam elit </li>
                            </ul>
                            <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris interdum sollicitudin
                                pellentesque. Duis id congue dolor. Sed at tortor sed magna gravida scelerisque ut
                                maximus leo. Curabitur iaculis sem quis faucibus mollis. Praesent est odio, dapibus nec
                                ornare ut, ultricies at lacus. Suspendisse et mi eget libero malesuada ullamcorper. </p>
                            <img src={Img1} className="img-responsive pull-left" alt />
                            <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris interdum sollicitudin
                                pellentesque. Duis id congue dolor. Sed at tortor sed magna gravida scelerisque ut
                                maximus leo. Curabitur iaculis sem quis faucibus mollis. Praesent est odio, dapibus nec
                                ornare ut, ultricies at lacus. Suspendisse et mi eget libero malesuada ullamcorper. </p>
                            <p> Nam dignissim sapien dignissim, accumsan nulla in, vestibulum eros. Aenean sollicitudin
                                est a vehicula scelerisque. Duis ut tincidunt ipsum. Donec vel ligula in orci elementum
                                accumsan sodales id turpis. Donec luctus eros sed ultrices aliquam. Quisque nec placerat
                                neque. Duis nec tempus est. In congue et nisi a lobortis. Integer efficitur tellus orci,
                                eget suscipit odio sagittis a. Vestibulum interdum at tortor hendrerit faucibus.
                                Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis
                                egestas. Donec sem mauris, iaculis id magna in, elementum eleifend leo. </p>
                            <p> Quisque nec placerat neque. <Link to="#">Duis nec tempus est.</Link> In congue et nisi a
                                lobortis. Integer efficitur tellus orci, eget suscipit odio sagittis a. Vestibulum
                                interdum at tortor hendrerit faucibus. Pellentesque habitant morbi tristique senectus et
                                netus et malesuada fames ac turpis egestas. Donec sem mauris, iaculis id magna in,
                                elementum eleifend leo. </p>
                        </div>
                    </article>
                    <article className="htlfndr-tags"> <span className="glyphicon glyphicon-tag"></span>
                        <div> <Link to="#">Lorem</Link>, <Link to="#">Ipsum</Link>, <Link to="#">Pellentesque</Link>, <Link href>Quisque</Link>
                        </div>
                    </article>
                    <article className="htlfndr-social-share">
                        <div className="clearfix"> <Link to="#"><span className="fa fa-facebook"></span></Link> <Link to="#"><span
                                    className="fa fa-twitter"></span></Link> <Link to="#"><span
                                    className="fa fa-google-plus"></span></Link> <Link to="#"><span
                                    className="fa fa-linkedin"></span></Link> <Link to="#"><span
                                    className="fa fa-pinterest"></span></Link> <Link to="#"><span
                                    className="fa fa-youtube-square"></span></Link> </div>
                    </article>
                    <article className="htlfndr-prev-next-post">
                        <div className="text-right clearfix"> <Link className="htlfndr-more-link htlfndr-prev-link pull-left"
                                to="#"><span className="glyphicon glyphicon-chevron-left"></span> Prev</Link> <Link
                                className="htlfndr-more-link htlfndr-next-link pull-right" to="#">Next <span
                                    className="glyphicon glyphicon-chevron-right"></span></Link> </div>
                    </article>
                    <article id="htlfndr-comments">
                        <div className="htlfndr-comments_title clearfix">
                            <h3>Comments <span className="htlfndr-maincolor">(3)</span></h3>
                            <div className="leave_comment"> <Link to="#htlfndr-leave_comment"
                                    className="glyphicon glyphicon-pencil"></Link> Leave a Comment </div>
                        </div>
                        <div className="htlfndr-comments-area" id="comments">
                            <ol className="htlfndr-comment-list">
                                <li className="htlfndr-comment parent">
                                    <article className="htlfndr-comment-body">
                                        <footer className="htlfndr-comment-meta">
                                            <div className="row">
                                                <div className="col-md-2">
                                                    <div className="htlfndr-comment-author">
                                                        <div className="htlfndr-border"></div> <img className="htlfndr-avatar" alt
                                                            src={Img2} />
                                                    </div>
                                                </div>
                                                <div className="col-md-10">
                                                    <div className="htlfndr-comment-metadata"> <Link
                                                            to="#htlfndr-leave_comment"><i className="fa fa-reply"></i></Link>
                                                        <h4><Link to="#">John Brown</Link></h4> <span
                                                            className="htlfndr-post-date"><Link to="#"><time
                                                                    dateTime="2015-08-25">23 July 2015</time></Link></span>
                                                        <span className="htlfndr-post-time"><Link to="#"><time dateTime="18:00">at
                                                                    06 : 00 PM</time></Link></span>
                                                    </div>
                                                    <div className="htlfndr-comment-content"> Quisque nec placerat neque. In
                                                        congue et nisi a lobortis. Integer efficitur tellus orci, eget
                                                        suscipit odio sagittis a. Vestibulum interdum at tortor
                                                        hendrerit faucibus. </div>
                                                </div>
                                            </div>
                                        </footer>
                                    </article>
                                    <ol className="htlfndr-comment-list children">
                                        <li className="htlfndr-comment">
                                            <article className="htlfndr-comment-body">
                                                <footer className="htlfndr-comment-meta">
                                                    <div className="row">
                                                        <div className="col-md-2">
                                                            <div className="htlfndr-comment-author">
                                                                <div className="htlfndr-border"></div> <img
                                                                    className="htlfndr-avatar" alt
                                                                    src={Img3} />
                                                            </div>
                                                        </div>
                                                        <div className="col-md-10">
                                                            <div className="htlfndr-comment-metadata"> <Link
                                                                    to="#htlfndr-leave_comment"><i
                                                                        className="fa fa-reply"></i></Link>
                                                                <h4><Link to="#">Sara Smith</Link></h4> <span
                                                                    className="htlfndr-post-date"><Link to="#"><time
                                                                            dateTime="2015-08-25">29 July
                                                                            2015</time></Link></span> <span
                                                                    className="htlfndr-post-time"><Link to="#"><time
                                                                            dateTime="18:00">at 06 : 00
                                                                            PM</time></Link></span>
                                                            </div>
                                                            <div className="htlfndr-comment-content"> Quisque nec placerat
                                                                neque. In congue et nisi a lobortis. Integer efficitur
                                                                tellus orci, eget suscipit odio sagittis a. Vestibulum
                                                                interdum at tortor hendrerit faucibus. </div>
                                                        </div>
                                                    </div>
                                                </footer>
                                            </article>
                                            <ol className="htlfndr-comment-list children">
                                                <li className="htlfndr-comment">
                                                    <article className="htlfndr-comment-body">
                                                        <footer className="htlfndr-comment-meta">
                                                            <div className="row">
                                                                <div className="col-md-2">
                                                                    <div className="htlfndr-comment-author">
                                                                        <div className="htlfndr-border"></div> <img
                                                                            className="htlfndr-avatar" alt
                                                                            src={Img2} />
                                                                    </div>
                                                                </div>
                                                                <div className="col-md-10">
                                                                    <div className="htlfndr-comment-metadata"> <Link
                                                                            to="#htlfndr-leave_comment"><i
                                                                                className="fa fa-reply"></i></Link>
                                                                        <h4><Link to="#">David Jacson</Link></h4> <span
                                                                            className="htlfndr-post-date"><Link to="#"><time
                                                                                    dateTime="2015-08-25">30 July
                                                                                    2015</time></Link></span> <span
                                                                            className="htlfndr-post-time"><Link to="#"><time
                                                                                    dateTime="18:00">at 09 : 00
                                                                                    PM</time></Link></span>
                                                                    </div>
                                                                    <div className="htlfndr-comment-content"> Quisque nec
                                                                        placerat neque. In congue et nisi a lobortis.
                                                                        Integer efficitur tellus orci, eget suscipit
                                                                        odio sagittis a. Vestibulum interdum at tortor
                                                                        hendrerit faucibus. </div>
                                                                </div>
                                                            </div>
                                                        </footer>
                                                    </article>
                                                    <ol className="htlfndr-comment-list children">
                                                        <li className="htlfndr-comment">
                                                            <article className="htlfndr-comment-body">
                                                                <footer className="htlfndr-comment-meta">
                                                                    <div className="row">
                                                                        <div className="col-md-2">
                                                                            <div className="htlfndr-comment-author">
                                                                                <div className="htlfndr-border"></div> <img
                                                                                    className="htlfndr-avatar" alt
                                                                                    src={Img3} />
                                                                            </div>
                                                                        </div>
                                                                        <div className="col-md-10">
                                                                            <div className="htlfndr-comment-metadata"> <Link
                                                                                    to="#htlfndr-leave_comment"><i
                                                                                        className="fa fa-reply"></i></Link>
                                                                                <h4><Link to="#">Sara Smith</Link></h4> <span
                                                                                    className="htlfndr-post-date"><Link
                                                                                        to="#"><time
                                                                                            dateTime="2015-08-25">30 July
                                                                                            2015</time></Link></span> <span
                                                                                    className="htlfndr-post-time"><Link
                                                                                        to="#"><time dateTime="18:00">at
                                                                                            06 : 00 PM</time></Link></span>
                                                                            </div>
                                                                            <div className="htlfndr-comment-content"> Quisque
                                                                                nec placerat neque. In congue et nisi a
                                                                                lobortis. Integer efficitur tellus orci,
                                                                                eget suscipit odio sagittis a.
                                                                                Vestibulum interdum at tortor hendrerit
                                                                                faucibus. </div>
                                                                        </div>
                                                                    </div>
                                                                </footer>
                                                            </article>
                                                            <ol className="htlfndr-comment-list children">
                                                                <li className="htlfndr-comment">
                                                                    <article className="htlfndr-comment-body">
                                                                        <footer className="htlfndr-comment-meta">
                                                                            <div className="row">
                                                                                <div className="col-md-2">
                                                                                    <div className="htlfndr-comment-author">
                                                                                        <div className="htlfndr-border"></div>
                                                                                        <img className="htlfndr-avatar" alt
                                                                                            src={Img2} />
                                                                                    </div>
                                                                                </div>
                                                                                <div className="col-md-10">
                                                                                    <div className="htlfndr-comment-metadata">
                                                                                        <Link to="#htlfndr-leave_comment"><i
                                                                                                className="fa fa-reply"></i></Link>
                                                                                        <h4><Link to="#">John Brown</Link>
                                                                                        </h4> <span
                                                                                            className="htlfndr-post-date"><Link
                                                                                                to="#"><time
                                                                                                    dateTime="2015-08-25">02
                                                                                                    August
                                                                                                    2015</time></Link></span>
                                                                                        <span className="htlfndr-post-time"><Link
                                                                                                to="#"><time
                                                                                                    dateTime="18:00">at 06
                                                                                                    : 00
                                                                                                    PM</time></Link></span>
                                                                                    </div>
                                                                                    <div className="htlfndr-comment-content">
                                                                                        Quisque nec placerat neque. In
                                                                                        congue et nisi a lobortis.
                                                                                        Integer efficitur tellus orci,
                                                                                        eget suscipit odio sagittis a.
                                                                                        Vestibulum interdum at tortor
                                                                                        hendrerit faucibus. </div>
                                                                                </div>
                                                                            </div>
                                                                        </footer>
                                                                    </article>
                                                                    <ol className="htlfndr-comment-list children">
                                                                        <li className="htlfndr-comment">
                                                                            <article className="htlfndr-comment-body">
                                                                                <footer className="htlfndr-comment-meta">
                                                                                    <div className="row">
                                                                                        <div className="col-md-2">
                                                                                            <div
                                                                                                className="htlfndr-comment-author">
                                                                                                <div
                                                                                                    className="htlfndr-border">
                                                                                                </div> <img
                                                                                                    className="htlfndr-avatar"
                                                                                                    alt
                                                                                                    src={Img3} />
                                                                                            </div>
                                                                                        </div>
                                                                                        <div className="col-md-10">
                                                                                            <div
                                                                                                className="htlfndr-comment-metadata">
                                                                                                <Link
                                                                                                    to="#htlfndr-leave_comment"><i
                                                                                                        className="fa fa-reply"></i></Link>
                                                                                                <h4><Link to="#">Sara
                                                                                                        Smith</Link></h4>
                                                                                                <span
                                                                                                    className="htlfndr-post-date"><Link
                                                                                                        to="#"><time
                                                                                                            dateTime="2015-08-25">03
                                                                                                            August
                                                                                                            2015</time></Link></span>
                                                                                                <span
                                                                                                    className="htlfndr-post-time"><Link
                                                                                                        to="#"><time
                                                                                                            dateTime="18:00">at
                                                                                                            06 : 00
                                                                                                            PM</time></Link></span>
                                                                                            </div>
                                                                                            <div
                                                                                                className="htlfndr-comment-content">
                                                                                                Quisque nec placerat
                                                                                                neque. In congue et nisi
                                                                                                a lobortis. Integer
                                                                                                efficitur tellus orci,
                                                                                                eget suscipit odio
                                                                                                sagittis a. Vestibulum
                                                                                                interdum at tortor
                                                                                                hendrerit faucibus.
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </footer>
                                                                            </article>
                                                                        </li>
                                                                    </ol>
                                                                </li>
                                                            </ol>
                                                        </li>
                                                    </ol>
                                                </li>
                                            </ol>
                                        </li>
                                    </ol>
                                </li>
                            </ol>
                            <ol className="htlfndr-comment-list">
                                <li className="htlfndr-comment parent">
                                    <article className="htlfndr-comment-body">
                                        <footer className="htlfndr-comment-meta">
                                            <div className="row">
                                                <div className="col-md-2">
                                                    <div className="htlfndr-comment-author">
                                                        <div className="htlfndr-border"></div> <img className="htlfndr-avatar" alt
                                                            src={Img2} />
                                                    </div>
                                                </div>
                                                <div className="col-md-10">
                                                    <div className="htlfndr-comment-metadata"> <Link
                                                            to="#htlfndr-leave_comment"><i className="fa fa-reply"></i></Link>
                                                        <h4><Link to="#">John Brown</Link></h4> <span
                                                            className="htlfndr-post-date"><Link to="#"><time
                                                                    dateTime="2015-08-25">23 July 2015</time></Link></span>
                                                        <span className="htlfndr-post-time"><Link to="#"><time dateTime="18:00">at
                                                                    06 : 00 PM</time></Link></span>
                                                    </div>
                                                    <div className="htlfndr-comment-content"> Quisque nec placerat neque. In
                                                        congue et nisi a lobortis. Integer efficitur tellus orci, eget
                                                        suscipit odio sagittis a. Vestibulum interdum at tortor
                                                        hendrerit faucibus. </div>
                                                </div>
                                            </div>
                                        </footer>
                                    </article>
                                </li>
                            </ol>
                            <div className="htlfndr-leave_comment" id="htlfndr-leave_comment">
                                <h3>Leave a Comment</h3>
                                <form className="htlfndr-leave-comment-form" method="get">
                                    <div className="row">
                                        <div className="col-md-4 col"> <i className="glyphicon glyphicon-user"></i> <input
                                                id="htlfndr-personal-name" className="htlfndr-input" type="text" placeholder="Name"
                                                name="htlfndr-personal-name" /> </div>
                                        <div className="col-md-4 col"> <i className="glyphicon glyphicon-envelope"></i> <input
                                                id="htlfndr-personal-email" className="htlfndr-input" type="text"
                                                placeholder="E-mail" name="htlfndr-personal-email" /> </div>
                                        <div className="col-md-4 col"> <i className="glyphicon glyphicon-globe"></i> <input
                                                id="htlfndr-personal-website" className="htlfndr-input" type="text"
                                                placeholder="Website" name="htlfndr-personal-website" /> </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-12"> <textarea id="htlfndr-personal-comment"
                                                className="htlfndr-textarea" name="htlfndr-personal-comment"></textarea> </div>
                                    </div> <input type="submit" value="Leave a Comment" className="btn-default" />
                                </form>
                            </div>
                        </div>
                    </article>
                </main>
                <aside id="htlfndr-right-sidebar"
                    className="col-sm-12 col-md-4 col-lg-3 htlfndr-sidebar htlfndr-sidebar-in-right" role="complementary">
                    <div className="widget">
                        <form className="htlfndr-blog-search-form" method="get" role="search"> <label
                                htmlFor="htlfndr-blog-search-field" className="sr-only">Search for:</label> <input type="search"
                                title="Search for:" name="s" value placeholder="Search" id="htlfndr-blog-search-field"
                                className="htlfndr-blog-search-field"/> <input type="submit" value="search"
                                className="htlfndr-blog-search-submit"/> </form>
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
                                                src={Img5} alt="hotel pic" /> </Link> </div>
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
                                    <div className="htlfndr-hotel-info"> <Link to="/hotel-page-v1">
                                            <h6>Carnival Hotel</h6>
                                        </Link>
                                        <div className="htlfndr-rating-stars"> <i className="fa fa-star htlfndr-star-color"></i>
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
                                    data-cfemail="e99a9c9999869b9da98b8c9a9d9e8c8b9a868f9dc7938c878d8c9a82c78a8684">[email&#160;protected]</Link>
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

export default BlogSingle