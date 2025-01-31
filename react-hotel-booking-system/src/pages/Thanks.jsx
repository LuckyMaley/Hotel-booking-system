import { useState, useEffect } from 'react'
import { Link, useLocation, useSearchParams } from 'react-router-dom'
import Img4 from '../assets/images/top-destination-1.jpg'
import ApiService from '../components/services/ApiService'

const Thanks = () => {
  const [booking, setBooking] = useState('')
  const [hotel, setHotel] = useState('')

  const navigate = useLocation()
  const [searchParams, setSearchParams] = useSearchParams()
  const bookingId = searchParams.get('bookingId') || ''
  const hotelId = searchParams.get('hotelId') || ''
  const currentDate = new Date().toLocaleDateString('en-GB', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric'
  })
  useEffect(() => {
    if (!bookingId) {
      navigate('/hotels')
    }
    if (!hotelId) {
      navigate('/hotels')
    }
  }, [bookingId, hotelId, navigate])

  useEffect(() => {
    const fetchBookingData = async () => {
      try {
        const bookingResponse = await ApiService.getBooking(bookingId)
        setBooking(bookingResponse)
        const hotelResponse = await ApiService.getHotel(hotelId)
        setHotel(hotelResponse)
      } catch (error) {
        console.error('Error fetching booking data:', error)
      }
    }
    fetchBookingData()
  }, [bookingId, hotelId])

  return (
    <div>
      <div className='container'>
        <main
          id='htlfndr-main-content'
          className='htlfndr-main-content'
          role='main'
        >
          <article className='htlfndr-thanks-page text-center'>
            <h1>Thank You!</h1>
            <h3>
              for choosing
              <Link to='/'>
                <span className='htlfndr-logo-text'>
                  {' '}
                  hotel <span>finder</span>
                </span>
              </Link>
            </h3>
            <div></div>

            <table className='table'>
              <thead>
                <tr>
                  <th>Title</th>
                  <th>Location</th>
                  <th>Order date</th>
                  <th>Data of your stay</th>
                  <th>Cost</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className='htlfndr-scope-row'>
                    {hotel.name}{' '}
                    <img
                      src={hotel.pictureURL || Img4}
                      alt='pic'
                      style={{ height: '60px', width: '60px' }}
                    />
                  </td>
                  <td data-title='Location'>{hotel.city}</td>
                  <td data-title='Order date'>{currentDate}</td>
                  <td data-title='Data of your stay'>{`${new Date(
                    booking.checkInDate
                  ).toLocaleDateString('en-GB', {
                    day: '2-digit',
                    month: '2-digit',
                    year: 'numeric'
                  })} - ${new Date(booking.checkOutDate).toLocaleDateString(
                    'en-GB',
                    { day: '2-digit', month: '2-digit', year: 'numeric' }
                  )}`}</td>
                  <td data-title='Cost'>$ {booking.totalPrice}</td>
                </tr>
              </tbody>
            </table>

            <Link className='htlfndr-more-link text-center' to='/'>
              homepage
            </Link>
            <Link className='htlfndr-more-link text-center' to='/my-profile'>
              go to profile
            </Link>
          </article>
        </main>
      </div>
    </div>
  )
}

export default Thanks
