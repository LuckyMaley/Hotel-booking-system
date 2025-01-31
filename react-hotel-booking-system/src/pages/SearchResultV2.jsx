import { useState } from 'react'
import { Link } from 'react-router-dom'
import Img1 from '../assets/images/top-destination-1.jpg'
import Img2 from '../assets/images/5690083711_44634c54f8_b.jpg'
import Img3 from '../assets/images/1158353197.jpg'
import Img4 from '../assets/images/83890-Web1.jpg'
import Img5 from '../assets/images/hotel-4-notinclude.jpg'
import Img6 from '../assets/images/29775-vannaya-komnata-plastikom.jpg'
import Img7 from '../assets/images/5053563227_ee0db21ca5_b.jpg'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import ReactSlider from 'react-slider'

const SearchResultV2 = () => {

  const [priceRange, setPriceRange] = useState([100, 1000])
  const handleSliderChange = values => {
    setPriceRange(values)
  }

  const [rating, setRating] = useState(3)

  const handleRatingClick = newRating => {
    setRating(newRating)
  }

  const [startDate, setStartDate] = useState(null)
const [endDate, setEndDate] = useState(null)
const [isStartDatePickerOpen, setStartDatePickerOpen] = useState(false)
const [isEndDatePickerOpen, setEndDatePickerOpen] = useState(false)

const [numberOfPersons, setNumberOfPersons] = useState('1 adult')


  return (
    <div>
      <div className='container'>
        <div className='htlfndr-steps'>
          <ul className='htlfndr-progress'>
            <li className='htlfndr-active-step'>
              <span className='htlfndr-step-number'>1</span>
              <span className='htlfndr-step-description'>results</span>
            </li>
            <li>
              <span className='htlfndr-step-number'>2</span>
              <span className='htlfndr-step-description'>hotel</span>
            </li>
            <li>
              <span className='htlfndr-step-number'>3</span>
              <span className='htlfndr-step-description'>room</span>
            </li>
            <li>
              <span className='htlfndr-step-number'>4</span>
              <span className='htlfndr-step-description'>payment</span>
            </li>
          </ul>
        </div>
        <aside style={{position: 'relative', zIndex: '1'}}
  className="htlfndr-sidebar htlfndr-sidebar-in-top htlfndr-full-form"
  role="search"
>
  <div className="htlfndr-form-light container">
    <form name="search-hotel" id="search-hotel" className="htlfndr-search-form">
      <div id="htlfndr-input-1" className="htlfndr-input-wrapper">
        <input
          type="text"
          name="htlfndr-city"
          id="htlfndr-city"
          className="search-hotel-input"
          placeholder="Enter city, region or district"
        />
      </div>
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
                <DatePicker style={{ zIndex: 1000}}
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
                  popperPlacement='bottom-start'
                  popperModifiers={{
            preventOverflow: {
              enabled: true,
              boundariesElement: 'viewport',
            },
          }}
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
                <DatePicker style={{ zIndex: 1000}}
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
                  popperPlacement='bottom-start'
                  popperModifiers={{
            preventOverflow: {
              enabled: true,
              boundariesElement: 'viewport', // Ensures it stays in the viewport
            },
          }}
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
      <div id="htlfndr-input-4" className="htlfndr-input-wrapper">
        <label htmlFor="htlfndr-dropdown-button" className="sr-only"
          >Number person in room</label
        >
        <select
                  name='htlfndr-dropdown'
                  id='htlfndr-dropdown'
                  className='htlfndr-dropdown ui-selectmenu-button ui-widget ui-state-default ui-corner-all'
                  value={numberOfPersons}
                  onChange={e => setNumberOfPersons(e.target.value)}
                >
          <option value="1 adult">1 adult</option>
          <option value="2 adults in 1 room">2 adults in 1 room</option>
          <option value="3 adults in 1 room">3 adults in 1 room</option>
          <option value="4 adults in 1 room">4 adults in 1 room</option>
          <option value="2 adults in 2 room">2 adults in 2 room</option>
          <option value="need more">Need more?</option></select
        >
      </div>
      <div id="htlfndr-input-5"><input type="submit" value="search" /></div>
      <div className="clearfix"></div>
    </form>
  </div>
</aside>

        <div className='row'>
          <aside
            className='col-sm-4 col-md-3 col-lg-3 htlfndr-sidebar htlfndr-sidebar-in-left'
            role='complementary'
          >
            <div className='htlfndr-search-details widget'>
              <h3 className='widget-title'>details</h3>
              <div className='htlfndr-widget-content'>
                <form name='search-hotel-details' id='search-hotel-details'>
                  <label
                    htmlFor='htlfndr-price-show'
                    className='htlfndr-input-label'
                  >
                    Price
                  </label>
                  <div
                    id='htlfndr-price-slider'
                    className='ui-slider ui-slider-horizontal ui-widget ui-widget-content ui-corner-all'
                  >
                    <ReactSlider
                      className='horizontal-slider'
                      thumbClassName='ui-slider-handle ui-state-default ui-corner-all'
                      trackClassName='ui-slider-range ui-widget-header ui-corner-all'
                      min={0}
                      max={2000}
                      step={10}
                      value={priceRange}
                      onChange={handleSliderChange}
                    />
                  </div>

                  <div className='price-display'>
                    <input
                      type='text'
                      id='htlfndr-price-show'
                      readOnly
                      value={`$${priceRange[0]} - $${priceRange[1]}`}
                    />
                  </div>

                  <input
                    type='hidden'
                    name='htlfndr-price-start'
                    id='htlfndr-price-start'
                    value={priceRange[0]}
                  />
                  <input
                    type='hidden'
                    name='htlfndr-price-stop'
                    id='htlfndr-price-stop'
                    value={priceRange[1]}
                  />
                  <p className='htlfndr-input-label'>User Rating</p>
                  <div className='htlfndr-user-rating' data-rating={rating}>
                    {[1, 2, 3, 4, 5].map(star => (
                      <i
                        key={star}
                        className={`fa fa-star ${
                          star <= rating ? '' : 'htlfndr-empty-star'
                        }`}
                        onClick={() => handleRatingClick(star)} // Handle star click
                        style={{ cursor: 'pointer' }} // Add a pointer cursor for clickability
                      ></i>
                    ))}
                  </div>
                  <input
                    type='hidden'
                    name='htlfndr-rating'
                    id='htlfndr-rating'
                    value={rating}
                  />
                  <p className='htlfndr-input-label'>accomodation type</p>
                  <p className='htlfndr-checkbox-line'>
                    <label className='switch-label-check'>
                      <input
                        type='checkbox'
                        id='htlfndr-check-apartment'
                        name='htlfndr-check-apartment'
                        style={{ display: 'none' }}
                      />
                      <span className='switch'></span>
                    </label>
                    <label htmlFor='htlfndr-check-apartment'>
                      apartment <span>(5)</span>
                    </label>
                  </p>
                  <p className='htlfndr-checkbox-line'>
                    <label className='switch-label-check'>
                      <input
                        type='checkbox'
                        id='htlfndr-check-hostel'
                        name='htlfndr-check-hostel'
                        style={{ display: 'none' }}
                      />
                      <span className='switch'></span>
                    </label>
                    <label htmlFor='htlfndr-check-hostel'>
                      hostel <span>(5)</span>
                    </label>
                  </p>
                  <p className='htlfndr-checkbox-line'>
                    <label className='switch-label-check'>
                      <input
                        type='checkbox'
                        id='htlfndr-check-hotel'
                        name='htlfndr-check-hotel'
                        disabled='disabled'
                        checked='checked'
                        style={{ display: 'none' }}
                      />
                      <span className='switch'></span>
                    </label>
                    <label
                      htmlFor='htlfndr-check-hotel'
                      className='label-of-disabled-check'
                    >
                      hotel <span>(15)</span>
                    </label>
                  </p>
                  <p className='htlfndr-input-label'>amenities</p>
                  <p className='htlfndr-checkbox-line'>
                    <label className='switch-label-check'>
                      <input
                        type='checkbox'
                        id='htlfndr-check-television'
                        name='htlfndr-check-television'
                        style={{ display: 'none' }}
                      />
                      <span className='switch'></span>
                    </label>
                    <label htmlFor='htlfndr-check-television'>television</label>
                  </p>
                  <p className='htlfndr-checkbox-line'>
                    <label className='switch-label-check'>
                      <input
                        type='checkbox'
                        id='htlfndr-check-wi-fi'
                        name='htlfndr-check-wi-fi'
                        style={{ display: 'none' }}
                      />
                      <span className='switch'></span>
                    </label>
                    <label htmlFor='htlfndr-check-wi-fi'>Wi-Fi</label>
                  </p>
                  <p className='htlfndr-checkbox-line'>
                    <label className='switch-label-check'>
                      <input
                        type='checkbox'
                        id='htlfndr-check-swimming-pool'
                        name='htlfndr-check-swimming-pool'
                        disabled='disabled'
                        checked='checked'
                        style={{ display: 'none' }}
                      />
                      <span className='switch'></span>
                    </label>
                    <label
                      htmlFor='htlfndr-check-swimming-pool'
                      className='label-of-disabled-check'
                    >
                      swimming pool
                    </label>
                  </p>
                  <p className='htlfndr-checkbox-line'>
                    <label className='switch-label-check'>
                      <input
                        type='checkbox'
                        id='htlfndr-check-smoking-allowed'
                        name='htlfndr-check-smoking-allowed'
                        disabled='disabled'
                        checked='checked'
                        style={{ display: 'none' }}
                      />
                      <span className='switch'></span>
                    </label>
                    <label
                      htmlFor='htlfndr-check-smoking-allowed'
                      className='label-of-disabled-check'
                    >
                      smoking allowed
                    </label>
                  </p>
                  <p className='htlfndr-checkbox-line'>
                    <label className='switch-label-check'>
                      <input
                        type='checkbox'
                        id='htlfndr-check-wine-bar'
                        name='htlfndr-check-wine-bar'
                        disabled='disabled'
                        checked='checked'
                        style={{ display: 'none' }}
                      />
                      <span className='switch'></span>
                    </label>
                    <label
                      htmlFor='htlfndr-check-wine-bar'
                      className='label-of-disabled-check'
                    >
                      wine bar
                    </label>
                  </p>
                  <p className='htlfndr-checkbox-line'>
                    <label className='switch-label-check'>
                      <input
                        type='checkbox'
                        id='htlfndr-check-hot-tub'
                        name='htlfndr-check-hot-tub'
                        disabled='disabled'
                        checked='checked'
                        style={{ display: 'none' }}
                      />
                      <span className='switch'></span>
                    </label>
                    <label
                      htmlFor='htlfndr-check-hot-tub'
                      className='label-of-disabled-check'
                    >
                      hot tub
                    </label>
                  </p>
                  <p className='htlfndr-checkbox-line'>
                    <label className='switch-label-check'>
                      <input
                        type='checkbox'
                        id='htlfndr-check-air-conditioning'
                        name='htlfndr-check-air-conditioning'
                        disabled='disabled'
                        checked='checked'
                        style={{ display: 'none' }}
                      />
                      <span className='switch'></span>
                    </label>
                    <label
                      htmlFor='htlfndr-check-air-conditioning'
                      className='label-of-disabled-check'
                    >
                      air conditioning
                    </label>
                  </p>
                  <p className='htlfndr-checkbox-line'>
                    <label className='switch-label-check'>
                      <input
                        type='checkbox'
                        id='htlfndr-check-breakfast'
                        name='htlfndr-check-breakfast'
                        disabled='disabled'
                        checked='checked'
                        style={{ display: 'none' }}
                      />
                      <span className='switch'></span>
                    </label>
                    <label
                      htmlFor='htlfndr-check-breakfast'
                      className='label-of-disabled-check'
                    >
                      breakfast
                    </label>
                  </p>
                  <p className='htlfndr-checkbox-line'>
                    <label className='switch-label-check'>
                      <input
                        type='checkbox'
                        id='htlfndr-check-free-parking'
                        name='htlfndr-check-free-parking'
                        disabled='disabled'
                        checked='checked'
                        style={{ display: 'none' }}
                      />
                      <span className='switch'></span>
                    </label>
                    <label
                      htmlFor='htlfndr-check-free-parking'
                      className='label-of-disabled-check'
                    >
                      free parking
                    </label>
                  </p>
                </form>
              </div>
            </div>
          </aside>
          <main
            className='col-sm-8 col-md-9 col-lg-9 htlfndr-search-result htlfndr-grid-view'
            role='main'
          >
            <h2 className='htlfndr-search-result-title'>
              <span>125</span> results found
            </h2>
            <div className='htlfndr-search-result-sorting row'>
              <div className='col-md-12'>
                <div className='dropdown htlfndr-sort'>
                  <Link
                    className='dropdown-toggle'
                    id='htlfndr-sort-1'
                    data-toggle='dropdown'
                    aria-haspopup='true'
                    aria-expanded='false'
                    role='button'
                  >
                    Sort by
                  </Link>
                  <ul
                    className='dropdown-menu'
                    aria-labelledby='htlfndr-sort-1'
                  >
                    <li>
                      <Link to='#' id='htlfndr-sort-by-price'>
                        price
                      </Link>
                    </li>
                    <li>
                      <Link to='#' id='htlfndr-sort-by-rating'>
                        rating
                      </Link>
                    </li>
                    <li>
                      <Link to='#' id='htlfndr-sort-by-popular'>
                        popular
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className='dropdown htlfndr-show-number-hotels'>
                  <Link
                    className='dropdown-toggle'
                    id='htlfndr-sort-2'
                    data-toggle='dropdown'
                    aria-haspopup='true'
                    aria-expanded='false'
                    role='button'
                  >
                    Show <span>9 items</span>
                  </Link>
                  <ul
                    className='dropdown-menu'
                    aria-labelledby='htlfndr-sort-2'
                  >
                    <li>
                      <Link to='#' id='htlfndr-show-9' data-number='9'>
                        9 items
                      </Link>
                    </li>
                    <li>
                      <Link to='#' id='htlfndr-show-18' data-number='18'>
                        18 items
                      </Link>
                    </li>
                    <li>
                      <Link to='#' id='htlfndr-show-27' data-number='27'>
                        27 items
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className='htlfndr-view'>
                  <button
                    id='htlfndr-grid'
                    className='htlfndr-active'
                    data-toggle='tooltip'
                    data-placement='top'
                    title=''
                    role='button'
                    data-original-title='Grid view'
                  >
                    <span></span> <span></span> <span></span> <span></span>
                  </button>
                  <button
                    id='htlfndr-row'
                    data-toggle='tooltip'
                    data-placement='top'
                    title=''
                    role='button'
                    data-original-title='Row view'
                  >
                    <span></span> <span></span> <span></span>
                  </button>
                </div>
              </div>
            </div>
            <section className='row htlfndr-search-result-content'>
              <div className='col-md-4 htlfndr-hotel-post-wrapper'>
                <div className='htlfndr-hotel-post'>
                  <Link to='/hotel-page-v1' className='htlfndr-hotel-thumbnail'>
                    <img src={Img1} alt='pic' />
                  </Link>
                  <div className='htlfndr-hotel-description'>
                    <div className='htlfndr-description-content'>
                      <h2 className='htlfndr-entry-title'>
                        <Link to='/hotel-page-v1'>King Size Bedroom</Link>
                      </h2>
                      <div className='htlfndr-rating-stars' data-rating='5'>
                        <i className='fa fa-star htlfndr-star-color'></i>&nbsp;
                        <i className='fa fa-star htlfndr-star-color'></i>&nbsp;
                        <i className='fa fa-star htlfndr-star-color'></i>&nbsp;
                        <i className='fa fa-star htlfndr-star-color'></i>&nbsp;
                        <i className='fa fa-star htlfndr-star-color'></i>&nbsp;
                        <p className='htlfndr-hotel-reviews'>
                          (<span>188</span> reviews)
                        </p>
                      </div>
                      <h5 className='htlfndr-hotel-location'>
                        <Link to='#'>
                          <i className='fa fa-map-marker'></i>san francisco
                          united states
                        </Link>
                      </h5>
                      <p className='htlfndr-last-booking'>
                        Last booking: <span>14</span> hours ago
                      </p>
                    </div>
                    <Link
                      to='/hotel-page-v1'
                      role='button'
                      className='htlfndr-select-hotel-button'
                    >
                      select
                    </Link>
                    <div className='htlfndr-hotel-price'>
                      <span className='htlfndr-from'>from</span>
                      <span className='htlfndr-cost'>$ 100</span>
                      <span className='htlfndr-per-night'>per night</span>
                      <span className='cost'>100</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className='col-md-4 htlfndr-hotel-post-wrapper'>
                <div className='htlfndr-hotel-post'>
                  <Link to='/hotel-page-v3' className='htlfndr-hotel-thumbnail'>
                    <img src={Img2} alt='pic' />
                  </Link>
                  <div className='htlfndr-hotel-description'>
                    <div className='htlfndr-description-content'>
                      <h2 className='htlfndr-entry-title'>
                        <Link to='/hotel-page-v3'>Awesome Suits</Link>
                      </h2>
                      <div className='htlfndr-rating-stars' data-rating='4'>
                        <i className='fa fa-star htlfndr-star-color'></i>
                        <i className='fa fa-star htlfndr-star-color'></i>
                        <i className='fa fa-star htlfndr-star-color'></i>
                        <i className='fa fa-star htlfndr-star-color'></i>
                        <i className='fa fa-star'></i>
                        <p className='htlfndr-hotel-reviews'>
                          (<span>128</span> reviews)
                        </p>
                      </div>
                      <h5 className='htlfndr-hotel-location'>
                        <Link to='#'>
                          <i className='fa fa-map-marker'></i>paris france
                        </Link>
                      </h5>
                      <p className='htlfndr-last-booking'>
                        Last booking: <span>14</span> hours ago
                      </p>
                    </div>
                    <Link
                      to='/hotel-page-v3'
                      role='button'
                      className='htlfndr-select-hotel-button'
                    >
                      select
                    </Link>
                    <div className='htlfndr-hotel-price'>
                      <span className='htlfndr-from'>from</span>
                      <span className='htlfndr-cost'>$ 250</span>
                      <span className='htlfndr-per-night'>per night</span>
                      <span className='cost'>250</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className='col-md-4 htlfndr-hotel-post-wrapper'>
                <div className='htlfndr-hotel-post special-offer'>
                  <Link to='/hotel-page-v4' className='htlfndr-hotel-thumbnail'>
                    <img src={Img3} alt='pic' />
                  </Link>
                  <div className='htlfndr-hotel-description'>
                    <div className='htlfndr-description-content'>
                      <h2 className='htlfndr-entry-title'>
                        <Link to='/hotel-page-v4'>Ruzzini Palace Hotel</Link>
                      </h2>
                      <div className='htlfndr-rating-stars' data-rating='3'>
                        <i className='fa fa-star htlfndr-star-color'></i>
                        <i className='fa fa-star htlfndr-star-color'></i>
                        <i className='fa fa-star htlfndr-star-color'></i>
                        <i className='fa fa-star'></i>{' '}
                        <i className='fa fa-star'></i>
                        <p className='htlfndr-hotel-reviews'>
                          (<span>118</span> reviews)
                        </p>
                      </div>
                      <h5 className='htlfndr-hotel-location'>
                        <Link to='#'>
                          <i className='fa fa-map-marker'></i>san francisco
                          united states
                        </Link>
                      </h5>
                      <p className='htlfndr-last-booking'>
                        Last booking: <span>14</span> hours ago
                      </p>
                    </div>
                    <Link
                      to='/hotel-page-v4'
                      role='button'
                      className='htlfndr-select-hotel-button'
                    >
                      select
                    </Link>
                    <div className='htlfndr-hotel-price'>
                      <span className='htlfndr-special'>special offer</span>
                      <span className='htlfndr-from'>from</span>
                      <span className='htlfndr-cost'>$ 280</span>
                      <span className='htlfndr-per-night'>per night</span>
                      <span className='cost'>280</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className='col-md-4 htlfndr-hotel-post-wrapper'>
                <div className='htlfndr-hotel-post'>
                  <Link to='/hotel-page-v1' className='htlfndr-hotel-thumbnail'>
                    <img src={Img4} alt='pic' />
                  </Link>
                  <div className='htlfndr-hotel-description'>
                    <div className='htlfndr-description-content'>
                      <h2 className='htlfndr-entry-title'>
                        <Link to='/hotel-page-v1'>Aqua Palace</Link>
                      </h2>
                      <div className='htlfndr-rating-stars' data-rating='4'>
                        <i className='fa fa-star htlfndr-star-color'></i>
                        <i className='fa fa-star htlfndr-star-color'></i>
                        <i className='fa fa-star htlfndr-star-color'></i>
                        <i className='fa fa-star htlfndr-star-color'></i>
                        <i className='fa fa-star'></i>
                        <p className='htlfndr-hotel-reviews'>
                          (<span>88</span> reviews)
                        </p>
                      </div>
                      <h5 className='htlfndr-hotel-location'>
                        <Link to='#'>
                          <i className='fa fa-map-marker'></i>san francisco
                          united states
                        </Link>
                      </h5>
                      <p className='htlfndr-last-booking'>
                        Last booking: <span>14</span> hours ago
                      </p>
                    </div>
                    <Link
                      to='/hotel-page-v1'
                      role='button'
                      className='htlfndr-select-hotel-button'
                    >
                      select
                    </Link>
                    <div className='htlfndr-hotel-price'>
                      <span className='htlfndr-from'>from</span>
                      <span className='htlfndr-cost'>$ 200</span>
                      <span className='htlfndr-per-night'>per night</span>
                      <span className='cost'>200</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className='col-md-4 htlfndr-hotel-post-wrapper'>
                <div className='htlfndr-hotel-post'>
                  <Link to='/hotel-page-v3' className='htlfndr-hotel-thumbnail'>
                    <img src={Img5} alt='pic' />
                  </Link>
                  <div className='htlfndr-hotel-description'>
                    <div className='htlfndr-description-content'>
                      <h2 className='htlfndr-entry-title'>
                        <Link to='/hotel-page-v3'>Foscari Palace</Link>
                      </h2>
                      <div className='htlfndr-rating-stars' data-rating='5'>
                        <i className='fa fa-star htlfndr-star-color'></i>
                        <i className='fa fa-star htlfndr-star-color'></i>
                        <i className='fa fa-star htlfndr-star-color'></i>
                        <i className='fa fa-star htlfndr-star-color'></i>
                        <i className='fa fa-star htlfndr-star-color'></i>
                        <p className='htlfndr-hotel-reviews'>
                          (<span>178</span> reviews)
                        </p>
                      </div>
                      <h5 className='htlfndr-hotel-location'>
                        <Link to='#'>
                          <i className='fa fa-map-marker'></i>paris france
                        </Link>
                      </h5>
                      <p className='htlfndr-last-booking'>
                        Last booking: <span>14</span> hours ago
                      </p>
                    </div>
                    <Link
                      to='/hotel-page-v3'
                      role='button'
                      className='htlfndr-select-hotel-button'
                    >
                      select
                    </Link>
                    <div className='htlfndr-hotel-price'>
                      <span className='htlfndr-from'>from</span>
                      <span className='htlfndr-cost'>$ 250</span>
                      <span className='htlfndr-per-night'>per night</span>
                      <span className='cost'>250</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className='col-md-4 htlfndr-hotel-post-wrapper'>
                <div className='htlfndr-hotel-post'>
                  <Link to='/hotel-page-v1' className='htlfndr-hotel-thumbnail'>
                    <img src={Img3} alt='pic' />
                  </Link>
                  <div className='htlfndr-hotel-description'>
                    <div className='htlfndr-description-content'>
                      <h2 className='htlfndr-entry-title'>
                        <Link to='/hotel-page-v1'>Ruzzini Palace Hotel</Link>
                      </h2>
                      <div className='htlfndr-rating-stars' data-rating='3'>
                        <i className='fa fa-star htlfndr-star-color'></i>
                        <i className='fa fa-star htlfndr-star-color'></i>
                        <i className='fa fa-star htlfndr-star-color'></i>
                        <i className='fa fa-star'></i>{' '}
                        <i className='fa fa-star'></i>
                        <p className='htlfndr-hotel-reviews'>
                          (<span>177</span> reviews)
                        </p>
                      </div>
                      <h5 className='htlfndr-hotel-location'>
                        <Link to='#'>
                          <i className='fa fa-map-marker'></i>san francisco
                          united states
                        </Link>
                      </h5>
                      <p className='htlfndr-last-booking'>
                        Last booking: <span>14</span> hours ago
                      </p>
                    </div>
                    <Link
                      to='/hotel-page-v1'
                      role='button'
                      className='htlfndr-select-hotel-button'
                    >
                      select
                    </Link>
                    <div className='htlfndr-hotel-price'>
                      <span className='htlfndr-from'>from</span>
                      <span className='htlfndr-cost'>$ 300</span>
                      <span className='htlfndr-per-night'>per night</span>
                      <span className='cost'>300</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className='col-md-4 htlfndr-hotel-post-wrapper'>
                <div className='htlfndr-hotel-post'>
                  <Link to='/hotel-page-v3' className='htlfndr-hotel-thumbnail'>
                    <img src={Img6} alt='pic' />
                  </Link>
                  <div className='htlfndr-hotel-description'>
                    <div className='htlfndr-description-content'>
                      <h2 className='htlfndr-entry-title'>
                        <Link to='/hotel-page-v3'>Hotel Alpina</Link>
                      </h2>
                      <div className='htlfndr-rating-stars' data-rating='5'>
                        <i className='fa fa-star htlfndr-star-color'></i>
                        <i className='fa fa-star htlfndr-star-color'></i>
                        <i className='fa fa-star htlfndr-star-color'></i>
                        <i className='fa fa-star htlfndr-star-color'></i>
                        <i className='fa fa-star htlfndr-star-color'></i>
                        <p className='htlfndr-hotel-reviews'>
                          (<span>181</span> reviews)
                        </p>
                      </div>
                      <h5 className='htlfndr-hotel-location'>
                        <Link to='#'>
                          <i className='fa fa-map-marker'></i>san francisco
                          united states
                        </Link>
                      </h5>
                      <p className='htlfndr-last-booking'>
                        Last booking: <span>14</span> hours ago
                      </p>
                    </div>
                    <Link
                      to='/hotel-page-v3'
                      role='button'
                      className='htlfndr-select-hotel-button'
                    >
                      select
                    </Link>
                    <div className='htlfndr-hotel-price'>
                      <span className='htlfndr-from'>from</span>
                      <span className='htlfndr-cost'>$ 200</span>
                      <span className='htlfndr-per-night'>per night</span>
                      <span className='cost'>200</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className='col-md-4 htlfndr-hotel-post-wrapper'>
                <div className='htlfndr-hotel-post'>
                  <Link to='/hotel-page-v1' className='htlfndr-hotel-thumbnail'>
                    <img src={Img4} alt='pic' />
                  </Link>
                  <div className='htlfndr-hotel-description'>
                    <div className='htlfndr-description-content'>
                      <h2 className='htlfndr-entry-title'>
                        <Link to='/hotel-page-v1'>Hilton Hotel</Link>
                      </h2>
                      <div className='htlfndr-rating-stars' data-rating='5'>
                        <i className='fa fa-star htlfndr-star-color'></i>
                        <i className='fa fa-star htlfndr-star-color'></i>
                        <i className='fa fa-star htlfndr-star-color'></i>
                        <i className='fa fa-star htlfndr-star-color'></i>
                        <i className='fa fa-star htlfndr-star-color'></i>
                        <p className='htlfndr-hotel-reviews'>
                          (<span>98</span> reviews)
                        </p>
                      </div>
                      <h5 className='htlfndr-hotel-location'>
                        <Link to='#'>
                          <i className='fa fa-map-marker'></i>paris france
                        </Link>
                      </h5>
                      <p className='htlfndr-last-booking'>
                        Last booking: <span>14</span> hours ago
                      </p>
                    </div>
                    <Link
                      to='/hotel-page-v1'
                      role='button'
                      className='htlfndr-select-hotel-button'
                    >
                      select
                    </Link>
                    <div className='htlfndr-hotel-price'>
                      <span className='htlfndr-from'>from</span>
                      <span className='htlfndr-cost'>$ 300</span>
                      <span className='htlfndr-per-night'>per night</span>
                      <span className='cost'>300</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className='col-md-4 htlfndr-hotel-post-wrapper'>
                <div className='htlfndr-hotel-post special-offer'>
                  <Link to='/hotel-page-v4' className='htlfndr-hotel-thumbnail'>
                    <img src={Img7} alt='pic' />
                  </Link>
                  <div className='htlfndr-hotel-description'>
                    <div className='htlfndr-description-content'>
                      <h2 className='htlfndr-entry-title'>
                        <Link to='/hotel-page-v4'>Hotel Colombina</Link>
                      </h2>
                      <div className='htlfndr-rating-stars' data-rating='3'>
                        <i className='fa fa-star htlfndr-star-color'></i>
                        <i className='fa fa-star htlfndr-star-color'></i>
                        <i className='fa fa-star htlfndr-star-color'></i>
                        <i className='fa fa-star'></i>{' '}
                        <i className='fa fa-star'></i>
                        <p className='htlfndr-hotel-reviews'>
                          (<span>198</span> reviews)
                        </p>
                      </div>
                      <h5 className='htlfndr-hotel-location'>
                        <Link to='#'>
                          <i className='fa fa-map-marker'></i>san francisco
                          united states
                        </Link>
                      </h5>
                      <p className='htlfndr-last-booking'>
                        Last booking: <span>14</span> hours ago
                      </p>
                    </div>
                    <Link
                      to='/hotel-page-v4'
                      role='button'
                      className='htlfndr-select-hotel-button'
                    >
                      select
                    </Link>
                    <div className='htlfndr-hotel-price'>
                      <span className='htlfndr-special'>special offer</span>
                      <span className='htlfndr-from'>from</span>
                      <span className='htlfndr-cost'>$ 300</span>
                      <span className='htlfndr-per-night'>per night</span>
                      <span className='cost'>300</span>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <nav className='htlfndr-pagination'>
              <ul className='pagination'>
                <li className='htlfndr-left'>
                  <Link to='#' aria-label='Previous'>
                    <span
                      aria-hidden='true'
                      className='fa fa-angle-left'
                    ></span>
                  </Link>
                </li>
                <li className='current'>
                  <Link to='#'>1</Link>
                </li>
                <li>
                  <Link to='#'>2</Link>
                </li>
                <li>
                  <Link to='#'>3</Link>
                </li>
                <li>
                  <Link to='#'>4</Link>
                </li>
                <li className='htlfndr-right'>
                  <Link to='#' aria-label='Next'>
                    <span
                      aria-hidden='true'
                      className='fa fa-angle-right'
                    ></span>
                  </Link>
                </li>
              </ul>
            </nav>
          </main>
        </div>
      </div>
    </div>
  )
}

export default SearchResultV2