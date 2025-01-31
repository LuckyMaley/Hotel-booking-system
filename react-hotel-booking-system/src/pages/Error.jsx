import React, {  useEffect } from 'react'
import { Link } from 'react-router-dom'

const Error = () => {
    useEffect(() => {
  document.body.className = 'htlfndr-404-page'

  return () => {
    document.body.className = ''
  }
}, [])

    return (
        <div className='htlfndr-404-page'>
             <div className="container">
            <main id="htlfndr-main-content" className="htlfndr-404-content text-center" role="main">
                <p className="htlfndr-404-title">The page you were looking for could not be found</p>
                <p className="htlfndr-404">404</p> <Link to="/" className="htlfndr-404-btn"><i className="fa fa-home"></i>Go to
                    Homepage</Link>
            </main>
        </div>
      </div>
    )
}

export default Error