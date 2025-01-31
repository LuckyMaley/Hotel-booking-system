import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import DestinationImg1 from '../../assets/images/top-destination-1.jpg'
import ApiService from '../services/ApiService'

const TopDestinations = () => {
  const [hotels, setHotels] = useState([])
  const [visibleHotels, setVisibleHotels] = useState(6)

  useEffect(() => {
    const fetchHotels = async () => {
      try {
        const response = await ApiService.getHotels()

        const sortedHotels = response.sort((a, b) =>
          a.name.localeCompare(b.name)
        )
        
         const updatedHotels = await Promise.all(
  sortedHotels.map(async hotel => {
    try {
      const roomResponse = await ApiService.getRoomWithLowestPrice(hotel.id)
      return {
        ...hotel,
        room: roomResponse 
      }
    } catch (error) {
      console.error(`Error fetching room for hotel ${hotel.id}:`, error)
      return hotel 
    }
  })
)

setHotels(updatedHotels)

      } catch (error) {
        console.error('Error fetching hotels:', error)
      }
    }

    fetchHotels()
  }, [])

  const handleShowMore = () => {
    setVisibleHotels(prevVisible => prevVisible + 6)
  }

  return (
    <div>
      <section className='container htlfndr-top-destinations'>
        <h2 className='htlfndr-section-title'>Top Destinations</h2>
        <div className='htlfndr-section-under-title-line'></div>
        <div className='row'>
          {hotels.slice(0, visibleHotels).map((hotel, index) => (
            <div key={index} className='col-xs-12 col-sm-4 col-md-4'>
              <article className='htlfndr-top-destination-block'>
                <div className='htlfndr-content-block'>
                  <img
                    src={hotel.pictureURL || DestinationImg1} style={{width:'360px', height:'285px'}}
                    alt={hotel.name}
                  />
                  <div className='htlfndr-post-content'>
                    <p className='htlfndr-the-excerpt'>
                      {hotel.description}{' '}
                      <Link
                        className='htlfndr-read-more-arrow'
                        to={`/hotel?id=${hotel.id}`}
                      >
                        <i className='fa fa-angle-right'></i>
                      </Link>{' '}
                    </p>
                    <div className='htlfndr-services'>
                      <div className='row'>
                        <div className='col-sm-6 col-xs-6 htlfndr-service'>
                          Free WI-FI
                        </div>
                        <div className='col-sm-6 col-xs-6 htlfndr-service'>
                          Incl. breakfast
                        </div>
                      </div>
                      <div className='row'>
                        <div className='col-sm-6 col-xs-6 htlfndr-service'>
                          Private balcony
                        </div>
                        <div className='col-sm-6 col-xs-6 htlfndr-service'>
                          Bathroom
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <footer className='entry-footer'>
                  <div className='htlfndr-left-side-footer'>
                    <h5 className='entry-title'>{hotel.name}</h5>
                    <div className='htlfndr-entry-rating-stars'>
                      {[...Array(5)].map((_, index) => (
                        <i
                          key={index}
                          className={`fa fa-star ${
                            index < hotel.starRating ? 'htlfndr-star-color' : ''
                          }`}
                        ></i>
                      ))}
                    </div>
                  </div>
                  <div className='htlfndr-right-side-footer'>
                    <span className='htlfndr-cost'>$ {hotel.room ? hotel.room.price : 'N/A'}</span>{' '}
                    <span className='htlfndr-per-night'>per night</span>{' '}
                  </div>
                </footer>
              </article>
            </div>
          ))}
        </div>

        {/* Show More Button */}
        {visibleHotels < hotels.length && (
          <div className='text-center'>
            <button className='btn btn-primary' onClick={handleShowMore}>
              Show More
            </button>
          </div>
        )}
      </section>
    </div>
  )
}

export default TopDestinations
