import React, { useEffect } from 'react'

import Img1 from '../assets/images/kitchen-island1.jpg'
import Img2 from '../assets/images/5053563227_ee0db21ca5_b.jpg'
import Img3 from '../assets/images/83890-Web1.jpg'
import Img4 from '../assets/images/top-destination-1.jpg'
import Img5 from '../assets/images/29572el_chaise_longue_o_cheslon.jpg'


const RoomSlider = () => {
  useEffect(() => {
    window.$('#htlfndr-room-slider').owlCarousel({
      items: 1,
      loop: true,
      nav: true,
      dots: true,
      autoplay: true, 
      autoplayTimeout: 5000, 
      smartSpeed: 1000
    })

    return () => {
      window.$('#htlfndr-room-slider').trigger('destroy.owl.carousel')
    }
  }, [])

  return (
    <div
      id='htlfndr-room-slider'
      className='owl-carousel owl-theme'
      style={{ opacity: 1, display: 'block' }}
    >
      <div className='htlfndr-room-slide-wrapper'>
        <img src={Img1} alt='room picture' />
      </div>
      <div className='htlfndr-room-slide-wrapper'>
        <img src={Img2} alt='room picture' />
      </div>
      <div className='htlfndr-room-slide-wrapper'>
        <img src={Img3} alt='room picture' />
      </div>
      <div className='htlfndr-room-slide-wrapper'>
        <img src={Img4} alt='room picture' />
      </div>
      <div className='htlfndr-room-slide-wrapper'>
        <img src={Img5} alt='room picture' />
      </div>
    </div>
  )
}

export default RoomSlider
