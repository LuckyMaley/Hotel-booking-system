import React, { Component } from 'react'
import Img2 from '../assets/images/5053563227_ee0db21ca5_b.jpg'
import Img5 from '../assets/images/29572el_chaise_longue_o_cheslon.jpg'
import Img6 from '../assets/images/5690083711_44634c54f8_b.jpg'
import Img7 from '../assets/images/hotel-logo.jpg'
import RoomSlider from '../components/RoomSlider'
import { Link } from 'react-router-dom'


export class RoomSpecialOffer extends Component {
  render () {
    return (
      <div>
        <div className='container'>
          <div className='htlfndr-steps'>
            <ul className='htlfndr-progress'>
              <li>
                <Link to='/search-result'>
                  {' '}
                  <span className='htlfndr-step-number'>1</span>{' '}
                  <span className='htlfndr-step-description'>results</span>
                </Link>{' '}
              </li>
              <li>
                <Link to='/hotel-page-v1'>
                  {' '}
                  <span className='htlfndr-step-number'>2</span>{' '}
                  <span className='htlfndr-step-description'>hotel</span>
                </Link>{' '}
              </li>
              <li className='htlfndr-active-step'>
                {' '}
                <span className='htlfndr-step-number'>3</span>{' '}
                <span className='htlfndr-step-description'>room</span>{' '}
              </li>
              <li>
                {' '}
                <span className='htlfndr-step-number'>4</span>{' '}
                <span className='htlfndr-step-description'>payment</span>
              </li>
            </ul>
          </div>
          <div className='row htlfndr-page-content htlfndr-room-page'>
            <main
              id='htlfndr-main-content'
              className='col-sm-12 col-md-8 col-lg-9 htlfndr-hotel-single-content'
              role='main'
            >
              <article className='post htlfndr-room-post'>
                <header>
                  <h1 className='htlfndr-entry-title'> Classic Double Room </h1>
                  <Link to='/hotel-page-v1'>
                    <span>/ Hilton Hotel</span>
                  </Link>
                </header>

                <RoomSlider />

                <div className='htlfndr-entry-content'>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Vestibulum quis mi at purus consequat tristique vitae vitae
                    nibh. Maecenas lacinia augue ex, volutpat ultricies diam
                    molestie vel. Donec arcu velit, aliquam consectetur
                    sollicitudin sit amet, maximus ac arcu. Proin ut commodo
                    erat. Donec id hendrerit arcu. Fusce sed ornare nulla, sit
                    amet vulputate est. Phasellus aliquet dictum ligula ut
                    efficitur. Vestibulum augue libero, cursus sed volutpat
                    quis, aliquam et mi. Fusce finibus, ligula eu efficitur
                    tempor, magna mi aliquet nisl, eu commodo metus est non
                    eros. Quisque eu magna volutpat, facilisis velit eget,
                    semper libero. Quisque finibus rutrum leo, vel convallis
                    dolor gravida vel. Pellentesque ac odio ex. Praesent ac nunc
                    ante.
                  </p>
                  <p>
                    Curabitur sit amet sem et leo pellentesque maximus sed a
                    ligula. Fusce fermentum justo et arcu elementum, id dapibus
                    urna eleifend. Ut ut libero a augue volutpat tincidunt in id
                    arcu.
                  </p>
                </div>
                <footer>
                  <div className='htlfndr-blue-title'>
                    more availability rooms
                  </div>
                  <div className='htlfndr-more-avilability-rooms'>
                    <div className='htlfndr-available-room htlfndr-table-view'>
                      <div className='htlfndr-hotel-thumbnail'>
                        {' '}
                        <Link to='/hotel-room-page'>
                          <img src={Img5} alt='avilable room' />
                        </Link>{' '}
                      </div>
                      <div className='htlfndr-hotel-info'>
                        <h6 className='htlfndr-post-title'>
                          <Link to='/hotel-room-page'>Classic Room</Link>
                        </h6>
                        <p>per night</p>{' '}
                        <span className='htlfndr-cost-normal'>$ 150</span>
                      </div>
                    </div>
                    <hr />
                    <div className='htlfndr-available-room htlfndr-table-view'>
                      <div className='htlfndr-hotel-thumbnail'>
                        {' '}
                        <Link to='/hotel-room-page'>
                          <img src={Img2} alt='avilable room' />
                        </Link>{' '}
                      </div>
                      <div className='htlfndr-hotel-info'>
                        <h6 className='htlfndr-post-title'>
                          <Link to='/hotel-room-page'>Twin Room</Link>
                        </h6>
                        <p>per night</p>{' '}
                        <span className='htlfndr-cost-normal'>$ 200</span>
                      </div>
                    </div>
                    <hr />
                    <div className='htlfndr-available-room htlfndr-table-view'>
                      <div className='htlfndr-hotel-thumbnail'>
                        {' '}
                        <Link to='/hotel-room-page'>
                          <img src={Img6} alt='avilable room' />
                        </Link>{' '}
                      </div>
                      <div className='htlfndr-hotel-info'>
                        <h6 className='htlfndr-post-title'>
                          <Link to='/hotel-room-page'>Family Suite</Link>
                        </h6>
                        <p>per night</p>{' '}
                        <span className='htlfndr-cost-normal'>$ 400</span>
                      </div>
                    </div>
                  </div>
                </footer>
              </article>
            </main>
            <aside
              id='htlfndr-right-sidebar'
              className='col-sm-12 col-md-4 col-lg-3 htlfndr-sidebar htlfndr-sidebar-in-right'
              role='complementary'
            >
              <p className='htlfndr-add-to-wishlist'>
                <Link to='#'>
                  <i className='fa fa-plus'></i> Add to Wishlist
                </Link>
              </p>
              <div className='widget htlfndr-hotel-visit-card special-offer'>
                <div className='htlfndr-widget-main-content htlfndr-widget-padding'>
                  <div className='htlfndr-hotel-logo'>
                    {' '}
                    <img src={Img7} alt='Hotel logo' />{' '}
                  </div>
                  <div className='htlfndr-hotel-price'>
                    <span className="htlfndr-special">special offer</span>
                    {' '}
                    <span>price</span> <span> for 1 night</span>{' '}
                    <span className='htlfndr-cost'>$ 100</span>{' '}
                  </div>
                </div>
              </div>
              <form action='/payment' method='post'>
                {' '}
                <input
                  className='htlfndr-book-now-button'
                  type='submit'
                  value='book now'
                />{' '}
              </form>
              <div className='widget htlfndr-room-details'>
                <div
                  id='htlfndr-accordion-1'
                  className='htlfndr-widget-main-content htlfndr-widget-padding'
                >
                  <h2 className='widget-title htlfndr-accordion-title'>
                    room details
                  </h2>
                  <div className='htlfndr-accordion-inner'>
                    <p className='htlfndr-details'>
                      <span>beds:</span> <span>1 double or 2 twin</span>
                    </p>
                    <p className='htlfndr-details'>
                      <span>floor area:</span>{' '}
                      <span>
                        19m<sup>2</sup>
                      </span>
                    </p>
                    <p className='htlfndr-details'>
                      <span>max guests:</span> <span>7</span>
                    </p>
                    <p className='htlfndr-details'>
                      <span>max kids:</span> <span>3</span>
                    </p>
                    <ul className='htlfndr-details-list'>
                      <li>Free wired Internet</li>
                      <li>Coffee/tea maker</li>
                      <li>Air conditioning</li>
                      <li>Cable TV service</li>
                      <li>Free newspaper</li>
                      <li>Hair dryer</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className='widget htlfndr-room-details'>
                <form action='/payment' method='post'>
                  <div
                    id='htlfndr-accordion-2'
                    className='htlfndr-widget-main-content htlfndr-widget-padding'
                  >
                    <h2 className='widget-title htlfndr-accordion-title'>
                      extra service
                    </h2>
                    <div className='htlfndr-accordion-inner'>
                      <div className='col-xs-6 col-sm-6 col-md-12 htlfndr-check-row'>
                        <p>
                          <label className='switch-label-check'>
                            <input
                              type='checkbox'
                              id='htlfndr-check-airport'
                              name='htlfndr-check-airport'
                              style={{ display: 'none' }}
                            />
                            <span className='switch'></span>
                          </label>
                          <label htmlFor='htlfndr-check-airport'>
                            airport pickup
                          </label>
                        </p>
                        <p>
                          <label className='switch-label-check'>
                            <input
                              type='checkbox'
                              id='htlfndr-check-extra-bed'
                              name='htlfndr-check-extra-bed'
                              style={{ display: 'none' }}
                            />
                            <span className='switch'></span>
                          </label>
                          <label htmlFor='htlfndr-check-extra-bed'>
                            extra bed
                          </label>
                        </p>
                      </div>
                      <div className='col-xs-6 col-sm-6 col-md-12 htlfndr-check-row'>
                        <p>
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
                        <p>
                          <label className='switch-label-check'>
                            <input
                              type='checkbox'
                              id='htlfndr-check-flowers'
                              name='htlfndr-check-flowers'
                              disabled='disabled'
                              checked='checked'
                              style={{ display: 'none' }}
                            />
                            <span className='switch'></span>
                          </label>
                          <label
                            htmlFor='htlfndr-check-flowers'
                            className='label-of-disabled-check'
                          >
                            flowers
                          </label>
                        </p>
                      </div>
                      <div className='clearfix'></div>
                      <p className='htlfndr-info'>
                        Hotel Info:
                        <span>
                          <i className='fa fa-phone'></i> (000)-000-000-000
                        </span>
                      </p>
                    </div>
                  </div>
                </form>
              </div>
            </aside>
          </div>
        </div>
      </div>
    )
  }
}

export default RoomSpecialOffer
