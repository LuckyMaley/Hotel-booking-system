import {useState } from 'react'
import { Link } from 'react-router-dom'
import Img1 from '../assets/images/top-destination-1.jpg'
import Img2 from '../assets/images/5690083711_44634c54f8_b.jpg'
import Img3 from '../assets/images/1158353197.jpg'
import Img4 from '../assets/images/83890-Web1.jpg'
import Img5 from '../assets/images/hotel-4-notinclude.jpg'
import Img6 from '../assets/images/29775-vannaya-komnata-plastikom.jpg'
import Img7 from '../assets/images/5053563227_ee0db21ca5_b.jpg'
import Img8 from '../assets/images/hotel-logo.jpg'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

const SearchRooms = () => {
  const [startDate, setStartDate] = useState(null)
  const [endDate, setEndDate] = useState(null)

  return (
    <div>
      <div className='container'>
        <div className='htlfndr-steps'>
          <ul className='htlfndr-progress'>
            <li>
              <Link to='search-result.html'>
                <span className='htlfndr-step-number'>1</span>
                <span className='htlfndr-step-description'>results</span>
              </Link>
            </li>
            <li className='htlfndr-active-step'>
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
        <div className='row htlfndr-room-page htlfndr-search-rooms'>
          <main
            id='htlfndr-main-content'
            className='col-sm-12 col-md-9 col-lg-9 htlfndr-search-result htlfndr-grid-view'
            role='main'
          >
            <h2 className='htlfndr-search-result-title'>
              <span>125</span> available rooms found
            </h2>
            <h4 className='htlfndr-hotel-title'>
              <Link to='/hotel-page-v1'>/Hilton Hotel</Link>
            </h4>
            <div className='htlfndr-search-result-sorting row'>
              <div className='col-md-12'>
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
                    className=''
                  >
                    <span></span> <span></span> <span></span>
                  </button>
                </div>
              </div>
            </div>
            <section className='row htlfndr-search-result-content'>
              <div className='htlfndr-hotel-post-wrapper col-md-4'>
                <div className='htlfndr-hotel-post'>
                  <Link
                    to='/hotel-room-page'
                    className='htlfndr-hotel-thumbnail'
                  >
                    <img src={Img1} alt='pic' />
                  </Link>
                  <div className='htlfndr-hotel-description'>
                    <div className='htlfndr-description-content'>
                      <h2 className='htlfndr-entry-title'>
                        <Link to='/hotel-room-page'>Twin Room</Link>
                      </h2>
                      <div className='htlfndr-rating-stars' data-rating='5'>
                        <i className='fa fa-star htlfndr-star-color'></i>
                        <i className='fa fa-star htlfndr-star-color'></i>
                        <i className='fa fa-star htlfndr-star-color'></i>
                        <i className='fa fa-star htlfndr-star-color'></i>
                        <i className='fa fa-star htlfndr-star-color'></i>
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
                      to='/hotel-room-page'
                      role='button'
                      className='htlfndr-select-hotel-button'
                    >
                      select
                    </Link>
                    <div className='htlfndr-hotel-price'>
                      <span className='htlfndr-cost'>$ 100</span>
                      <span className='htlfndr-per-night'>per night</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className='htlfndr-hotel-post-wrapper col-md-4'>
                <div className='htlfndr-hotel-post'>
                  <Link
                    to='/hotel-room-page'
                    className='htlfndr-hotel-thumbnail'
                  >
                    <img src={Img2} alt='pic' />
                  </Link>
                  <div className='htlfndr-hotel-description'>
                    <div className='htlfndr-description-content'>
                      <h2 className='htlfndr-entry-title'>
                        <Link to='/hotel-room-page'>Classic Room</Link>
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
                      to='/hotel-room-page'
                      role='button'
                      className='htlfndr-select-hotel-button'
                    >
                      select
                    </Link>
                    <div className='htlfndr-hotel-price'>
                      <span className='htlfndr-cost'>$ 250</span>
                      <span className='htlfndr-per-night'>per night</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className='htlfndr-hotel-post-wrapper col-md-4'>
                <div className='htlfndr-hotel-post special-offer'>
                  <Link
                    to='/hotel-room-page-special-offer'
                    className='htlfndr-hotel-thumbnail'
                  >
                    <img src={Img3} alt='pic' />
                  </Link>
                  <div className='htlfndr-hotel-description'>
                    <div className='htlfndr-description-content'>
                      <h2 className='htlfndr-entry-title'>
                        <Link to='/hotel-room-page'>Family Suite</Link>
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
                      to='hotel-room-page-special-offer.html'
                      role='button'
                      className='htlfndr-select-hotel-button'
                    >
                      select
                    </Link>
                    <div className='htlfndr-hotel-price'>
                      <span className='htlfndr-special'>special offer</span>
                      <span className='htlfndr-cost'>$ 280</span>
                      <span className='htlfndr-per-night'>per night</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className='htlfndr-hotel-post-wrapper col-md-4'>
                <div className='htlfndr-hotel-post'>
                  <Link
                    to='/hotel-room-page'
                    className='htlfndr-hotel-thumbnail'
                  >
                    <img src={Img4} alt='pic' />
                  </Link>
                  <div className='htlfndr-hotel-description'>
                    <div className='htlfndr-description-content'>
                      <h2 className='htlfndr-entry-title'>
                        <Link to='/hotel-room-page'>King Family Suite</Link>
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
                      to='/hotel-room-page'
                      role='button'
                      className='htlfndr-select-hotel-button'
                    >
                      select
                    </Link>
                    <div className='htlfndr-hotel-price'>
                      <span className='htlfndr-cost'>$ 200</span>
                      <span className='htlfndr-per-night'>per night</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className='htlfndr-hotel-post-wrapper col-md-4'>
                <div className='htlfndr-hotel-post'>
                  <Link
                    to='/hotel-room-page'
                    className='htlfndr-hotel-thumbnail'
                  >
                    <img src={Img5} alt='pic' />
                  </Link>
                  <div className='htlfndr-hotel-description'>
                    <div className='htlfndr-description-content'>
                      <h2 className='htlfndr-entry-title'>
                        <Link to='/hotel-room-page'>Twin Room</Link>
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
                      to='/hotel-room-page'
                      role='button'
                      className='htlfndr-select-hotel-button'
                    >
                      select
                    </Link>
                    <div className='htlfndr-hotel-price'>
                      <span className='htlfndr-cost'>$ 250</span>
                      <span className='htlfndr-per-night'>per night</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className='htlfndr-hotel-post-wrapper col-md-4'>
                <div className='htlfndr-hotel-post'>
                  <Link
                    to='/hotel-room-page'
                    className='htlfndr-hotel-thumbnail'
                  >
                    <img src={Img3} alt='pic' />
                  </Link>
                  <div className='htlfndr-hotel-description'>
                    <div className='htlfndr-description-content'>
                      <h2 className='htlfndr-entry-title'>
                        <Link to='/hotel-room-page'>Classic Room</Link>
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
                      to='/hotel-room-page'
                      role='button'
                      className='htlfndr-select-hotel-button'
                    >
                      select
                    </Link>
                    <div className='htlfndr-hotel-price'>
                      <span className='htlfndr-cost'>$ 300</span>
                      <span className='htlfndr-per-night'>per night</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className='htlfndr-hotel-post-wrapper col-md-4'>
                <div className='htlfndr-hotel-post'>
                  <Link
                    to='/hotel-room-page'
                    className='htlfndr-hotel-thumbnail'
                  >
                    <img src={Img6} alt='pic' />
                  </Link>
                  <div className='htlfndr-hotel-description'>
                    <div className='htlfndr-description-content'>
                      <h2 className='htlfndr-entry-title'>
                        <Link to='/hotel-room-page'>Family Suite</Link>
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
                      to='/hotel-room-page'
                      role='button'
                      className='htlfndr-select-hotel-button'
                    >
                      select
                    </Link>
                    <div className='htlfndr-hotel-price'>
                      <span className='htlfndr-cost'>$ 200</span>
                      <span className='htlfndr-per-night'>per night</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className='htlfndr-hotel-post-wrapper col-md-4'>
                <div className='htlfndr-hotel-post'>
                  <Link
                    to='/hotel-room-page'
                    className='htlfndr-hotel-thumbnail'
                  >
                    <img src={Img4} alt='pic' />
                  </Link>
                  <div className='htlfndr-hotel-description'>
                    <div className='htlfndr-description-content'>
                      <h2 className='htlfndr-entry-title'>
                        <Link to='/hotel-room-page'>King Family Suite</Link>
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
                      to='/hotel-room-page'
                      role='button'
                      className='htlfndr-select-hotel-button'
                    >
                      select
                    </Link>
                    <div className='htlfndr-hotel-price'>
                      <span className='htlfndr-cost'>$ 300</span>
                      <span className='htlfndr-per-night'>per night</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className='htlfndr-hotel-post-wrapper col-md-4'>
                <div className='htlfndr-hotel-post special-offer'>
                  <Link
                    to='hotel-room-page-special-offer.html'
                    className='htlfndr-hotel-thumbnail'
                  >
                    <img src={Img7} alt='pic' />
                  </Link>
                  <div className='htlfndr-hotel-description'>
                    <div className='htlfndr-description-content'>
                      <h2 className='htlfndr-entry-title'>
                        <Link to='/hotel-room-page'>Twin Room</Link>
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
                        <Link to='hotel-room-page-special-offer.html'>
                          san francisco united states
                        </Link>
                      </h5>
                      <p className='htlfndr-last-booking'>
                        Last booking: <span>14</span> hours ago
                      </p>
                    </div>
                    <Link
                      to='/hotel-room-page'
                      role='button'
                      className='htlfndr-select-hotel-button'
                    >
                      select
                    </Link>
                    <div className='htlfndr-hotel-price'>
                      <span className='htlfndr-special'>special offer</span>
                      <span className='htlfndr-cost'>$ 300</span>
                      <span className='htlfndr-per-night'>per night</span>
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
          <aside
            id='htlfndr-right-sidebar'
            className='col-sm-12 col-md-3 col-lg-3 htlfndr-sidebar htlfndr-sidebar-in-right'
            role='complementary'
          >
            <div className='widget htlfndr-hotel-visit-card htlfndr-modify-search-aside'>
              <div className='htlfndr-widget-main-content htlfndr-widget-padding'>
                <div className='htlfndr-hotel-logo'>
                  <img src={Img8} alt='Hotel logo' />
                </div>
                <form name='search-hotel' id='search-hotel'>
                  {/* Check-in Date */}
                  <div className='htlfndr-float-input first-float'>
                    <label
                      htmlFor='htlfndr-date-in'
                      className='htlfndr-input-label'
                    >
                      Check in
                    </label>
                    <div
                      id='htlfndr-input-date-in'
                      className='htlfndr-input-wrapper'
                    >
                      <DatePicker
                        selected={startDate}
                        onChange={date => setStartDate(date)}
                        placeholderText=''
                        dateFormat='yyyy/MM/dd'
                        className='search-hotel-input hasDatepicker'
                        id='htlfndr-date-in'
                      />
                      <button
                        type='button'
                        className='htlfndr-clear-datepicker'
                        onClick={() => setStartDate(null)}
                      >
                      </button>
                    </div>
                  </div>
                  {/* Check-out Date */}
                  <div className='htlfndr-float-input'>
                    <label
                      htmlFor='htlfndr-date-out'
                      className='htlfndr-input-label'
                    >
                      Check out
                    </label>
                    <div
                      id='htlfndr-input-date-out'
                      className='htlfndr-input-wrapper'
                    >
                      <DatePicker
                        selected={endDate}
                        onChange={date => setEndDate(date)}
                        placeholderText=''
                        dateFormat='yyyy/MM/dd'
                        className='search-hotel-input hasDatepicker'
                        id='htlfndr-date-out'
                      />
                      <button
                        type='button'
                        className='htlfndr-clear-datepicker'
                        onClick={() => setEndDate(null)}
                      >
                      </button>
                    </div>
                  </div>
                  <section className='htlfndr-select-block'>
                    <div className='htlfndr-input-wrapper htlfndr-small-select'>
                      <label
                        htmlFor='htlfndr-room-button'
                        className='htlfndr-input-label'
                      >
                        Room
                      </label>
                      <select
                        name='htlfndr-room'
                        id='htlfndr-room'
                        className='htlfndr-dropdown ui-selectmenu-button ui-widget ui-state-default ui-corner-all'
                      >
                        <option value='1'>1</option>
                        <option value='2'>2</option>
                        <option value='3'>3</option>
                        <option value='4'>4</option>
                      </select>
                    </div>
                    <div className='htlfndr-input-wrapper htlfndr-small-select'>
                      <label
                        htmlFor='htlfndr-adult-button'
                        className='htlfndr-input-label'
                      >
                        Adult
                      </label>
                      <select
                        name='htlfndr-adult'
                        id='htlfndr-adult'
                        className='htlfndr-dropdown ui-selectmenu-button ui-widget ui-state-default ui-corner-all'
                      >
                        <option value='1'>1</option>
                        <option value='2'>2</option>
                        <option value='3'>3</option>
                        <option value='4'>4</option>
                      </select>
                    </div>
                    <div className='htlfndr-input-wrapper htlfndr-small-select'>
                      <label
                        htmlFor='htlfndr-kids-button'
                        className='htlfndr-input-label'
                      >
                        Kids
                      </label>
                      <select
                        name='htlfndr-kids'
                        id='htlfndr-kids'
                        className='htlfndr-dropdown ui-selectmenu-button ui-widget ui-state-default ui-corner-all'
                      >
                        <option value='1'>1</option>
                        <option value='2'>2</option>
                        <option value='3'>3</option>
                        <option value='4'>4</option>
                      </select>
                    </div>
                  </section>
                  <div className='clearfix'></div>
                  <input type='submit' value='search' />
                </form>
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

export default SearchRooms
