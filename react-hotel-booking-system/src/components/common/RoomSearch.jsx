import { useState} from 'react'
import { useNavigate } from 'react-router-dom'

const RoomSearch = () => {
    const [selectedOption, setSelectedOption] = useState('name')
    const [textValue, setTextValue] = useState('name')
    const [searchString, setSearchString] = useState('')
    const [error, setError] = useState('')
    const navigate = useNavigate();
    const handleSelectChange = e => {
        const selected = e.target.value
        setSelectedOption(selected)

  
        if (selected === 'name') {
            setTextValue('name')
        } else if (selected === 'city') {
            setTextValue('city')
        }
    }
    const handleSearchString= (e) =>{
        setSearchString(e.target.value)
    }
    const handleSearch = (e) => {
        e.preventDefault()
        if (searchString) {
            if (selectedOption == 'name') {
                navigate('/hotels?query=' + searchString + '&type=' + selectedOption)
            }
            else {
                navigate('/hotels?query=' + searchString + '&type=' + selectedOption)
            }
        }
        else {
            setError("nothing to search, please enter a search string")
        }
    }
  return (
    <aside className='htlfndr-form-in-slider htlfndr-search-form-inline' >
  <div className='container'>
    <h5>Looking for a hotel?</h5>
    <form
      action='search-result'
      name='search-hotel'
      id='search-hotel'
      className='htlfndr-search-form'
    >
      <div id='htlfndr-input-1' className='htlfndr-input-wrapper'>
        {' '}
        <input
          type='text'
          name='htlfndr-city'
          id='htlfndr-city'
          className='search-hotel-input'
          onChange={handleSearchString}
          placeholder={`Enter ${textValue}`}
        />
      </div>
   
      <div  className='htlfndr-input-wrapper'>
        {' '}
        <label htmlFor='htlfndr-dropdown' className='sr-only'>
          Search by Name or City
        </label>{' '}
        <select
          name='htlfndr-dropdown'
          id='htlfndr-dropdown'
                          className='htlfndr-dropdown ui-selectmenu-button ui-widget ui-corner-all' 
                          value={selectedOption} onChange={handleSelectChange}
        >
          <option value='name'>Seach by name</option>
          <option value='city'>Search by city</option>
        </select>{' '}
      </div>
      <div id='htlfndr-input-5'>
        {' '}
        <input type='submit' value='search' onClick={handleSearch} />{' '}
      </div>
      
    </form><div style={{clear:'both', width:'100%'}}>{error && <p className="alert alert-danger" style={{backgroundColor:'white'}}>{error}</p>}</div>
  </div>
</aside>

  )
}

export default RoomSearch
