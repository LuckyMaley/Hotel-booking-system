import logo from '../assets/images/logo.png'
import { Link, useLocation } from 'react-router-dom'

const Footer = () => {
  const location = useLocation()

  if (location.pathname.startsWith('/admin-page')) {
    return null
  }

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  return (
    <div>
      <footer className="htlfndr-footer">
        <button
          className="htlfndr-button-to-top"
          aria-label="Back to top"
          onClick={scrollToTop}
        >
          <span>Back to top</span>
        </button>
        <div className="widget-wrapper">
          <div className="container">
            <div className="row">
              <aside className="col-xs-12 col-sm-6 col-md-3 htlfndr-widget-column">
                <div className="widget">
                  <Link className="htlfndr-logo navbar-brand" to="/">
                    <img src={logo} height="20" width="30" alt="Hotel Finder Logo" />
                    <p className="htlfndr-logo-text">
                      hotel <span>finder</span>
                    </p>
                  </Link>
                  <hr />
                  <p>
                    Suspendisse sed sollicitudin nisl, at dignissim libero. Sed
                    porta tincidunt ipsum, vel volutpat.
                  </p>
                  <br />
                  <p>
                    Nunc ut fringilla urna. Cras vel adipiscing ipsum. Integer
                    dignissim nisl eu lacus interdum facilisis. Aliquam erat
                    volutpat. Nulla.
                  </p>
                </div>
              </aside>

              <aside className="col-xs-12 col-sm-6 col-md-3 htlfndr-widget-column">
                <div className="widget">
                  <h3 className="widget-title">Contact Info</h3>
                  <h5>Address</h5>
                  <p>
                    Hotel Finder <br />
                    120 CA 15th Avenue-Suite 214, USA
                  </p>
                  <hr />
                  <h5>Phone Number</h5>
                  <p>1-555-5555-5555</p>
                  <hr />
                  <h5>Email Address</h5>
                  <p>
                    <Link to="/contact-us">info@hotelfinder.com</Link>
                  </p>
                </div>
              </aside>

              <aside className="col-xs-12 col-sm-6 col-md-3 htlfndr-widget-column">
                <div className="widget">
                  <h3 className="widget-title">Pages</h3>
                  <ul className="menu">
                    <li className={location.pathname === '/' ? 'menu-item active' : 'menu-item'}>
                      <Link to="/">Home</Link>
                    </li>
                    <li className={location.pathname === '/elements' ? 'menu-item active' : 'menu-item'}>
                      <Link to="/elements">Elements</Link>
                    </li>
                    <li className={location.pathname === '/blog-index' ? 'menu-item active' : 'menu-item'}>
                      <Link to="/blog-index">Blog</Link>
                    </li>
                    <li className={location.pathname === '/about-us' ? 'menu-item active' : 'menu-item'}>
                      <Link to="/about-us">About Us</Link>
                    </li>
                    <li className={location.pathname === '/user-page' ? 'menu-item active' : 'menu-item'}>
                      <Link to="/user-page">User Profile</Link>
                    </li>
                  </ul>
                </div>
              </aside>

              <aside className="col-xs-12 col-sm-6 col-md-3 htlfndr-widget-column">
                <div className="widget">
                  <h3 className="widget-title">Follow Us</h3>
                  <div className="htlfndr-follow-plugin">
                    <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" className="htlfndr-follow-button button-facebook"></a>
                    <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" className="htlfndr-follow-button button-twitter"></a>
                    <a href="https://plus.google.com/" target="_blank" rel="noopener noreferrer" className="htlfndr-follow-button button-google-plus"></a>
                    <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer" className="htlfndr-follow-button button-linkedin"></a>
                    <a href="https://www.pinterest.com/" target="_blank" rel="noopener noreferrer" className="htlfndr-follow-button button-pinterest"></a>
                    <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer" className="htlfndr-follow-button button-youtube"></a>
                  </div>
                  <hr />
                  <h3 className="widget-title">Mailing List</h3>
                  <p>Sign up for our mailing list to get the latest updates and offers</p>
                  <form>
                    <input type="email" placeholder="Your E-mail" required />
                    <input type="submit" value="Sign up" />
                  </form>
                </div>
              </aside>
            </div>
          </div>
        </div>

        <div className="htlfndr-copyright">
          <div className="container" role="contentinfo">
            <p>
              &copy; {new Date().getFullYear()} | Hotel Finder | All Rights Reserved | Designed by BestWebSoft
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer
