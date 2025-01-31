import { useState } from 'react'
import { Link } from 'react-router-dom'
import Img1 from '../assets/images/user-picture.jpg'
import Img2 from '../assets/images/card_img.png'
import Img3 from '../assets/images/visa_card.png'
import Img4 from '../assets/images/top-destination-1.jpg'
import Img5 from '../assets/images/5690083711_44634c54f8_b.jpg'
import Img6 from '../assets/images/1158353197.jpg'
import Img7 from '../assets/images/hotel-4-notinclude.jpg'
import Img8 from '../assets/images/83890-Web1.jpg'



const UserProfile = () => {
  const [activeTab, setActiveTab] = useState('htlfndr-user-tab-1')
const handleTabClick = tabId => {
  if (activeTab !== tabId) {
    setActiveTab(tabId) 
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
          <h3 className='htlfndr-user-name'>john brown</h3>
          <h6 className='htlfndr-user-membership'>member since may 2012</h6>
          <ul
            role='tablist'
            className='ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-corner-all'
          >
            <li
              className={`ui-state-default ui-tabs-active ${activeTab == 'htlfndr-user-tab-1' ? 'ui-state-active' : '' }`}
              role='tab'
              tabIndex='0'
              aria-controls='htlfndr-user-tab-1'
              aria-labelledby='ui-id-1'
              aria-selected='true'
              aria-expanded='true'
            >
              <Link
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
              className={`ui-state-default ui-tabs-active ${activeTab == 'htlfndr-user-tab-2' ? 'ui-state-active' : '' }`}
              role='tab'
              tabIndex='-1'
              aria-controls='htlfndr-user-tab-2'
              aria-labelledby='ui-id-2'
              aria-selected='false'
              aria-expanded='false'
            >
              <Link
                to='#htlfndr-user-tab-2'
                className='ui-tabs-anchor'
                role='presentation'
                tabIndex='-1'
                id='ui-id-2' onClick={() => handleTabClick('htlfndr-user-tab-2')}
              >
                <i className='fa fa-clock-o'></i> booking history
              </Link>
            </li>
            <li
              className={`ui-state-default ui-tabs-active ${activeTab == 'htlfndr-user-tab-3' ? 'ui-state-active' : '' }`}
              role='tab'
              tabIndex='-1'
              aria-controls='htlfndr-user-tab-3'
              aria-labelledby='ui-id-3'
              aria-selected='false'
              aria-expanded='false'
            >
              <Link
                to='#htlfndr-user-tab-3'
                className='ui-tabs-anchor'
                role='presentation'
                tabIndex='-1'
                id='ui-id-3' onClick={() => handleTabClick('htlfndr-user-tab-3')}
              >
                <i className='fa fa-credit-card'></i> credit cards
              </Link>
            </li>
            <li
              className={`ui-state-default ui-tabs-active ${activeTab == 'htlfndr-user-tab-4' ? 'ui-state-active' : '' }`}
              role='tab'
              tabIndex='-1'
              aria-controls='htlfndr-user-tab-4'
              aria-labelledby='ui-id-4'
              aria-selected='false'
              aria-expanded='false'
            >
              <Link
                to='#htlfndr-user-tab-4'
                className='ui-tabs-anchor'
                role='presentation'
                tabIndex='-1'
                id='ui-id-4' onClick={() => handleTabClick('htlfndr-user-tab-4')}
              >
                <i className='fa fa-heart-o'></i> wishlist
              </Link>
            </li>
            <li
              className={`ui-state-default ui-tabs-active ${activeTab == 'htlfndr-user-tab-5' ? 'ui-state-active' : '' }`}
              role='tab'
              tabIndex='-1'
              aria-controls='htlfndr-user-tab-5'
              aria-labelledby='ui-id-5'
              aria-selected='false'
              aria-expanded='false'
            >
              <Link
                to='#htlfndr-user-tab-5'
                className='ui-tabs-anchor'
                role='presentation'
                tabIndex='-1'
                id='ui-id-5' onClick={() => handleTabClick('htlfndr-user-tab-5')}
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
          aria-hidden='false' style={ activeTab === 'htlfndr-user-tab-1' ? { display: 'block' }
      : { display: 'none' }}
        >
          <div className='row htlfndr-counters'>
            <div className='col-md-3 col-sm-6'>
              <div className='htlfndr-counter-block'>
                <div className='htlfndr-icon-holder'>
                  <i className='fa fa-plane'></i>
                </div>
                <dl className='htlfndr-counter-numbers'>
                  <dt className='htlfndr-count'>12467</dt>
                  <dd>miles</dd>
                </dl>
              </div>
            </div>
            <div className='col-md-3 col-sm-6'>
              <div className='htlfndr-counter-block'>
                <div className='htlfndr-icon-holder'>
                  <i className='fa fa-building-o'></i>
                </div>
                <dl className='htlfndr-counter-numbers'>
                  <dt className='htlfndr-count'>12</dt>
                  <dd>cities</dd>
                </dl>
              </div>
            </div>
            <div className='col-md-3 col-sm-6'>
              <div className='htlfndr-counter-block'>
                <div className='htlfndr-icon-holder'>
                  <i className='fa fa-globe'></i>
                </div>
                <dl className='htlfndr-counter-numbers'>
                  <dt className='htlfndr-count'>4</dt>
                  <dd>world</dd>
                </dl>
              </div>
            </div>
            <div className='col-md-3 col-sm-6'>
              <div className='htlfndr-counter-block'>
                <div className='htlfndr-icon-holder'>
                  <i className='fa fa-map-marker'></i>
                </div>
                <dl className='htlfndr-counter-numbers'>
                  <dt className='htlfndr-count'>7</dt>
                  <dd>countries</dd>
                </dl>
              </div>
            </div>
          </div>
          <table className='htlfndr-personal-info-table'>
            <tbody>
              <tr>
                <th className='htlfndr-scope-row'>name:</th>
                <td>john brown</td>
              </tr>
              <tr>
                <th className='htlfndr-scope-row'>e-mail:</th>
                <td>johnbrown@test.mail.com</td>
              </tr>
              <tr>
                <th className='htlfndr-scope-row'>phone number:</th>
                <td>+0 000-000-000</td>
              </tr>
              <tr>
                <th className='htlfndr-scope-row'>home airport:</th>
                <td>London Heathrow Airport (LHR)</td>
              </tr>
              <tr>
                <th className='htlfndr-scope-row'>street address:</th>
                <td>46 Gray&apos;s Inn Rd, London, WC1X 8LP</td>
              </tr>
              <tr>
                <th className='htlfndr-scope-row'>city:</th>
                <td>london</td>
              </tr>
              <tr>
                <th className='htlfndr-scope-row'>state/ province/ region:</th>
                <td>london</td>
              </tr>
              <tr>
                <th className='htlfndr-scope-row'>postal code:</th>
                <td>69106</td>
              </tr>
              <tr>
                <th className='htlfndr-scope-row'>country:</th>
                <td>United Kingdom</td>
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
        style={ activeTab === 'htlfndr-user-tab-2' ? { display: 'block' }
      : { display: 'none' }}
      >
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
              <td className='htlfndr-scope-row'>Wellington Hotel</td>
              <td data-title='Location'>San Fancisco</td>
              <td data-title='Order date'>01/01/2014</td>
              <td data-title='Data of your stay'>01/05/2014 - 01/15/2014</td>
              <td data-title='Cost'>$1280</td>
            </tr>
            <tr>
              <td className='htlfndr-scope-row'>Ruzzini Palace Hotelo</td>
              <td data-title='Location'>Kiev</td>
              <td data-title='Order date'>07/03/2014</td>
              <td data-title='Data of your stay'>09/05/2014 -15/05/2014</td>
              <td data-title='Cost'>$7498</td>
            </tr>
            <tr>
              <td className='htlfndr-scope-row'>Foscari Palace</td>
              <td data-title='Location'>Copenhagen</td>
              <td data-title='Order date'>23/06/2014</td>
              <td data-title='Data of your stay'>14/07/2014 - 28/07/2014</td>
              <td data-title='Cost'>$890</td>
            </tr>
            <tr>
              <td className='htlfndr-scope-row'>Hilton Hotel</td>
              <td data-title='Location'>New York</td>
              <td data-title='Order date'>14/09/2014</td>
              <td data-title='Data of your stay'>18/09/2014 - 19/10/2014</td>
              <td data-title='Cost'>$2453</td>
            </tr>
            <tr>
              <td className='htlfndr-scope-row'>Wellington Hotel</td>
              <td data-title='Location'>San Fancisco</td>
              <td data-title='Order date'>08/04/2014</td>
              <td data-title='Data of your stay'>08/08/2014 - 17/09/2014</td>
              <td data-title='Cost'>$1653</td>
            </tr>
            <tr>
              <td className='htlfndr-scope-row'>Hilton Molino Stucky</td>
              <td data-title='Location'>Copenhagen</td>
              <td data-title='Order date'>02/09/2014</td>
              <td data-title='Data of your stay'>12/06/2014 - 16/06/2014</td>
              <td data-title='Cost'>$1280</td>
            </tr>
            <tr>
              <td className='htlfndr-scope-row'>Hilton Hotel</td>
              <td data-title='Location'>San Fancisco</td>
              <td data-title='Order date'>01/01/2014</td>
              <td data-title='Data of your stay'>18/09/2014 - 10/10/2014</td>
              <td data-title='Cost'>$3615</td>
            </tr>
            <tr>
              <td className='htlfndr-scope-row'>Wellington Hotel</td>
              <td data-title='Location'>Stockholm</td>
              <td data-title='Order date'>01/01/2014</td>
              <td data-title='Data of your stay'>08/08/2014 - 17/09/2014</td>
              <td data-title='Cost'>$859</td>
            </tr>
            <tr>
              <td className='htlfndr-scope-row'>Ruzzini Palace Hotelo</td>
              <td data-title='Location'>Kiev</td>
              <td data-title='Order date'>23/06/2014</td>
              <td data-title='Data of your stay'>09/05/2014 -15/05/2014</td>
              <td data-title='Cost'>$347</td>
            </tr>
          </tbody>
        </table>
        <div className='text-right'>
          <Link to='#'>
            <i className='fa fa-angle-double-left'></i> next
          </Link>
          <Link to='#'>
            prev <i className='fa fa-angle-double-right'></i>
          </Link>
        </div>
      </div>
      <div
        className='htlfndr-user-panel col-md-9 col-sm-8 htlfndr-credit-page ui-tabs-panel ui-widget-content ui-corner-bottom'
        id='htlfndr-user-tab-3'
        aria-labelledby='ui-id-3'
        role='tabpanel'
        aria-hidden='true'
        style={ activeTab === 'htlfndr-user-tab-3' ? { display: 'block' }
      : { display: 'none' }}
      >
        <div className='htlfndr-credit-card'>
          <div className='htlfndr-but_edit text-right'>
            <Link
              className='glyphicon glyphicon-pencil'
              to='#'
              onClick={() => handleTabClick('htlfndr-user-tab-6')}
            ></Link>
            <Link
              className='glyphicon glyphicon-remove'
              to='#'
              data-toggle='modal'
              data-target='#remove-card'
            ></Link>
          </div>
          <div className='htlfndr-number-card'>XXXX XXX XXXX 5622</div>
          <div className='htlfndr-valid-card'>
            valid thru <span>8/18</span>
          </div>
          <div className='htlfndr-person-card'>
            cartholder name
            <br />
            <span className='htlfndr-person-name'>John Brahn</span>
            <span className='pull-right'>
              <img src={Img2} alt='' />
            </span>
          </div>
        </div>
        <div className='htlfndr-credit-card'>
          <div className='htlfndr-but_edit text-right'>
            <Link
              className='glyphicon glyphicon-pencil'
              to='#'
               onClick={() => handleTabClick('htlfndr-user-tab-6')}
            ></Link>
            <Link
              className='glyphicon glyphicon-remove'
              to='#'
              data-toggle='modal'
              data-target='#remove-card'
            ></Link>
          </div>
          <div className='htlfndr-number-card'>XXXX XXX XXXX 5622</div>
          <div className='htlfndr-valid-card'>
            valid thru <span>8/18</span>
          </div>
          <div className='htlfndr-person-card'>
            cartholder name
            <br />
            <span className='htlfndr-person-name'>John Brahn</span>
            <span className='pull-right'>
              <img src={Img2} alt='' />
            </span>
          </div>
        </div>
        <div className='htlfndr-credit-card'>
          <div className='htlfndr-but_edit text-right'>
            <Link
              className='glyphicon glyphicon-pencil'
              to='#'
               onClick={() => handleTabClick('htlfndr-user-tab-6')}
            ></Link>
            <Link
              className='glyphicon glyphicon-remove'
              to='#'
              data-toggle='modal'
              data-target='#remove-card'
            ></Link>
          </div>
          <div className='htlfndr-number-card'>XXXX XXX XXXX 5622</div>
          <div className='htlfndr-valid-card'>
            valid thru <span>8/18</span>
          </div>
          <div className='htlfndr-person-card'>
            cartholder name
            <br />
            <span className='htlfndr-person-name'>John Brahn</span>
            <span className='pull-right'>
              <img src={Img3} alt='' />
            </span>
          </div>
        </div>
        <div className='htlfndr-credit-card'>
          <div className='htlfndr-add-card'>
            <Link data-target='#htlfndr-add-card' to='#'  onClick={() => handleTabClick('htlfndr-user-tab-7')}>
              <span className='glyphicon glyphicon-plus'></span> Add new card
            </Link>
          </div>
        </div>
      </div>
      <div
                className='htlfndr-wishlist-page ui-tabs-panel ui-widget-content ui-corner-bottom'
                id='htlfndr-user-tab-4'
                aria-labelledby='ui-id-4'
                role='tabpanel'
                aria-hidden='true'
                style={activeTab === 'htlfndr-user-tab-4' ? { display: 'block' }
                  : { display: 'none' }}
      >
        <div className='htlfndr-user-panel col-md-9 col-sm-8 htlfndr-search-result htlfndr-grid-view'>
          <div className='htlfndr-hotel-post-wrapper'>
            <div className='htlfndr-hotel-post clearfix'>
              <Link
                className='glyphicon glyphicon-remove'
                to='#'
                data-toggle='modal'
                data-target='#remove-page'
              ></Link>
              <Link
                to='/hotel-page-v1'
                className='htlfndr-hotel-thumbnail pull-left'
              >
                <img src={Img4} alt='pic' />
              </Link>
              <div className='htlfndr-hotel-description'>
                <div className='htlfndr-description-content'>
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
                  <h2 className='htlfndr-entry-title'>
                    <Link to='/hotel-page-v1'>King Size Bedroom</Link>
                  </h2>
                  <h5 className='htlfndr-hotel-location'>
                    <Link to='#'>
                      <i className='fa fa-map-marker'></i>san francisco united
                      states
                    </Link>
                  </h5>
                  <p className='htlfndr-last-booking'>
                    Lastest booking: <span>14</span> hours ago
                  </p>
                </div>
                <span className='htlfndr-from'>From</span>
                <div className='htlfndr-hotel-price'>
                  <span className='htlfndr-cost'>$ 100</span>
                </div>
                <span className='htlfndr-per-night'>per night</span>
              </div>
              <Link
                to='/hotel-page-v1'
                role='button'
                className='htlfndr-select-hotel-button'
              >
                select
              </Link>
            </div>
            <div className='htlfndr-hotel-post clearfix'>
              <Link
                className='glyphicon glyphicon-remove'
                to='#'
                data-toggle='modal'
                data-target='#remove-page'
              ></Link>
              <Link
                to='/hotel-page-v3'
                className='htlfndr-hotel-thumbnail pull-left'
              >
                <img src={Img5} alt='pic' />
              </Link>
              <div className='htlfndr-hotel-description'>
                <div className='htlfndr-description-content'>
                  <div className='htlfndr-rating-stars' data-rating='3'>
                    <i className='fa fa-star htlfndr-star-color'></i>&nbsp;
                    <i className='fa fa-star htlfndr-star-color'></i>&nbsp;
                    <i className='fa fa-star htlfndr-star-color'></i>&nbsp;
                    <i className='fa fa-star'></i>&nbsp;
                    <i className='fa fa-star'></i>&nbsp;
                    <p className='htlfndr-hotel-reviews'>
                      (<span>188</span> reviews)
                    </p>
                  </div>
                  <h2 className='htlfndr-entry-title'>
                    <Link to='/hotel-page-v3'>Awesome Suit</Link>
                  </h2>
                  <h5 className='htlfndr-hotel-location'>
                    <Link to='#'>
                      <i className='fa fa-map-marker'></i>paris france
                    </Link>
                  </h5>
                  <p className='htlfndr-last-booking'>
                    Lastest booking: <span>14</span> hours ago
                  </p>
                </div>
                <span className='htlfndr-from'>From</span>
                <div className='htlfndr-hotel-price'>
                  <span className='htlfndr-cost'>$ 250</span>
                </div>
                <span className='htlfndr-per-night'>per night</span>
              </div>
              <Link
                to='/hotel-page-v3'
                role='button'
                className='htlfndr-select-hotel-button'
              >
                select
              </Link>
            </div>
            <div className='htlfndr-hotel-post special-offer clearfix'>
              <span className='htlfndr-special'>special offer</span>
              <Link
                className='glyphicon glyphicon-remove'
                to='#'
                data-toggle='modal'
                data-target='#remove-page'
              ></Link>
              <Link
                to='/hotel-page-v2'
                className='htlfndr-hotel-thumbnail pull-left'
              >
                <img src={Img6} alt='pic' />
              </Link>
              <div className='htlfndr-hotel-description'>
                <div className='htlfndr-description-content'>
                  <div className='htlfndr-rating-stars' data-rating='4'>
                    <i className='fa fa-star htlfndr-star-color'></i>&nbsp;
                    <i className='fa fa-star htlfndr-star-color'></i>&nbsp;
                    <i className='fa fa-star htlfndr-star-color'></i>&nbsp;
                    <i className='fa fa-star htlfndr-star-color'></i>&nbsp;
                    <i className='fa fa-star'></i>&nbsp;
                    <p className='htlfndr-hotel-reviews'>
                      (<span>128</span> reviews)
                    </p>
                  </div>
                  <h2 className='htlfndr-entry-title'>
                    <Link to='/hotel-page-v2'>Ruzzini Palace hotel</Link>
                  </h2>
                  <h5 className='htlfndr-hotel-location'>
                    <Link to='#'>
                      <i className='fa fa-map-marker'></i>paris france
                    </Link>
                  </h5>
                  <p className='htlfndr-last-booking'>
                    Lastest booking: <span>14</span> hours ago
                  </p>
                </div>
                <span className='htlfndr-from'>From</span>
                <div className='htlfndr-hotel-price'>
                  <span className='htlfndr-cost'>$ 150</span>
                </div>
                <span className='htlfndr-per-night'>per night</span>
              </div>
              <Link
                to='/hotel-page-v2'
                role='button'
                className='htlfndr-select-hotel-button'
              >
                select
              </Link>
            </div>
            <div className='htlfndr-hotel-post clearfix'>
              <Link
                className='glyphicon glyphicon-remove'
                to='#'
                data-toggle='modal'
                data-target='#remove-page'
              ></Link>
              <Link
                to='/hotel-page-v1'
                className='htlfndr-hotel-thumbnail pull-left'
              >
                <img src={Img7} alt='pic' />
              </Link>
              <div className='htlfndr-hotel-description'>
                <div className='htlfndr-description-content'>
                  <div className='htlfndr-rating-stars' data-rating='5'>
                    <i className='fa fa-star htlfndr-star-color'></i>&nbsp;
                    <i className='fa fa-star htlfndr-star-color'></i>&nbsp;
                    <i className='fa fa-star htlfndr-star-color'></i>&nbsp;
                    <i className='fa fa-star htlfndr-star-color'></i>&nbsp;
                    <i className='fa fa-star htlfndr-star-color'></i>&nbsp;
                    <p className='htlfndr-hotel-reviews'>
                      (<span>128</span> reviews)
                    </p>
                  </div>
                  <h2 className='htlfndr-entry-title'>
                    <Link to='/hotel-page-v1'>forcari palace</Link>
                  </h2>
                  <h5 className='htlfndr-hotel-location'>
                    <Link to='#'>
                      <i className='fa fa-map-marker'></i>las vegas united states
                    </Link>
                  </h5>
                  <p className='htlfndr-last-booking'>
                    Lastest booking: <span>14</span> hours ago
                  </p>
                </div>
                <span className='htlfndr-from'>From</span>
                <div className='htlfndr-hotel-price'>
                  <span className='htlfndr-cost'>$ 300</span>
                </div>
                <span className='htlfndr-per-night'>per night</span>
              </div>
              <Link
                to='/hotel-page-v1'
                role='button'
                className='htlfndr-select-hotel-button'
              >
                select
              </Link>
            </div>
            <div className='htlfndr-hotel-post clearfix'>
              <Link
                className='glyphicon glyphicon-remove'
                to='#'
                data-toggle='modal'
                data-target='#remove-page'
              ></Link>
              <Link
                to='/hotel-page-v3'
                className='htlfndr-hotel-thumbnail pull-left'
              >
                <img src={Img8} alt='pic' />
              </Link>
              <div className='htlfndr-hotel-description'>
                <div className='htlfndr-description-content'>
                  <div className='htlfndr-rating-stars' data-rating='5'>
                    <i className='fa fa-star htlfndr-star-color'></i>&nbsp;
                    <i className='fa fa-star htlfndr-star-color'></i>&nbsp;
                    <i className='fa fa-star htlfndr-star-color'></i>&nbsp;
                    <i className='fa fa-star htlfndr-star-color'></i>&nbsp;
                    <i className='fa fa-star htlfndr-star-color'></i>&nbsp;
                    <p className='htlfndr-hotel-reviews'>
                      (<span>128</span> reviews)
                    </p>
                  </div>
                  <h2 className='htlfndr-entry-title'>
                    <Link to='/hotel-page-v3'>hilton molino stucky</Link>
                  </h2>
                  <h5 className='htlfndr-hotel-location'>
                    <Link to='#'>
                      <i className='fa fa-map-marker'></i>las vegas united states
                    </Link>
                  </h5>
                  <p className='htlfndr-last-booking'>
                    Lastest booking: <span>14</span> hours ago
                  </p>
                </div>
                <span className='htlfndr-from'>From</span>
                <div className='htlfndr-hotel-price'>
                  <span className='htlfndr-cost'>$ 300</span>
                </div>
                <span className='htlfndr-per-night'>per night</span>
              </div>
              <Link
                to='/hotel-page-v3'
                role='button'
                className='htlfndr-select-hotel-button'
              >
                select
              </Link>
            </div>
          </div>
          <p className='htlfndr-load_more text-right'>
            <Link to='#'>Load more +</Link>
          </p>
        </div>
      </div>
      <div
        className='htlfndr-user-panel col-md-9 col-sm-8 htlfndr-setting-page ui-tabs-panel ui-widget-content ui-corner-bottom'
        id='htlfndr-user-tab-5'
        aria-labelledby='ui-id-5'
        role='tabpanel'
        aria-hidden='true'
        style={ activeTab === 'htlfndr-user-tab-5' ?  { display: 'block' }
      : { display: 'none' }}
      >
        <div className='htlfndr-setting'>
          <h2>
            Change <b>Personal Infomation</b>
          </h2>
          <form
            className='htlfndr-form-setting'
            id='htlfndr-settings-form'
            method='post'
          >
            <div className='row'>
              <div className='col-md-5 htlfndr-form-setting-cols'>
                <label htmlFor='settings-name' className=''>
                  Name
                </label>
                <br />
                <input
                  id='settings-name'
                  className='htlfndr-input'
                  type='text'
                  name='settings-name'
                  placeholder='John Brown'
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
                  name='settings-phone'
                  placeholder='+0 000-000-000'
                />
                <br />
                <label htmlFor='settings-adress' className=''>
                  Street Adress
                </label>
                <br />
                <input
                  id='settings-adress'
                  className='htlfndr-input'
                  type='text'
                  name='settings-adress'
                  placeholder='46 Gray Inn Rd, London, WCIX'
                />
                <br />
                <label htmlFor='settings-state' className=''>
                  State/Province/Region
                </label>
                <br />
                <input
                  id='settings-state'
                  className='htlfndr-input'
                  type='text'
                  name='settings-state'
                  placeholder='London'
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
                  name='settings-country'
                  placeholder='United Kingdom'
                />
                <br />
              </div>
              <div className='col-md-5 htlfndr-form-setting-cols'>
                <label htmlFor='settings-email' className=''>
                  E-mail
                </label>
                <br />
                <input
                  id='settings-email'
                  className='htlfndr-input'
                  type='text'
                  name='settings-email'
                  placeholder='johnbrown@mail.com'
                />
                <br />
                <label htmlFor='settings-subject' className=''>
                  Home airport
                </label>
                <br />
                <input
                  id='settings-subject'
                  className='htlfndr-input'
                  type='text'
                  name='settings-home-airport'
                  placeholder='London Heathrow Airport (LHR)'
                />
                <br />
                <label htmlFor='settings-city' className=''>
                  City
                </label>
                <br />
                <input
                  id='settings-city'
                  className='htlfndr-input'
                  type='text'
                  name='settings-city'
                  placeholder='London'
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
                  name='settings-code'
                  placeholder='69106'
                />
                <br />
              </div>
            </div>
            <input type='submit' value='Save changes' className='btn-primary' />
          </form>
          <h2>
            Change <b>Password</b>
          </h2>
          <form
            className='htlfndr-change-setting'
            id='htlfndr-settings-pass'
            method='post'
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
                  type='text'
                  name='settings-cur-pass'
                />
                <br />
                <label htmlFor='settings-new-pass' className=''>
                  New Password
                </label>
                <br />
                <input
                  id='settings-new-pass'
                  className='htlfndr-input'
                  type='text'
                  name='settings-new-pass'
                />
                <br />
                <label htmlFor='settings-new-pass-again' className=''>
                  New Password Again
                </label>
                <br />
                <input
                  id='settings-new-pass-again'
                  className='htlfndr-input'
                  type='text'
                  name='settings-new-pass-again'
                />
                <br />
              </div>
              <div className='col-md-5 htlfndr-form-setting-cols'></div>
            </div>
            <input type='submit' value='Save password' className='btn-primary' />
          </form>
        </div>
      </div>
      <div
  className='htlfndr-user-panel col-md-9 col-sm-8 htlfndr-setting-page ui-tabs-panel ui-widget-content ui-corner-bottom'
  id='htlfndr-user-tab-6'
  aria-labelledby='ui-id-6'
  role='tabpanel'
  aria-hidden='true'
  style={
    activeTab === 'htlfndr-user-tab-6'
      ? { display: 'block' }
      : { display: 'none' }
  }
>
  <div id='htlfndr-edit-card'>
  <div className='htlfndr-content-card'>
    <div className='htlfndr-card-title clearfix'>
      <Link
        className='glyphicon glyphicon-remove pull-right'
        to='#'
        data-dismiss='modal'
      ></Link>
      <h2 className='pull-left'>Edit Card</h2>
      <span> (Visa XXXX XXXX XXXX 1234)</span>
    </div>
    <form id='htlfndr-contact-form' method='post'>
      <h4>Card Number</h4>
      <input
        id='htlfndr-edit-credit-card'
        className='htlfndr-input'
        type='text'
        name='htlfndr-number-card'
        placeholder='XXXX XXXX XXXX XXXX'
      />
      <div className='htlfndr-info-card row'>
        <div className='col-md-9 col-sm-9 htlfndr-card-name'>
          <h4>Cardholder Name</h4>
          <input
            id='htlfndr-name-card'
            className='htlfndr-input'
            type='text'
            name='htlfndr-name-card'
            placeholder='John Brown'
          />
        </div>
        <div className='col-md-3 col-sm-3 htlfndr-card-valid'>
          <h4>Valid Thru</h4>
          <input
            id='htlfndr-valid-card'
            className='htlfndr-input'
            type='text'
            name='htlfndr-valid-card'
            placeholder='mm/yy'
          />
        </div>
      </div>
      <input type='submit' value='Save edit' />
    </form>
  </div>
</div>

</div>
<div
  className='htlfndr-user-panel col-md-9 col-sm-8 htlfndr-setting-page ui-tabs-panel ui-widget-content ui-corner-bottom'
  id='htlfndr-user-tab-7'
  aria-labelledby='ui-id-7'
  role='tabpanel'
  aria-hidden='true'
  style={
    activeTab === 'htlfndr-user-tab-7'
      ? { display: 'block' }
      : { display: 'none' }
  }
>
  <div id='htlfndr-add-card'>
    <div className='htlfndr-content-card'>
      <div className='htlfndr-card-title clearfix'>
        <Link
          className='glyphicon glyphicon-remove pull-right'
          to='#'
          data-dismiss='modal'
        ></Link>
        <h2 className='pull-left'>Add Card</h2>
      </div>
      <form id='htlfndr-contact-form' method='post'>
        <h4>Card Number</h4>
        <input
          id='htlfndr-add-credit-card'
          className='htlfndr-input'
          type='text'
          name='htlfndr-number-card'
          placeholder='XXXX XXXX XXXX XXXX'
        />
        <div className='htlfndr-info-card row'>
          <div className='col-md-9 col-sm-9 htlfndr-card-name'>
            <h4>Cardholder Name</h4>
            <input
              id='htlfndr-name-card'
              className='htlfndr-input'
              type='text'
              name='htlfndr-name-card'
              placeholder='e.g. John Brown'
            />
          </div>
          <div className='col-md-3 col-sm-3 htlfndr-card-valid'>
            <h4>Valid Thru</h4>
            <input
              id='htlfndr-valid-card'
              className='htlfndr-input'
              type='text'
              name='htlfndr-valid-card'
              placeholder='mm/yy'
            />
          </div>
        </div>
        <input type='submit' value='Save edit' />
      </form>
    </div>
  </div>
</div>



    </div>
  </main>
</div>

      </div>
    )
}

export default UserProfile