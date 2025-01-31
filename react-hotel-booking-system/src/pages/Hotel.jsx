import { useEffect, useState } from 'react'
import { Link, useNavigate, useSearchParams } from 'react-router-dom'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import Img9 from '../assets/images/visitor-avatar-1.jpg'
import Img11 from '../assets/images/top-destination-1.jpg'
import Img17 from '../assets/images/visitor-avatar-1-1.jpg'
import Img18 from '../assets/images/icon-flag-ukraine.png'
import ApiService from '../components/services/ApiService'

const Hotel = () => {
  const [activeTab, setActiveTab] = useState(1)

  const handleTabClick = index => {
    setActiveTab(index)
  }

  const [startDate, setStartDate] = useState(new Date(Date.now() + 86400000))
  const [endDate, setEndDate] = useState(new Date(Date.now() + 2 * 86400000))
  const [isStartDatePickerOpen, setStartDatePickerOpen] = useState(false)
  const [isEndDatePickerOpen, setEndDatePickerOpen] = useState(false)

  const [activeTabPhotoMap, setActiveTabPhotoMap] = useState('photo')

  const [images, setImages] = useState([])
  const [selectedImageIndex, setSelectedImageIndex] = useState(0)

  const handleThumbnailClick = index => {
    setSelectedImageIndex(index)
  }

  const handleThumbnailNav = direction => {
    if (direction === 'prev') {
      setSelectedImageIndex(prevIndex =>
        prevIndex === 0 ? images.length - 1 : prevIndex - 1
      )
    } else if (direction === 'next') {
      setSelectedImageIndex(prevIndex =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      )
    }
  }

  const [error, setError] = useState('')
  const [searchParams, setSearchParams] = useSearchParams()
  const navigate = useNavigate()
  const id = searchParams.get('id') || ''

  useEffect(() => {
    if (!id) {
      navigate('/hotels')
    }
  }, [id, navigate])

  const [hotel, setHotel] = useState([])
  const [owner, setOwner] = useState('')

  useEffect(() => {
    setActiveTabPhotoMap('photo')
  }, [id])

  useEffect(() => {
    const fetchHotel = async () => {
      try {
        const response = await ApiService.getHotel(id)
        setImages([response.pictureURL])
        const ownerResponse = await ApiService.getOwner(response.hotelOwner.id) 
        setOwner(ownerResponse)
        const roomResponse = await ApiService.getRoomWithLowestPrice(id)
        const reviewsResponse = await ApiService.getHotelReviews(id)
        console.log(reviewsResponse)
        setHotel({
          ...response,
          room: roomResponse,
          reviews: reviewsResponse,
          reviewCount: reviewsResponse ? reviewsResponse.length : 0 
        })
      } catch (error) {
        console.error('Error fetching hotel data:', error)
      }
    }

    fetchHotel()
  }, [id])

  const [availableRooms, setAvailableRooms] = useState([])
  const [availabilityError, setAvailabilityError] = useState('')

  const handleCheckAvailability = async e => {
    e.preventDefault()
    if (!startDate || !endDate) {
      setAvailabilityError('Please select both check-in and check-out dates.')
      return
    }
    if (endDate <= startDate) {
      setAvailabilityError('Check-out date must be after check-in date.')
      return
    }
    const checkInDate = new Date(startDate)
      .toISOString()
      .slice(0, 19)
      .replace('T', ' ')
    const checkOutDate = new Date(endDate)
      .toISOString()
      .slice(0, 19)
      .replace('T', ' ')
    try {
      const response = await ApiService.getAvailableRooms(
        id,
        checkInDate,
        checkOutDate
      )
      setAvailableRooms(response)
      setAvailabilityError('')
    } catch (error) {
      console.error('Error fetching available rooms:', error)
      setAvailabilityError('Failed to fetch available rooms.')
    }
  }

  useEffect(() => {
    const handleAnotherCheckAvailability = async () => {
      if (startDate < new Date()) {
        setAvailabilityError('Check-in and -out dates must be after today.')
        setAvailableRooms('')
        return
      }
      if (!startDate || !endDate) {
        setAvailabilityError('Please select both check-in and check-out dates.')
        return
      }
      if (endDate <= startDate) {
        setAvailabilityError('Check-out date must be after check-in date.')
        return
      }
      const checkInDate = new Date(startDate)
        .toISOString()
        .slice(0, 19)
        .replace('T', ' ')
      const checkOutDate = new Date(endDate)
        .toISOString()
        .slice(0, 19)
        .replace('T', ' ')
      try {
        const response = await ApiService.getAvailableRooms(
          id,
          checkInDate,
          checkOutDate
        )
        setAvailableRooms(response)
        setAvailabilityError('')
      } catch (error) {
        console.error('Error fetching available rooms:', error)
        setAvailabilityError('Failed to fetch available rooms.')
      }
    }
    handleAnotherCheckAvailability()
  }, [startDate, endDate, id])
  const [reviews, setReviews] = useState([])

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await ApiService.getHotelReviews(id)

        setReviews(response)
      } catch (error) {
        console.error('Error fetching reviews:', error)
      }
    }

    fetchReviews()
  }, [id])

  const totalReviews = hotel.reviewCount
  const averageRating =
    totalReviews > 0
      ? (
          hotel.reviews.reduce((sum, review) => sum + review.rating, 0) /
          totalReviews
        ).toFixed(1)
      : 0

  const [isAuthenticated, setIsAuthenticated] = useState(false)

  const [isCustomer, setIsCustomer] = useState(null)

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const authenticated = await ApiService.isAuthenticated()
        setIsAuthenticated(authenticated)

        if (authenticated) {
          const customer = await ApiService.isCustomer()
          setIsCustomer(customer)
        }
      } catch (error) {
        console.error('Error fetching user data:', error)
      }
    }
    fetchUserData()
  }, [])

  return (
    <div>
      <div className='container'>
        <div className='htlfndr-steps'>
          <ul className='htlfndr-progress'>
            <li>
              <Link to='/hotels'>
                {' '}
                <span className='htlfndr-step-number'>1</span>{' '}
                <span className='htlfndr-step-description'>results</span>
              </Link>{' '}
            </li>
            <li className='htlfndr-active-step'>
              {' '}
              <span className='htlfndr-step-number'>2</span>{' '}
              <span className='htlfndr-step-description'>hotel</span>{' '}
            </li>
            <li>
              {' '}
              <span className='htlfndr-step-number'>3</span>{' '}
              <span className='htlfndr-step-description'>booking</span>
            </li>
          </ul>
        </div>
        <div className='row htlfndr-page-content'>
          <main
            id='htlfndr-main-content'
            className='col-sm-12 col-md-8 col-lg-9 post htlfndr-hotel-single-content'
            role='main'
          >
            <section
              id='htlfndr-gallery-and-map-tabs'
              className='ui-tabs ui-widget ui-widget-content ui-corner-all'
            >
              <ul
                className='ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all'
                role='tablist'
              >
                <li
                  className={`ui-state-default ui-corner-top ${
                    activeTabPhotoMap === 'photo'
                      ? 'ui-tabs-active ui-state-active'
                      : ''
                  }`}
                  role='tab'
                  tabIndex='0'
                  aria-controls='htlfndr-gallery-tab-1'
                  aria-labelledby='ui-id-1'
                  aria-selected={activeTabPhotoMap === 'photo'}
                  aria-expanded={activeTabPhotoMap === 'photo'}
                >
                  <Link
                    to='#htlfndr-gallery-tab-1'
                    className='ui-tabs-anchor'
                    role='presentation'
                    tabIndex='-1'
                    id='ui-id-1'
                    onClick={e => {
                      e.preventDefault()
                      setActiveTabPhotoMap('photo')
                      setSearchParams({ id })
                    }}
                  >
                    photo
                  </Link>
                </li>
                <li
                  className={`ui-state-default ui-corner-top ${
                    activeTabPhotoMap === 'map'
                      ? 'ui-tabs-active ui-state-active'
                      : ''
                  }`}
                  role='tab'
                  tabIndex='-1'
                  aria-controls='htlfndr-gallery-tab-2'
                  aria-labelledby='ui-id-2'
                  aria-selected={activeTabPhotoMap === 'map'}
                  aria-expanded={activeTabPhotoMap === 'map'}
                >
                  <Link
                    to='#htlfndr-gallery-tab-2'
                    className='ui-tabs-anchor'
                    role='presentation'
                    tabIndex='-1'
                    id='ui-id-2'
                    onClick={e => {
                      e.preventDefault()
                      setActiveTabPhotoMap('map')
                      setSearchParams({ id })
                    }}
                  >
                    map
                  </Link>
                </li>
              </ul>

              <div
                id='htlfndr-gallery-tab-1'
                className='htlfndr-hotel-gallery ui-tabs-panel ui-widget-content ui-corner-bottom'
                aria-labelledby='ui-id-1'
                role='tabpanel'
                aria-hidden={activeTabPhotoMap !== 'photo'}
                style={{
                  display: activeTabPhotoMap === 'photo' ? 'block' : 'none'
                }}
              >
                {/* Main Image Carousel */}
                <div
                  id='htlfndr-gallery-synced-1'
                  className='htlfndr-gallery-carousel owl-carousel owl-theme'
                  style={{ opacity: 1, display: 'block' }}
                >
                  <div className='owl-wrapper-outer'>
                    <div
                      className='owl-wrapper'
                      style={{ display: 'block', transition: '800ms' }}
                    >
                      <div className='owl-item' style={{ width: '848px' }}>
                        <div className='htlfndr-gallery-item'>
                          <img
                            src={images[selectedImageIndex]}
                            alt={`hotel img ${selectedImageIndex + 1}`}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Nav buttons for main image */}
                  <div className='owl-controls clickable'>
                    <div className='owl-buttons'>
                      <div
                        className='owl-prev'
                        onClick={() => handleThumbnailNav('prev')}
                      >
                        <i className='fa fa-angle-left'></i>
                      </div>
                      <div
                        className='owl-next'
                        onClick={() => handleThumbnailNav('next')}
                      >
                        <i className='fa fa-angle-right'></i>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Thumbnail Carousel */}
                <div
                  id='htlfndr-gallery-synced-2'
                  className='htlfndr-gallery-carousel owl-carousel owl-theme'
                  style={{ opacity: 1, display: 'block' }}
                >
                  <div className='owl-wrapper-outer'>
                    <div
                      className='owl-wrapper'
                      style={{ display: 'flex', transition: '200ms' }}
                    >
                      {images.map((img, index) => (
                        <div
                          className={`owl-item ${
                            index === selectedImageIndex ? 'synced' : ''
                          }`}
                          key={index}
                          style={{
                            width: '158px',
                            cursor: 'pointer'
                          }}
                          onClick={() => handleThumbnailClick(index)}
                        >
                          <div className='htlfndr-gallery-item'>
                            <img src={img} alt={`thumbnail ${index + 1}`} />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div
                id='htlfndr-gallery-tab-2'
                aria-labelledby='ui-id-2'
                className='ui-tabs-panel ui-widget-content ui-corner-bottom'
                role='tabpanel'
                aria-hidden={activeTabPhotoMap !== 'map'}
                style={{
                  display: activeTabPhotoMap === 'map' ? 'block' : 'none'
                }}
              >
                <div className='htlfndr-iframe-wrapper'>
                  <iframe
                    src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4461.6570805764695!2d-122.42764988684334!3d37.74624140010288!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80859a6d00690021%3A0x4a501367f076adff!2z0KHQsNC9LdCk0YDQsNC90YbQuNGB0LrQviwg0JrQsNC70LjRhNC-0YDQvdC40Y8sINCh0KjQkA!5e0!3m2!1sru!2sua!4v1438339854639'
                    allowFullScreen=''
                  ></iframe>
                </div>
              </div>
            </section>

            <section id='htlfndr-hotel-description-tabs' className='r-tabs'>
              {/* Tab Navigation */}
              <ul className='r-tabs-nav'>
                <li
                  className={`r-tabs-tab ${
                    activeTab === 0
                      ? 'r-tabs-state-active active'
                      : 'r-tabs-state-default'
                  }`}
                  data-number='0'
                  onClick={() => handleTabClick(0)}
                >
                  <Link
                    to='#htlfndr-hotel-description-tab-1'
                    className='r-tabs-anchor'
                    onClick={e => {
                      e.preventDefault()

                      setSearchParams({ id })
                    }}
                  >
                    Description
                  </Link>
                </li>
                <li
                  className={`r-tabs-tab ${
                    activeTab === 1
                      ? 'r-tabs-state-active active'
                      : 'r-tabs-state-default'
                  }`}
                  data-number='1'
                  onClick={() => handleTabClick(1)}
                >
                  <Link
                    to='#htlfndr-hotel-description-tab-2'
                    className='r-tabs-anchor'
                    onClick={e => {
                      e.preventDefault()

                      setSearchParams({ id })
                    }}
                  >
                    Availability
                  </Link>
                </li>
                <li
                  className={`r-tabs-tab ${
                    activeTab === 2
                      ? 'r-tabs-state-active active'
                      : 'r-tabs-state-default'
                  }`}
                  data-number='2'
                  onClick={() => handleTabClick(2)}
                >
                  <Link
                    to='#htlfndr-hotel-description-tab-3'
                    className='r-tabs-anchor'
                    onClick={e => {
                      e.preventDefault()

                      setSearchParams({ id })
                    }}
                  >
                    Amenities
                  </Link>
                </li>
                <li
                  className={`r-tabs-tab ${
                    activeTab === 3
                      ? 'r-tabs-state-active active'
                      : 'r-tabs-state-default'
                  }`}
                  data-number='3'
                  onClick={() => handleTabClick(3)}
                >
                  <Link
                    to='#htlfndr-hotel-description-tab-4'
                    className='r-tabs-anchor'
                    onClick={e => {
                      e.preventDefault()

                      setSearchParams({ id })
                    }}
                  >
                    Reviews
                  </Link>
                </li>
                <li
                  className={`r-tabs-tab ${
                    activeTab === 4
                      ? 'r-tabs-state-active active'
                      : 'r-tabs-state-default'
                  }`}
                  data-number='4'
                  onClick={() => handleTabClick(4)}
                >
                  <Link
                    to='#htlfndr-hotel-description-tab-5'
                    className='r-tabs-anchor'
                    onClick={e => {
                      e.preventDefault()

                      setSearchParams({ id })
                    }}
                  >
                    Write a Review
                  </Link>
                </li>
              </ul>
              {/* Tab Content */}
              <div
                id='htlfndr-hotel-description-tab-1'
                className={`htlfndr-hotel-description-tab ${
                  activeTab === 0 ? 'active' : ''
                }`}
                style={{ display: activeTab === 0 ? 'block' : 'none' }}
              >
                <div className='row'>
                  <div className='col-md-5 htlfndr-description-table'>
                    <table>
                      <tbody>
                        <tr>
                          <th className='htlfndr-scope-row'>Type:</th>
                          <td>Hotel</td>
                        </tr>
                        <tr>
                          <th className='htlfndr-scope-row'>Rating Stars:</th>
                          <td>{hotel.starRating} stars</td>
                        </tr>
                        <tr>
                          <th className='htlfndr-scope-row'>Country:</th>
                          <td>South Africa</td>
                        </tr>
                        <tr>
                          <th className='htlfndr-scope-row'>City:</th>
                          <td>{hotel.city}</td>
                        </tr>
                        <tr>
                          <th className='htlfndr-scope-row'>Address:</th>
                          <td>Giudeca 810 St.</td>
                        </tr>
                        <tr>
                          <th className='htlfndr-scope-row'>Phone No:</th>
                          <td>1-800-123-0000</td>
                        </tr>
                        <tr>
                          <th className='htlfndr-scope-row'>Check In:</th>
                          <td>12:00 PM</td>
                        </tr>
                        <tr>
                          <th className='htlfndr-scope-row'>Check Out:</th>
                          <td>12:00 AM</td>
                        </tr>
                        <tr>
                          <th className='htlfndr-scope-row'>Minimum Stay:</th>
                          <td>2 days</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div className='col-md-7 htlfndr-description-right-side'>
                    <div className='media'>
                      <div className='media-left'>
                        <img
                          className='media-object'
                          src={Img9}
                          alt='Hotel Manager'
                        />
                      </div>
                      <div className='media-body'>
                        <h5>Hotel Owner</h5>
                        <h4 className='media-heading'>{owner.firstName + ' ' + owner.lastName}</h4>
                      </div>
                    </div>
                    <blockquote>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Aspernatur, dolores eveniet laboriosam maxime
                        molestias nulla quidem similique. Amet asperiores at
                        esse expedita iusto magni, nam perferendis sequi?
                        Molestias possimus, quasi. Amet asperiores at esse
                        expedita iusto magni, nam perferendis sequi? Molestias
                        possimus, quasi.
                      </p>
                    </blockquote>
                  </div>
                </div>
              </div>
              <div
                id='htlfndr-hotel-description-tab-2'
                className={`htlfndr-hotel-description-tab ${
                  activeTab === 1 ? 'active r-tabs-state-active' : ''
                }`}
                style={{ display: activeTab === 1 ? 'block' : 'none' }}
              >
                <aside className='htlfndr-sidebar-in-top htlfndr-short-form'>
                  <form
                    name='search-hotel'
                    id='search-hotel'
                    className='htlfndr-search-form'
                    onSubmit={handleCheckAvailability}
                  >
                    <div
                      id='htlfndr-input-date-in'
                      className='htlfndr-input-wrapper'
                    >
                      <label htmlFor='htlfndr-date-in' className='sr-only'>
                        Date In
                      </label>
                      <input
                        type='text'
                        name='htlfndr-date-in'
                        id='htlfndr-date-in'
                        className='search-hotel-input hasDatepicker'
                        placeholder='Date in'
                        value={
                          startDate
                            ? startDate.toLocaleDateString('en-GB', {
                                day: '2-digit',
                                month: '2-digit',
                                year: 'numeric'
                              })
                            : ''
                        }
                        onFocus={() => setStartDatePickerOpen(true)}
                        readOnly
                      />
                      <DatePicker
                        selected={startDate}
                        onChange={date => {
                          setStartDate(date)
                          setStartDatePickerOpen(false)
                        }}
                        onClickOutside={() => setStartDatePickerOpen(false)}
                        className='datepicker'
                        placeholderText='Select date'
                        dateFormat='yyyy/MM/dd'
                        open={isStartDatePickerOpen}
                        customInput={<div style={{ display: 'none' }} />}
                      />
                      <button
                        type='button'
                        className='htlfndr-clear-datepicker'
                        onClick={() => {
                          setStartDate(null)
                          setStartDatePickerOpen(false)
                        }}
                      ></button>
                    </div>
                    <div
                      id='htlfndr-input-date-out'
                      className='htlfndr-input-wrapper'
                    >
                      <label htmlFor='htlfndr-date-out' className='sr-only'>
                        Date Out
                      </label>
                      <input
                        type='text'
                        name='htlfndr-date-out'
                        id='htlfndr-date-out'
                        className='search-hotel-input hasDatepicker'
                        placeholder='Date out'
                        value={
                          endDate
                            ? endDate.toLocaleDateString('en-GB', {
                                day: '2-digit',
                                month: '2-digit',
                                year: 'numeric'
                              })
                            : ''
                        }
                        onFocus={() => setEndDatePickerOpen(true)}
                        readOnly
                      />
                      <DatePicker
                        selected={endDate}
                        onChange={date => {
                          setEndDate(date)
                          setEndDatePickerOpen(false)
                        }}
                        onClickOutside={() => setEndDatePickerOpen(false)}
                        className='datepicker'
                        placeholderText='Select date'
                        dateFormat='yyyy/MM/dd'
                        open={isEndDatePickerOpen}
                        customInput={<div style={{ display: 'none' }} />}
                      />
                      <button
                        type='button'
                        className='htlfndr-clear-datepicker'
                        onClick={() => {
                          setEndDate(null)
                          setEndDatePickerOpen(false)
                        }}
                      ></button>
                    </div>

                    <div id='htlfndr-input-5' className='htlfndr-input-wrapper'>
                      <input
                        type='submit'
                        value='Search'
                        className='btn-default'
                      />
                    </div>
                    <div className='clearfix'></div>
                  </form>
                </aside>
                <section className='htlfndr-available-rooms-section'>
                  <header>
                    <h3>Available Rooms</h3>
                  </header>
                  {availabilityError && (
                    <p className='error-message'>{availabilityError}</p>
                  )}
                  <article className='htlfndr-tab-article htlfndr-second-tab-post'>
                    {availableRooms.length > 0 ? (
                      availableRooms.map(room => (
                        <div key={room.id} className='htlfndr-room-post'>
                          <div className='htlfndr-post-thumbnail'>
                            <img
                              src={room.pictureURL || Img11}
                              alt='Room Pic'
                            />
                          </div>
                          <div className='htlfndr-post-wrapper'>
                            <header>
                              <h2 className='htlfndr-post-title'>
                                {room.name}
                              </h2>
                            </header>
                            <h6 className='htlfndr-post-info'>
                              Type:{' '}
                              <span className='htlfndr-guests'>
                                {room.roomType}
                              </span>{' '}
                              | Price:{' '}
                              <span className='htlfndr-guests'>
                                $ {room.price} Per Night
                              </span>
                            </h6>
                            <p>{room.occupancy}</p>
                            <div className='clearfix'></div>
                            <p className='htlfndr-button-block'>
                              <Link
                                className='htlfndr-select-hotel-button'
                                role='button'
                                to={`/booking?roomId=${room.id}&hotelId=${id}&checkInDate=${startDate}&checkOutDate=${endDate}`}
                              >
                                Select
                              </Link>
                            </p>
                          </div>
                        </div>
                      ))
                    ) : (
                      <p>
                        No rooms available for the selected dates. <br />
                        <br />
                      </p>
                    )}
                  </article>
                </section>
              </div>
              <div
                id='htlfndr-hotel-description-tab-3'
                className={`htlfndr-hotel-description-tab ${
                  activeTab === 2 ? 'active' : ''
                }`}
                style={{ display: activeTab === 2 ? 'block' : 'none' }}
              >
                <article className='htlfndr-tab-article htlfndr-third-tab-post'>
                  <header>
                    <h3>Amenities of {hotel.name}</h3>
                  </header>
                  <p className='htlfndr-post-excerpt'>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Accusantium amet, animi consequatur deleniti dignissimos
                    eligendi error esse ex illum iusto officia quos unde! Dolore
                    illum iusto optio, porro rerum voluptates! Lorem ipsum dolor
                    sit amet, consectetur adipisicing elit. Debitis dolorem
                    expedita impedit laboriosam minus nemo nulla numquam
                    similique voluptatem! Distinctio magnam nesciunt sequi.
                    Error eum molestias neque sunt veritatis voluptates!
                  </p>
                  <footer className='row htlfndr-amenities'>
                    <div className='col-md-4 col-sm-6 col-xs-6'>
                      <div className='htlfndr-amenities-icon'>
                        <i className='fa fa-wifi'></i>
                      </div>
                      <p>Wi-Fi Internet</p>
                    </div>
                    <div className='col-md-4 col-sm-6 col-xs-6'>
                      <div className='htlfndr-amenities-icon'>
                        <i className='fa fa-gamepad'></i>
                      </div>
                      <p>Game Zone</p>
                    </div>
                    <div className='col-md-4 col-sm-6 col-xs-6'>
                      <div className='htlfndr-amenities-icon'>
                        <i className='fa fa-life-ring'></i>
                      </div>
                      <p>Pool</p>
                    </div>
                    <div className='col-md-4 col-sm-6 col-xs-6'>
                      <div className='htlfndr-amenities-icon'>
                        <i className='fa fa-cutlery'></i>
                      </div>
                      <p>Room Service</p>
                    </div>
                    <div className='col-md-4 col-sm-6 col-xs-6'>
                      <div className='htlfndr-amenities-icon'>
                        <i className='fa fa-wheelchair'></i>
                      </div>
                      <p>Wheelchair Access</p>
                    </div>
                    <div className='col-md-4 col-sm-6 col-xs-6'>
                      <div className='htlfndr-amenities-icon'>
                        <i className='fa fa-spoon'></i>
                      </div>
                      <p>Kitchen</p>
                    </div>
                  </footer>
                </article>
              </div>
              <div
                id='htlfndr-hotel-description-tab-4'
                className={`htlfndr-hotel-description-tab ${
                  activeTab === 3 ? 'active' : ''
                }`}
                style={{ display: activeTab === 3 ? 'block' : 'none' }}
              >
                <div className='htlfndr-hotel-marks'>
                  <div className='htlfndr-overview-rating'>
                    <div className='htlfndr-rating-stars'>
                      {/* Render stars based on the averageRating */}
                      {[...Array(5)].map((star, index) => (
                        <i
                          key={index}
                          className={`fa fa-star ${
                            index < Math.round(averageRating)
                              ? 'htlfndr-star-color'
                              : ''
                          }`}
                        ></i>
                      ))}
                    </div>
                    <dl>
                      <dt>
                        <span>{averageRating}</span> out of 5
                      </dt>
                      <dd>
                        based on <span>{totalReviews}</span> Reviews
                      </dd>
                    </dl>
                  </div>
                </div>

                <div className='clearfix'></div>

                {reviews ? (reviews.map(review => (
                  <div className='htlfndr-visitor-review' key={review.id}>
                    <div className='htlfndr-review-left-side'>
                      <div className='htlfndr-visitor-avatar'>
                        <img
                          src={review.visitorAvatar || Img17}
                          alt='Visitor Avatar'
                        />
                      </div>
                      <div className='htlfndr-visitor-flag'>
                        <img
                          src={review.visitorFlag || Img18}
                          alt='Visitor Flag'
                        />
                      </div>
                      <dl>
                        <dt>{review.visitorName}</dt>
                        <dd>{review.visitorLocation}</dd>
                      </dl>
                    </div>
                    <div className='htlfndr-review-right-side'>
                      <article className='htlfndr-visitor-post'>
                        <header>
                          <h3>{review.title}</h3>
                          <h6>
                            Posted{' '}
                            {new Date(review.updatedAt).toLocaleDateString()}
                          </h6>
                        </header>
                        <div className='htlfndr-rating-stars'>
                          {[...Array(5)].map((star, index) => (
                            <i
                              key={index}
                              className={`fa fa-star ${
                                index < review.rating
                                  ? 'htlfndr-star-color'
                                  : ''
                              }`}
                            ></i>
                          ))}
                        </div>
                        <p>{review.comment}</p>
                      </article>
                    </div>
                  </div>
                ))) : (<p>No Reviews currently for this hotel</p>)}
              </div>
              <div
                id='htlfndr-hotel-description-tab-5'
                className={`htlfndr-hotel-description-tab ${
                  activeTab === 4 ? 'active' : ''
                }`}
                style={{ display: activeTab === 4 ? 'block' : 'none' }}
              >
                {isAuthenticated && isCustomer ? (
                  <form
                    method='post'
                    className='htlfndr-review-form'
                    onSubmit={async e => {
                      e.preventDefault()
                      const form = e.target
                      const reviewTitle = form['review-title'].value.trim()
                      const reviewRating = parseInt(form['review-rating'].value)
                      const reviewText = form['review-text'].value.trim()

                      if (!reviewTitle || !reviewText || !reviewRating) {
                        setError('Please fill in all fields.')
                        return
                      }

                      const reviewData = {
                        title: reviewTitle,
                        rating: reviewRating,
                        comment: reviewText,
                        hotelId: id
                      }

                      try {
                        const user = await ApiService.getUserProfile()
                        await ApiService.postReview(id, user.email, reviewData)
                        const reviewsResponse =
                          await ApiService.getHotelReviews(id)

                        setHotel(prevHotel => ({
                          ...prevHotel,
                          review: reviewsResponse,
                          reviewCount: reviewsResponse.length
                        }))
                        setReviews(reviewsResponse)

                        form.reset()
                        setError('')
                        alert('Review submitted successfully!')
                      } catch (error) {
                        console.error('Error submitting review:', error)
                        setError(
                          'Failed to submit review. Please try again later.'
                        )
                      }
                    }}
                  >
                    <div className='htlfndr-form'>
                      <label htmlFor='review-title'>Review Title</label>
                      <input
                        type='text'
                        name='review-title'
                        id='review-title'
                        className='htlfndr-review-form-input'
                        required
                      />
                      <label htmlFor='review-rating'>Review Rating</label>
                      <select
                        name='review-rating'
                        id='review-rating'
                        className='htlfndr-review-form-input'
                        required
                      >
                        <option value=''>Select rating</option>
                        <option value={1}>1</option>
                        <option value={2}>2</option>
                        <option value={3}>3</option>
                        <option value={4}>4</option>
                        <option value={5}>5</option>
                      </select>
                      <label htmlFor='review-text'>Review Comment</label>
                      <textarea
                        name='review-text'
                        id='review-text'
                        className='htlfndr-review-form-input'
                        required
                      ></textarea>
                    </div>

                    {error && <p className='error-message'>{error}</p>}

                    <div className='clearfix'></div>
                    <input
                      type='submit'
                      value='Leave a Review'
                      className='btn-default'
                    />
                  </form>
                ) : (
                  <p>
                    Please <Link to='/login'>login</Link> or{' '}
                    <Link to='/register'>register</Link> to be able to make a
                    review on this hotel. Only previous visitors are allowed to
                    review this hotel
                  </p>
                )}
              </div>
              {/* Button to Top */}
              {activeTab === 3 || activeTab === 4 ? (
                <button
                  className='htlfndr-button-to-top'
                  onClick={() =>
                    window.scrollTo({ top: 0, behavior: 'smooth' })
                  }
                >
                  ↑ Top
                </button>
              ) : null}
            </section>
          </main>
          <aside
            id='htlfndr-right-sidebar'
            className='col-sm-12 col-md-4 col-lg-3 htlfndr-sidebar htlfndr-sidebar-in-right'
            role='complementary'
          >
            <div className='widget htlfndr-hotel-visit-card'>
              <div className='htlfndr-widget-main-content htlfndr-widget-padding'>
                <div className='htlfndr-hotel-description'>
                  <h2>{hotel.name}</h2>
                  <div className='htlfndr-rating-stars'>
                    {[...Array(5)].map((_, index) => (
                      <i
                        key={index}
                        className={`fa fa-star ${
                          index < hotel.starRating ? 'htlfndr-star-color' : ''
                        }`}
                      ></i>
                    ))}
                  </div>
                  <h5 className='htlfndr-hotel-location'>
                    <Link to='#'>
                      <i className='fa fa-map-marker'></i>
                      {hotel.city}
                    </Link>
                  </h5>
                </div>
                <div className='htlfndr-hotel-price'>
                  <span className='htlfndr-from'>from</span>{' '}
                  <span className='htlfndr-cost'>
                    $ {hotel.room ? hotel.room.price : 'N/A'}
                  </span>
                  <span className='htlfndr-per-night'>/ night</span>
                </div>
              </div>
              <div className='htlfndr-widget-padding'>
                <div className='htlfndr-hotel-contacts'>
                  <p className='htlfndr-mail'>
                    <Link to='#'>
                      <span className='__cf_email__'>
                        [email&#160;protected]
                      </span>
                    </Link>
                  </p>
                  <p className='htlfndr-url'>
                    <Link to='#'>example.com</Link>
                  </p>
                  <p className='htlfndr-phone'>
                    <Link to='#'>000-000-000-000</Link>
                  </p>
                  <p className='htlfndr-reviews'>{hotel.reviewCount} Reviews</p>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  )
}

export default Hotel
