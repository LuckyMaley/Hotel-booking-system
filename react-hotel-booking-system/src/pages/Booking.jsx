import { useEffect, useState } from 'react'
import { Link, useNavigate, useSearchParams } from 'react-router-dom'
import Img1 from '../assets/images/16415688600_a030e3e8dd_k.jpg'
import ApiService from '../components/services/ApiService'

const Booking = () => {
  const [selectedOption, setSelectedOption] = useState('Visa')

  const handleOptionChange = event => {
    setSelectedOption(event.target.value)
  }

  const currentYear = new Date().getFullYear()
  const years = Array.from({ length: 11 }, (_, i) => currentYear + i)
  const [selectedYear, setSelectedYear] = useState(currentYear)

  const [selectedMonth, setSelectedMonth] = useState('01')

  const [isAcceptChecked, setIsAcceptChecked] = useState(false)

  const handleCheckboxChange = event => {
    setIsAcceptChecked(event.target.checked)
  }

  const [isCustomer, setIsCustomer] = useState(false)
  const [customer, setCustomer] = useState('')

  const [cards, setCards] = useState([])
  const [selectedCard, setSelectedCard] = useState('')
  const [isAddingNewCard, setIsAddingNewCard] = useState(false)

  const [cardNumber, setCardNumber] = useState('')
  const [cardHolderName, setCardHolderName] = useState('')
  const [securityCode, setSecurityCode] = useState('')

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const isACustomer = await ApiService.isCustomer()
        setIsCustomer(isACustomer)
      } catch (error) {
        console.error('Error fetching user data:', error)
      }
    }
    fetchUserData()
  }, [])

  const [searchParams] = useSearchParams()
  const navigate = useNavigate()
  const roomId = searchParams.get('roomId') || ''
  const hotelId = searchParams.get('hotelId') || ''

  const checkInDate = searchParams.get('checkInDate') || ''
  const checkOutDate = searchParams.get('checkOutDate') || ''

  useEffect(() => {
    if (!roomId) {
      navigate('/hotels')
    }
    if (!checkInDate || !checkOutDate) {
      navigate('/hotels')
    }
    if (!hotelId) {
      navigate('/hotels')
    }
  }, [roomId, hotelId, checkInDate, checkOutDate, navigate])

  const [room, setRoom] = useState('')

  useEffect(() => {
    const fetchRoom = async () => {
      try {
        const response = await ApiService.getRoomById(roomId)
        setRoom(response)
      } catch (error) {
        console.error('Error fetching room data:', error)
      }
    }

    fetchRoom()
  }, [roomId])

  const [hotel, setHotel] = useState('')

  useEffect(() => {
    const fetchHotel = async () => {
      try {
        const response = await ApiService.getHotel(hotelId)
        setHotel(response)
      } catch (error) {
        console.error('Error fetching hotel data:', error)
      }
    }
    fetchHotel()
  }, [hotelId])

  const [customerAddress, setCustomerAddress] = useState({
    city: '',
    country: '',
    postalCode: '',
    address: ''
  })
  const [selectedAddressId, setSelectedAddressId] = useState('')

  const [billingAddress, setBillingAddress] = useState({
    city: '',
    country: '',
    postalCode: '',
    address: ''
  })
  const [loadingAddresses, setLoadingAddresses] = useState(true)
  const [addressError, setAddressError] = useState('')
  const [submissionError, setSubmissionError] = useState('')
  const [submissionSuccess, setSubmissionSuccess] = useState('')

  useEffect(() => {
    const fetchCustomerAddresses = async () => {
      try {
        if (!isCustomer) {
          return
        }
        const userProfile = await ApiService.getUserProfile()
        const customerInfo = await ApiService.getCustomerByEmail(
          userProfile.email
        )
        const response = await ApiService.getCustomerCards(customerInfo.email)
        setCards(response)

        setCustomer(customerInfo)
        setLoadingAddresses(true)
        setCustomerAddress({
          city: customerInfo.city,
          country: customerInfo.country,
          postalCode: customerInfo.postalCode,
          address: customerInfo.address
        })
        if (customerInfo.address) {
          setSelectedAddressId(customerInfo.id)
          setBillingAddress({
            city: customerInfo.city,
            country: customerInfo.country,
            postalCode: customerInfo.postalCode,
            address: customerInfo.address
          })
        }
        setLoadingAddresses(false)
      } catch (error) {
        console.error('Error fetching customer address:', error)
        setAddressError('Failed to load customer address.')
        setLoadingAddresses(false)
      }
    }

    fetchCustomerAddresses()
  }, [isCustomer])

  const handleAddressChange = e => {
    const addressId = e.target.value
    setSelectedAddressId(addressId)

    if (addressId === 'new') {
      setBillingAddress({
        city: '',
        country: '',
        postalCode: '',
        address: ''
      })
    } else {
      const selectedAddress = customer.id
      if (selectedAddress) {
        setBillingAddress({
          city: customerAddress.city,
          country: customerAddress.country,
          postalCode: customerAddress.postalCode,
          address: customerAddress.address
        })
      }
    }
  }

  const handleInputChange = e => {
    const { name, value } = e.target
    setBillingAddress(prevState => ({
      ...prevState,
      [name]: value
    }))
  }

  const handleSubmit = async e => {
    e.preventDefault()
    if (!selectedCard) {
      setSubmissionError('No card selected')
      return
    }
    if (
      !billingAddress.address ||
      !billingAddress.city ||
      !billingAddress.country ||
      !billingAddress.postalCode
    ) {
      setSubmissionError('Please fill in all required fields.')
      return
    }
    if (!isAcceptChecked) {
      setSubmissionError(
        'Please accept the rules and regulations to be able proceed with your booking'
      )
      return
    }
    try {
      const bookingData = {
        customerId: customer.id,
        roomId: roomId,
        checkInDate: new Date(checkInDate).toISOString(),
        checkOutDate: new Date(checkOutDate).toISOString(),
        totalPrice:
          room.price *
          ((new Date(checkOutDate).getTime() -
            new Date(checkInDate).getTime()) /
            (1000 * 3600 * 24)),
        status: 'PENDING',
        billingAddress: billingAddress.address,
        billingCity: billingAddress.city,
        billingCountry: billingAddress.country,
        billingPostalCode: billingAddress.postalCode
      }

      const bookingResponse = await ApiService.bookRoom(bookingData)

      const paymentData = {
        bookingId: bookingResponse.id,
        cardId: selectedCard,
        transactionFee:
          room.price *
          ((new Date(checkOutDate).getTime() -
            new Date(checkInDate).getTime()) /
            (1000 * 3600 * 24)) *
          0.05,
        paymentDate: new Date().toISOString(),
        amount:
          room.price *
          ((new Date(checkOutDate).getTime() -
            new Date(checkInDate).getTime()) /
            (1000 * 3600 * 24)),
        paymentMethod: selectedOption,
        status: 'PAID'
      }
      await ApiService.makePayment(paymentData)
      await ApiService.updateHotelOwnerCurrentBalance(
        hotelId,
        room.price * 0.05
      )

      if (
        customer.address == '' ||
        customer.city == '' ||
        customer.country == '' ||
        customer.postalCode == '' ||
        !customerAddress.address
      ) {
        customer.address = billingAddress.address
        customer.city = billingAddress.city
        customer.country = billingAddress.country
        customer.postalCode = billingAddress.postalCode
        await ApiService.updateCustomer(customer.id, customer)
      }

      setSubmissionSuccess('Booking and billing address saved successfully.')

      setSubmissionError('')
      navigate(`/thanks?bookingId=${bookingResponse.id}&hotelId=${hotelId}`)
    } catch (error) {
      console.error('Error saving booking:', error)
      setSubmissionError('Failed to save booking. Please try again.')
      setSubmissionSuccess('')
    }
  }

  const handleCardSelect = e => {
    const selectedValue = e.target.value
    if (selectedValue === 'new') {
      setIsAddingNewCard(true)
      setSelectedCard('')
    } else {
      setIsAddingNewCard(false)
      setSelectedCard(selectedValue)
    }
  }

  const handleAddNewCard = async e => {
    e.preventDefault()
    if (!cardNumber || !cardHolderName || !securityCode) {
      setSubmissionError('missing card field, card not created')
      return
    }

    try {
      const newCard = {
        cardType: selectedOption,
        cardNumber: cardNumber,
        cardHolderName: cardHolderName,
        expiryMonth: selectedMonth,
        expiryYear: selectedYear,
        securityCode: securityCode,
        customerId: customer.id
      }
      const response = await ApiService.addNewCustomerCard(newCard)
      setCards([...cards, response])
      setIsAddingNewCard(false)
    } catch (error) {
      console.error('Error adding new card:', error)
    }
  }

  return (
    <div>
      <div className='container'>
        <div className='htlfndr-steps'>
          <ul className='htlfndr-progress'>
            <li>
              <Link to='/hotels'>
                <span className='htlfndr-step-number'>1</span>
                <span className='htlfndr-step-description'>results</span>
              </Link>
            </li>
            <li>
              <Link to='/hotel'>
                <span className='htlfndr-step-number'>2</span>
                <span className='htlfndr-step-description'>hotel</span>
              </Link>
            </li>
            <li className='htlfndr-active-step'>
              <span className='htlfndr-step-number'>3</span>
              <span className='htlfndr-step-description'>payment</span>
            </li>
          </ul>
        </div>
        <div className='row htlfndr-payment-page'>
          <main
            id='htlfndr-main-content'
            className='col-sm-12 col-md-8 col-lg-8'
            role='main'
          >
            {!isCustomer ? (
              <p>
                <Link
                  to={`/login?from=${encodeURIComponent(
                    location.pathname + location.search
                  )}`}
                  data-toggle='modal'
                  data-target='#htlfndr-sing-in'
                >
                  <span className='htlfndr-sing-in-link'>login</span>
                </Link>{' '}
                <span>or</span>{' '}
                <Link
                  to={`/register?from=${encodeURIComponent(
                    location.pathname + location.search
                  )}`}
                  data-toggle='modal'
                  data-target='#htlfndr-sing-in'
                >
                  <span className='htlfndr-sing-in-link'>register</span>
                </Link>{' '}
                <span>to be able to make a booking</span>
              </p>
            ) : (
              <form id='htlfndr-payment-form'>
                {/* Display submission error or success */}
                {submissionError && <p className='error'>{submissionError}</p>}
                {submissionSuccess && (
                  <p className='success'>{submissionSuccess}</p>
                )}

                <section className='htlfndr-form-section'>
                  <header>
                    <h2 className='htlfndr-form-section-title'>
                      Your personal <span>information</span>
                    </h2>
                  </header>
                  <hr />
                  <div className='htlfndr-form-block'>
                    <div className='htlfndr-form-block-inner'>
                      <div className='row'>
                        <div className='col-md-6'>
                          <label
                            htmlFor='htlfndr-personal-name'
                            className='htlfndr-top-label'
                          >
                            First name
                          </label>
                          <input
                            type='text'
                            id='htlfndr-personal-name'
                            name='htlfndr-personal-name'
                            className='htlfndr-input'
                            placeholder='Enter your first name'
                            value={customer.firstName || ''}
                            readOnly
                          />
                        </div>
                        <div className='col-md-6'>
                          <label
                            htmlFor='htlfndr-personal-last-name'
                            className='htlfndr-top-label'
                          >
                            Last name
                          </label>
                          <input
                            type='text'
                            id='htlfndr-personal-last-name'
                            name='htlfndr-personal-last-name'
                            className='htlfndr-input'
                            placeholder='Enter your last name'
                            value={customer.lastName || ''}
                            readOnly
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
                <section className='htlfndr-form-section'>
                  <header>
                    <h2 className='htlfndr-form-section-title'>
                      Your Card <span>Information</span>
                    </h2>
                    <h5 className='htlfndr-form-section-description'>
                      Please select an existing card or add a new one
                    </h5>
                  </header>
                  <hr />
                  <div className='htlfndr-form-block'>
                    <div className='htlfndr-form-block-inner'>
                      <label className='htlfndr-top-label'>Select Card</label>
                      <select
                        className='htlfndr-dropdown'
                        value={selectedCard}
                        onChange={handleCardSelect}
                      >
                        <option value='' disabled>
                          Select a card
                        </option>
                        {cards.map(card => (
                          <option key={card.id} value={card.id}>
                            {`**** **** **** ${
                              card.cardNumber
                                ? card.cardNumber.substring(
                                    card.cardNumber.length - 4
                                  )
                                : ''
                            } - ${card.cardType}`}
                          </option>
                        ))}
                        <option value='new'>Add New Card</option>
                      </select>

                      {/* Show card form if adding a new card */}
                      {isAddingNewCard && (
                        <div>
                          <label className='htlfndr-top-label'>
                            Credit Card Type
                          </label>
                          <div
                            id='htlfndr-radio-card'
                            className='ui-buttonset'
                            style={isAddingNewCard ? {} : { display: 'none' }}
                          >
                            {/* Visa */}
                            <label
                              htmlFor='htlfndr-visa'
                              className={`ui-button ui-widget ui-state-default ui-button-text-only ui-corner-left ${
                                selectedOption === 'Visa'
                                  ? 'ui-state-active'
                                  : ''
                              }`}
                              role='button'
                              aria-pressed={selectedOption === 'Visa'}
                            >
                              <span className='ui-button-text'></span>
                            </label>
                            <input
                              type='radio'
                              name='htlfndr-card'
                              id='htlfndr-visa'
                              value='Visa'
                              className='ui-helper-hidden-accessible'
                              checked={selectedOption === 'Visa'}
                              onChange={handleOptionChange}
                            />

                            {/* PayPal */}
                            <label
                              htmlFor='htlfndr-paypal'
                              className={`ui-button ui-widget ui-state-default ui-button-text-only ${
                                selectedOption === 'Paypal'
                                  ? 'ui-state-active'
                                  : ''
                              }`}
                              role='button'
                              aria-pressed={selectedOption === 'Paypal'}
                            >
                              <span className='ui-button-text'></span>
                            </label>
                            <input
                              type='radio'
                              name='htlfndr-card'
                              id='htlfndr-paypal'
                              value='Paypal'
                              className='ui-helper-hidden-accessible'
                              checked={selectedOption === 'Paypal'}
                              onChange={handleOptionChange}
                            />

                            {/* MasterCard */}
                            <label
                              htmlFor='htlfndr-mastercard'
                              className={`ui-button ui-widget ui-state-default ui-button-text-only ${
                                selectedOption === 'Mastercard'
                                  ? 'ui-state-active'
                                  : ''
                              }`}
                              role='button'
                              aria-pressed={selectedOption === 'Mastercard'}
                            >
                              <span className='ui-button-text'></span>
                            </label>
                            <input
                              type='radio'
                              name='htlfndr-card'
                              id='htlfndr-mastercard'
                              value='Mastercard'
                              className='ui-helper-hidden-accessible'
                              checked={selectedOption === 'Mastercard'}
                              onChange={handleOptionChange}
                            />

                            {/* American Express */}
                            <label
                              htmlFor='htlfndr-amex'
                              className={`ui-button ui-widget ui-state-default ui-button-text-only ui-corner-right ${
                                selectedOption === 'American Express'
                                  ? 'ui-state-active'
                                  : ''
                              }`}
                              role='button'
                              aria-pressed={
                                selectedOption === 'American Express'
                              }
                            >
                              <span className='ui-button-text'></span>
                            </label>
                            <input
                              type='radio'
                              name='htlfndr-card'
                              id='htlfndr-amex'
                              value='American Express'
                              className='ui-helper-hidden-accessible'
                              checked={selectedOption === 'American Express'}
                              onChange={handleOptionChange}
                            />
                          </div>

                          {/* Card number, holder, expiration date and security code */}
                          <div className='row'>
                            <div className='col-md-6'>
                              <label className='htlfndr-required htlfndr-top-label'>
                                Card number
                              </label>
                              <input
                                type='text'
                                className='htlfndr-input'
                                placeholder='xxxx xxxx xxxx xxxx'
                                maxLength='16'
                                value={cardNumber}
                                onChange={e => setCardNumber(e.target.value)}
                                required
                              />
                            </div>
                            <div className='col-md-6'>
                              <label className='htlfndr-required htlfndr-top-label'>
                                Card holder name
                              </label>
                              <input
                                type='text'
                                className='htlfndr-input'
                                placeholder='Enter card holder name'
                                value={cardHolderName}
                                onChange={e =>
                                  setCardHolderName(e.target.value)
                                }
                                required
                              />
                            </div>
                          </div>

                          <div className='row'>
                            <div className='col-md-6'>
                              <label className='htlfndr-top-label htlfndr-required'>
                                Expiration date
                              </label>
                              <div className='htlfndr-small-select htlfndr-input-wrapper'>
                                <label
                                  htmlFor='htlfndr-card-month-button'
                                  className='sr-only'
                                >
                                  card expiration month
                                </label>
                                <select
                                  name='htlfndr-card-month'
                                  id='htlfndr-card-month'
                                  value={selectedMonth}
                                  onChange={e =>
                                    setSelectedMonth(e.target.value)
                                  }
                                  className='htlfndr-dropdown ui-selectmenu-button ui-widget ui-state-default ui-corner-all'
                                >
                                  <option value='' disabled>
                                    Month
                                  </option>
                                  {/* Month options */}
                                  {[
                                    '01',
                                    '02',
                                    '03',
                                    '04',
                                    '05',
                                    '06',
                                    '07',
                                    '08',
                                    '09',
                                    '10',
                                    '11',
                                    '12'
                                  ].map(month => (
                                    <option key={month} value={month}>
                                      {month}
                                    </option>
                                  ))}
                                </select>
                              </div>
                              <div className='htlfndr-small-select htlfndr-input-wrapper'>
                                <label
                                  htmlFor='htlfndr-card-year-button'
                                  className='sr-only'
                                >
                                  card expiration year
                                </label>
                                <select
                                  value={selectedYear}
                                  onChange={e =>
                                    setSelectedYear(e.target.value)
                                  }
                                  className='htlfndr-dropdown ui-selectmenu-button ui-widget ui-state-default ui-corner-all'
                                >
                                  <option value='' disabled>
                                    Year
                                  </option>
                                  {years.map(year => (
                                    <option key={year} value={year}>
                                      {year}
                                    </option>
                                  ))}
                                </select>
                              </div>
                            </div>
                            <div className='col-md-3'>
                              <label className='htlfndr-required htlfndr-top-label'>
                                Security code
                              </label>
                              <input
                                type='text'
                                className='htlfndr-input'
                                placeholder='XXX'
                                maxLength='3'
                                value={securityCode}
                                onChange={e => setSecurityCode(e.target.value)}
                                required
                              />
                            </div>
                          </div>

                          <button
                            type='submit'
                            onClick={handleAddNewCard}
                            className='htlfndr-btn'
                          >
                            Add Card
                          </button>
                        </div>
                      )}
                    </div>
                  </div>
                </section>

                <section className='htlfndr-form-section'>
                  <header>
                    <h2 className='htlfndr-form-section-title'>
                      Billing <span>Address</span>
                    </h2>
                    <h5 className='htlfndr-form-section-description'>
                      Please enter the details of your address
                    </h5>
                  </header>
                  <hr />
                  <div className='htlfndr-form-block'>
                    <div className='htlfndr-form-block-inner'>
                      {/* Select Dropdown for Customer Addresses */}
                      <div className='row md-5'>
                        <div className='col-md-12'>
                          <label
                            htmlFor='htlfndr-customer-address'
                            className='htlfndr-required htlfndr-top-label'
                          >
                            Select Billing Address
                          </label>
                          {loadingAddresses ? (
                            <p>Loading addresses...</p>
                          ) : addressError ? (
                            <p className='error'>{addressError}</p>
                          ) : (
                            <select
                              id='htlfndr-customer-address'
                              name='htlfndr-customer-address'
                              className='htlfndr-input'
                              value={selectedAddressId}
                              onChange={handleAddressChange}
                            >
                              {customerAddress ? (
                                <>
                                  <option key={customer.id} value={customer.id}>
                                    {customerAddress.address},{' '}
                                    {customerAddress.city},{' '}
                                    {customerAddress.country}
                                  </option>

                                  <option value='new'>Add New Address</option>
                                </>
                              ) : (
                                <option value=''>No addresses available</option>
                              )}
                            </select>
                          )}
                        </div>
                      </div>
                      <br />
                      <br />
                      {/* Billing Address Inputs */}
                      <div className='row mt-3'>
                        <div className='col-md-4'>
                          <label
                            htmlFor='htlfndr-city'
                            className='htlfndr-required htlfndr-top-label'
                          >
                            City
                          </label>
                          <input
                            type='text'
                            id='htlfndr-city'
                            name='city'
                            className='htlfndr-input'
                            placeholder='Enter city name'
                            value={billingAddress.city}
                            onChange={handleInputChange}
                            required
                          />
                        </div>
                        <div className='col-md-5'>
                          <label
                            htmlFor='htlfndr-country'
                            className='htlfndr-required htlfndr-top-label'
                          >
                            Country
                          </label>
                          <input
                            type='text'
                            id='htlfndr-country'
                            name='country'
                            className='htlfndr-input'
                            placeholder='Enter country'
                            value={billingAddress.country}
                            onChange={handleInputChange}
                            required
                          />
                        </div>
                        <div className='col-md-3'>
                          <label
                            htmlFor='htlfndr-postal-code'
                            className='htlfndr-required htlfndr-top-label'
                          >
                            Postal Code
                          </label>
                          <input
                            type='text'
                            id='htlfndr-postal-code'
                            name='postalCode'
                            className='htlfndr-input'
                            placeholder='xxxxx'
                            maxLength='8'
                            value={billingAddress.postalCode}
                            onChange={handleInputChange}
                            required
                          />
                        </div>
                      </div>
                      <div className='row mt-3'>
                        <div className='col-md-6'>
                          <label
                            htmlFor='htlfndr-bil-address'
                            className='htlfndr-required htlfndr-top-label'
                          >
                            Billing Address
                          </label>
                          <input
                            type='text'
                            id='htlfndr-bil-address'
                            name='address'
                            className='htlfndr-input'
                            placeholder='Enter billing address'
                            value={billingAddress.address}
                            onChange={handleInputChange}
                            required
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </section>

                <section className='htlfndr-form-section htlfndr-form-review-section'>
                  <header>
                    <h2 className='htlfndr-form-section-title'>
                      Review and <span>book your Trip</span>
                    </h2>
                  </header>
                  <hr />
                  <h3 className='htlfndr-attention'>
                    Attention! Please read important booking information!
                  </h3>
                  <ul className='htlfndr-list'>
                    <li>
                      This special discounted rate is non-refundable. If you
                      choose to change or cancel this booking you will not be
                      refunded any of the payment.
                    </li>
                  </ul>
                  <p className='htlfndr-long-checkbox'>
                    <label className='switch-label-check'>
                      <input
                        type='checkbox'
                        name='htlfndr-accept'
                        id='htlfndr-accept'
                        style={{ display: 'none' }}
                        checked={isAcceptChecked}
                        onChange={handleCheckboxChange}
                      />

                      <span className='switch'></span>
                    </label>
                    <label htmlFor='htlfndr-accept' id='htlfndr-accept-label'>
                      By selecting to complete this booking I acknowledge that I
                      have read and accept the
                      <Link to='#' className='htlfndr-rules'>
                        Rules &amp; Restrictions
                      </Link>
                    </label>
                  </p>
                  <input
                    type='submit'
                    className='htlfndr-payment-submit'
                    value='complete booking'
                    onClick={handleSubmit}
                  />
                </section>
              </form>
            )}
          </main>
          <aside
            id='htlfndr-right-sidebar'
            className='col-sm-12 col-md-4 col-lg-offset-1 col-lg-3 htlfndr-sidebar htlfndr-sidebar-in-right'
            role='complementary'
          >
            <div className='htlfndr-booking-details'>
              <div className='widget'>
                <div className='htlfndr-widget-main-content htlfndr-widget-padding'>
                  <h3 className='widget-title'>booking details</h3>
                  <div className='htlfndr-widget-block htlfndr-table-view'>
                    <div className='htlfndr-hotel-thumbnail'>
                      <Link to='/hotel-page-v1'>
                        <img
                          src={hotel.pictureURL || Img1}
                          alt='Hotel picture'
                        />
                      </Link>
                    </div>
                    <div className='htlfndr-hotel-info'>
                      <Link to='/hotel-page-v1'>
                        <h3>{hotel.name}</h3>
                      </Link>
                      <div className='htlfndr-rating-stars'>
                        {[...Array(5)].map((_, index) => (
                          <i
                            key={index}
                            className={`fa fa-star ${
                              index < hotel.starRating
                                ? 'htlfndr-star-color'
                                : ''
                            }`}
                          ></i>
                        ))}
                      </div>
                      <p className='htlfndr-location'>{hotel.city}</p>
                    </div>
                  </div>
                  <div className='htlfndr-widget-block htlfndr-bigger-font'>
                    <p className='htlfndr-details'>
                      <span>1 room:</span>
                      <Link to='/hotel-room-page'>
                        <span>{room.roomType}</span>
                      </Link>
                    </p>
                    <p className='htlfndr-details'>
                      <span>check-in:</span>{' '}
                      <span>
                        {new Date(checkInDate).toLocaleDateString('en-US', {
                          weekday: 'short',
                          day: '2-digit',
                          month: 'short',
                          year: 'numeric'
                        })}
                      </span>
                    </p>
                    <p className='htlfndr-details'>
                      <span>check-out:</span>{' '}
                      <span>
                        {new Date(checkOutDate).toLocaleDateString('en-US', {
                          weekday: 'short',
                          day: '2-digit',
                          month: 'short',
                          year: 'numeric'
                        })}
                      </span>
                    </p>
                    <p className='htlfndr-details'>
                      <span>Occupancy:</span> <span>{room.occupancy}</span>
                    </p>
                  </div>
                  <div className='htlfndr-widget-block htlfndr-bigger-font'>
                    <p className='htlfndr-room-cost'>
                      <span>1 night price</span> <span>$ {room.price}</span>
                    </p>
                    <p className='htlfndr-room-cost'>
                      <span>taxes &amp; fees</span>{' '}
                      <span>$ {room.price * 0.05}</span>
                    </p>
                  </div>
                  <p className='htlfndr-total-price'>total price:</p>
                  <div className='htlfndr-hotel-price'>
                    <span className='htlfndr-cost'>
                      ${' '}
                      {Number(
                        room.price *
                          ((new Date(checkOutDate).getTime() -
                            new Date(checkInDate).getTime()) /
                            (1000 * 3600 * 24)) +
                          room.price *
                            ((new Date(checkOutDate).getTime() -
                              new Date(checkInDate).getTime()) /
                              (1000 * 3600 * 24)) *
                            0.05
                      ).toFixed(2)}
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className='widget htlfndr-widget-help'>
              <div className='htlfndr-widget-main-content htlfndr-widget-padding'>
                <h3 className='widget-title'>need our help</h3>
                <span>24/7 dedicated customer support</span>
                <p className='htlfndr-phone'>+(000) 000-000-000</p>
                <p className='htlfndr-mail'>support@bestwebsoft.zendesk.com</p>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  )
}

export default Booking
