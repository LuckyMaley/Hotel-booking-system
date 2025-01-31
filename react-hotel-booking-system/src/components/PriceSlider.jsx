import { useState, useEffect } from 'react'
import ReactSlider from 'react-slider'
import './PriceSlider.css'

const PriceSlider = () => {
  const [priceRange, setPriceRange] = useState([100, 1000]);
  const [minPrice, setMinPrice] = useState(100);
  const [maxPrice, setMaxPrice] = useState(1000);

  useEffect(() => {
    setMinPrice(priceRange[0]);
    setMaxPrice(priceRange[1]);
  }, [priceRange]);

  const handleSliderChange = values => {
    setPriceRange(values);
  };

  return (
    <div className='htlfndr-elements-content' id='htlfndr-slider'>
  <h3 className='htlfndr-font-24'>
    <b>Range Slider</b>
  </h3>
  <div className='clearfix htlfndr-price-range'>
    <span className='pull-left'>$0</span>
    <span className='pull-right'>$5000</span>
  </div>
  <div
    id='htlfndr-price-slider'
    style={{ position: 'relative', marginBottom: '20px' }}
  >
    <span className='price_min' style={{ left: `${(minPrice / 5000) * 100}%` }}>${minPrice}</span>
    <span className='price_max' style={{ left: `${(maxPrice / 5000) * 100}%` }}>${maxPrice}</span>
    <ReactSlider
      min={0}
      max={5000}
      value={priceRange}
      onChange={handleSliderChange}
      className='horizontal-slider'
      thumbClassName='slider-thumb'
      trackClassName='slider-track'
      renderTrack={(props, state) => {
        const { key, ...restProps } = props // Destructure key
        const className =
          state.index === 1 ? 'slider-track-filled' : 'slider-track-unfilled'
        return <div key={key} {...restProps} className={className} />
      }}
      renderThumb={props => {
        const { key, ...restProps } = props // Destructure key
        return <div key={key} {...restProps} className='slider-thumb' />
      }}
    />
  </div>
  <input
    type='text'
    id='htlfndr-price-show'
    value={`$${minPrice} - $${maxPrice}`}
    readOnly
  />
  <input
    type='hidden'
    name='htlfndr-price-start'
    id='htlfndr-price-start'
    value={minPrice}
  />
  <input
    type='hidden'
    name='htlfndr-price-stop'
    id='htlfndr-price-stop'
    value={maxPrice}
  />
</div>

  );
};

export default PriceSlider
