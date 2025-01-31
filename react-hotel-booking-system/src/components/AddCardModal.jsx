import { faTimes } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import PropTypes from 'prop-types' 
import { useState } from 'react'
import { Modal, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import ApiService from './services/ApiService'

const AddCardModal = ({setCards, customer}) => {
  const [fullscreen, setFullscreen] = useState(true)
  const [show, setShow] = useState(false)

  const handleShow = (breakpoint) => {
    setFullscreen(breakpoint)
    setShow(true)
}
  const handleClose = () => setShow(false)


  const [submissionError, setSubmissionError] = useState('')


  const currentYear = new Date().getFullYear()

const years = Array.from({ length: 11 }, (_, i) => currentYear + i)

  const [cardNewNumber, setCardNewNumber] = useState('')
const [cardNewHolderName, setCardNewHolderName] = useState('')
const [newSecurityCode, setNewSecurityCode] = useState('')
const [newExpiryMonth, setNewExpiryMonth] = useState('')
const [newExpiryYear, setNewExpiryYear] = useState('')

  const handleCardNewNumberChange = e => {
  const value = e.target.value
  setCardNewNumber(value)
}

const handleCardNewHolderNameChange = e => {
  const value = e.target.value
  setCardNewHolderName(value)
}

const handleNewSecurityCodeChange = e => {
  const value = e.target.value
  setNewSecurityCode(value)
}

const handleNewExpiryMonthChange = e => {
  const value = e.target.value
  setNewExpiryMonth(value)
}

const handleNewExpiryYearChange = e => {
  const value = e.target.value
  setNewExpiryYear(value)
}

  const [selectedOption, setSelectedOption] = useState('Visa')

const handleOptionChange = event => {
  setSelectedOption(event.target.value)
}

  
const handleAddCard = async e => {
  e.preventDefault()
  if (
    !cardNewNumber ||
    !cardNewHolderName ||
    !selectedOption ||
    !newSecurityCode ||
    !newExpiryMonth ||
    !newExpiryYear ||
    !customer.id
  ) {
    setSubmissionError('Error, missing fields make sure all are filled')
    return
  }

  try {
    await ApiService.addNewCustomerCard({
      cardNumber: cardNewNumber,
      cardHolderName: cardNewHolderName,
      cardType: selectedOption,
      securityCode: newSecurityCode,
      expiryMonth: newExpiryMonth,
      expiryYear: newExpiryYear,
      customerId: customer.id
    })

    const response = await ApiService.getCustomerCards(customer.email)
    setCards(response)
    setShow(false)
  } catch (error) {
    console.error('Error adding card:', error)
  }
}

  
  return (
    <>
      <Link to='#' onClick={() => { handleShow(true) }}>
                    <span className='glyphicon glyphicon-plus'></span> Add new
                    card
                  </Link>
      <Modal show={show} fullscreen={fullscreen} onHide={handleClose}>
        <Modal.Header>
          <Modal.Title className="d-flex w-100 justify-content-between">
            Add Card
            <Button variant="light" onClick={handleClose} className="ml-auto pull-right" style={{ border: 'none', backgroundColor: '#23def7' }}>
            <FontAwesomeIcon icon={faTimes} style={{  height:'20px', width:'20px' }} />
          </Button>
          </Modal.Title>
          </Modal.Header>
        <Modal.Body>
          <div >
  <div className='htlfndr-form-block'>
    {submissionError && <p className='error'>{submissionError}</p>}
    <form>
      <div className='htlfndr-form-block-inner'>
        <label className='htlfndr-top-label'>Credit Card Type</label>
        <div id='htlfndr-radio-card' className='ui-buttonset'>
          {/* Visa */}
          <label
            htmlFor='htlfndr-visa'
            className={`ui-button ui-widget ui-state-default ui-button-text-only ui-corner-left ${
              selectedOption === 'Visa' ? 'ui-state-active' : ''
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
              selectedOption === 'Paypal' ? 'ui-state-active' : ''
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
              selectedOption === 'Mastercard' ? 'ui-state-active' : ''
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
              selectedOption === 'American Express' ? 'ui-state-active' : ''
            }`}
            role='button'
            aria-pressed={selectedOption === 'American Express'}
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
              value={cardNewNumber}
              onChange={handleCardNewNumberChange}
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
              value={cardNewHolderName}
              onChange={handleCardNewHolderNameChange}
            />
          </div>
        </div>

        <div className='row'>
          <div className='col-md-6'>
            <label className='htlfndr-top-label htlfndr-required'>
              Expiration date
            </label>
            <div className='htlfndr-small-select htlfndr-input-wrapper'>
              <label htmlFor='htlfndr-card-month-button' className='sr-only'>
                card expiration month
              </label>
              <select
                name='htlfndr-card-month'
                id='htlfndr-card-month'
                value={newExpiryMonth}
                onChange={handleNewExpiryMonthChange}
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
              <label htmlFor='htlfndr-card-year-button' className='sr-only'>
                card expiration year
              </label>
              <select
                value={newExpiryYear}
                onChange={handleNewExpiryYearChange}
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
              value={newSecurityCode}
              onChange={handleNewSecurityCodeChange}
            />
          </div>
        </div>
      </div>
    </form>
  </div>
</div>
        </Modal.Body>
        <Modal.Footer>
  <Button className='btn btn-primary' onClick={handleAddCard}>
    Save Changes
  </Button> 
</Modal.Footer>

      </Modal>
    </>
  )
}

AddCardModal.propTypes = {
  customer: PropTypes.any.isRequired,
  setCards: PropTypes.func.isRequired
}


export default AddCardModal
