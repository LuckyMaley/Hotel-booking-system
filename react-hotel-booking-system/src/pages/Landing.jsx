// eslint-disable-next-line no-unused-vars
import React, {  useState } from 'react'
import { Link } from 'react-router-dom'
import Img1 from '../assets/images/slider-image-1.jpg'
import Drinks from '../assets/images/icon-ups-drinks.png'
import IconUpsCard from '../assets/images/icon-ups-card.png'
import IconUpsCheck from '../assets/images/icon-ups-check.png'
import CategoryBox1 from '../assets/images/category-box-1.jpg'
import CategoryBox2 from '../assets/images/category-box-2.jpg'
import CategoryBox3 from '../assets/images/category-box-3.jpg'
import CategoryBox4 from '../assets/images/category-box-4.jpg'
import CategoryBox5 from '../assets/images/category-box-5.jpg'
import CategoryBox6 from '../assets/images/category-box-6.jpg'
import Avatar1 from '../assets/images/visitor-avatar-1.jpg'
import Avatar2 from '../assets/images/visitor-avatar-2.jpg'
import Avatar3 from '../assets/images/visitor-avatar-3.jpg'
import RoomSearch from '../components/common/RoomSearch'
import TopDestinations from '../components/common/TopDestinations'

const Landing = () => {
 
  return (
    <div>
      
      <section className='htlfndr-slider-section'>
        <div>
          <div className='htlfndr-slide-wrapper'>
            {' '}
            <img src={Img1} alt='img-2' />
            <div className='htlfndr-slide-data container'>
              <div className='htlfndr-slide-rating-stars'>
                {' '}
                <i className='fa fa-star-o htlfndr-star-color'></i>{' '}
                <i className='fa fa-star-o htlfndr-star-color'></i>{' '}
                <i className='fa fa-star-o htlfndr-star-color'></i>{' '}
                <i className='fa fa-star-o htlfndr-star-color'></i>
                <i className='fa fa-star-o htlfndr-star-color'></i>{' '}
              </div>
              <h1 className='htlfndr-slider-title'>find your perfect hotel</h1>
              <div className='htlfndr-slider-under-title-line'></div>
            </div>
          </div>
        </div>
       <RoomSearch />
      </section>
      <main role='main'>
       <TopDestinations />
        <section className='container-fluid htlfndr-usp-section'>
          <h2 className='htlfndr-section-title htlfndr-lined-title'>
            <span>USP section</span>
          </h2>
          <div className='container'>
            <div className='row'>
              <div className='col-sm-4 htlfndr-icon-box'>
                {' '}
                <img
                  className='htlfndr-icon icon-drinks'
                  src={Drinks}
                  height='100'
                  width='100'
                  alt='icon'
                />
                <h5 className='htlfndr-section-subtitle'>beverages included</h5>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse interdum eleifend augue, quis rhoncus purus
                  fermentum.
                </p>{' '}
                <Link to='#' className='htlfndr-read-more-button'>
                  read more
                </Link>
              </div>
              <div className='col-sm-4 htlfndr-icon-box'>
                {' '}
                <img
                  className='htlfndr-icon icon-drinks'
                  src={IconUpsCard}
                  height='100'
                  width='100'
                  alt='icon'
                />
                <h5 className='htlfndr-section-subtitle'>best deals</h5>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse interdum eleifend augue, quis rhoncus purus
                  fermentum.
                </p>{' '}
                <Link to='#' className='htlfndr-read-more-button'>
                  read more
                </Link>
              </div>
              <div className='col-sm-4 htlfndr-icon-box'>
                {' '}
                <img
                  className='htlfndr-icon icon-drinks'
                  src={IconUpsCheck}
                  height='100'
                  width='100'
                  alt='icon'
                />
                <h5 className='htlfndr-section-subtitle'>guarantee</h5>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse interdum eleifend augue, quis rhoncus purus
                  fermentum.
                </p>{' '}
                <Link to='#' className='htlfndr-read-more-button'>
                  read more
                </Link>
              </div>
            </div>
          </div>
        </section>
        <section className='container-fluid htlfndr-categories-portfolio'>
          <h2 className='htlfndr-section-title bigger-title'>
            discover the world
          </h2>
          <div className='htlfndr-section-under-title-line'></div>
          <div className='container'>
            <div className='row'>
              <div className='col-sm-4 col-xs-6'>
                <div
                  className='htlfndr-category-box'
                  onClick={e => e.preventDefault()}
                >
                  {' '}
                  <img
                    src={CategoryBox1}
                    height='311'
                    width='370'
                    alt='category-img'
                  />
                  <div className='category-description'>
                    <div className='htlfndr-icon-flag-border'>
                      <i className='htlfndr-icon-flag flag-germany'></i>
                    </div>
                    <h2 className='subcategory-name'>berlin</h2>{' '}
                    <Link to='#' className='htlfndr-category-permalink'></Link>
                    <h5 className='category-name'>germany</h5>
                    <p className='category-properties'>
                      <span>374</span> properties
                    </p>
                  </div>
                </div>
              </div>
              <div className='col-sm-4 col-xs-6'>
                <div
                  className='htlfndr-category-box'
                  onClick={e => e.preventDefault()}
                >
                  {' '}
                  <img
                    src={CategoryBox2}
                    height='311'
                    width='370'
                    alt='category-img'
                  />
                  <div className='category-description'>
                    <div className='htlfndr-icon-flag-border'>
                      <i className='htlfndr-icon-flag flag-britain'></i>
                    </div>
                    <h2 className='subcategory-name'>london</h2>{' '}
                    <Link to='#' className='htlfndr-category-permalink'></Link>
                    <h5 className='category-name'>britain</h5>
                    <p className='category-properties'>
                      <span>185</span> properties
                    </p>
                  </div>
                </div>
              </div>
              <div className='col-sm-4 col-xs-6'>
                <div
                  className='htlfndr-category-box'
                  onClick={e => e.preventDefault()}
                >
                  {' '}
                  <img
                    src={CategoryBox3}
                    height='311'
                    width='370'
                    alt='category-img'
                  />
                  <div className='category-description'>
                    <div className='htlfndr-icon-flag-border'>
                      <i className='htlfndr-icon-flag flag-italy'></i>
                    </div>
                    <h2 className='subcategory-name'>rom</h2>{' '}
                    <Link to='#' className='htlfndr-category-permalink'></Link>
                    <h5 className='category-name'>italy</h5>
                    <p className='category-properties'>
                      <span>98</span> properties
                    </p>
                  </div>
                </div>
              </div>
              <div className='col-sm-4 col-xs-6'>
                <div
                  className='htlfndr-category-box'
                  onClick={e => e.preventDefault()}
                >
                  {' '}
                  <img
                    src={CategoryBox4}
                    height='311'
                    width='370'
                    alt='category-img'
                  />
                  <div className='category-description'>
                    <div className='htlfndr-icon-flag-border'>
                      <i className='htlfndr-icon-flag flag-france'></i>
                    </div>
                    <h2 className='subcategory-name'>paris</h2>{' '}
                    <Link to='#' className='htlfndr-category-permalink'></Link>
                    <h5 className='category-name'>france</h5>
                    <p className='category-properties'>
                      <span>281</span> properties
                    </p>
                  </div>
                </div>
              </div>
              <div className='col-sm-4 col-xs-6'>
                <div
                  className='htlfndr-category-box'
                  onClick={e => e.preventDefault()}
                >
                  {' '}
                  <img
                    src={CategoryBox5}
                    height='311'
                    width='370'
                    alt='category-img'
                  />
                  <div className='category-description'>
                    <div className='htlfndr-icon-flag-border'>
                      <i className='htlfndr-icon-flag flag-russia'></i>
                    </div>
                    <h2 className='subcategory-name'>moscow</h2>{' '}
                    <Link to='#' className='htlfndr-category-permalink'></Link>
                    <h5 className='category-name'>russia</h5>
                    <p className='category-properties'>
                      <span>38</span> properties
                    </p>
                  </div>
                </div>
              </div>
              <div className='col-sm-4 col-xs-6'>
                <div
                  className='htlfndr-category-box'
                  onClick={e => e.preventDefault()}
                >
                  {' '}
                  <img
                    src={CategoryBox6}
                    height='311'
                    width='370'
                    alt='category-img'
                  />
                  <div className='category-description'>
                    <div className='htlfndr-icon-flag-border'>
                      <i className='htlfndr-icon-flag flag-japan'></i>
                    </div>
                    <h2 className='subcategory-name'>tokio</h2>{' '}
                    <Link to='#' className='htlfndr-category-permalink'></Link>
                    <h5 className='category-name'>japan</h5>
                    <p className='category-properties'>
                      <span>318</span> properties
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className='container-fluid htlfndr-visitors-cards'>
          <h2 className='htlfndr-section-title bigger-title'>
            visitors experienced
          </h2>
          <div className='htlfndr-section-under-title-line'></div>
          <div className='container'>
            <div className='row'>
              <div className='col-sm-4 col-xs-12 htlfndr-visitor-column'>
                <div className='htlfndr-visitor-card'>
                  <div className='visitor-avatar-side'>
                    <div className='visitor-avatar'>
                      {' '}
                      <img
                        src={Avatar1}
                        height='90'
                        width='90'
                        alt='user avatar'
                      />{' '}
                    </div>
                  </div>
                  <div className='visitor-info-side'>
                    <h5 className='visitor-user-name'>Sara Connor</h5>
                    <h6 className='visitor-user-firm'>Travel Magazine</h6>
                    <p className='visitor-user-text'>
                      Nunc cursus libero purus ac congue arcu cursus ut sed
                      vitae pulvinar massa idporta nequetiam nar...
                    </p>
                  </div>
                </div>
              </div>
              <div className='col-sm-4 col-xs-12 htlfndr-visitor-column'>
                <div className='htlfndr-visitor-card'>
                  <div className='visitor-avatar-side'>
                    <div className='visitor-avatar'>
                      {' '}
                      <img
                        src={Avatar2}
                        height='90'
                        width='90'
                        alt='user avatar'
                      />{' '}
                    </div>
                  </div>
                  <div className='visitor-info-side'>
                    <h5 className='visitor-user-name'>Mira Young</h5>
                    <h6 className='visitor-user-firm'>Hotel Manager</h6>
                    <p className='visitor-user-text'>
                      Nunc cursus libero purus ac congue arcu cursus ut sed
                      vitae pulvinar massa idporta nequetiam nar...
                    </p>
                  </div>
                </div>
              </div>
              <div className='col-sm-4 col-xs-12 htlfndr-visitor-column'>
                <div className='htlfndr-visitor-card'>
                  <div className='visitor-avatar-side'>
                    <div className='visitor-avatar'>
                      {' '}
                      <img
                        src={Avatar3}
                        height='90'
                        width='90'
                        alt='user avatar'
                      />{' '}
                    </div>
                  </div>
                  <div className='visitor-info-side'>
                    <h5 className='visitor-user-name'>John Smith</h5>
                    <h6 className='visitor-user-firm'>Hotel Manager</h6>
                    <p className='visitor-user-text'>
                      Nunc cursus libero purus ac congue arcu cursus ut sed
                      vitae pulvinar massa idporta nequetiam nar...
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

export default Landing
