import { faTimes } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import PropTypes from 'prop-types'
import { useState } from 'react'
import { Modal, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import ApiService from './services/ApiService'

const EditCardModal = ({ card, setCards, customer }) => {
  const [fullscreenModal, setFullscreenModal] = useState(true)
  const [showModal, setShowModal] = useState(false)

const handleShowModal = breakpoint => {
  setFullscreenModal(breakpoint)
  setShowModal(true)
}
  const handleCloseModal = () => {
    setShowModal(false)
  }


  const [submissionError, setSubmissionError] = useState('')

  const [selectedOption, setSelectedOption] = useState('Visa')

  const handleOptionChange = event => {
    setSelectedOption(event.target.value)
  }

  const currentYear = new Date().getFullYear()

  const years = Array.from({ length: 11 }, (_, i) => currentYear + i)
  const [editingCardId, setEditingCardId] = useState('')

  const [cardNumber, setCardNumber] = useState('')
  const [cardHolderName, setCardHolderName] = useState('')
  const [securityCode, setSecurityCode] = useState('')
  const [expiryMonth, setExpiryMonth] = useState('')
  const [expiryYear, setExpiryYear] = useState('')

  const handleCardNumberChange = e => {
    const value = e.target.value
    setCardNumber(value)
  }

  const handleCardHolderNameChange = e => {
    const value = e.target.value
    setCardHolderName(value)
  }

  const handleSecurityCodeChange = e => {
    const value = e.target.value
    setSecurityCode(value)
  }

  const handleExpiryMonthChange = e => {
    const value = e.target.value
    setExpiryMonth(value)
  }

  const handleExpiryYearChange = e => {
    const value = e.target.value
    setExpiryYear(value)
  }

  const handleEditCard = async e => {
    e.preventDefault()
    if (
      !cardNumber ||
      !cardHolderName ||
      !selectedOption ||
      !securityCode ||
      !expiryMonth ||
      !expiryYear ||
      !customer.id
    ) {
      setSubmissionError('Error, missing fields make sure all are filled')
      return
    }
    try {
      await ApiService.editCard(editingCardId, {
        cardNumber: cardNumber,
        cardHolderName: cardHolderName,
        cardType: selectedOption,
        securityCode: securityCode,
        expiryMonth: expiryMonth,
        expiryYear: expiryYear,
        customerId: customer.id
      })
      const response = await ApiService.getCustomerCards(customer.email)
      setCards(response)
      setShowModal(false)
    } catch (error) {
      console.error('Error editing card:', error)
    }
  }

  const handleEditButtonClick = card => {
    setEditingCardId(card.id)
    setSelectedOption(card.cardType)
    setCardNumber(card.cardNumber)
    setCardHolderName(card.cardHolderName)
    setSecurityCode(card.securityCode)
    setExpiryMonth(card.expiryMonth)
    setExpiryYear(card.expiryYear)
    handleShowModal(true)
  }

  return (
    <>
      <Link
        className='glyphicon glyphicon-pencil'
        to='#'
        onClick={() => {
          handleEditButtonClick(card)
        }}
      ></Link>
      <Modal show={showModal} fullscreen={fullscreenModal} onHide={handleCloseModal}>
        <Modal.Header>
          <Modal.Title className='d-flex w-100 justify-content-between'>
            Edit Card
            <Button
              variant='light'
              onClick={handleCloseModal}
              className='ml-auto pull-right'
              style={{ border: 'none', backgroundColor: '#23def7' }}
            >
              <FontAwesomeIcon
                icon={faTimes}
                style={{ height: '20px', width: '20px' }}
              />
            </Button>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>
            <div className='htlfndr-form-block'>
              {submissionError && <p className='error'>{submissionError}</p>}
              <form>
                <div className='htlfndr-form-block-inner'>
                  <label className='htlfndr-top-label'>Credit Card Type</label>
                  <div id='htlfndr-radio-card-1' className='ui-buttonset'>
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
                      id='htlfndr-visa-1'
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
                      id='htlfndr-paypal-1'
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
                      id='htlfndr-mastercard-1'
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
                      aria-pressed={selectedOption === 'American Express'}
                    >
                      <span className='ui-button-text'></span>
                    </label>
                    <input
                      type='radio'
                      name='htlfndr-card'
                      id='htlfndr-amex-1'
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
                        onChange={handleCardNumberChange}
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
                        onChange={handleCardHolderNameChange}
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
                          id='htlfndr-card-month-1'
                          value={expiryMonth}
                          onChange={handleExpiryMonthChange}
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
                          value={expiryYear}
                          onChange={handleExpiryYearChange}
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
                        onChange={handleSecurityCodeChange}
                      />
                    </div>
                  </div>
                  <input type='submit' value='Save edit' />
                </div>
              </form>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button className='btn btn-primary' onClick={handleEditCard}>
            Save Changes
          </Button>{' '}
        </Modal.Footer>
      </Modal>
    </>
  )
}

EditCardModal.propTypes = {
  card: PropTypes.shape({
    id: PropTypes.number.isRequired,
    cardNumber: PropTypes.string.isRequired,
    cardHolderName: PropTypes.string.isRequired,
    cardType: PropTypes.string.isRequired,
    securityCode: PropTypes.string.isRequired,
    expiryMonth: PropTypes.string.isRequired,
    expiryYear: PropTypes.string.isRequired
  }).isRequired,
  customer: PropTypes.any.isRequired,
  setCards: PropTypes.func.isRequired
}

export default EditCardModal
