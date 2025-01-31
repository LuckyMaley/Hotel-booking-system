import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import Img1 from '../assets/images/visitor-avatar-1.jpg'
import Img2 from '../assets/images/top-destination-1.jpg'
import Img3 from '../assets/images/visitor-avatar-1-1.jpg'
import Img4 from '../assets/images/icon-flag-ukraine.png'
import Img5 from '../assets/images/hotel-4-notinclude.jpg'

function Tabs () {
  const [activeTab, setActiveTab] = useState(0)

  const [reviewCleanliness, setReviewCleanliness] = useState('5')
  const [reviewService, setReviewService] = useState('4')
  const [reviewComfort, setReviewComfort] = useState('4')
  const [reviewCondition, setReviewCondition] = useState('3')

  const handleTabClick = index => {
    setActiveTab(index)
  }

  const [startDate, setStartDate] = useState(null)
  const [endDate, setEndDate] = useState(null)
  const [isStartDatePickerOpen, setStartDatePickerOpen] = useState(false)
  const [isEndDatePickerOpen, setEndDatePickerOpen] = useState(false)

  const [numberOfPersons, setNumberOfPersons] = useState('1 adult')

  const handleSubmit = e => {
    e.preventDefault()
  }

  return (
    <div>
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
                    <td>4 stars</td>
                  </tr>
                  <tr>
                    <th className='htlfndr-scope-row'>Country:</th>
                    <td>USA</td>
                  </tr>
                  <tr>
                    <th className='htlfndr-scope-row'>City:</th>
                    <td>San Francisco</td>
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
                    src={Img1}
                    alt='Hotel Manager'
                  />
                </div>
                <div className='media-body'>
                  <h5>Hotel Manager</h5>
                  <h4 className='media-heading'>Jessica Brown</h4>
                </div>
              </div>
              <blockquote>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Aspernatur, dolores eveniet laboriosam maxime molestias nulla
                  quidem similique. Amet asperiores at esse expedita iusto
                  magni, nam perferendis sequi? Molestias possimus, quasi. Amet
                  asperiores at esse expedita iusto magni, nam perferendis
                  sequi? Molestias possimus, quasi.
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
              onSubmit={handleSubmit}
            >
              <div id='htlfndr-input-date-in' className='htlfndr-input-wrapper'>
                <label htmlFor='htlfndr-date-in' className='sr-only'>
                  Date In
                </label>
                <input
                  type='text'
                  name='htlfndr-date-in'
                  id='htlfndr-date-in'
                  className='search-hotel-input hasDatepicker'
                  placeholder='Date in'
                  value={startDate ? startDate.toLocaleDateString() : ''}
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
                  value={endDate ? endDate.toLocaleDateString() : ''}
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
              <div id='htlfndr-input-4' className='htlfndr-input-wrapper'>
                <label htmlFor='htlfndr-dropdown-button' className='sr-only'>
                  Number of Persons in Room
                </label>
                <select
                  name='htlfndr-dropdown'
                  id='htlfndr-dropdown'
                  className='htlfndr-dropdown ui-selectmenu-button ui-widget ui-state-default ui-corner-all'
                  value={numberOfPersons}
                  onChange={e => setNumberOfPersons(e.target.value)}
                >
                  <option value='1 adult'>1 adult</option>
                  <option value='2 adults in 1 room'>2 adults in 1 room</option>
                  <option value='3 adults in 1 room'>3 adults in 1 room</option>
                  <option value='4 adults in 1 room'>4 adults in 1 room</option>
                  <option value='2 adults in 2 rooms'>
                    2 adults in 2 rooms
                  </option>
                  <option value='need more'>Need more?</option>
                </select>
              </div>
              <div id='htlfndr-input-5' className='htlfndr-input-wrapper'>
                <input type='submit' value='Update' className='btn-default' />
              </div>
              <div className='clearfix'></div>
            </form>
          </aside>
          <section className='htlfndr-available-rooms-section'>
            <header>
              <h3>Available Rooms</h3>
            </header>
            <article className='htlfndr-tab-article htlfndr-second-tab-post'>
              {/* Room 1 */}
              <div>
                <div className='htlfndr-post-thumbnail'>
                  <img src={Img2} alt='Room Pic' />
                </div>
                <div className='htlfndr-post-wrapper'>
                  <header>
                    <h2 className='htlfndr-post-title'>King Family Suite</h2>
                  </header>
                  <h6 className='htlfndr-post-info'>
                    Max Guests: <span className='htlfndr-guests'>7</span> | Max
                    Kids: <span className='htlfndr-kids'>3</span>
                  </h6>
                  <p className='htlfndr-post-excerpt'>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Accusamus alias beatae debitis deserunt eius esse, explicabo
                    facilis hic!
                  </p>
                  <p className='htlfndr-button-block'>
                    <Link
                      className='htlfndr-select-hotel-button'
                      role='button'
                      to='/hotel-room-page'
                    >
                      Select
                    </Link>
                  </p>
                </div>
              </div>

              {/* Room 2 */}
              <div>
                <div className='htlfndr-post-thumbnail'>
                  <img src={Img5} alt='Room Pic' />
                </div>
                <div className='htlfndr-post-wrapper'>
                  <header>
                    <h2 className='htlfndr-post-title'>Twin Room</h2>
                  </header>
                  <h6 className='htlfndr-post-info'>
                    Max Guests: <span className='htlfndr-guests'>7</span> | Max
                    Kids: <span className='htlfndr-kids'>3</span>
                  </h6>
                  <p className='htlfndr-post-excerpt'>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Accusamus alias beatae debitis deserunt eius esse, explicabo
                    facilis hic!
                  </p>
                  <p className='htlfndr-button-block'>
                    <Link
                      className='htlfndr-select-hotel-button'
                      role='button'
                      to='/hotel-room-page'
                    >
                      Select
                    </Link>
                  </p>
                </div>
              </div>

              {/* View All Rooms */}
              <Link to='/search-rooms'>
                <i className='fa fa-eye'></i> View all available rooms
              </Link>
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
              <h3>Amenities of Hilton</h3>
            </header>
            <p className='htlfndr-post-excerpt'>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Accusantium amet, animi consequatur deleniti dignissimos eligendi
              error esse ex illum iusto officia quos unde! Dolore illum iusto
              optio, porro rerum voluptates! Lorem ipsum dolor sit amet,
              consectetur adipisicing elit. Debitis dolorem expedita impedit
              laboriosam minus nemo nulla numquam similique voluptatem!
              Distinctio magnam nesciunt sequi. Error eum molestias neque sunt
              veritatis voluptates!
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
                <i className='fa fa-star htlfndr-star-color'></i>
                <i className='fa fa-star htlfndr-star-color'></i>
                <i className='fa fa-star htlfndr-star-color'></i>
                <i className='fa fa-star htlfndr-star-color'></i>
                <i className='fa fa-star htlfndr-star-color'></i>
              </div>
              <dl>
                <dt>
                  <span>4.8</span> out of 5
                </dt>
                <dd>
                  based on <span>123</span> Reviews
                </dd>
              </dl>
            </div>
            <div className='htlfndr-detailed-rating'>
              <table>
                <tbody>
                  <tr>
                    <th>Room Cleanliness</th>
                    <td className='htlfndr-meter-cell'>
                      <meter
                        className='htlfndr-meter'
                        value='0.75'
                        min='0'
                        max='1'
                      ></meter>
                    </td>
                    <td className='htlfndr-rating-cell'>4.5</td>
                  </tr>
                  <tr>
                    <th>Service & Staff</th>
                    <td className='htlfndr-meter-cell'>
                      <meter
                        className='htlfndr-meter'
                        value='0.6'
                        min='0'
                        max='1'
                      ></meter>
                    </td>
                    <td className='htlfndr-rating-cell'>3</td>
                  </tr>
                  <tr>
                    <th>Room Comfort</th>
                    <td className='htlfndr-meter-cell'>
                      <meter
                        className='htlfndr-meter'
                        value='0.9'
                        min='0'
                        max='1'
                      ></meter>
                    </td>
                    <td className='htlfndr-rating-cell'>4.8</td>
                  </tr>
                  <tr>
                    <th>Hotel Condition</th>
                    <td className='htlfndr-meter-cell'>
                      <meter
                        className='htlfndr-meter'
                        value='0.75'
                        min='0'
                        max='1'
                      ></meter>
                    </td>
                    <td className='htlfndr-rating-cell'>4.5</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className='clearfix'></div>
          <div className='htlfndr-visitor-review'>
            <div className='htlfndr-review-left-side'>
              <div className='htlfndr-visitor-avatar'>
                <img src={Img3} alt='Visitor Photo' />
              </div>
              <div className='htlfndr-visitor-flag'>
                <img src={Img4} alt='Visitor Flag' />
              </div>
              <dl>
                <dt>John Doe</dt>
                <dd>Kiev, Ukraine</dd>
              </dl>
            </div>
            <div className='htlfndr-review-right-side'>
              <article className='htlfndr-visitor-post'>
                <header>
                  <h3>&quot;Tempus vestibulum mus imperdiet nibh sem&quot;</h3>
                  <h6>Posted 12 May 2015</h6>
                </header>
                <div className='htlfndr-rating-stars'>
                  <i className='fa fa-star htlfndr-star-color'></i>
                  <i className='fa fa-star htlfndr-star-color'></i>
                  <i className='fa fa-star htlfndr-star-color'></i>
                  <i className='fa fa-star htlfndr-star-color'></i>
                  <i className='fa fa-star htlfndr-star-color'></i>
                </div>
                <p>
                  Pharetra quis netus vel vehicula class vestibulum nisl donec
                  hendrerit fermentum magna sed amet purus sit nec class sit
                  fringilla tellus volutpat per eget molestie Platea suspendisse
                  eget tortor pharetra magna nam senectus tristique cursus ut
                  odio sollicitudin venenatis natoque dis maecenas magna
                  dignissim sociosqu et sociis accumsan interdum dictum netus
                  quis enim phasellus suscipit nunc donec purus dui himenaeos
                  nulla sociosqu rhoncus dictumst fusce ultricies congue sapien
                  porttitor maecenas fringilla ipsum nam lorem aliquam rhoncus
                  elit himenaeos
                </p>
                <footer>
                  <div className='row'>
                    <div className='col-xs-6 col-sm-6 col-md-5 htlfndr-review-footer-marks'>
                      <h3>Room Cleanliness</h3>
                      <p>
                        <span className='htlfndr-round-mark'>4</span>
                        &emsp;out of 5
                      </p>
                    </div>
                    <div className='col-xs-6 col-sm-6 col-md-7 htlfndr-review-footer-marks'>
                      <h3>Room Comfort</h3>
                      <p>
                        <span className='htlfndr-round-mark'>3</span>
                        &emsp;out of 5
                      </p>
                    </div>
                    <div className='clearfix'></div>
                    <div className='col-xs-6 col-sm-6 col-md-5 htlfndr-review-footer-marks'>
                      <h3>Service & Staff</h3>
                      <p>
                        <span className='htlfndr-round-mark'>2</span>
                        &emsp;out of 5
                      </p>
                    </div>
                    <div className='col-xs-6 col-sm-6 col-md-7 htlfndr-review-footer-marks'>
                      <h3>Hotel Condition</h3>
                      <p>
                        <span className='htlfndr-round-mark'>4</span>
                        &emsp;out of 5
                      </p>
                    </div>
                  </div>
                </footer>
              </article>
            </div>
          </div>
        </div>
        <div
          id='htlfndr-hotel-description-tab-5'
          className={`htlfndr-hotel-description-tab ${
            activeTab === 4 ? 'active' : ''
          }`}
          style={{ display: activeTab === 4 ? 'block' : 'none' }}
        >
          <form method='get' className='htlfndr-review-form'>
            <div className='htlfndr-form-left-side'>
              <label htmlFor='review-title'>Review Title</label>
              <input
                type='text'
                name='review-title'
                id='review-title'
                className='htlfndr-review-form-input'
              />
              <label htmlFor='review-text'>Review Text</label>
              <textarea
                name='review-text'
                id='review-text'
                className='htlfndr-review-form-input'
              ></textarea>
            </div>
            <div className='htlfndr-form-right-side'>
              {/* Room Cleanliness */}
              <div className='htlfndr-radio-set ui-buttonset'>
                <h3>Room Cleanliness</h3>
                {[1, 2, 3, 4, 5].map(num => (
                  <React.Fragment key={`cleanliness-${num}`}>
                    <input
                      type='radio'
                      name='htlfndr-review-radio-cleanliness'
                      id={`htlfndr-review-radio-1-${num}`}
                      value={num}
                      className='ui-helper-hidden-accessible'
                      checked={reviewCleanliness === num.toString()}
                      onChange={e => setReviewCleanliness(e.target.value)}
                    />
                    <label
                      htmlFor={`htlfndr-review-radio-1-${num}`}
                      className={`ui-button ui-widget ui-state-default ui-button-text-only ${
                        num === 1
                          ? 'ui-corner-left'
                          : num === 5
                          ? 'ui-corner-right'
                          : ''
                      } ${
                        reviewCleanliness === num.toString()
                          ? 'ui-state-active'
                          : ''
                      }`}
                      role='button'
                    >
                      <span className='ui-button-text'>{num}</span>
                    </label>
                  </React.Fragment>
                ))}
              </div>

              {/* Service & Staff */}
              <div className='htlfndr-radio-set ui-buttonset'>
                <h3>Service & Staff</h3>
                {[1, 2, 3, 4, 5].map(num => (
                  <React.Fragment key={`service-${num}`}>
                    <input
                      type='radio'
                      name='htlfndr-review-radio-service'
                      id={`htlfndr-review-radio-2-${num}`}
                      value={num}
                      className='ui-helper-hidden-accessible'
                      checked={reviewService === num.toString()}
                      onChange={e => setReviewService(e.target.value)}
                    />
                    <label
                      htmlFor={`htlfndr-review-radio-2-${num}`}
                      className={`ui-button ui-widget ui-state-default ui-button-text-only ${
                        num === 1
                          ? 'ui-corner-left'
                          : num === 5
                          ? 'ui-corner-right'
                          : ''
                      } ${
                        reviewService === num.toString()
                          ? 'ui-state-active'
                          : ''
                      }`}
                      role='button'
                    >
                      <span className='ui-button-text'>{num}</span>
                    </label>
                  </React.Fragment>
                ))}
              </div>

              {/* Room Comfort */}
              <div className='htlfndr-radio-set ui-buttonset'>
                <h3>Room Comfort</h3>
                {[1, 2, 3, 4, 5].map(num => (
                  <React.Fragment key={`comfort-${num}`}>
                    <input
                      type='radio'
                      name='htlfndr-review-radio-comfort'
                      id={`htlfndr-review-radio-3-${num}`}
                      value={num}
                      className='ui-helper-hidden-accessible'
                      checked={reviewComfort === num.toString()}
                      onChange={e => setReviewComfort(e.target.value)}
                    />
                    <label
                      htmlFor={`htlfndr-review-radio-3-${num}`}
                      className={`ui-button ui-widget ui-state-default ui-button-text-only ${
                        num === 1
                          ? 'ui-corner-left'
                          : num === 5
                          ? 'ui-corner-right'
                          : ''
                      } ${
                        reviewComfort === num.toString()
                          ? 'ui-state-active'
                          : ''
                      }`}
                      role='button'
                    >
                      <span className='ui-button-text'>{num}</span>
                    </label>
                  </React.Fragment>
                ))}
              </div>

              {/* Hotel Condition */}
              <div className='htlfndr-radio-set ui-buttonset'>
                <h3>Hotel Condition</h3>
                {[1, 2, 3, 4, 5].map(num => (
                  <React.Fragment key={`condition-${num}`}>
                    <input
                      type='radio'
                      name='htlfndr-review-radio-condition'
                      id={`htlfndr-review-radio-4-${num}`}
                      value={num}
                      className='ui-helper-hidden-accessible'
                      checked={reviewCondition === num.toString()}
                      onChange={e => setReviewCondition(e.target.value)}
                    />
                    <label
                      htmlFor={`htlfndr-review-radio-4-${num}`}
                      className={`ui-button ui-widget ui-state-default ui-button-text-only ${
                        num === 1
                          ? 'ui-corner-left'
                          : num === 5
                          ? 'ui-corner-right'
                          : ''
                      } ${
                        reviewCondition === num.toString()
                          ? 'ui-state-active'
                          : ''
                      }`}
                      role='button'
                    >
                      <span className='ui-button-text'>{num}</span>
                    </label>
                  </React.Fragment>
                ))}
              </div>
            </div>

            <div className='clearfix'></div>
            <input
              type='submit'
              value='Leave a Review'
              className='btn-default'
            />
          </form>
        </div>
        {/* Button to Top */}
        {activeTab === 3 || activeTab === 4 ? (
          <button
            className='htlfndr-button-to-top'
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            ↑ Top
          </button>
        ) : null}
      </section>
    </div>
  )
}

export default Tabs
