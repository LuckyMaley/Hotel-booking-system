import { useEffect, useState } from 'react'
import { Link, useNavigate, useSearchParams } from 'react-router-dom'
import Img1 from '../assets/images/user-picture.jpg'
import Img4 from '../assets/images/top-destination-1.jpg'
import ApiService from '../components/services/ApiService'
import AddCardModal from '../components/AddCardModal'
import EditCardModal from '../components/EditCardModal'

const MyProfile = () => {
  const [activeTab, setActiveTab] = useState('htlfndr-user-tab-1')
  const handleTabClick = tabId => {
    if (activeTab !== tabId) {
      setActiveTab(tabId)
    }
  }

  const [searchParams] = useSearchParams()

  useEffect(() => {
    const tabParam = searchParams.get('tab')
    if (tabParam) {
      setActiveTab(`htlfndr-user-tab-${tabParam}`)
    }
  }, [searchParams])

  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [phoneNumber, setPhoneNumber] = useState('')
  const [address, setAddress] = useState('')
  const [country, setCountry] = useState('')
  const [city, setCity] = useState('')
  const [postalCode, setPostalCode] = useState('')

  const handleFirstNameChange = e => {
    setFirstName(e.target.value)
  }

  const handleLastNameChange = e => {
    setLastName(e.target.value)
  }

  const handlePhoneNumberChange = e => {
    setPhoneNumber(e.target.value)
  }

  const handleAddressChange = e => {
    setAddress(e.target.value)
  }

  const handleCountryChange = e => {
    setCountry(e.target.value)
  }

  const handleCityChange = e => {
    setCity(e.target.value)
  }

  const handlePostalCodeChange = e => {
    setPostalCode(e.target.value)
  }

  const [currentPassword, setCurrentPassword] = useState('')
  const [newPassword, setNewPassword] = useState('')
  const [newPasswordAgain, setNewPasswordAgain] = useState('')

  const handleCurrentPasswordChange = e => {
    setCurrentPassword(e.target.value)
  }

  const handleNewPasswordChange = e => {
    setNewPassword(e.target.value)
  }

  const handleNewPasswordAgainChange = e => {
    setNewPasswordAgain(e.target.value)
  }

  const [bookings, setBookings] = useState('')

  const [customer, setCustomer] = useState('')

  const [cards, setCards] = useState([])
  const navigate = useNavigate()

  useEffect(() => {
    const fetchBookingData = async () => {
      try {
        const userProfile = await ApiService.getUserProfile()
        if (!userProfile || !userProfile.email) {
          ApiService.logout()
          navigate('/login')
        }
        const customerInfo = await ApiService.getCustomerByEmail(
          userProfile.email
        )
        setCustomer(customerInfo)
        const bookingResponse = await ApiService.getBookingByCustomerId(
          customerInfo.id
        )

        if (userProfile) {
          setFirstName(userProfile.firstName)
          setLastName(userProfile.lastName)
          setPhoneNumber(userProfile.phoneNumber)
          setAddress(userProfile.address)
          setCountry(userProfile.country)
          setCity(userProfile.city)
          setPostalCode(userProfile.postalCode)
        }
        const updatedBookings = await Promise.all(
          bookingResponse.map(async booking => {
            //console.log(booking)
            const roomResponse = await ApiService.getRoomById(booking.roomId)
            //console.log(roomResponse)
            const hotelResponse = await ApiService.getHotel(
              roomResponse.hotel.id
            )
            //console.log(hotelResponse)
            return {
              ...booking,
              room: roomResponse,
              hotel: hotelResponse
            }
          })
        )
        if (updatedBookings) {
          const sortedBookings = updatedBookings.sort((a, b) =>
            a.checkInDate.localeCompare(b.checkInDate)
          )

          //console.log(updatedBookings)
          setBookings(sortedBookings)
        }

        const response = await ApiService.getCustomerCards(customerInfo.email)
        setCards(response)
      } catch (error) {
        console.error('Error fetching booking data:', error)
      }
    }
    fetchBookingData()
  }, [navigate])

  const [currentPage, setCurrentPage] = useState(1)
  const bookingsPerPage = 10

  const totalPages = Math.ceil(bookings.length / bookingsPerPage)

  const startIndex = (currentPage - 1) * bookingsPerPage
  const currentBookings = bookings.slice(
    startIndex,
    startIndex + bookingsPerPage
  )

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1)
    }
  }

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1)
    }
  }

  const handlePersonalInfoSubmit = async e => {
    e.preventDefault()
    if (
      !firstName ||
      !lastName ||
      !phoneNumber ||
      !address ||
      !country ||
      !city ||
      !postalCode ||
      !customer.email
    ) {
      alert('Please fill in all the fields')
      return
    }
    try {
      await ApiService.updatePersonalInfo(customer.email, {
        firstName: firstName || '',
        lastName: lastName || '',
        phoneNumber: phoneNumber || '',
        address: address || '',
        country: country || '',
        city: city || '',
        postalCode: postalCode || ''
      })
      const customerInfo = await ApiService.getCustomerByEmail(customer.email)
      setCustomer(customerInfo)

      alert('Personal information updated successfully!')
      setTimeout(() => {
        navigate(0)
      }, 0)
      navigate('/my-profile?tab=5')
    } catch (error) {
      console.error('Error updating personal information:', error)
      alert('Failed to update personal information.')
    }
  }

  const handlePasswordSubmit = async e => {
    e.preventDefault()
    if (newPassword !== newPasswordAgain) {
      alert('New passwords do not match.')
      return
    }
    try {
      await ApiService.changePassword(customer.email, {
        oldPassword: currentPassword,
        newPassword: newPassword
      })
      alert('Password changed successfully!')
      setCurrentPassword('')
      setNewPassword('')
      setNewPasswordAgain('')
      setTimeout(() => {
        navigate(0)
      }, 0)
      navigate('/my-profile?tab=5')
    } catch (error) {
      console.error('Error changing password:', error)
      alert('Failed to change password.')
    }
  }

  const handleRemoveButtonClick = async cardId => {
    const isConfirmed = window.confirm('Are you sure you want to delete this card?');

    if (isConfirmed) {
      try {
        ApiService.deleteCard(cardId)
        alert('Card Deleted')
        const response = await ApiService.getCustomerCards(customer.email)
      setCards(response)
     } catch (error) {
      console.error('Error editing card:', error)
    } 
    }
  }

  return (
    <div>
      <div className='container'>
        <main id='htlfndr-main-content' role='main'>
          <div className='row htlfndr-user-tabs htlfndr-credit-card-page ui-tabs ui-widget ui-corner-all ui-tabs-vertical ui-helper-clearfix'>
            <div className='htlfndr-user-person-navigation-wrapper col-sm-4 col-md-3'>
              <div className='htlfndr-user-person-navigation'>
                <div className='htlfndr-user-avatar'>
                  <img src={Img1} alt='user avatar' />
                </div>
                <h3 className='htlfndr-user-name'>
                  {customer.firstName + ' ' + customer.lastName}
                </h3>
                <h6 className='htlfndr-user-membership'>Customer</h6>
                <ul
                  role='tablist'
                  className='ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-corner-all'
                >
                  <li
                    className={`ui-state-default ui-tabs-active ${
                      activeTab == 'htlfndr-user-tab-1' ? 'ui-state-active' : ''
                    }`}
                    role='tab'
                    tabIndex='0'
                    aria-controls='htlfndr-user-tab-1'
                    aria-labelledby='ui-id-1'
                    aria-selected='true'
                    aria-expanded='true'
                  >
                    <Link  style={{cursor:'pointer'}}
                      to='#htlfndr-user-tab-1'
                      className='ui-tabs-anchor'
                      role='presentation'
                      tabIndex='-1'
                      id='ui-id-1'
                      onClick={() => handleTabClick('htlfndr-user-tab-1')}
                    >
                      <i className='fa fa-user'></i> personal info
                    </Link>
                  </li>
                  <li
                    className={`ui-state-default ui-tabs-active ${
                      activeTab == 'htlfndr-user-tab-2' ? 'ui-state-active' : ''
                    }`}
                    role='tab'
                    tabIndex='-1'
                    aria-controls='htlfndr-user-tab-2'
                    aria-labelledby='ui-id-2'
                    aria-selected='false'
                    aria-expanded='false'
                  >
                    <Link  style={{cursor:'pointer'}}
                      to='#htlfndr-user-tab-2'
                      className='ui-tabs-anchor'
                      role='presentation'
                      tabIndex='-1'
                      id='ui-id-2'
                      onClick={() => handleTabClick('htlfndr-user-tab-2')}
                    >
                      <i className='fa fa-clock-o'></i> booking history
                    </Link>
                  </li>
                  <li
                    className={`ui-state-default ui-tabs-active ${
                      activeTab == 'htlfndr-user-tab-3' ? 'ui-state-active' : ''
                    }`}
                    role='tab'
                    tabIndex='-1'
                    aria-controls='htlfndr-user-tab-3'
                    aria-labelledby='ui-id-3'
                    aria-selected='false'
                    aria-expanded='false'
                  >
                    <Link  style={{cursor:'pointer'}}
                      to='#htlfndr-user-tab-3'
                      className='ui-tabs-anchor'
                      role='presentation'
                      tabIndex='-1'
                      id='ui-id-3'
                      onClick={() => handleTabClick('htlfndr-user-tab-3')}
                    >
                      <i className='fa fa-credit-card'></i> credit cards
                    </Link>
                  </li>
                  <li
                    className={`ui-state-default ui-tabs-active ${
                      activeTab == 'htlfndr-user-tab-5' ? 'ui-state-active' : ''
                    }`}
                    role='tab'
                    tabIndex='-1'
                    aria-controls='htlfndr-user-tab-5'
                    aria-labelledby='ui-id-5'
                    aria-selected='false'
                    aria-expanded='false'
                  >
                    <Link  style={{cursor:'pointer'}}
                      to='#htlfndr-user-tab-5'
                      className='ui-tabs-anchor'
                      role='presentation'
                      tabIndex='-1'
                      id='ui-id-5'
                      onClick={() => handleTabClick('htlfndr-user-tab-5')}
                    >
                      <i className='fa fa-wrench'></i> settings
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className='htlfndr-user-panel col-sm-8 col-md-9 htlfndr-info-page'>
              <div
                id='htlfndr-user-tab-1'
                className='htlfndr-description-table ui-tabs-panel ui-widget-content ui-corner-bottom'
                aria-labelledby='ui-id-1'
                role='tabpanel'
                aria-hidden='false'
                style={
                  activeTab === 'htlfndr-user-tab-1'
                    ? { display: 'block' }
                    : { display: 'none' }
                }
              >
                <table className='htlfndr-personal-info-table'>
                  <tbody>
                    <tr>
                      <th className='htlfndr-scope-row'>name:</th>
                      <td>{customer.firstName + ' ' + customer.lastName}</td>
                    </tr>
                    <tr>
                      <th className='htlfndr-scope-row'>e-mail:</th>
                      <td>{customer.email}</td>
                    </tr>
                    <tr>
                      <th className='htlfndr-scope-row'>phone number:</th>
                      <td>{customer.phoneNumber}</td>
                    </tr>
                    <tr>
                      <th className='htlfndr-scope-row'>street address:</th>
                      <td>{customer.address}</td>
                    </tr>
                    <tr>
                      <th className='htlfndr-scope-row'>city:</th>
                      <td>{customer.city}</td>
                    </tr>
                    <tr>
                      <th className='htlfndr-scope-row'>postal code:</th>
                      <td>{customer.postalCode}</td>
                    </tr>
                    <tr>
                      <th className='htlfndr-scope-row'>country:</th>
                      <td>{customer.country}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div
              className='htlfndr-user-panel col-md-9 col-sm-8 htlfndr-booking-page ui-tabs-panel ui-widget-content ui-corner-bottom'
              id='htlfndr-user-tab-2'
              aria-labelledby='ui-id-2'
              role='tabpanel'
              aria-hidden='true'
              style={
                activeTab === 'htlfndr-user-tab-2'
                  ? { display: 'block' }
                  : { display: 'none' }
              }
            >
              <table className='table'>
                <thead>
                  <tr>
                    <th>Title</th>
                    <th>Location</th>
                    <th>Order date</th>
                    <th>Date of your stay</th>
                    <th>Cost</th>
                  </tr>
                </thead>
                <tbody>
                  {currentBookings.length > 0 ? (
                    currentBookings.map(booking => (
                      <tr key={booking.id}>
                        <td className='htlfndr-scope-row'>
                          {booking.hotel.name}{' '}
                          <img
                            src={booking.hotel.pictureURL || Img4}
                            alt='pic'
                            style={{ height: '60px', width: '60px' }}
                          />
                        </td>
                        <td data-title='Location'>{booking.hotel.city}</td>
                        <td data-title='Order date'>
                          {new Date().toLocaleDateString('en-GB')}
                        </td>
                        <td data-title='Date of your stay'>{`${new Date(
                          booking.checkInDate
                        ).toLocaleDateString('en-GB', {
                          day: '2-digit',
                          month: '2-digit',
                          year: 'numeric'
                        })} - ${new Date(
                          booking.checkOutDate
                        ).toLocaleDateString('en-GB', {
                          day: '2-digit',
                          month: '2-digit',
                          year: 'numeric'
                        })}`}</td>
                        <td data-title='Cost'>$ {booking.totalPrice}</td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan={5} align='center'>
                        <p>No Bookings yet</p>
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
              {totalPages > 0 ? (
                <div className='text-right'>
                  <Link onClick={handlePrevPage} disabled={currentPage === 1}>
                    <i className='fa fa-angle-double-left'></i> prev
                  </Link>
                  <span>
                    Page {currentPage} of {totalPages}
                  </span>{' '}
                  <Link
                    onClick={handleNextPage}
                    disabled={currentPage === totalPages}
                  >
                    next <i className='fa fa-angle-double-right'></i>
                  </Link>
                </div>
              ) : (
                ''
              )}
            </div>
            <div
              className='htlfndr-user-panel col-md-9 col-sm-8 htlfndr-credit-page ui-tabs-panel ui-widget-content ui-corner-bottom'
              id='htlfndr-user-tab-3'
              style={
                activeTab === 'htlfndr-user-tab-3'
                  ? { display: 'block' }
                  : { display: 'none' }
              }
            >
              {cards.length > 0 ? (
                cards.map(card => (
                  <div className='htlfndr-credit-card' key={card.id}>
                    <div className='htlfndr-but_edit text-right'>
                      <EditCardModal card={card} setCards={setCards} customer={customer} />
                      <Link
                        className='glyphicon glyphicon-remove'
                        to='#'
                        onClick={() => handleRemoveButtonClick(card.id)}
                        data-toggle='modal'
                        data-target='#remove-card'
                      ></Link>
                    </div>
                    <div className='htlfndr-card-type'>{card.cardType}</div>
                    <div className='htlfndr-number-card'>{`XXXX XXXX XXXX ${card.cardNumber.slice(
                      -4
                    )}`}</div>
                    <div className='htlfndr-valid-card'>
                      valid thru{' '}
                      <span>{card.expiryMonth + '/' + card.expiryYear}</span>
                    </div>
                    <div className='htlfndr-person-card'>
                      cardholder name
                      <br />
                      <span className='htlfndr-person-name'>
                        {card.cardHolderName}
                      </span>
                    </div>
                  </div>
                ))
              ) : (
                <p>No cards available</p>
              )}
              <div className='htlfndr-credit-card'>
                <div className='htlfndr-add-card'>
                  <AddCardModal setCards={setCards} customer={customer} />
                </div>
              </div>
            </div>

            {/* Change Personal Information Tab */}
            <div
              className='htlfndr-user-panel col-md-9 col-sm-8 htlfndr-setting-page ui-tabs-panel ui-widget-content ui-corner-bottom'
              id='htlfndr-user-tab-5'
              aria-labelledby='ui-id-5'
              role='tabpanel'
              aria-hidden={activeTab !== 'htlfndr-user-tab-5'}
              style={{
                display: activeTab === 'htlfndr-user-tab-5' ? 'block' : 'none'
              }}
            >
              <div className='htlfndr-setting'>
                <h2>
                  Change <b>Personal Information</b>
                </h2>
                <form
                  className='htlfndr-form-setting'
                  id='htlfndr-settings-form'
                  method='post'
                  onSubmit={handlePersonalInfoSubmit}
                >
                  <div className='row'>
                    <div className='col-md-5 htlfndr-form-setting-cols'>
                      <label htmlFor='settings-name' className=''>
                        First Name
                      </label>
                      <br />
                      <input
                        id='settings-name'
                        className='htlfndr-input'
                        type='text'
                        name='name'
                        placeholder='John'
                        value={firstName || ''}
                        onChange={handleFirstNameChange}
                      />
                      <br />
                      <label htmlFor='settings-name-last' className=''>
                        Last Name
                      </label>
                      <br />
                      <input
                        id='settings-name-last'
                        className='htlfndr-input'
                        type='text'
                        name='lastName'
                        placeholder='Brown'
                        value={lastName || ''}
                        onChange={handleLastNameChange}
                      />
                      <br />
                      <label htmlFor='settings-phone' className=''>
                        Phone number
                      </label>
                      <br />
                      <input
                        id='settings-phone'
                        className='htlfndr-input'
                        type='text'
                        name='phone'
                        placeholder='+00 00-000-0000'
                        value={phoneNumber || ''}
                        onChange={handlePhoneNumberChange}
                      />
                      <br />
                      <label htmlFor='settings-address' className=''>
                        Street Address
                      </label>
                      <br />
                      <input
                        id='settings-address'
                        className='htlfndr-input'
                        type='text'
                        name='address'
                        placeholder='46 Gray Inn Rd, London, WCIX'
                        value={address || ''}
                        onChange={handleAddressChange}
                      />
                      <br />
                      <label htmlFor='settings-country' className=''>
                        Country
                      </label>
                      <br />
                      <input
                        id='settings-country'
                        className='htlfndr-input'
                        type='text'
                        name='country'
                        placeholder='United Kingdom'
                        value={country || ''}
                        onChange={handleCountryChange}
                      />
                      <br />
                    </div>
                    <div className='col-md-5 htlfndr-form-setting-cols'>
                      <label htmlFor='settings-city' className=''>
                        City
                      </label>
                      <br />
                      <input
                        id='settings-city'
                        className='htlfndr-input'
                        type='text'
                        name='city'
                        placeholder='London'
                        value={city || ''}
                        onChange={handleCityChange}
                      />
                      <br />
                      <label htmlFor='settings-code' className=''>
                        Postal Code
                      </label>
                      <br />
                      <input
                        id='settings-code'
                        className='htlfndr-input'
                        type='text'
                        name='postalCode'
                        placeholder='69106'
                        value={postalCode || ''}
                        onChange={handlePostalCodeChange}
                      />
                      <br />
                    </div>
                  </div>
                  <input
                    type='submit'
                    value='Save changes'
                    className='btn-primary'
                  />
                </form>

                <h2>
                  Change <b>Password</b>
                </h2>
                <form
                  className='htlfndr-change-setting'
                  id='htlfndr-settings-pass'
                  method='post'
                  onSubmit={handlePasswordSubmit}
                >
                  <div className='row'>
                    <div className='col-md-5 htlfndr-form-setting-cols'>
                      <label htmlFor='settings-cur-pass' className=''>
                        Current Password
                      </label>
                      <br />
                      <input
                        id='settings-cur-pass'
                        className='htlfndr-input'
                        type='password'
                        name='currentPassword'
                        value={currentPassword}
                        onChange={handleCurrentPasswordChange}
                      />
                      <br />
                      <label htmlFor='settings-new-pass' className=''>
                        New Password
                      </label>
                      <br />
                      <input
                        id='settings-new-pass'
                        className='htlfndr-input'
                        type='password'
                        name='newPassword'
                        value={newPassword}
                        onChange={handleNewPasswordChange}
                      />
                      <br />
                      <label htmlFor='settings-new-pass-again' className=''>
                        New Password Again
                      </label>
                      <br />
                      <input
                        id='settings-new-pass-again'
                        className='htlfndr-input'
                        type='password'
                        name='newPasswordAgain'
                        value={newPasswordAgain}
                        onChange={handleNewPasswordAgainChange}
                      />
                      <br />
                    </div>
                    <div className='col-md-5 htlfndr-form-setting-cols'></div>
                  </div>
                  <input
                    type='submit'
                    value='Save password'
                    className='btn-primary'
                  />
                </form>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}

export default MyProfile
