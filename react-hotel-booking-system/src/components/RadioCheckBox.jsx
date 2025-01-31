import React, { useState } from 'react'

const RadioCheckbox = () => {
  const [isChecked, setIsChecked] = useState({
    radio1: true,
    radio2: false,
    radio3: false,
    radio4: true,
    check1: true,
    check2: false,
    check4: false,
    check5: true
  })

  const handleCheckboxChange = e => {
    const { id, checked } = e.target
    setIsChecked(prevState => ({
      ...prevState,
      [id]: checked
    }))
  }

  return (
    <div className='htlfndr-elements-content' id='htlfndr-adv-but'>
      <h3 className='htlfndr-font-24'>
        <b>Advanced checkboxes and radios</b>
      </h3>
      <div className='row htlfndr-check-radios'>
        <div className='col-md-6'>
          {/* Radio Buttons */}
          <p>
            <label className='switch-label-check'>
              <input
                type='radio'
                id='radio1'
                name='htlfndr-radio'
                checked={isChecked.radio1}
                onChange={handleCheckboxChange}
                style={{ display: 'none' }}
              />
              <span className='switch'></span>
            </label>
            <label className='htlfndr-top-label' htmlFor='radio1'>
              Radio 1
            </label>
          </p>
          <p>
            <label className='switch-label-check'>
              <input
                type='radio'
                id='radio2'
                name='htlfndr-radio'
                checked={isChecked.radio2}
                onChange={handleCheckboxChange}
                style={{ display: 'none' }}
              />
              <span className='switch'></span>
            </label>
            <label className='htlfndr-top-label' htmlFor='radio2'>
              Radio 2
            </label>
          </p>
          <p>
            <label className='switch-label-check'>
              <input
                type='radio'
                id='radio3'
                name='htlfndr-radio'
                disabled
                style={{ display: 'none' }}
              />
              <span className='switch'></span>
            </label>
            <label
              className='htlfndr-top-label label-of-disabled-check'
              htmlFor='radio3'
            >
              Radio Disable
            </label>
          </p>
          <p>
            <label className='switch-label-check'>
              <input
                type='radio'
                id='radio4'
                name='htlfndr-radio-dis'
                disabled
                checked={isChecked.radio4}
                onChange={handleCheckboxChange}
                style={{ display: 'none' }}
              />
              <span className='switch'></span>
            </label>
            <label
              className='htlfndr-top-label label-of-disabled-check'
              htmlFor='radio4'
            >
              Radio Disable Checked
            </label>
          </p>
        </div>

        <div className='col-md-6'>
          {/* Checkboxes */}
          <p>
            <label className='switch-label-check'>
              <input
                type='checkbox'
                id='check1'
                name='htlfndr-check'
                checked={isChecked.check1}
                onChange={handleCheckboxChange}
                style={{ display: 'none' }}
              />
              <span className='switch'></span>
            </label>
            <label htmlFor='check1' className='mainColor2'>
              Checkbox 1
            </label>
          </p>
          <p>
            <label className='switch-label-check'>
              <input
                type='checkbox'
                id='check2'
                name='htlfndr-check'
                checked={isChecked.check2}
                onChange={handleCheckboxChange}
                style={{ display: 'none' }}
              />
              <span className='switch'></span>
            </label>
            <label htmlFor='check2'>Checkbox 2</label>
          </p>
          <p>
            <label className='switch-label-check'>
              <input
                type='checkbox'
                id='check4'
                name='htlfndr-check'
                disabled
                style={{ display: 'none' }}
              />
              <span className='switch'></span>
            </label>
            <label htmlFor='check4' className='label-of-disabled-check'>
              Checkbox Disable
            </label>
          </p>
          <p>
            <label className='switch-label-check'>
              <input
                type='checkbox'
                id='check5'
                name='htlfndr-check'
                disabled
                checked={isChecked.check5}
                onChange={handleCheckboxChange}
                style={{ display: 'none' }}
              />
              <span className='switch'></span>
            </label>
            <label
              htmlFor='check5'
              className='mainColor2 label-of-disabled-check'
            >
              Checkbox Disable Checked
            </label>
          </p>
        </div>
      </div>
    </div>
  )
}

export default RadioCheckbox;
