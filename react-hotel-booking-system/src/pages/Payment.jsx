// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Img1 from '../assets/images/16415688600_a030e3e8dd_k.jpg'

const Payment = () => {
    const [selectedOption, setSelectedOption] = useState('')

const handleOptionChange = event => {
  setSelectedOption(event.target.value)
}

  return (
      <div>
        <div className='container'>
  <div className='htlfndr-steps'>
    <ul className='htlfndr-progress'>
      <li>
        <Link to='/search-result'>
          <span className='htlfndr-step-number'>1</span>
          <span className='htlfndr-step-description'>results</span>
        </Link>
      </li>
      <li>
        <Link to='/hotel-page-v1'>
          <span className='htlfndr-step-number'>2</span>
          <span className='htlfndr-step-description'>hotel</span>
        </Link>
      </li>
      <li>
        <Link to='/hotel-room-page'>
          <span className='htlfndr-step-number'>3</span>
          <span className='htlfndr-step-description'>room</span>
        </Link>
      </li>
      <li className='htlfndr-active-step'>
        <span className='htlfndr-step-number'>4</span>
        <span className='htlfndr-step-description'>payment</span>
      </li>
    </ul>
  </div>
  <div className='row htlfndr-payment-page'>
    <main
      id='htlfndr-main-content'
      className='col-sm-12 col-md-8 col-lg-8'
      role='main'
    >
      <form action='/thanks-page' id='htlfndr-payment-form' method='post'>
        <section className='htlfndr-form-section'>
          <header>
            <h2 className='htlfndr-form-section-title'>
              Who&apos;s <span>travelling</span>?
            </h2>
            <h5 className='htlfndr-form-section-description'>
              Please tell us who will be checking in.
            </h5>
          </header>
          <div id='htlfndr-accordion-3' className='htlfndr-form-block'>
            <h3 className='htlfndr-form-block-title htlfndr-accordion-title'>
              first adult
            </h3>
            <div className='htlfndr-form-block-inner htlfndr-accordion-inner'>
              <div className='row'>
                <div className='col-xs-6 col-sm-6 col-md-6'>
                  <label
                    htmlFor='htlfndr-first-adult-name'
                    className='htlfndr-required htlfndr-top-label'
                  >
                    First name
                  </label>
                  <input
                    type='text'
                    id='htlfndr-first-adult-name'
                    name='htlfndr-first-adult-name'
                    className='htlfndr-input htlfndr-input-error'
                    placeholder='Enter first name'
                  />
                  <p className='htlfndr-error-text'>
                    Please enter a first and last name using letters only.
                  </p>
                </div>
                <div className='col-xs-6 col-sm-6 col-md-6'>
                  <label
                    htmlFor='htlfndr-first-adult-last-name'
                    className='htlfndr-required htlfndr-top-label'
                  >
                    Last name
                  </label>
                  <input
                    type='text'
                    id='htlfndr-first-adult-last-name'
                    name='htlfndr-first-adult-last-name'
                    className='htlfndr-input'
                    placeholder='Enter last name'
                  />
                </div>
              </div>
              <div className='row'>
                <div className='col-md-6'>
                  <label
                    htmlFor='htlfndr-first-adult-birth-day-button'
                    className='htlfndr-required htlfndr-top-label'
                  >
                    Date of birth
                  </label>
                  <div className='htlfndr-small-select htlfndr-input-wrapper'>
                    <select
                      name='htlfndr-first-adult-birth-day'
                      id='htlfndr-first-adult-birth-day'
                      className='htlfndr-dropdown ui-selectmenu-button ui-widget ui-state-default ui-corner-all'
                     defaultValue={''}>
                      <option value='' disabled='disabled' >
                        Day
                      </option>
                      <option value='1'>1</option>
                      <option value='2'>2</option>
                      <option value='3'>3</option>
                      <option value='4'>4</option>
                      <option value='5'>5</option>
                      <option value='6'>6</option>
                      <option value='7'>7</option>
                      <option value='8'>8</option>
                      <option value='9'>9</option>
                      <option value='10'>10</option>
                      <option value='11'>12</option>
                      <option value='12'>12</option>
                      <option value='13'>13</option>
                      <option value='14'>14</option>
                      <option value='15'>15</option>
                      <option value='16'>16</option>
                      <option value='17'>17</option>
                      <option value='18'>18</option>
                      <option value='19'>19</option>
                      <option value='20'>20</option>
                      <option value='21'>21</option>
                      <option value='22'>22</option>
                      <option value='23'>23</option>
                      <option value='24'>24</option>
                      <option value='25'>25</option>
                      <option value='26'>26</option>
                      <option value='27'>27</option>
                      <option value='28'>28</option>
                      <option value='29'>29</option>
                      <option value='30'>30</option>
                      <option value='31'>31</option>
                    </select>
                    
                  </div>
                  <div className='htlfndr-small-select htlfndr-input-wrapper'>
                    <label
                      htmlFor='htlfndr-first-adult-birth-month-button'
                      className='sr-only'
                    >
                      select month
                    </label>
                    <select
                      name='htlfndr-first-adult-birth-month'
                      id='htlfndr-first-adult-birth-month'
                      className='htlfndr-dropdown ui-selectmenu-button ui-widget ui-state-default ui-corner-all'
                     defaultValue={''}>
                      <option value='' disabled='disabled' >
                        Month
                      </option>
                      <option value='01'>January</option>
                      <option value='02'>February</option>
                      <option value='03'>March</option>
                      <option value='04'>April</option>
                      <option value='05'>May</option>
                      <option value='06'>June</option>
                      <option value='07'>July</option>
                      <option value='08'>August</option>
                      <option value='09'>September</option>
                      <option value='10'>October</option>
                      <option value='11'>November</option>
                      <option value='12'>December</option>
                    </select>
                    
                  </div>
                  <div className='htlfndr-small-select htlfndr-input-wrapper'>
                    <label
                      htmlFor='htlfndr-first-adult-birth-year-button'
                      className='sr-only'
                    >
                      select year
                    </label>
                    <select
                      name='htlfndr-first-adult-birth-year'
                      id='htlfndr-first-adult-birth-year'
                      className='htlfndr-dropdown ui-selectmenu-button ui-widget ui-state-default ui-corner-all'
                     defaultValue={''}>
                      <option value='' disabled='disabled' >
                        Year
                      </option>
                      <option value='1999'>1999</option>
                      <option value='1998'>1998</option>
                      <option value='1997'>1997</option>
                      <option value='1996'>1996</option>
                      <option value='1995'>1995</option>
                      <option value='1994'>1994</option>
                      <option value='1993'>1993</option>
                      <option value='1992'>1992</option>
                      <option value='1991'>1991</option>
                      <option value='1990'>1990</option>
                      <option value='1989'>1989</option>
                      <option value='1988'>1988</option>
                      <option value='1987'>1987</option>
                      <option value='1986'>1986</option>
                      <option value='1985'>1985</option>
                      <option value='1984'>1984</option>
                      <option value='1983'>1983</option>
                      <option value='1982'>1982</option>
                      <option value='1981'>1981</option>
                      <option value='1980'>1980</option>
                      <option value='1979'>1979</option>
                      <option value='1978'>1978</option>
                      <option value='1977'>1977</option>
                      <option value='1976'>1976</option>
                      <option value='1975'>1975</option>
                      <option value='1974'>1974</option>
                      <option value='1973'>1973</option>
                      <option value='1972'>1972</option>
                      <option value='1971'>1971</option>
                      <option value='1970'>1970</option>
                      <option value='1969'>1969</option>
                      <option value='1968'>1968</option>
                      <option value='1967'>1967</option>
                      <option value='1966'>1966</option>
                      <option value='1965'>1965</option>
                      <option value='1964'>1964</option>
                      <option value='1963'>1963</option>
                      <option value='1962'>1962</option>
                      <option value='1961'>1961</option>
                      <option value='1960'>1960</option>
                      <option value='1959'>1959</option>
                      <option value='1958'>1958</option>
                      <option value='1957'>1957</option>
                      <option value='1956'>1956</option>
                      <option value='1955'>1955</option>
                      <option value='1954'>1954</option>
                      <option value='1953'>1953</option>
                      <option value='1952'>1952</option>
                      <option value='1951'>1951</option>
                      <option value='1950'>1950</option>
                      <option value='1949'>1949</option>
                      <option value='1948'>1948</option>
                      <option value='1947'>1947</option>
                      <option value='1946'>1946</option>
                      <option value='1945'>1945</option>
                      <option value='1944'>1944</option>
                      <option value='1943'>1943</option>
                      <option value='1942'>1942</option>
                      <option value='1941'>1941</option>
                      <option value='1940'>1940</option>
                      <option value='1939'>1939</option>
                      <option value='1938'>1938</option>
                      <option value='1937'>1937</option>
                      <option value='1936'>1936</option>
                      <option value='1935'>1935</option>
                      <option value='1934'>1934</option>
                      <option value='1933'>1933</option>
                      <option value='1932'>1932</option>
                      <option value='1931'>1931</option>
                      <option value='1930'>1930</option>
                      <option value='1929'>1929</option>
                      <option value='1928'>1928</option>
                      <option value='1927'>1927</option>
                      <option value='1926'>1926</option>
                      <option value='1925'>1925</option>
                      <option value='1924'>1924</option>
                      <option value='1923'>1923</option>
                      <option value='1922'>1922</option>
                      <option value='1921'>1921</option>
                      <option value='1920'>1920</option>
                      <option value='1919'>1919</option>
                      <option value='1918'>1918</option>
                      <option value='1917'>1917</option>
                      <option value='1916'>1916</option>
                      <option value='1915'>1915</option>
                      <option value='1914'>1914</option>
                      <option value='1913'>1913</option>
                      <option value='1912'>1912</option>
                      <option value='1911'>1911</option>
                      <option value='1910'>1910</option>
                      <option value='1909'>1909</option>
                      <option value='1908'>1908</option>
                      <option value='1907'>1907</option>
                      <option value='1906'>1906</option>
                      <option value='1905'>1905</option>
                      <option value='1904'>1904</option>
                      <option value='1903'>1903</option>
                      <option value='1902'>1902</option>
                      <option value='1901'>1901</option>
                      <option value='1900'>1900</option>
                    </select>
                    
                  </div>
                  <div className='clearfix'></div>
                </div>
                <div className='col-md-6'>
                  <label
                    htmlFor='htlfndr-first-adult-email'
                    className='htlfndr-required htlfndr-top-label'
                  >
                    Email Address
                  </label>
                  <input
                    type='email'
                    id='htlfndr-first-adult-email'
                    className='htlfndr-input'
                    name='htlfndr-first-adult-email'
                    placeholder='Enter Email Address'
                  />
                </div>
              </div>
              <div className='row'>
                <div className='col-md-6 htlfndr-classic-radio'>
                  <label className='htlfndr-required htlfndr-top-label'>
                    Gender
                  </label>
                  <label className='switch-label-check'>
                    <input
                      type='checkbox'
                      id='htlfndr-first-adult-male'
                      name='htlfndr-first-adult-gender'
                      value='male'
                      style={{display: 'none'}}
                    />
                    <span className='switch'></span>
                  </label>
                  <label htmlFor='htlfndr-first-adult-male'>Male</label>
                  <label className='switch-label-check'>
                    <input
                      type='checkbox'
                      id='htlfndr-first-adult-female'
                      name='htlfndr-first-adult-gender'
                      value='female'
                      style={{display: 'none'}}
                    />
                    <span className='switch'></span>
                  </label>
                  <label htmlFor='htlfndr-first-adult-female'>Female</label>
                </div>
                <div className='col-md-6'>
                  <label
                    htmlFor='htlfndr-first-adult-phone'
                    className='htlfndr-required htlfndr-top-label'
                  >
                    Phone number
                  </label>
                  <input
                    type='tel'
                    id='htlfndr-first-adult-phone'
                    className='htlfndr-input'
                    name='htlfndr-first-adult-phone'
                    placeholder='Enter phone number'
                  />
                </div>
              </div>
            </div>
          </div>
          <div id='htlfndr-accordion-4' className='htlfndr-form-block'>
            <h3 className='htlfndr-form-block-title htlfndr-accordion-title'>
              second adult
            </h3>
            <div className='htlfndr-form-block-inner htlfndr-accordion-inner'>
              <div className='row'>
                <div className='col-md-6'>
                  <label
                    htmlFor='htlfndr-second-adult-first-name'
                    className='htlfndr-required htlfndr-top-label'
                  >
                    First name
                  </label>
                  <input
                    type='text'
                    id='htlfndr-second-adult-first-name'
                    name='htlfndr-second-adult-first-name'
                    className='htlfndr-input'
                    placeholder='Enter first name'
                  />
                </div>
                <div className='col-md-6'>
                  <label
                    htmlFor='htlfndr-second-adult-last-name'
                    className='htlfndr-required htlfndr-top-label'
                  >
                    Last name
                  </label>
                  <input
                    type='text'
                    id='htlfndr-second-adult-last-name'
                    name='htlfndr-second-adult-last-name'
                    className='htlfndr-input'
                    placeholder='Enter last name'
                  />
                </div>
              </div>
              <div className='row'>
                <div className='col-md-6'>
                  <label
                    htmlFor='htlfndr-second-adult-birth-day-button'
                    className='htlfndr-required htlfndr-top-label'
                  >
                    Date of birth
                  </label>
                  <div className='htlfndr-small-select htlfndr-input-wrapper'>
                    <select
                      name='htlfndr-second-adult-birth-day'
                      id='htlfndr-second-adult-birth-day'
                      className='htlfndr-dropdown ui-selectmenu-button ui-widget ui-state-default ui-corner-all'
                     defaultValue={''}>
                      <option value='' disabled='disabled' >
                        Day
                      </option>
                      <option value='1'>1</option>
                      <option value='2'>2</option>
                      <option value='3'>3</option>
                      <option value='4'>4</option>
                      <option value='5'>5</option>
                      <option value='6'>6</option>
                      <option value='7'>7</option>
                      <option value='8'>8</option>
                      <option value='9'>9</option>
                      <option value='10'>10</option>
                      <option value='11'>12</option>
                      <option value='12'>12</option>
                      <option value='13'>13</option>
                      <option value='14'>14</option>
                      <option value='15'>15</option>
                      <option value='16'>16</option>
                      <option value='17'>17</option>
                      <option value='18'>18</option>
                      <option value='19'>19</option>
                      <option value='20'>20</option>
                      <option value='21'>21</option>
                      <option value='22'>22</option>
                      <option value='23'>23</option>
                      <option value='24'>24</option>
                      <option value='25'>25</option>
                      <option value='26'>26</option>
                      <option value='27'>27</option>
                      <option value='28'>28</option>
                      <option value='29'>29</option>
                      <option value='30'>30</option>
                      <option value='31'>31</option>
                    </select>
                    
                  </div>
                  <div className='htlfndr-small-select htlfndr-input-wrapper'>
                    <label
                      htmlFor='htlfndr-second-adult-birth-month-button'
                      className='sr-only'
                    >
                      select month
                    </label>
                    <select
                      name='htlfndr-second-adult-birth-month'
                      id='htlfndr-second-adult-birth-month'
                      className='htlfndr-dropdown ui-selectmenu-button ui-widget ui-state-default ui-corner-all'
                     defaultValue={''}>
                      <option value='' disabled='disabled' >
                        Month
                      </option>
                      <option value='01'>January</option>
                      <option value='02'>February</option>
                      <option value='03'>March</option>
                      <option value='04'>April</option>
                      <option value='05'>May</option>
                      <option value='06'>June</option>
                      <option value='07'>July</option>
                      <option value='08'>August</option>
                      <option value='09'>September</option>
                      <option value='10'>October</option>
                      <option value='11'>November</option>
                      <option value='12'>December</option>
                    </select>
                    
                  </div>
                  <div className='htlfndr-small-select htlfndr-input-wrapper'>
                    <label
                      htmlFor='htlfndr-second-adult-birth-year-button'
                      className='sr-only'
                    >
                      select year
                    </label>
                    <select
                      name='htlfndr-second-adult-birth-year'
                      id='htlfndr-second-adult-birth-year'
                      className='htlfndr-dropdown ui-selectmenu-button ui-widget ui-state-default ui-corner-all'
                     defaultValue={''}>
                      <option value='' disabled='disabled' >
                        Year
                      </option>
                      <option value='1999'>1999</option>
                      <option value='1998'>1998</option>
                      <option value='1997'>1997</option>
                      <option value='1996'>1996</option>
                      <option value='1995'>1995</option>
                      <option value='1994'>1994</option>
                      <option value='1993'>1993</option>
                      <option value='1992'>1992</option>
                      <option value='1991'>1991</option>
                      <option value='1990'>1990</option>
                      <option value='1989'>1989</option>
                      <option value='1988'>1988</option>
                      <option value='1987'>1987</option>
                      <option value='1986'>1986</option>
                      <option value='1985'>1985</option>
                      <option value='1984'>1984</option>
                      <option value='1983'>1983</option>
                      <option value='1982'>1982</option>
                      <option value='1981'>1981</option>
                      <option value='1980'>1980</option>
                      <option value='1979'>1979</option>
                      <option value='1978'>1978</option>
                      <option value='1977'>1977</option>
                      <option value='1976'>1976</option>
                      <option value='1975'>1975</option>
                      <option value='1974'>1974</option>
                      <option value='1973'>1973</option>
                      <option value='1972'>1972</option>
                      <option value='1971'>1971</option>
                      <option value='1970'>1970</option>
                      <option value='1969'>1969</option>
                      <option value='1968'>1968</option>
                      <option value='1967'>1967</option>
                      <option value='1966'>1966</option>
                      <option value='1965'>1965</option>
                      <option value='1964'>1964</option>
                      <option value='1963'>1963</option>
                      <option value='1962'>1962</option>
                      <option value='1961'>1961</option>
                      <option value='1960'>1960</option>
                      <option value='1959'>1959</option>
                      <option value='1958'>1958</option>
                      <option value='1957'>1957</option>
                      <option value='1956'>1956</option>
                      <option value='1955'>1955</option>
                      <option value='1954'>1954</option>
                      <option value='1953'>1953</option>
                      <option value='1952'>1952</option>
                      <option value='1951'>1951</option>
                      <option value='1950'>1950</option>
                      <option value='1949'>1949</option>
                      <option value='1948'>1948</option>
                      <option value='1947'>1947</option>
                      <option value='1946'>1946</option>
                      <option value='1945'>1945</option>
                      <option value='1944'>1944</option>
                      <option value='1943'>1943</option>
                      <option value='1942'>1942</option>
                      <option value='1941'>1941</option>
                      <option value='1940'>1940</option>
                      <option value='1939'>1939</option>
                      <option value='1938'>1938</option>
                      <option value='1937'>1937</option>
                      <option value='1936'>1936</option>
                      <option value='1935'>1935</option>
                      <option value='1934'>1934</option>
                      <option value='1933'>1933</option>
                      <option value='1932'>1932</option>
                      <option value='1931'>1931</option>
                      <option value='1930'>1930</option>
                      <option value='1929'>1929</option>
                      <option value='1928'>1928</option>
                      <option value='1927'>1927</option>
                      <option value='1926'>1926</option>
                      <option value='1925'>1925</option>
                      <option value='1924'>1924</option>
                      <option value='1923'>1923</option>
                      <option value='1922'>1922</option>
                      <option value='1921'>1921</option>
                      <option value='1920'>1920</option>
                      <option value='1919'>1919</option>
                      <option value='1918'>1918</option>
                      <option value='1917'>1917</option>
                      <option value='1916'>1916</option>
                      <option value='1915'>1915</option>
                      <option value='1914'>1914</option>
                      <option value='1913'>1913</option>
                      <option value='1912'>1912</option>
                      <option value='1911'>1911</option>
                      <option value='1910'>1910</option>
                      <option value='1909'>1909</option>
                      <option value='1908'>1908</option>
                      <option value='1907'>1907</option>
                      <option value='1906'>1906</option>
                      <option value='1905'>1905</option>
                      <option value='1904'>1904</option>
                      <option value='1903'>1903</option>
                      <option value='1902'>1902</option>
                      <option value='1901'>1901</option>
                      <option value='1900'>1900</option>
                    </select>
                   
                  </div>
                  <div className='clearfix'></div>
                </div>
                <div className='col-md-6'>
                  <label
                    htmlFor='htlfndr-second-adult-email'
                    className='htlfndr-required htlfndr-top-label'
                  >
                    Email Address
                  </label>
                  <input
                    type='email'
                    id='htlfndr-second-adult-email'
                    className='htlfndr-input'
                    name='htlfndr-second-adult-email'
                    placeholder='Enter Email Address'
                  />
                </div>
              </div>
              <div className='row'>
                <div className='col-md-6 htlfndr-classic-radio'>
                  <label className='htlfndr-required htlfndr-top-label'>
                    Gender
                  </label>
                  <label className='switch-label-check'>
                    <input
                      type='checkbox'
                      id='htlfndr-second-adult-male'
                      name='htlfndr-second-adult-gender'
                      value='male'
                      style={{display: 'none'}}
                    />
                    <span className='switch'></span>
                  </label>
                  <label htmlFor='htlfndr-second-adult-male'>Male</label>
                  <label className='switch-label-check'>
                    <input
                      type='checkbox'
                      id='htlfndr-second-adult-female'
                      name='htlfndr-second-adult-gender'
                      value='female'
                      style={{display: 'none'}}
                    />
                    <span className='switch'></span>
                  </label>
                  <label htmlFor='htlfndr-second-adult-female'>Female</label>
                </div>
                <div className='col-md-6'>
                  <label
                    htmlFor='htlfndr-second-adult-phone'
                    className='htlfndr-required htlfndr-top-label'
                  >
                    Phone number
                  </label>
                  <input
                    type='tel'
                    id='htlfndr-second-adult-phone'
                    className='htlfndr-input'
                    name='htlfndr-second-adult-phone'
                    placeholder='Enter phone number'
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className='htlfndr-form-section'>
          <header>
            <h2 className='htlfndr-form-section-title'>
              Your personal <span>information</span>
            </h2>
            <h5 className='htlfndr-form-section-description'>
              <Link to='/sign-in' data-toggle='modal' data-target='#htlfndr-sing-in'>
                <span className='htlfndr-sing-in-link'>Sign in</span>
              </Link>
              <span> </span> for fast booking or enter your personal information
            </h5>
          </header>
          <hr />
          <div className='htlfndr-form-block'>
            <div className='htlfndr-form-block-inner'>
              <div className='row'>
                <div className='col-md-6'>
                  <label
                    htmlFor='htlfndr-personal-name'
                    className='htlfndr-required htlfndr-top-label'
                  >
                    First name
                  </label>
                  <input
                    type='text'
                    id='htlfndr-personal-name'
                    name='htlfndr-personal-name'
                    className='htlfndr-input'
                    placeholder='Enter your first name'
                  />
                </div>
                <div className='col-md-6'>
                  <label
                    htmlFor='htlfndr-personal-middle-name'
                    className='htlfndr-required htlfndr-top-label'
                  >
                    Middle name
                  </label>
                  <input
                    type='text'
                    id='htlfndr-personal-middle-name'
                    name='htlfndr-personal-middle-name'
                    className='htlfndr-input'
                    placeholder='Enter your middle name'
                  />
                </div>
              </div>
              <div className='row'>
                <div className='col-md-6'>
                  <label
                    htmlFor='htlfndr-personal-last-name'
                    className='htlfndr-required htlfndr-top-label'
                  >
                    Last name
                  </label>
                  <input
                    type='text'
                    id='htlfndr-personal-last-name'
                    name='htlfndr-personal-last-name'
                    className='htlfndr-input'
                    placeholder='Enter your last name'
                  />
                </div>
                <div className='col-md-6'>
                  <label
                    htmlFor='htlfndr-personal-birth-day-button'
                    className='htlfndr-required htlfndr-top-label'
                  >
                    Date of birth
                  </label>
                  <div className='htlfndr-small-select htlfndr-input-wrapper'>
                    <select
                      name='htlfndr-personal-birth-day'
                      id='htlfndr-personal-birth-day'
                      className='htlfndr-dropdown ui-selectmenu-button ui-widget ui-state-default ui-corner-all'
                     defaultValue={''}>
                      <option value='' disabled='disabled' >
                        Day
                      </option>
                      <option value='1'>1</option>
                      <option value='2'>2</option>
                      <option value='3'>3</option>
                      <option value='4'>4</option>
                      <option value='5'>5</option>
                      <option value='6'>6</option>
                      <option value='7'>7</option>
                      <option value='8'>8</option>
                      <option value='9'>9</option>
                      <option value='10'>10</option>
                      <option value='11'>12</option>
                      <option value='12'>12</option>
                      <option value='13'>13</option>
                      <option value='14'>14</option>
                      <option value='15'>15</option>
                      <option value='16'>16</option>
                      <option value='17'>17</option>
                      <option value='18'>18</option>
                      <option value='19'>19</option>
                      <option value='20'>20</option>
                      <option value='21'>21</option>
                      <option value='22'>22</option>
                      <option value='23'>23</option>
                      <option value='24'>24</option>
                      <option value='25'>25</option>
                      <option value='26'>26</option>
                      <option value='27'>27</option>
                      <option value='28'>28</option>
                      <option value='29'>29</option>
                      <option value='30'>30</option>
                      <option value='31'>31</option>
                    </select>
                   
                  </div>
                  <div className='htlfndr-small-select htlfndr-input-wrapper'>
                    <label
                      htmlFor='htlfndr-personal-birth-month-button'
                      className='sr-only'
                    >
                      select month
                    </label>
                    <select
                      name='htlfndr-personal-birth-month'
                      id='htlfndr-personal-birth-month'
                      className='htlfndr-dropdown ui-selectmenu-button ui-widget ui-state-default ui-corner-all'
                     defaultValue={''}>
                      <option value='' disabled='disabled' >
                        Month
                      </option>
                      <option value='01'>January</option>
                      <option value='02'>February</option>
                      <option value='03'>March</option>
                      <option value='04'>April</option>
                      <option value='05'>May</option>
                      <option value='06'>June</option>
                      <option value='07'>July</option>
                      <option value='08'>August</option>
                      <option value='09'>September</option>
                      <option value='10'>October</option>
                      <option value='11'>November</option>
                      <option value='12'>December</option>
                    </select>
                    
                  </div>
                  <div className='htlfndr-small-select htlfndr-input-wrapper'>
                    <label
                      htmlFor='htlfndr-personal-birth-year-button'
                      className='sr-only'
                    >
                      select year
                    </label>
                    <select
                      name='htlfndr-personal-birth-year'
                      id='htlfndr-personal-birth-year'
                      className='htlfndr-dropdown ui-selectmenu-button ui-widget ui-state-default ui-corner-all'
                     defaultValue={''}>
                      <option value='' disabled='disabled' >
                        Year
                      </option>
                      <option value='1999'>1999</option>
                      <option value='1998'>1998</option>
                      <option value='1997'>1997</option>
                      <option value='1996'>1996</option>
                      <option value='1995'>1995</option>
                      <option value='1994'>1994</option>
                      <option value='1993'>1993</option>
                      <option value='1992'>1992</option>
                      <option value='1991'>1991</option>
                      <option value='1990'>1990</option>
                      <option value='1989'>1989</option>
                      <option value='1988'>1988</option>
                      <option value='1987'>1987</option>
                      <option value='1986'>1986</option>
                      <option value='1985'>1985</option>
                      <option value='1984'>1984</option>
                      <option value='1983'>1983</option>
                      <option value='1982'>1982</option>
                      <option value='1981'>1981</option>
                      <option value='1980'>1980</option>
                      <option value='1979'>1979</option>
                      <option value='1978'>1978</option>
                      <option value='1977'>1977</option>
                      <option value='1976'>1976</option>
                      <option value='1975'>1975</option>
                      <option value='1974'>1974</option>
                      <option value='1973'>1973</option>
                      <option value='1972'>1972</option>
                      <option value='1971'>1971</option>
                      <option value='1970'>1970</option>
                      <option value='1969'>1969</option>
                      <option value='1968'>1968</option>
                      <option value='1967'>1967</option>
                      <option value='1966'>1966</option>
                      <option value='1965'>1965</option>
                      <option value='1964'>1964</option>
                      <option value='1963'>1963</option>
                      <option value='1962'>1962</option>
                      <option value='1961'>1961</option>
                      <option value='1960'>1960</option>
                      <option value='1959'>1959</option>
                      <option value='1958'>1958</option>
                      <option value='1957'>1957</option>
                      <option value='1956'>1956</option>
                      <option value='1955'>1955</option>
                      <option value='1954'>1954</option>
                      <option value='1953'>1953</option>
                      <option value='1952'>1952</option>
                      <option value='1951'>1951</option>
                      <option value='1950'>1950</option>
                      <option value='1949'>1949</option>
                      <option value='1948'>1948</option>
                      <option value='1947'>1947</option>
                      <option value='1946'>1946</option>
                      <option value='1945'>1945</option>
                      <option value='1944'>1944</option>
                      <option value='1943'>1943</option>
                      <option value='1942'>1942</option>
                      <option value='1941'>1941</option>
                      <option value='1940'>1940</option>
                      <option value='1939'>1939</option>
                      <option value='1938'>1938</option>
                      <option value='1937'>1937</option>
                      <option value='1936'>1936</option>
                      <option value='1935'>1935</option>
                      <option value='1934'>1934</option>
                      <option value='1933'>1933</option>
                      <option value='1932'>1932</option>
                      <option value='1931'>1931</option>
                      <option value='1930'>1930</option>
                      <option value='1929'>1929</option>
                      <option value='1928'>1928</option>
                      <option value='1927'>1927</option>
                      <option value='1926'>1926</option>
                      <option value='1925'>1925</option>
                      <option value='1924'>1924</option>
                      <option value='1923'>1923</option>
                      <option value='1922'>1922</option>
                      <option value='1921'>1921</option>
                      <option value='1920'>1920</option>
                      <option value='1919'>1919</option>
                      <option value='1918'>1918</option>
                      <option value='1917'>1917</option>
                      <option value='1916'>1916</option>
                      <option value='1915'>1915</option>
                      <option value='1914'>1914</option>
                      <option value='1913'>1913</option>
                      <option value='1912'>1912</option>
                      <option value='1911'>1911</option>
                      <option value='1910'>1910</option>
                      <option value='1909'>1909</option>
                      <option value='1908'>1908</option>
                      <option value='1907'>1907</option>
                      <option value='1906'>1906</option>
                      <option value='1905'>1905</option>
                      <option value='1904'>1904</option>
                      <option value='1903'>1903</option>
                      <option value='1902'>1902</option>
                      <option value='1901'>1901</option>
                      <option value='1900'>1900</option>
                    </select>
                   
                  </div>
                  <div className='clearfix'></div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className='htlfndr-form-section'>
          <header>
            <h2 className='htlfndr-form-section-title'>
              Your Card <span>information</span>
            </h2>
            <h5 className='htlfndr-form-section-description'>
              Please enter the details of your payment card
            </h5>
          </header>
          <hr />
          <div className='htlfndr-form-block'>
            <div className='htlfndr-form-block-inner'>
              <label className='htlfndr-top-label'>Credit Card Type</label>
              <div id="htlfndr-radio-card" className="ui-buttonset">
      {/* Visa */}
      <label
        htmlFor="htlfndr-visa"
        className={`ui-button ui-widget ui-state-default ui-button-text-only ui-corner-left ${
          selectedOption === 'visa' ? 'ui-state-active' : ''
        }`}
        role="button"
        aria-pressed={selectedOption === 'visa'}
      >
        <span className="ui-button-text"></span>
      </label>
      <input
        type="radio"
        name="htlfndr-card"
        id="htlfndr-visa"
        value="visa"
        className="ui-helper-hidden-accessible"
        checked={selectedOption === 'visa'}
        onChange={handleOptionChange}
      />

      {/* PayPal */}
      <label
        htmlFor="htlfndr-paypal"
        className={`ui-button ui-widget ui-state-default ui-button-text-only ${
          selectedOption === 'paypal' ? 'ui-state-active' : ''
        }`}
        role="button"
        aria-pressed={selectedOption === 'paypal'}
      >
        <span className="ui-button-text"></span>
      </label>
      <input
        type="radio"
        name="htlfndr-card"
        id="htlfndr-paypal"
        value="paypal"
        className="ui-helper-hidden-accessible"
        checked={selectedOption === 'paypal'}
        onChange={handleOptionChange}
      />

      {/* MasterCard */}
      <label
        htmlFor="htlfndr-mastercard"
        className={`ui-button ui-widget ui-state-default ui-button-text-only ${
          selectedOption === 'mastercard' ? 'ui-state-active' : ''
        }`}
        role="button"
        aria-pressed={selectedOption === 'mastercard'}
      >
        <span className="ui-button-text"></span>
      </label>
      <input
        type="radio"
        name="htlfndr-card"
        id="htlfndr-mastercard"
        value="mastercard"
        className="ui-helper-hidden-accessible"
        checked={selectedOption === 'mastercard'}
        onChange={handleOptionChange}
      />

      {/* American Express */}
      <label
        htmlFor="htlfndr-amex"
        className={`ui-button ui-widget ui-state-default ui-button-text-only ui-corner-right ${
          selectedOption === 'american-express' ? 'ui-state-active' : ''
        }`}
        role="button"
        aria-pressed={selectedOption === 'american-express'}
      >
        <span className="ui-button-text"></span>
      </label>
      <input
        type="radio"
        name="htlfndr-card"
        id="htlfndr-amex"
        value="american-express"
        className="ui-helper-hidden-accessible"
        checked={selectedOption === 'american-express'}
        onChange={handleOptionChange}
      />
    </div>
              <div className='row'>
                <div className='col-md-6'>
                  <label
                    htmlFor='htlfndr-card-number'
                    className='htlfndr-required htlfndr-top-label'
                  >
                    Card number
                  </label>
                  <input
                    type='text'
                    id='htlfndr-card-number'
                    name='htlfndr-card-number'
                    className='htlfndr-input'
                    placeholder='Enter your card number'
                  />
                </div>
                <div className='col-md-6'>
                  <label
                    htmlFor='htlfndr-card-holder'
                    className='htlfndr-required htlfndr-top-label'
                  >
                    Card holder name
                  </label>
                  <input
                    type='text'
                    id='htlfndr-card-holder'
                    name='htlfndr-card-holder'
                    className='htlfndr-input'
                    placeholder='Enter your card holder name'
                  />
                </div>
              </div>
              <div className='row'>
                <div className='col-md-6'>
                  <label className='htlfndr-top-label htlfndr-required'>
                    Expiration date
                  </label>
                  <div className='htlfndr-small-select htlfndr-input-wrapper'>
                    <label htmlFor='htlfndr-card-month-button' className='sr-only'>
                      card expiration month
                    </label>
                    <select
                      name='htlfndr-card-month'
                      id='htlfndr-card-month'
                      className='htlfndr-dropdown ui-selectmenu-button ui-widget ui-state-default ui-corner-all'
                     defaultValue={''}>
                      <option value='' disabled='disabled' >
                        Month
                      </option>
                      <option value='01'>January</option>
                      <option value='02'>February</option>
                      <option value='03'>March</option>
                      <option value='04'>April</option>
                      <option value='05'>May</option>
                      <option value='06'>June</option>
                      <option value='07'>July</option>
                      <option value='08'>August</option>
                      <option value='09'>September</option>
                      <option value='10'>October</option>
                      <option value='11'>November</option>
                      <option value='12'>December</option>
                    </select>
                   
                  </div>
                  <div className='htlfndr-small-select htlfndr-input-wrapper'>
                    <label htmlFor='htlfndr-card-year-button' className='sr-only'>
                      card expiration year
                    </label>
                    <select
                      name='htlfndr-card-year'
                      id='htlfndr-card-year'
                      className='htlfndr-dropdown ui-selectmenu-button ui-widget ui-state-default ui-corner-all'
                     defaultValue={''}>
                      <option value='' disabled='disabled' >
                        Year
                      </option>
                      <option value='1999'>1999</option>
                      <option value='1998'>1998</option>
                      <option value='1997'>1997</option>
                      <option value='1996'>1996</option>
                      <option value='1995'>1995</option>
                      <option value='1994'>1994</option>
                      <option value='1993'>1993</option>
                      <option value='1992'>1992</option>
                      <option value='1991'>1991</option>
                      <option value='1990'>1990</option>
                      <option value='1989'>1989</option>
                      <option value='1988'>1988</option>
                      <option value='1987'>1987</option>
                      <option value='1986'>1986</option>
                      <option value='1985'>1985</option>
                      <option value='1984'>1984</option>
                      <option value='1983'>1983</option>
                      <option value='1982'>1982</option>
                      <option value='1981'>1981</option>
                      <option value='1980'>1980</option>
                      <option value='1979'>1979</option>
                      <option value='1978'>1978</option>
                      <option value='1977'>1977</option>
                      <option value='1976'>1976</option>
                      <option value='1975'>1975</option>
                      <option value='1974'>1974</option>
                      <option value='1973'>1973</option>
                      <option value='1972'>1972</option>
                      <option value='1971'>1971</option>
                      <option value='1970'>1970</option>
                      <option value='1969'>1969</option>
                      <option value='1968'>1968</option>
                      <option value='1967'>1967</option>
                      <option value='1966'>1966</option>
                      <option value='1965'>1965</option>
                      <option value='1964'>1964</option>
                      <option value='1963'>1963</option>
                      <option value='1962'>1962</option>
                      <option value='1961'>1961</option>
                      <option value='1960'>1960</option>
                      <option value='1959'>1959</option>
                      <option value='1958'>1958</option>
                      <option value='1957'>1957</option>
                      <option value='1956'>1956</option>
                      <option value='1955'>1955</option>
                      <option value='1954'>1954</option>
                      <option value='1953'>1953</option>
                      <option value='1952'>1952</option>
                      <option value='1951'>1951</option>
                      <option value='1950'>1950</option>
                      <option value='1949'>1949</option>
                      <option value='1948'>1948</option>
                      <option value='1947'>1947</option>
                      <option value='1946'>1946</option>
                      <option value='1945'>1945</option>
                      <option value='1944'>1944</option>
                      <option value='1943'>1943</option>
                      <option value='1942'>1942</option>
                      <option value='1941'>1941</option>
                      <option value='1940'>1940</option>
                      <option value='1939'>1939</option>
                      <option value='1938'>1938</option>
                      <option value='1937'>1937</option>
                      <option value='1936'>1936</option>
                      <option value='1935'>1935</option>
                      <option value='1934'>1934</option>
                      <option value='1933'>1933</option>
                      <option value='1932'>1932</option>
                      <option value='1931'>1931</option>
                      <option value='1930'>1930</option>
                      <option value='1929'>1929</option>
                      <option value='1928'>1928</option>
                      <option value='1927'>1927</option>
                      <option value='1926'>1926</option>
                      <option value='1925'>1925</option>
                      <option value='1924'>1924</option>
                      <option value='1923'>1923</option>
                      <option value='1922'>1922</option>
                      <option value='1921'>1921</option>
                      <option value='1920'>1920</option>
                      <option value='1919'>1919</option>
                      <option value='1918'>1918</option>
                      <option value='1917'>1917</option>
                      <option value='1916'>1916</option>
                      <option value='1915'>1915</option>
                      <option value='1914'>1914</option>
                      <option value='1913'>1913</option>
                      <option value='1912'>1912</option>
                      <option value='1911'>1911</option>
                      <option value='1910'>1910</option>
                      <option value='1909'>1909</option>
                      <option value='1908'>1908</option>
                      <option value='1907'>1907</option>
                      <option value='1906'>1906</option>
                      <option value='1905'>1905</option>
                      <option value='1904'>1904</option>
                      <option value='1903'>1903</option>
                      <option value='1902'>1902</option>
                      <option value='1901'>1901</option>
                      <option value='1900'>1900</option>
                    </select>
                    
                  </div>
                </div>
                <div className='col-xs-12 col-sm-12 col-md-3'>
                  <label
                    htmlFor='htlfndr-card-code'
                    className='htlfndr-required htlfndr-top-label'
                  >
                    Security code
                  </label>
                  <input
                    type='text'
                    id='htlfndr-card-code'
                    name='htlfndr-card-code'
                    className='htlfndr-input'
                    placeholder='xxx'
                    maxLength='3'
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className='htlfndr-form-section'>
          <header>
            <h2 className='htlfndr-form-section-title'>
              Billing <span>Address</span>
            </h2>
            <h5 className='htlfndr-form-section-description'>
              Please enter the details of your address
            </h5>
          </header>
          <hr />
          <div className='htlfndr-form-block'>
            <div className='htlfndr-form-block-inner'>
              <div className='row'>
                <div className='col-md-4'>
                  <label
                    htmlFor='htlfndr-city'
                    className='htlfndr-required htlfndr-top-label'
                  >
                    City
                  </label>
                  <input
                    type='text'
                    id='htlfndr-city'
                    name='htlfndr-city'
                    className='htlfndr-input'
                    placeholder='Enter city name'
                  />
                </div>
                <div className='col-md-5'>
                  <label
                    htmlFor='htlfndr-country'
                    className='htlfndr-required htlfndr-top-label'
                  >
                    Country
                  </label>
                  <input
                    type='text'
                    id='htlfndr-country'
                    name='htlfndr-country'
                    className='htlfndr-input'
                    placeholder='Enter country'
                  />
                </div>
                <div className='col-md-3'>
                  <label
                    htmlFor='htlfndr-postal-code'
                    className='htlfndr-required htlfndr-top-label'
                  >
                    Postal code
                  </label>
                  <input
                    type='text'
                    id='htlfndr-postal-code'
                    name='htlfndr-postal-code'
                    className='htlfndr-input'
                    placeholder='xxxxx'
                    maxLength='8'
                  />
                </div>
              </div>
              <div className='row'>
                <div className='col-md-6'>
                  <label
                    htmlFor='htlfndr-bil-address'
                    className='htlfndr-required htlfndr-top-label'
                  >
                    Billing Address
                  </label>
                  <input
                    type='text'
                    id='htlfndr-bil-address'
                    name='htlfndr-bil-address'
                    className='htlfndr-input'
                    placeholder='Enter billing address'
                  />
                </div>
                <div className='col-md-6'>
                  <label htmlFor='htlfndr-bil-address-2' className='htlfndr-top-label'>
                    Billing Address
                  </label>
                  <input
                    type='text'
                    id='htlfndr-bil-address-2'
                    name='htlfndr-bil-address-2'
                    className='htlfndr-input'
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className='htlfndr-form-section htlfndr-form-review-section'>
          <header>
            <h2 className='htlfndr-form-section-title'>
              Review and <span>book your Trip</span>
            </h2>
          </header>
          <hr />
          <h3 className='htlfndr-attention'>
            Attention! Please read important booking information!
          </h3>
          <ul className='htlfndr-list'>
            <li>
              This special discounted rate is non-refundable. If you choose to
              change or cancel this booking you will not be refunded any of the
              payment.
            </li>
          </ul>
          <p className='htlfndr-long-checkbox'>
            <label className='switch-label-check'>
              <input
                type='checkbox'
                name='htlfndr-accept'
                id='htlfndr-accept'
                style={{display: 'none'}}
              />
              <span className='switch'></span>
            </label>
            <label htmlFor='htlfndr-accept' id='htlfndr-accept-label'>
              By selecting to complete this booking I acknowledge that I have
              read and accept the
              <Link to='#' className='htlfndr-rules'>
                Rules &amp; Restrictions
              </Link>
            </label>
          </p>
          <div className='htlfndr-warning-message'>
            <i className='fa fa-exclamation-triangle'></i>
            <p>some fields are filled incorrectly!</p>
          </div>
          <input
            type='submit'
            className='htlfndr-payment-submit'
            value='complete booking'
          />
        </section>
      </form>
    </main>
    <aside
      id='htlfndr-right-sidebar'
      className='col-sm-12 col-md-4 col-lg-offset-1 col-lg-3 htlfndr-sidebar htlfndr-sidebar-in-right'
      role='complementary'
    >
      <div className='htlfndr-booking-details'>
        <div className='widget'>
          <div className='htlfndr-widget-main-content htlfndr-widget-padding'>
            <h3 className='widget-title'>booking details</h3>
            <div className='htlfndr-widget-block htlfndr-table-view'>
              <div className='htlfndr-hotel-thumbnail'>
                <Link to='/hotel-page-v1'>
                  <img
                    src={Img1}
                    alt='Hotel picture'
                  />
                </Link>
              </div>
              <div className='htlfndr-hotel-info'>
                <Link to='/hotel-page-v1'>
                  <h3>Hilton Hotel</h3>
                </Link>
                <div className='htlfndr-rating-stars'>
                  <i className='fa fa-star htlfndr-star-color'></i>
                  <i className='fa fa-star htlfndr-star-color'></i>
                  <i className='fa fa-star htlfndr-star-color'></i>
                  <i className='fa fa-star htlfndr-star-color'></i>
                  <i className='fa fa-star htlfndr-star-color'></i>
                </div>
                <p className='htlfndr-location'>san francisco, usa</p>
              </div>
            </div>
            <div className='htlfndr-widget-block htlfndr-bigger-font'>
              <p className='htlfndr-details'>
                <span>1 room:</span>
                <Link to='/hotel-room-page'>
                  <span>King Guest Room</span>
                </Link>
              </p>
              <p className='htlfndr-details'>
                <span>check-in:</span> <span>Mon, Apr 15</span>
              </p>
              <p className='htlfndr-details'>
                <span>check-out:</span> <span>Mon, Apr 17</span>
              </p>
              <p className='htlfndr-details'>
                <span>persons:</span> <span>2</span>
              </p>
            </div>
            <div className='htlfndr-widget-block htlfndr-bigger-font'>
              <p className='htlfndr-room-cost'>
                <span>1 night price</span> <span>$100</span>
              </p>
              <p className='htlfndr-room-cost'>
                <span>taxes &amp; fees</span> <span>$30</span>
              </p>
            </div>
            <p className='htlfndr-total-price'>total price:</p>
            <div className='htlfndr-hotel-price'>
              <span className='htlfndr-cost'>$ 130</span>
            </div>
          </div>
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

export default Payment