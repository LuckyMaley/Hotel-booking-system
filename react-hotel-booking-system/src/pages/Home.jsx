import { Outlet } from 'react-router-dom'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import PropTypes from 'prop-types'

const Home = ({ isLoggedIn }) => {
 

    return (
      <div>
        <div className='htlfndr-loader-overlay'></div>
        <div className='htlfndr-wrapper'>
          <NavBar isLoggedIn={isLoggedIn} />
          <Outlet />
          <Footer />
        </div>
      </div>
    )
}
Home.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired
}
export default Home
