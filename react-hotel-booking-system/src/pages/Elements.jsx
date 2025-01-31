import React from 'react'
import '../assets/css/select-style.css'
import { Link } from 'react-router-dom'
import PriceSlider from '../components/PriceSlider'
import RadioCheckbox from '../components/RadioCheckBox'
import Tabs from '../components/Tabs'

const Elements = () => {
  const cssString = `
    .post-title {
      margin: 0 0 5px;
      font-weight: bold;
      font-size: 38px;
      line-height: 1.2;
    }
  `

  return (
    <div className='single'>
      <div className='container'>
        <div className='row htlfndr-elements-page'>
          <main
            id='htlfndr-main-content'
            className='col-sm-12 col-md-9 col-lg-9 htlfndr-main-content htlfndr-search-result'
            role='main'
          >
            <div className='htlfndr-elements-title'>
              <h5>shortcodes</h5>
              <h2>Typography</h2>
            </div>
            <div className='htlfndr-elements-content' id='htlfndr-headers'>
              <h3 className='htlfndr-font-24'>
                <b>headers</b>
              </h3>
              <h1>h1 Sodales consequat</h1>
              <h2>h2 Bibendum nec mauris vatius</h2>
              <h3>h3 Platea vitae blandit ante</h3>
              <h4>h4 Cum conubla amet mauris</h4>
              <h5>h5 Ipsum nullam congue port</h5>
              <h6>h6 Ut enim ad minim ven</h6>
            </div>
            <div className='htlfndr-elements-content' id='htlfndr-par'>
              <h3 className='htlfndr-font-24'>
                <b>paragraph</b>
              </h3>
              <p>
                Sed ut perspiciatis, unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam eaque ipsa,
                quae ab illo inventore veritatis et quasi architecto beatae
                vitae dicta sunt, explicabo. Nemo enim ipsam voluptatem, quia
                voluptas sit, aspernatur aut odit aut fugit, sed quia
                consequuntur magni dolores eos, qui ratione voluptatem sequi
                nesciunt, neque porro quisquam est.
              </p>
              <p>
                Sed ut perspiciatis, unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam eaque ipsa,
                quae ab illo inventore veritatis et quasi architecto beatae
                vitae dicta sunt, explicabo. Nemo enim ipsam voluptatem, quia
                voluptas sit, aspernatur aut odit aut fugit, sed quia
                consequuntur magni dolores eos, qui ratione voluptatem sequi
                nesciunt, neque porro quisquam est, qui dolorem ipsum, quia
                dolor sit, amet, consectetur, adipisci velit, sed quia non
                numquam eius modi tempora incidunt, ut labore et dolore magnam
                aliquam quaerat voluptatem. Ut enim ad minima veniam, quis
                nostrum exercitationem ullam corporis suscipit laboriosam, nisi
                ut aliquid ex ea commodi consequatur?{' '}
              </p>
            </div>
            <div className='htlfndr-elements-content' id='htlfndr-big-par'>
              <h3 className='htlfndr-font-24'>
                <b>big paragraph</b>
              </h3>
              <p className='lead'>
                Sed ut perspiciatis, unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam eaque ipsa,
                quae ab illo inventore veritatis et quasi architecto beatae
                vitae dicta sunt, explicabo. Nemo enim ipsam voluptatem, quia
                voluptas sit, aspernatur aut odit aut fugit, sed quia
                consequuntur magni dolores eos, qui ratione voluptatem sequi
                nesciunt, neque porro quisquam est.
              </p>
              <p className='lead'>
                Sed ut perspiciatis, unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam eaque ipsa,
                quae ab illo inventore veritatis et quasi architecto beatae
                vitae dicta sunt, explicabo. Nemo enim ipsam voluptatem, quia
                voluptas sit, aspernatur aut odit aut fugit, sed quia
                consequuntur magni dolores eos, qui ratione voluptatem sequi
                nesciunt, neque porro quisquam est, qui dolorem ipsum, quia
                dolor sit, amet, consectetur, adipisci velit, sed quia non
                numquam eius modi tempora incidunt, ut labore et dolore magnam
                aliquam quaerat voluptatem. Ut enim ad minima veniam, quis
                nostrum exercitationem ullam corporis suscipit laboriosam, nisi
                ut aliquid ex ea commodi consequatur?{' '}
              </p>
            </div>
            <div className='htlfndr-elements-content' id='htlfndr-small-par'>
              <h3 className='htlfndr-font-24'>
                <b>small paragraph</b>
              </h3>
              <p className='small'>
                Sed ut perspiciatis, unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam eaque ipsa,
                quae ab illo inventore veritatis et quasi architecto beatae
                vitae dicta sunt, explicabo. Nemo enim ipsam voluptatem, quia
                voluptas sit, aspernatur aut odit aut fugit, sed quia
                consequuntur magni dolores eos, qui ratione voluptatem sequi
                nesciunt, neque porro quisquam est.
              </p>
              <p className='small'>
                Sed ut perspiciatis, unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam eaque ipsa,
                quae ab illo inventore veritatis et quasi architecto beatae
                vitae dicta sunt, explicabo. Nemo enim ipsam voluptatem, quia
                voluptas sit, aspernatur aut odit aut fugit, sed quia
                consequuntur magni dolores eos, qui ratione voluptatem sequi
                nesciunt, neque porro quisquam est, qui dolorem ipsum, quia
                dolor sit, amet, consectetur, adipisci velit, sed quia non
                numquam eius modi tempora incidunt, ut labore et dolore magnam
                aliquam quaerat voluptatem. Ut enim ad minima veniam, quis
                nostrum exercitationem ullam corporis suscipit laboriosam, nisi
                ut aliquid ex ea commodi consequatur?{' '}
              </p>
            </div>
            <div className='htlfndr-elements-content' id='htlfndr-bloqoute'>
              <h3 className='htlfndr-font-24'>
                <b>blockquote</b>
              </h3>
              <blockquote>
                Quam habitasse odio habitasse ultrices dis varius ultrices
                imperdiet aliquam aliquam etiam{' '}
              </blockquote>
            </div>
            <div className='htlfndr-elements-content' id='htlfndr-tag'>
              <h3 className='htlfndr-font-24'>
                <b>code tag</b>
              </h3>
              <p>
                You will learn later on in these tests that{' '}
                <code>word-wrap:</code> be your best
                <code>&lt;strike&gt;</code> friend.
              </p>
            </div>
            <div className='htlfndr-elements-content' id='htlfndr-pre-tag'>
              <h3 className='htlfndr-font-24'>
                <b>Preformatted Tag</b>
              </h3>
              <p>This tag styles large blocks of code.</p>
              <pre dangerouslySetInnerHTML={{ __html: cssString }}></pre>
            </div>
            <div className='htlfndr-elements-content' id='htlfndr-tables'>
              <h3 className='htlfndr-font-24'>
                <b>tables</b>
              </h3>
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
                    <td data-title='Data of your stay'>
                      01/05/2014 - 01/15/2014
                    </td>
                    <td data-title='Cost'>$1280</td>
                  </tr>
                  <tr>
                    <td className='htlfndr-scope-row'>Ruzzini Palace Hotelo</td>
                    <td data-title='Location'>Kiev</td>
                    <td data-title='Order date'>07/03/2014</td>
                    <td data-title='Data of your stay'>
                      09/05/2014 - 15/05/2014
                    </td>
                    <td data-title='Cost'>$7498</td>
                  </tr>
                  <tr>
                    <td className='htlfndr-scope-row'>Foscari Palace</td>
                    <td data-title='Location'>Copenhagen</td>
                    <td data-title='Order date'>23/06/2014</td>
                    <td data-title='Data of your stay'>
                      14/07/2014 - 28/07/2014
                    </td>
                    <td data-title='Cost'>$890</td>
                  </tr>
                  <tr>
                    <td className='htlfndr-scope-row'>Hilton Hotel</td>
                    <td data-title='Location'>New York</td>
                    <td data-title='Order date'>14/09/2014</td>
                    <td data-title='Data of your stay'>
                      18/09/2014 - 19/10/2014
                    </td>
                    <td data-title='Cost'>$2453</td>
                  </tr>
                  <tr>
                    <td className='htlfndr-scope-row'>Wellington Hotel</td>
                    <td data-title='Location'>San Fancisco</td>
                    <td data-title='Order date'>08/04/2014</td>
                    <td data-title='Data of your stay'>
                      08/08/2014 - 17/09/2014
                    </td>
                    <td data-title='Cost'>$1653</td>
                  </tr>
                  <tr>
                    <td className='htlfndr-scope-row'>Hilton Molino Stucky</td>
                    <td data-title='Location'>Copenhagen</td>
                    <td data-title='Order date'>02/09/2014</td>
                    <td data-title='Data of your stay'>
                      12/06/2014 - 16/06/2014
                    </td>
                    <td data-title='Cost'>$1280</td>
                  </tr>
                  <tr>
                    <td className='htlfndr-scope-row'>Hilton Hotel</td>
                    <td data-title='Location'>San Fancisco</td>
                    <td data-title='Order date'>01/01/2014</td>
                    <td data-title='Data of your stay'>
                      18/09/2014 - 10/10/2014
                    </td>
                    <td data-title='Cost'>$3615</td>
                  </tr>
                  <tr>
                    <td className='htlfndr-scope-row'>Wellington Hotel</td>
                    <td data-title='Location'>Stockholm</td>
                    <td data-title='Order date'>01/01/2014</td>
                    <td data-title='Data of your stay'>
                      08/08/2014 - 17/09/2014
                    </td>
                    <td data-title='Cost'>$859</td>
                  </tr>
                  <tr>
                    <td className='htlfndr-scope-row'>Ruzzini Palace Hotelo</td>
                    <td data-title='Location'>Kiev</td>
                    <td data-title='Order date'>23/06/2014</td>
                    <td data-title='Data of your stay'>
                      09/05/2014 - 15/05/2014
                    </td>
                    <td data-title='Cost'>$347</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className='htlfndr-elements-title'>
              <h2>Elements</h2>
            </div>
            <div className='htlfndr-elements-content' id='htlfndr-but'>
              <h3 className='htlfndr-font-24'>
                <b>buttons</b>
              </h3>{' '}
              <input type='submit' value='Default' className='btn-success' />{' '}
              <input type='submit' value='Primary' className='btn-primary' />{' '}
              <input type='submit' value='Sucsess' className='btn-success' />{' '}
              <input type='submit' value='Info' className='btn-info' />{' '}
              <input type='submit' value='Warning' className='btn-warning' />{' '}
              <input type='submit' value='Danger' className='btn-danger' />
            </div>
            <div className='htlfndr-elements-content' id='htlfndr-but-icon'>
              <h3 className='htlfndr-font-24'>
                <b>buttons with icon</b>
              </h3>{' '}
              <span className='htlfndr-but-icon'>
                {' '}
                <input
                  type='submit'
                  value='Default'
                  className='btn-success'
                />{' '}
                <span className='fa fa-plane' aria-hidden='true'></span>{' '}
              </span>{' '}
              <span className='htlfndr-but-icon'>
                {' '}
                <input
                  type='submit'
                  value='Primary'
                  className='btn-primary'
                />{' '}
                <span className='fa fa-paper-plane' aria-hidden='true'></span>{' '}
              </span>{' '}
              <span className='htlfndr-but-icon'>
                {' '}
                <input
                  type='submit'
                  value='Sucsess'
                  className='btn-success'
                />{' '}
                <span className='fa fa-check' aria-hidden='true'></span>
              </span>{' '}
              <span className='htlfndr-but-icon'>
                {' '}
                <input type='submit' value='Info' className='btn-info' />{' '}
                <span className='fa fa-info' aria-hidden='true'></span>{' '}
              </span>{' '}
              <span className='htlfndr-but-icon'>
                {' '}
                <input
                  type='submit'
                  value='Warning'
                  className='btn-warning'
                />{' '}
                <span className='fa fa-exclamation' aria-hidden='true'></span>{' '}
              </span>{' '}
              <span className='htlfndr-but-icon'>
                {' '}
                <input
                  type='submit'
                  value='Danger'
                  className='btn-danger'
                />{' '}
                <span
                  className='fa fa-exclamation-triangle'
                  aria-hidden='true'
                ></span>{' '}
              </span>
            </div>
            <div className='htlfndr-elements-content' id='htlfndr-alerts'>
              <h3 className='htlfndr-font-24'>
                <b>alerts</b>
              </h3>
              <div className='alert alert-success'>
                {' '}
                <i className='fa fa-check'></i>Praesent sociosqu condimentum
              </div>
              <div className='alert alert-info'>
                {' '}
                <i className='fa fa-info'></i>Praesent sociosqu condimentum{' '}
              </div>
              <div className='alert alert-warning'>
                {' '}
                <i className='fa fa-exclamation'></i>Praesent sociosqu
                condimentum
              </div>
              <div className='alert alert-danger'>
                {' '}
                <i className='fa fa-exclamation-triangle'></i>Praesent sociosqu
                condimentum{' '}
              </div>
            </div>
            <div className='htlfndr-elements-content' id='htlfndr-pag'>
              <h3 className='htlfndr-font-24'>
                <b>pagination</b>
              </h3>
              <nav className='htlfndr-pagination'>
                <ul className='pagination'>
                  <li className='htlfndr-left'>
                    {' '}
                    <Link to='#' aria-label='Previous'>
                      {' '}
                      <span
                        aria-hidden='true'
                        className='fa fa-angle-left'
                      ></span>{' '}
                    </Link>{' '}
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
                    {' '}
                    <Link to='#' aria-label='Next'>
                      {' '}
                      <span
                        aria-hidden='true'
                        className='fa fa-angle-right'
                      ></span>{' '}
                    </Link>{' '}
                  </li>
                </ul>
              </nav>
            </div>
            <div className='htlfndr-elements-title'>
              <h2>Forms</h2>
            </div>
            <div className='htlfndr-elements-content' id='htlfndr-inputs'>
              <h3 className='htlfndr-font-24'>
                <b>text inputs</b>
              </h3>
              <div className='row'>
                <div className='col-md-4'>
                  {' '}
                  <label>Normal Input</label>{' '}
                  <input
                    id='normal-input'
                    className='htlfndr-input'
                    type='text'
                    placeholder='City, airport, zip code'
                    name='normal-input'
                  />{' '}
                </div>
                <div className='col-md-4'>
                  {' '}
                  <label>Incorrectly filled</label>{' '}
                  <input
                    id='incor-filled'
                    className='htlfndr-input incorrect'
                    type='text'
                    name='incor-filled'
                  />{' '}
                </div>
                <div className='col-md-4'>
                  {' '}
                  <label>Active Input</label>{' '}
                  <input
                    id='active-input'
                    className='htlfndr-input active'
                    type='text'
                    name='active-input'
                  />{' '}
                </div>
              </div>
              <div className='clearfix'>
                <div
                  id='htlfndr-input-date-cal'
                  className='htlfndr-input-wrapper'
                >
                  {' '}
                  <label htmlFor='htlfndr-date-in-cal'>
                    Calendar Input
                  </label>{' '}
                  <input
                    type='text'
                    name='htlfndr-date-in-cal'
                    id='htlfndr-date-in-cal'
                    className='search-hotel-input'
                  />{' '}
                  <button
                    type='button'
                    className='htlfndr-clear-datepicker'
                  ></button>{' '}
                </div>{' '}
                <label>Select Input</label>
                <br />{' '}
                <select className='htlfndr-select-custom ui-selectmenu-button ui-widget ui-corner-all' data-title='item'>
                  <option value='1'>1</option>
                  <option value='2'>2</option>
                  <option value='3'>3</option>
                  <option value='4'>4</option>
                  <option value='5'>5</option>
                  <option value='6'>6</option>
                  <option value='7'>7</option>
                  <option value='8'>8</option>
                </select>
              </div>{' '}
              <label>Message Input</label>
              <br />{' '}
              <textarea
                id='htlfndr-personal-comment'
                className='htlfndr-textarea'
                name='htlfndr-personal-comment'
                placeholder='Enter your message'
              ></textarea>
            </div>
            <div className='htlfndr-elements-content' id='htlfndr-tabs'>
              <h3 className='htlfndr-font-24'>
                <b>Tabs</b>
              </h3>
              <Tabs />
            </div>
            <RadioCheckbox />
            <PriceSlider />
            <div className='htlfndr-elements-title'>
              <h2>Icons</h2>
            </div>
            <div className='htlfndr-elements-content' id='htlfndr-icons'>
              <h3 className='htlfndr-font-24'>
                <b>Font Awesome</b>
              </h3>
              <div className='row htlfndr-icon-list'>
                <div className='htlfndr-fa-icons col-md-3 col-sm-4 col-xs-6'>
                  <i className='fa fa-adjust'></i>
                  fa-adjust
                </div>
                <div className='htlfndr-fa-icons col-md-3 col-sm-4 col-xs-6'>
                  <i className='fa fa-adn'></i> fa-adn
                </div>
                <div className='htlfndr-fa-icons col-md-3 col-sm-4 col-xs-6'>
                  <i className='fa fa-align-justify'></i>
                  fa-align-justify
                </div>
                <div className='htlfndr-fa-icons col-md-3 col-sm-4 col-xs-6'>
                  <i className='fa fa-align-left'></i>
                  fa-align-left
                </div>
                <div className='htlfndr-fa-icons col-md-3 col-sm-4 col-xs-6'>
                  <i className='fa fa-align-right'></i>
                  fa-align-right
                </div>
                <div className='htlfndr-fa-icons col-md-3 col-sm-4 col-xs-6'>
                  <i className='fa fa-amazon'></i>
                  fa-amazon
                </div>
                <div className='htlfndr-fa-icons col-md-3 col-sm-4 col-xs-6'>
                  <i className='fa fa-ambulance'></i>
                  fa-ambulance
                </div>
                <div className='htlfndr-fa-icons col-md-3 col-sm-4 col-xs-6'>
                  <i className='fa fa-anchor'></i>
                  fa-anchor
                </div>
                <div className='htlfndr-fa-icons col-md-3 col-sm-4 col-xs-6'>
                  <i className='fa fa-android'></i>
                  fa-android
                </div>
                <div className='htlfndr-fa-icons col-md-3 col-sm-4 col-xs-6'>
                  <i className='fa fa-angellist'></i>
                  fa-angellist
                </div>
                <div className='htlfndr-fa-icons col-md-3 col-sm-4 col-xs-6'>
                  <i className='fa fa-angle-double-down'></i>{' '}
                  fa-angle-double-down
                </div>
                <div className='htlfndr-fa-icons col-md-3 col-sm-4 col-xs-6'>
                  <i className='fa fa-angle-double-left'></i>{' '}
                  fa-angle-double-left
                </div>
                <div className='htlfndr-fa-icons col-md-3 col-sm-4 col-xs-6'>
                  <i className='fa fa-angle-double-right'></i>{' '}
                  fa-angle-double-right
                </div>
                <div className='htlfndr-fa-icons col-md-3 col-sm-4 col-xs-6'>
                  <i className='fa fa-angle-double-up'></i> fa-angle-double-up
                </div>
                <div className='htlfndr-fa-icons col-md-3 col-sm-4 col-xs-6'>
                  <i className='fa fa-angle-down'></i>
                  fa-angle-down
                </div>
                <div className='htlfndr-fa-icons col-md-3 col-sm-4 col-xs-6'>
                  <i className='fa fa-angle-left'></i>
                  fa-angle-left
                </div>
                <div className='htlfndr-fa-icons col-md-3 col-sm-4 col-xs-6'>
                  <i className='fa fa-angle-right'></i>
                  fa-angle-right
                </div>
                <div className='htlfndr-fa-icons col-md-3 col-sm-4 col-xs-6'>
                  <i className='fa fa-angle-up'></i>
                  fa-angle-up
                </div>
                <div className='htlfndr-fa-icons col-md-3 col-sm-4 col-xs-6'>
                  <i className='fa fa-apple'></i>
                  fa-apple
                </div>
                <div className='htlfndr-fa-icons col-md-3 col-sm-4 col-xs-6'>
                  <i className='fa fa-archive'></i>
                  fa-archive
                </div>
                <div className='htlfndr-fa-icons col-md-3 col-sm-4 col-xs-6'>
                  <i className='fa fa-area-chart'></i>
                  fa-area-chart
                </div>
                <div className='htlfndr-fa-icons col-md-3 col-sm-4 col-xs-6'>
                  <i className='fa fa-arrow-circle-down'></i>{' '}
                  fa-arrow-circle-down
                </div>
                <div className='htlfndr-fa-icons col-md-3 col-sm-4 col-xs-6'>
                  <i className='fa fa-arrow-circle-left'></i>{' '}
                  fa-arrow-circle-left
                </div>
                <div className='htlfndr-fa-icons col-md-3 col-sm-4 col-xs-6'>
                  <i className='fa fa-arrow-circle-o-down'></i>{' '}
                  fa-arrow-circle-o-down
                </div>
                <div className='htlfndr-fa-icons col-md-3 col-sm-4 col-xs-6'>
                  <i className='fa fa-arrow-circle-o-left'></i>{' '}
                  fa-arrow-circle-o-left
                </div>
                <div className='htlfndr-fa-icons col-md-3 col-sm-4 col-xs-6'>
                  <i className='fa fa-arrow-circle-o-right'></i>{' '}
                  fa-arrow-circle-o-right
                </div>
                <div className='htlfndr-fa-icons col-md-3 col-sm-4 col-xs-6'>
                  <i className='fa fa-arrow-circle-o-up'></i>{' '}
                  fa-arrow-circle-o-up
                </div>
                <div className='htlfndr-fa-icons col-md-3 col-sm-4 col-xs-6'>
                  <i className='fa fa-arrow-circle-right'></i>{' '}
                  fa-arrow-circle-right
                </div>
                <div className='htlfndr-fa-icons col-md-3 col-sm-4 col-xs-6'>
                  <i className='fa fa-arrow-circle-up'></i> fa-arrow-circle-up
                </div>
                <div className='htlfndr-fa-icons col-md-3 col-sm-4 col-xs-6'>
                  <i className='fa fa-arrow-down'></i>
                  fa-arrow-down
                </div>
                <div className='htlfndr-fa-icons col-md-3 col-sm-4 col-xs-6'>
                  <i className='fa fa-arrow-left'></i>
                  fa-arrow-left
                </div>
                <div className='htlfndr-fa-icons col-md-3 col-sm-4 col-xs-6'>
                  <i className='fa fa-arrow-right'></i>
                  fa-arrow-right
                </div>
                <div className='htlfndr-fa-icons col-md-3 col-sm-4 col-xs-6'>
                  <i className='fa fa-arrow-up'></i>
                  fa-arrow-up
                </div>
                <div className='htlfndr-fa-icons col-md-3 col-sm-4 col-xs-6'>
                  <i className='fa fa-arrows'></i>
                  fa-arrows
                </div>
                <div className='htlfndr-fa-icons col-md-3 col-sm-4 col-xs-6'>
                  <i className='fa fa-arrows-alt'></i>
                  fa-arrows-alt
                </div>
                <div className='htlfndr-fa-icons col-md-3 col-sm-4 col-xs-6'>
                  <i className='fa fa-arrows'></i>
                  fa-arrows
                </div>
                <div className='htlfndr-fa-icons col-md-3 col-sm-4 col-xs-6'>
                  <i className='fa fa-arrows-h'></i>
                  fa-arrows-h
                </div>
                <div className='htlfndr-fa-icons col-md-3 col-sm-4 col-xs-6'>
                  <i className='fa fa-arrows-v'></i>
                  fa-arrows-v
                </div>
                <div className='htlfndr-fa-icons col-md-3 col-sm-4 col-xs-6'>
                  <i className='fa fa-asterisk'></i>
                  fa-asterisk
                </div>
                <div className='htlfndr-fa-icons col-md-3 col-sm-4 col-xs-6'>
                  <i className='fa fa-at'></i> fa-at
                </div>
                <div className='htlfndr-fa-icons col-md-3 col-sm-4 col-xs-6'>
                  <i className='fa fa-automobile'></i>
                  fa-automobile <span className='text-muted'>(alias)</span>
                </div>
                <div className='htlfndr-fa-icons col-md-3 col-sm-4 col-xs-6'>
                  <i className='fa fa-backward'></i>
                  fa-backward
                </div>
                <div className='htlfndr-fa-icons col-md-3 col-sm-4 col-xs-6'>
                  <i className='fa fa-balance-scale'></i>
                  fa-balance-scale
                </div>
                <div className='htlfndr-fa-icons col-md-3 col-sm-4 col-xs-6'>
                  <i className='fa fa-ban'></i> fa-ban
                </div>
                <div className='htlfndr-fa-icons col-md-3 col-sm-4 col-xs-6'>
                  <i className='fa fa-bank'></i> fa-bank
                  <span className='text-muted'>(alias)</span>
                </div>
                <div className='htlfndr-fa-icons col-md-3 col-sm-4 col-xs-6'>
                  <i className='fa fa-bar-chart'></i>
                  fa-bar-chart
                </div>
                <div className='htlfndr-fa-icons col-md-3 col-sm-4 col-xs-6'>
                  <i className='fa fa-bar-chart-o'></i>
                  fa-bar-chart-o <span className='text-muted'>(alias)</span>
                </div>
                <div className='htlfndr-fa-icons col-md-3 col-sm-4 col-xs-6'>
                  <i className='fa fa-barcode'></i>
                  fa-barcode
                </div>
                <div className='htlfndr-fa-icons col-md-3 col-sm-4 col-xs-6'>
                  <i className='fa fa-bars'></i> fa-bars
                </div>
                <div className='htlfndr-fa-icons col-md-3 col-sm-4 col-xs-6'>
                  <i className='fa fa-battery-0'></i>
                  fa-battery-0 <span className='text-muted'>(alias)</span>
                </div>
                <div className='htlfndr-fa-icons col-md-3 col-sm-4 col-xs-6'>
                  <i className='fa fa-battery-1'></i>
                  fa-battery-1 <span className='text-muted'>(alias)</span>
                </div>
                <div className='htlfndr-fa-icons col-md-3 col-sm-4 col-xs-6'>
                  <i className='fa fa-battery-2'></i>
                  fa-battery-2 <span className='text-muted'>(alias)</span>
                </div>
                <div className='htlfndr-fa-icons col-md-3 col-sm-4 col-xs-6'>
                  <i className='fa fa-battery-3'></i>
                  fa-battery-3 <span className='text-muted'>(alias)</span>
                </div>
                <div className='htlfndr-fa-icons col-md-3 col-sm-4 col-xs-6'>
                  <i className='fa fa-battery-4'></i>
                  fa-battery-4 <span className='text-muted'>(alias)</span>
                </div>
                <div className='htlfndr-fa-icons col-md-3 col-sm-4 col-xs-6'>
                  <i className='fa fa-battery-empty'></i>
                  fa-battery-empty
                </div>
                <div className='htlfndr-fa-icons col-md-3 col-sm-4 col-xs-6'>
                  <i className='fa fa-battery-full'></i>
                  fa-battery-full
                </div>
                <div className='htlfndr-fa-icons col-md-3 col-sm-4 col-xs-6'>
                  <i className='fa fa-battery-half'></i>
                  fa-battery-half
                </div>
                <div className='htlfndr-fa-icons col-md-3 col-sm-4 col-xs-6'>
                  <i className='fa fa-battery-quarter'></i> fa-battery-quarter
                </div>
                <div className='htlfndr-fa-icons col-md-3 col-sm-4 col-xs-6'>
                  <i className='fa fa-battery-three-quarters'></i>{' '}
                  fa-battery-three-quarters
                </div>
                <div className='htlfndr-fa-icons col-md-3 col-sm-4 col-xs-6'>
                  <i className='fa fa-bed'></i> fa-bed
                </div>
                <div className='htlfndr-fa-icons col-md-3 col-sm-4 col-xs-6'>
                  <i className='fa fa-beer'></i> fa-beer
                </div>
                <div className='htlfndr-fa-icons col-md-3 col-sm-4 col-xs-6'>
                  <i className='fa fa-bell'></i> fa-bell
                </div>
                <div className='htlfndr-fa-icons col-md-3 col-sm-4 col-xs-6'>
                  <i className='fa fa-bell-o'></i>
                  fa-bell-o
                </div>
                <div className='htlfndr-fa-icons col-md-3 col-sm-4 col-xs-6'>
                  <i className='fa fa-bell-slash'></i>
                  fa-bell-slash
                </div>
                <div className='htlfndr-fa-icons col-md-3 col-sm-4 col-xs-6'>
                  <i className='fa fa-bell-slash-o'></i>
                  fa-bell-slash-o
                </div>
                <div className='htlfndr-fa-icons col-md-3 col-sm-4 col-xs-6'>
                  <i className='fa fa-behance'></i>
                  fa-behance
                </div>
                <div className='htlfndr-fa-icons col-md-3 col-sm-4 col-xs-6'>
                  <i className='fa fa-behance-square'></i> fa-behance-square
                </div>
                <div className='htlfndr-fa-icons col-md-3 col-sm-4 col-xs-6'>
                  <i className='fa fa-bicycle'></i>
                  fa-bicycle
                </div>
                <div className='htlfndr-fa-icons col-md-3 col-sm-4 col-xs-6'>
                  <i className='fa fa-binoculars'></i>
                  fa-binoculars
                </div>
                <div className='htlfndr-fa-icons col-md-3 col-sm-4 col-xs-6'>
                  <i className='fa fa-birthday-cake'></i>
                  fa-birthday-cake
                </div>
                <div className='htlfndr-fa-icons col-md-3 col-sm-4 col-xs-6'>
                  <i className='fa fa-bitbucket'></i>
                  fa-bitbucket
                </div>
                <div className='htlfndr-fa-icons col-md-3 col-sm-4 col-xs-6'>
                  <i className='fa fa-bitbucket-square'></i> fa-bitbucket-square
                </div>
                <div className='htlfndr-fa-icons col-md-3 col-sm-4 col-xs-6'>
                  <i className='fa fa-bitcoin'></i>
                  fa-bitcoin <span className='text-muted'>(alias)</span>
                </div>
                <div className='htlfndr-fa-icons col-md-3 col-sm-4 col-xs-6'>
                  <i className='fa fa-black-tie'></i>
                  fa-black-tie
                </div>
                <div className='htlfndr-fa-icons col-md-3 col-sm-4 col-xs-6'>
                  <i className='fa fa-bluetooth'></i>
                  fa-bluetooth
                </div>
                <div className='htlfndr-fa-icons col-md-3 col-sm-4 col-xs-6'>
                  <i className='fa fa-bluetooth-b'></i>
                  fa-bluetooth-b
                </div>
                <div className='htlfndr-fa-icons col-md-3 col-sm-4 col-xs-6'>
                  <i className='fa fa-bolt'></i> fa-bolt
                </div>
                <div className='htlfndr-fa-icons col-md-3 col-sm-4 col-xs-6'>
                  <i className='fa fa-bomb'></i> fa-bomb
                </div>
                <div className='htlfndr-fa-icons col-md-3 col-sm-4 col-xs-6'>
                  <i className='fa fa-book'></i> fa-book
                </div>
                <div className='htlfndr-fa-icons col-md-3 col-sm-4 col-xs-6'>
                  <i className='fa fa-bookmark'></i>
                  fa-bookmark
                </div>
                <div className='htlfndr-fa-icons col-md-3 col-sm-4 col-xs-6'>
                  <i className='fa fa-bookmark-o'></i>
                  fa-bookmark-o
                </div>
                <div className='htlfndr-fa-icons col-md-3 col-sm-4 col-xs-6'>
                  <i className='fa fa-briefcase'></i>
                  fa-briefcase
                </div>
                <div className='htlfndr-fa-icons col-md-3 col-sm-4 col-xs-6'>
                  <i className='fa fa-btc'></i> fa-btc
                </div>
                <div className='htlfndr-fa-icons col-md-3 col-sm-4 col-xs-6'>
                  <i className='fa fa-bug'></i> fa-bug
                </div>
                <div className='htlfndr-fa-icons col-md-3 col-sm-4 col-xs-6'>
                  <i className='fa fa-building'></i>
                  fa-building
                </div>
                <div className='htlfndr-fa-icons col-md-3 col-sm-4 col-xs-6'>
                  <i className='fa fa-building-o'></i>
                  fa-building-o
                </div>
                <div className='htlfndr-fa-icons col-md-3 col-sm-4 col-xs-6'>
                  <i className='fa fa-bullhorn'></i>
                  fa-bullhorn
                </div>
                <div className='htlfndr-fa-icons col-md-3 col-sm-4 col-xs-6'>
                  <i className='fa fa-bullseye'></i>
                  fa-bullseye
                </div>
                <div className='htlfndr-fa-icons col-md-3 col-sm-4 col-xs-6'>
                  <i className='fa fa-bus'></i> fa-bus
                </div>
                <div className='htlfndr-fa-icons col-md-3 col-sm-4 col-xs-6'>
                  <i className='fa fa-buysellads'></i>
                  fa-buysellads
                </div>
                <div className='htlfndr-fa-icons col-md-3 col-sm-4 col-xs-6'>
                  <i className='fa fa-cab'></i> fa-cab
                  <span className='text-muted'>(alias)</span>
                </div>
                <div className='htlfndr-fa-icons col-md-3 col-sm-4 col-xs-6'>
                  <i className='fa fa-calculator'></i>
                  fa-calculator
                </div>
                <div className='htlfndr-fa-icons col-md-3 col-sm-4 col-xs-6'>
                  <i className='fa fa-calendar'></i>
                  fa-calendar
                </div>
                <div className='htlfndr-fa-icons col-md-3 col-sm-4 col-xs-6'>
                  <i className='fa fa-calendar-check-o'></i> fa-calendar-check-o
                </div>
                <div className='htlfndr-fa-icons col-md-3 col-sm-4 col-xs-6'>
                  <i className='fa fa-calendar-minus-o'></i> fa-calendar-minus-o
                </div>
                <div className='htlfndr-fa-icons col-md-3 col-sm-4 col-xs-6'>
                  <i className='fa fa-calendar-o'></i>
                  fa-calendar-o
                </div>
                <div className='htlfndr-fa-icons col-md-3 col-sm-4 col-xs-6'>
                  <i className='fa fa-calendar-plus-o'></i> fa-calendar-plus-o
                </div>
                <div className='htlfndr-fa-icons col-md-3 col-sm-4 col-xs-6'>
                  <i className='fa fa-calendar-times-o'></i> fa-calendar-times-o
                </div>
                <div className='htlfndr-fa-icons col-md-3 col-sm-4 col-xs-6'>
                  <i className='fa fa-camera'></i>
                  fa-camera
                </div>
                <div className='htlfndr-fa-icons col-md-3 col-sm-4 col-xs-6'>
                  <i className='fa fa-camera-retro'></i>
                  fa-camera-retro
                </div>
                <div className='htlfndr-fa-icons col-md-3 col-sm-4 col-xs-6'>
                  <i className='fa fa-car'></i> fa-car
                </div>
                <div className='htlfndr-fa-icons col-md-3 col-sm-4 col-xs-6'>
                  <i className='fa fa-cart-arrow-down'></i> fa-cart-arrow-down
                </div>
                <div className='htlfndr-fa-icons col-md-3 col-sm-4 col-xs-6'>
                  <i className='fa fa-cart-plus'></i>
                  fa-cart-plus
                </div>
                <div className='htlfndr-fa-icons col-md-3 col-sm-4 col-xs-6'>
                  <i className='fa fa-caret-down'></i>
                  fa-caret-down
                </div>
                <div className='htlfndr-fa-icons col-md-3 col-sm-4 col-xs-6'>
                  <i className='fa fa-caret-left'></i>
                  fa-caret-left
                </div>
                <div className='htlfndr-fa-icons col-md-3 col-sm-4 col-xs-6'>
                  <i className='fa fa-caret-right'></i>
                  fa-caret-right
                </div>
                <div className='htlfndr-fa-icons col-md-3 col-sm-4 col-xs-6'>
                  <i className='fa fa-caret-square-o-down'></i>{' '}
                  fa-caret-square-o-down
                </div>
                <div className='htlfndr-fa-icons col-md-3 col-sm-4 col-xs-6'>
                  <i className='fa fa-caret-square-o-left'></i>{' '}
                  fa-caret-square-o-left
                </div>
                <div className='htlfndr-fa-icons col-md-3 col-sm-4 col-xs-6'>
                  <i className='fa fa-caret-square-o-right'></i>{' '}
                  fa-caret-square-o-right
                </div>
                <div className='htlfndr-fa-icons col-md-3 col-sm-4 col-xs-6'>
                  <i className='fa fa-caret-square-o-up'></i>{' '}
                  fa-caret-square-o-up
                </div>
                <div className='htlfndr-fa-icons col-md-3 col-sm-4 col-xs-6'>
                  <i className='fa fa-caret-up'></i>
                  fa-caret-up
                </div>
                <div className='htlfndr-fa-icons col-md-3 col-sm-4 col-xs-6'>
                  <i className='fa fa-cc'></i> fa-cc
                </div>
                <div className='htlfndr-fa-icons col-md-3 col-sm-4 col-xs-6'>
                  <i className='fa fa-cc-amex'></i>
                  fa-cc-amex
                </div>
                <div className='htlfndr-fa-icons col-md-3 col-sm-4 col-xs-6'>
                  <i className='fa fa-cc-diners-club'></i> fa-cc-diners-club
                </div>
                <div className='htlfndr-fa-icons col-md-3 col-sm-4 col-xs-6'>
                  <i className='fa fa-cc-discover'></i>
                  fa-cc-discover
                </div>
                <div className='htlfndr-fa-icons col-md-3 col-sm-4 col-xs-6'>
                  <i className='fa fa-cc-jcb'></i>
                  fa-cc-jcb
                </div>
                <div className='htlfndr-fa-icons col-md-3 col-sm-4 col-xs-6'>
                  <i className='fa fa-cc-mastercard'></i>
                  fa-cc-mastercard
                </div>
                <div className='htlfndr-fa-icons col-md-3 col-sm-4 col-xs-6'>
                  <i className='fa fa-cc-paypal'></i>
                  fa-cc-paypal
                </div>
                <div className='htlfndr-fa-icons col-md-3 col-sm-4 col-xs-6'>
                  <i className='fa fa-cc-stripe'></i>
                  fa-cc-stripe
                </div>
                <div className='htlfndr-fa-icons col-md-3 col-sm-4 col-xs-6'>
                  <i className='fa fa-cc-visa'></i>
                  fa-cc-visa
                </div>
                <div className='htlfndr-fa-icons col-md-3 col-sm-4 col-xs-6'>
                  <i className='fa fa-certificate'></i>
                  fa-certificate
                </div>
                <div className='htlfndr-fa-icons col-md-3 col-sm-4 col-xs-6'>
                  <i className='fa fa-chain'></i>
                  fa-chain <span className='text-muted'>(alias)</span>
                </div>
                <div className='htlfndr-fa-icons col-md-3 col-sm-4 col-xs-6'>
                  <i className='fa fa-chain-broken'></i>
                  fa-chain-broken
                </div>
                <div className='htlfndr-fa-icons col-md-3 col-sm-4 col-xs-6'>
                  <i className='fa fa-check'></i>
                  fa-check
                </div>
                <div className='htlfndr-fa-icons col-md-3 col-sm-4 col-xs-6'>
                  <i className='fa fa-check-circle'></i>
                  fa-check-circle
                </div>
                <div className='htlfndr-fa-icons col-md-3 col-sm-4 col-xs-6'>
                  <i className='fa fa-check-circle-o'></i> fa-check-circle-o
                </div>
                <div className='htlfndr-fa-icons col-md-3 col-sm-4 col-xs-6'>
                  <i className='fa fa-check-square'></i>
                  fa-check-square
                </div>
                <div className='htlfndr-fa-icons col-md-3 col-sm-4 col-xs-6'>
                  <i className='fa fa-check-square-o'></i> fa-check-square-o
                </div>
                <div className='htlfndr-fa-icons col-md-3 col-sm-4 col-xs-6'>
                  <i className='fa fa-chevron-circle-down'></i>{' '}
                  fa-chevron-circle-down
                </div>
                <div className='htlfndr-fa-icons col-md-3 col-sm-4 col-xs-6'>
                  <i className='fa fa-chevron-circle-left'></i>{' '}
                  fa-chevron-circle-left
                </div>
                <div className='htlfndr-fa-icons col-md-3 col-sm-4 col-xs-6'>
                  <i className='fa fa-chevron-circle-right'></i>{' '}
                  fa-chevron-circle-right
                </div>
                <div className='htlfndr-fa-icons col-md-3 col-sm-4 col-xs-6'>
                  <i className='fa fa-chevron-circle-up'></i>{' '}
                  fa-chevron-circle-up
                </div>
                <div className='htlfndr-fa-icons col-md-3 col-sm-4 col-xs-6'>
                  <i className='fa fa-chevron-down'></i>
                  fa-chevron-down
                </div>
                <div className='htlfndr-fa-icons col-md-3 col-sm-4 col-xs-6'>
                  <i className='fa fa-chevron-left'></i>
                  fa-chevron-left
                </div>
                <div className='htlfndr-fa-icons col-md-3 col-sm-4 col-xs-6'>
                  <i className='fa fa-chevron-right'></i>
                  fa-chevron-right
                </div>
                <div className='htlfndr-fa-icons col-md-3 col-sm-4 col-xs-6'>
                  <i className='fa fa-chevron-up'></i>
                  fa-chevron-up
                </div>
                <div className='htlfndr-fa-icons col-md-3 col-sm-4 col-xs-6'>
                  <i className='fa fa-chrome'></i>
                  fa-chrome
                </div>
                <div className='htlfndr-fa-icons col-md-3 col-sm-4 col-xs-6'>
                  <i className='fa fa-codepen'></i>
                  fa-codepen
                </div>
                <div className='htlfndr-fa-icons col-md-3 col-sm-4 col-xs-6'>
                  <i className='fa fa-codiepie'></i>
                  fa-codiepie
                </div>
                <div className='htlfndr-fa-icons col-md-3 col-sm-4 col-xs-6'>
                  <i className='fa fa-connectdevelop'></i> fa-connectdevelop
                </div>
                <div className='htlfndr-fa-icons col-md-3 col-sm-4 col-xs-6'>
                  <i className='fa fa-contao'></i>
                  fa-contao
                </div>
                <div className='htlfndr-fa-icons col-md-3 col-sm-4 col-xs-6'>
                  <i className='fa fa-css3'></i> fa-css3
                </div>
                <div className='htlfndr-fa-icons col-md-3 col-sm-4 col-xs-6'>
                  <i className='fa fa-child'></i>
                  fa-child
                </div>
                <div className='htlfndr-fa-icons col-md-3 col-sm-4 col-xs-6'>
                  <i className='fa fa-circle'></i>
                  fa-circle
                </div>
                <div className='htlfndr-fa-icons col-md-3 col-sm-4 col-xs-6'>
                  <i className='fa fa-circle-o'></i>
                  fa-circle-o
                </div>
                <div className='htlfndr-fa-icons col-md-3 col-sm-4 col-xs-6'>
                  <i className='fa fa-circle-o-notch'></i> fa-circle-o-notch
                </div>
                <div className='htlfndr-fa-icons col-md-3 col-sm-4 col-xs-6'>
                  <i className='fa fa-circle-thin'></i>
                  fa-circle-thin
                </div>
                <div className='htlfndr-fa-icons col-md-3 col-sm-4 col-xs-6'>
                  <i className='fa fa-clipboard'></i>
                  fa-clipboard
                </div>
                <div className='htlfndr-fa-icons col-md-3 col-sm-4 col-xs-6'>
                  <i className='fa fa-clock-o'></i>
                  fa-clock-o
                </div>
                <div className='htlfndr-fa-icons col-md-3 col-sm-4 col-xs-6'>
                  <i className='fa fa-clone'></i>
                  fa-clone
                </div>
                <div className='htlfndr-fa-icons col-md-3 col-sm-4 col-xs-6'>
                  <i className='fa fa-close'></i>
                  fa-close <span className='text-muted'>(alias)</span>
                </div>
                <div className='htlfndr-fa-icons col-md-3 col-sm-4 col-xs-6'>
                  <i className='fa fa-cloud'></i>
                  fa-cloud
                </div>
                <div className='htlfndr-fa-icons col-md-3 col-sm-4 col-xs-6'>
                  <i className='fa fa-cloud-download'></i> fa-cloud-download
                </div>
                <div className='htlfndr-fa-icons col-md-3 col-sm-4 col-xs-6'>
                  <i className='fa fa-cloud-upload'></i>
                  fa-cloud-upload
                </div>
                <div className='htlfndr-fa-icons col-md-3 col-sm-4 col-xs-6'>
                  <i className='fa fa-cny'></i> fa-cny
                  <span className='text-muted'>(alias)</span>
                </div>
                <div className='htlfndr-fa-icons col-md-3 col-sm-4 col-xs-6'>
                  <i className='fa fa-code'></i> fa-code
                </div>
                <div className='htlfndr-fa-icons col-md-3 col-sm-4 col-xs-6'>
                  <i className='fa fa-code-fork'></i>
                  fa-code-fork
                </div>
                <div className='htlfndr-fa-icons col-md-3 col-sm-4 col-xs-6'>
                  <i className='fa fa-coffee'></i>
                  fa-coffee
                </div>
                <div className='htlfndr-fa-icons col-md-3 col-sm-4 col-xs-6'>
                  <i className='fa fa-cog'></i> fa-cog
                </div>
                <div className='htlfndr-fa-icons col-md-3 col-sm-4 col-xs-6'>
                  <i className='fa fa-cogs'></i> fa-cogs
                </div>
                <div className='htlfndr-fa-icons col-md-3 col-sm-4 col-xs-6'>
                  <i className='fa fa-columns'></i>
                  fa-columns
                </div>
                <div className='htlfndr-fa-icons col-md-3 col-sm-4 col-xs-6'>
                  <i className='fa fa-comment'></i>
                  fa-comment
                </div>
                <div className='htlfndr-fa-icons col-md-3 col-sm-4 col-xs-6'>
                  <i className='fa fa-comment-o'></i>
                  fa-comment-o
                </div>
                <div className='htlfndr-fa-icons col-md-3 col-sm-4 col-xs-6'>
                  <i className='fa fa-commenting'></i>
                  fa-commenting
                </div>
                <div className='htlfndr-fa-icons col-md-3 col-sm-4 col-xs-6'>
                  <i className='fa fa-commenting-o'></i>
                  fa-commenting-o
                </div>
                <div className='htlfndr-fa-icons col-md-3 col-sm-4 col-xs-6'>
                  <i className='fa fa-comments'></i>
                  fa-comments
                </div>
                <div className='htlfndr-fa-icons col-md-3 col-sm-4 col-xs-6'>
                  <i className='fa fa-comments-o'></i>
                  fa-comments-o
                </div>
                <div className='htlfndr-fa-icons col-md-3 col-sm-4 col-xs-6'>
                  <i className='fa fa-compass'></i>
                  fa-compass
                </div>
                <div className='htlfndr-fa-icons col-md-3 col-sm-4 col-xs-6'>
                  <i className='fa fa-compress'></i>
                  fa-compress
                </div>
                <div className='htlfndr-fa-icons col-md-3 col-sm-4 col-xs-6'>
                  <i className='fa fa-copy'></i> fa-copy
                  <span className='text-muted'>(alias)</span>
                </div>
                <div className='htlfndr-fa-icons col-md-3 col-sm-4 col-xs-6'>
                  <i className='fa fa-copyright'></i>
                  fa-copyright
                </div>
                <div className='htlfndr-fa-icons col-md-3 col-sm-4 col-xs-6'>
                  <i className='fa fa-creative-commons'></i> fa-creative-commons
                </div>
                <div className='htlfndr-fa-icons col-md-3 col-sm-4 col-xs-6'>
                  <i className='fa fa-credit-card'></i>
                  fa-credit-card
                </div>
                <div className='htlfndr-fa-icons col-md-3 col-sm-4 col-xs-6'>
                  <i className='fa fa-credit-card-alt'></i> fa-credit-card-alt
                </div>
                <div className='htlfndr-fa-icons col-md-3 col-sm-4 col-xs-6'>
                  <i className='fa fa-crop'></i> fa-crop
                </div>
                <div className='htlfndr-fa-icons col-md-3 col-sm-4 col-xs-6'>
                  <i className='fa fa-crosshairs'></i>
                  fa-crosshairs
                </div>
                <div className='htlfndr-fa-icons col-md-3 col-sm-4 col-xs-6'>
                  <i className='fa fa-cube'></i> fa-cube
                </div>
                <div className='htlfndr-fa-icons col-md-3 col-sm-4 col-xs-6'>
                  <i className='fa fa-cubes'></i>
                  fa-cubes
                </div>
                <div className='htlfndr-fa-icons col-md-3 col-sm-4 col-xs-6'>
                  <i className='fa fa-cut'></i> fa-cut
                  <span className='text-muted'>(alias)</span>
                </div>
                <div className='htlfndr-fa-icons col-md-3 col-sm-4 col-xs-6'>
                  <i className='fa fa-cutlery'></i>
                  fa-cutlery
                </div>
                <div className='htlfndr-fa-icons col-md-3 col-sm-4 col-xs-6'>
                  <i className='fa fa-dashcube'></i>
                  fa-dashcube
                </div>
                <div className='htlfndr-fa-icons col-md-3 col-sm-4 col-xs-6'>
                  <i className='fa fa-dashboard'></i>
                  fa-dashboard <span className='text-muted'>(alias)</span>
                </div>
                <div className='htlfndr-fa-icons col-md-3 col-sm-4 col-xs-6'>
                  <i className='fa fa-database'></i>
                  fa-database
                </div>
                <div className='htlfndr-fa-icons col-md-3 col-sm-4 col-xs-6'>
                  <i className='fa fa-dedent'></i>
                  fa-dedent <span className='text-muted'>(alias)</span>
                </div>
                <div className='htlfndr-fa-icons col-md-3 col-sm-4 col-xs-6'>
                  <i className='fa fa-delicious'></i>
                  fa-delicious
                </div>
                <div className='htlfndr-fa-icons col-md-3 col-sm-4 col-xs-6'>
                  <i className='fa fa-deviantart'></i>
                  fa-deviantart
                </div>
                <div className='htlfndr-fa-icons col-md-3 col-sm-4 col-xs-6'>
                  <i className='fa fa-desktop'></i>
                  fa-desktop
                </div>
                <div className='htlfndr-fa-icons col-md-3 col-sm-4 col-xs-6'>
                  <i className='fa fa-diamond'></i>
                  fa-diamond
                </div>
                <div className='htlfndr-fa-icons col-md-3 col-sm-4 col-xs-6'>
                  <i className='fa fa-digg'></i> fa-digg
                </div>
                <div className='htlfndr-fa-icons col-md-3 col-sm-4 col-xs-6'>
                  <i className='fa fa-dollar'></i>
                  fa-dollar <span className='text-muted'>(alias)</span>
                </div>
                <div className='htlfndr-fa-icons col-md-3 col-sm-4 col-xs-6'>
                  <i className='fa fa-dot-circle-o'></i>
                  fa-dot-circle-o
                </div>
                <div className='htlfndr-fa-icons col-md-3 col-sm-4 col-xs-6'>
                  <i className='fa fa-download'></i>
                  fa-download
                </div>
                <div className='htlfndr-fa-icons col-md-3 col-sm-4 col-xs-6'>
                  <i className='fa fa-dribbble'></i>
                  fa-dribbble
                </div>
                <div className='htlfndr-fa-icons col-md-3 col-sm-4 col-xs-6'>
                  <i className='fa fa-dropbox'></i>
                  fa-dropbox
                </div>
                <div className='htlfndr-fa-icons col-md-3 col-sm-4 col-xs-6'>
                  <i className='fa fa-drupal'></i>
                  fa-drupal
                </div>
                <div className='htlfndr-fa-icons col-md-3 col-sm-4 col-xs-6'>
                  <i className='fa fa-edit'></i> fa-edit
                  <span className='text-muted'>(alias)</span>
                </div>
                <div className='htlfndr-fa-icons col-md-3 col-sm-4 col-xs-6'>
                  <i className='fa fa-edge'></i> fa-edge
                </div>
                <div className='htlfndr-fa-icons col-md-3 col-sm-4 col-xs-6'>
                  <i className='fa fa-ellipsis-h'></i>
                  fa-ellipsis-h
                </div>
                <div className='htlfndr-fa-icons col-md-3 col-sm-4 col-xs-6'>
                  <i className='fa fa-ellipsis-v'></i>
                  fa-ellipsis-v
                </div>
                <div className='htlfndr-fa-icons col-md-3 col-sm-4 col-xs-6'>
                  <i className='fa fa-empire'></i>
                  fa-empire
                </div>
                <div className='htlfndr-fa-icons col-md-3 col-sm-4 col-xs-6'>
                  <i className='fa fa-envelope'></i>
                  fa-envelope
                </div>
                <div className='htlfndr-fa-icons col-md-3 col-sm-4 col-xs-6'>
                  <i className='fa fa-envelope-o'></i>
                  fa-envelope-o
                </div>
                <div className='htlfndr-fa-icons col-md-3 col-sm-4 col-xs-6'>
                  <i className='fa fa-envelope-square'></i> fa-envelope-square
                </div>
                <div className='htlfndr-fa-icons col-md-3 col-sm-4 col-xs-6'>
                  <i className='fa fa-eraser'></i>
                  fa-eraser
                </div>
                <div className='htlfndr-fa-icons col-md-3 col-sm-4 col-xs-6'>
                  <i className='fa fa-eur'></i> fa-eur
                </div>
                <div className='htlfndr-fa-icons col-md-3 col-sm-4 col-xs-6'>
                  <i className='fa fa-euro'></i> fa-euro
                  <span className='text-muted'>(alias)</span>
                </div>
                <div className='htlfndr-fa-icons col-md-3 col-sm-4 col-xs-6'>
                  <i className='fa fa-exchange'></i>
                  fa-exchange
                </div>
                <div className='htlfndr-fa-icons col-md-3 col-sm-4 col-xs-6'>
                  <i className='fa fa-exclamation'></i>
                  fa-exclamation
                </div>
                <div className='htlfndr-fa-icons col-md-3 col-sm-4 col-xs-6'>
                  <i className='fa fa-exclamation-circle'></i>{' '}
                  fa-exclamation-circle
                </div>
                <div className='htlfndr-fa-icons col-md-3 col-sm-4 col-xs-6'>
                  <i className='fa fa-exclamation-triangle'></i>{' '}
                  fa-exclamation-triangle
                </div>
                <div className='htlfndr-fa-icons col-md-3 col-sm-4 col-xs-6'>
                  <i className='fa fa-expeditedssl'></i>
                  fa-expeditedssl
                </div>
                <div className='htlfndr-fa-icons col-md-3 col-sm-4 col-xs-6'>
                  <i className='fa fa-external-link'></i>
                  fa-external-link
                </div>
                <div className='htlfndr-fa-icons col-md-3 col-sm-4 col-xs-6'>
                  <i className='fa fa-external-link-square'></i>{' '}
                  fa-external-link-square
                </div>
                <div className='htlfndr-fa-icons col-md-3 col-sm-4 col-xs-6'>
                  <i className='fa fa-eject'></i>
                  fa-eject
                </div>
                <div className='htlfndr-fa-icons col-md-3 col-sm-4 col-xs-6'>
                  <i className='fa fa-expand'></i>
                  fa-expand
                </div>
                <div className='htlfndr-fa-icons col-md-3 col-sm-4 col-xs-6'>
                  <i className='fa fa-eye'></i> fa-eye
                </div>
                <div className='htlfndr-fa-icons col-md-3 col-sm-4 col-xs-6'>
                  <i className='fa fa-eye-slash'></i>
                  fa-eye-slash
                </div>
                <div className='htlfndr-fa-icons col-md-3 col-sm-4 col-xs-6'>
                  <i className='fa fa-eyedropper'></i>
                  fa-eyedropper
                </div>
                <div className='htlfndr-fa-icons col-md-3 col-sm-4 col-xs-6'>
                  <i className='fa fa-fast-backward'></i>
                  fa-fast-backward
                </div>
                <div className='htlfndr-fa-icons col-md-3 col-sm-4 col-xs-6'>
                  <i className='fa fa-facebook'></i>
                  fa-facebook
                </div>
                <div className='htlfndr-fa-icons col-md-3 col-sm-4 col-xs-6'>
                  <i className='fa fa-facebook-f'></i>
                  fa-facebook-f <span className='text-muted'>(alias)</span>
                </div>
                <div className='htlfndr-fa-icons col-md-3 col-sm-4 col-xs-6'>
                  <i className='fa fa-facebook-official'></i>{' '}
                  fa-facebook-official
                </div>
                <div className='htlfndr-fa-icons col-md-3 col-sm-4 col-xs-6'>
                  <i className='fa fa-facebook-square'></i> fa-facebook-square
                </div>
                <div className='htlfndr-fa-icons col-md-3 col-sm-4 col-xs-6'>
                  <i className='fa fa-fast-forward'></i>
                  fa-fast-forward
                </div>
                <div className='htlfndr-fa-icons col-md-3 col-sm-4 col-xs-6'>
                  <i className='fa fa-fax'></i> fa-fax
                </div>
                <div className='htlfndr-fa-icons col-md-3 col-sm-4 col-xs-6'>
                  <i className='fa fa-feed'></i> fa-feed
                  <span className='text-muted'>(alias)</span>
                </div>
                <div className='htlfndr-fa-icons col-md-3 col-sm-4 col-xs-6'>
                  <i className='fa fa-female'></i>
                  fa-female
                </div>
                <div className='htlfndr-fa-icons col-md-3 col-sm-4 col-xs-6'>
                  <i className='fa fa-fighter-jet'></i>
                  fa-fighter-jet
                </div>
                <div className='htlfndr-fa-icons col-md-3 col-sm-4 col-xs-6'>
                  <i className='fa fa-file'></i> fa-file
                </div>
                <div className='htlfndr-fa-icons col-md-3 col-sm-4 col-xs-6'>
                  <i className='fa fa-files-o'></i>
                  fa-files-o
                </div>
                <div className='htlfndr-fa-icons col-md-3 col-sm-4 col-xs-6'>
                  <i className='fa fa-file-archive-o'></i> fa-file-archive-o
                </div>
                <div className='htlfndr-fa-icons col-md-3 col-sm-4 col-xs-6'>
                  <i className='fa fa-file-audio-o'></i>
                  fa-file-audio-o
                </div>
                <div className='htlfndr-fa-icons col-md-3 col-sm-4 col-xs-6'>
                  <i className='fa fa-file-code-o'></i>
                  fa-file-code-o
                </div>
                <div className='htlfndr-fa-icons col-md-3 col-sm-4 col-xs-6'>
                  <i className='fa fa-file-excel-o'></i>
                  fa-file-excel-o
                </div>
                <div className='htlfndr-fa-icons col-md-3 col-sm-4 col-xs-6'>
                  <i className='fa fa-file-image-o'></i>
                  fa-file-image-o
                </div>
                <div className='htlfndr-fa-icons col-md-3 col-sm-4 col-xs-6'>
                  <i className='fa fa-file-movie-o'></i>
                  fa-file-movie-o <span className='text-muted'>(alias)</span>
                </div>
                <div className='htlfndr-fa-icons col-md-3 col-sm-4 col-xs-6'>
                  <i className='fa fa-file-o'></i>
                  fa-file-o
                </div>
                <div className='htlfndr-fa-icons col-md-3 col-sm-4 col-xs-6'>
                  <i className='fa fa-file-pdf-o'></i>
                  fa-file-pdf-o
                </div>
                <div className='htlfndr-fa-icons col-md-3 col-sm-4 col-xs-6'>
                  <i className='fa fa-file-photo-o'></i>
                  fa-file-photo-o <span className='text-muted'>(alias)</span>
                </div>
                <div className='htlfndr-fa-icons col-md-3 col-sm-4 col-xs-6'>
                  <i className='fa fa-file-picture-o'></i> fa-file-picture-o{' '}
                  <span className='text-muted'>(alias)</span>
                </div>
                <div className='htlfndr-fa-icons col-md-3 col-sm-4 col-xs-6'>
                  <i className='fa fa-file-powerpoint-o'></i>{' '}
                  fa-file-powerpoint-o
                </div>
                <div className='htlfndr-fa-icons col-md-3 col-sm-4 col-xs-6'>
                  <i className='fa fa-file-sound-o'></i>
                  fa-file-sound-o <span className='text-muted'>(alias)</span>
                </div>
                <div className='htlfndr-fa-icons col-md-3 col-sm-4 col-xs-6'>
                  <i className='fa fa-file-text'></i>
                  fa-file-text
                </div>
                <div className='htlfndr-fa-icons col-md-3 col-sm-4 col-xs-6'>
                  <i className='fa fa-file-text-o'></i>
                  fa-file-text-o
                </div>
                <div className='htlfndr-fa-icons col-md-3 col-sm-4 col-xs-6'>
                  <i className='fa fa-file-video-o'></i>
                  fa-file-video-o
                </div>
                <div className='htlfndr-fa-icons col-md-3 col-sm-4 col-xs-6'>
                  <i className='fa fa-file-word-o'></i>
                  fa-file-word-o
                </div>
                <div className='htlfndr-fa-icons col-md-3 col-sm-4 col-xs-6'>
                  <i className='fa fa-file-zip-o'></i>
                  fa-file-zip-o <span className='text-muted'>(alias)</span>
                </div>
                <div className='htlfndr-fa-icons col-md-3 col-sm-4 col-xs-6'>
                  <i className='fa fa-film'></i> fa-film
                </div>
                <div className='htlfndr-fa-icons col-md-3 col-sm-4 col-xs-6'>
                  <i className='fa fa-filter'></i>
                  fa-filter
                </div>
                <div className='htlfndr-fa-icons col-md-3 col-sm-4 col-xs-6'>
                  <i className='fa fa-fire'></i> fa-fire
                </div>
                <div className='htlfndr-fa-icons col-md-3 col-sm-4 col-xs-6'>
                  <i className='fa fa-fire-extinguisher'></i>{' '}
                  fa-fire-extinguisher
                </div>
                <div className='htlfndr-fa-icons col-md-3 col-sm-4 col-xs-6'>
                  <i className='fa fa-firefox'></i>
                  fa-firefox
                </div>
                <div className='htlfndr-fa-icons col-md-3 col-sm-4 col-xs-6'>
                  <i className='fa fa-foursquare'></i>
                  fa-foursquare
                </div>
                <div className='htlfndr-fa-icons col-md-3 col-sm-4 col-xs-6'>
                  <i className='fa fa-flag'></i> fa-flag
                </div>
                <div className='htlfndr-fa-icons col-md-3 col-sm-4 col-xs-6'>
                  <i className='fa fa-flag-checkered'></i> fa-flag-checkered
                </div>
                <div className='htlfndr-fa-icons col-md-3 col-sm-4 col-xs-6'>
                  <i className='fa fa-flag-o'></i>
                  fa-flag-o
                </div>
                <div className='htlfndr-fa-icons col-md-3 col-sm-4 col-xs-6'>
                  <i className='fa fa-flash'></i>
                  fa-flash <span className='text-muted'>(alias)</span>
                </div>
                <div className='htlfndr-fa-icons col-md-3 col-sm-4 col-xs-6'>
                  <i className='fa fa-flask'></i>
                  fa-flask
                </div>
                <div className='htlfndr-fa-icons col-md-3 col-sm-4 col-xs-6'>
                  <i className='fa fa-flickr'></i>
                  fa-flickr
                </div>
                <div className='htlfndr-fa-icons col-md-3 col-sm-4 col-xs-6'>
                  <i className='fa fa-floppy-o'></i>
                  fa-floppy-o
                </div>
                <div className='htlfndr-fa-icons col-md-3 col-sm-4 col-xs-6'>
                  <i className='fa fa-folder'></i>
                  fa-folder
                </div>
                <div className='htlfndr-fa-icons col-md-3 col-sm-4 col-xs-6'>
                  <i className='fa fa-folder-o'></i>
                  fa-folder-o
                </div>
                <div className='htlfndr-fa-icons col-md-3 col-sm-4 col-xs-6'>
                  <i className='fa fa-folder-open'></i>
                  fa-folder-open
                </div>
                <div className='htlfndr-fa-icons col-md-3 col-sm-4 col-xs-6'>
                  <i className='fa fa-folder-open-o'></i>
                  fa-folder-open-o
                </div>
                <div className='htlfndr-fa-icons col-md-3 col-sm-4 col-xs-6'>
                  <i className='fa fa-font'></i> fa-font
                </div>
                <div className='htlfndr-fa-icons col-md-3 col-sm-4 col-xs-6'>
                  <i className='fa fa-fonticons'></i>
                  fa-fonticons
                </div>
                <div className='htlfndr-fa-icons col-md-3 col-sm-4 col-xs-6'>
                  <i className='fa fa-fort-awesome'></i>
                  fa-fort-awesome
                </div>
                <div className='htlfndr-fa-icons col-md-3 col-sm-4 col-xs-6'>
                  <i className='fa fa-forumbee'></i>
                  fa-forumbee
                </div>
                <div className='htlfndr-fa-icons col-md-3 col-sm-4 col-xs-6'>
                  <i className='fa fa-forward'></i>
                  fa-forward
                </div>
                <div className='htlfndr-fa-icons col-md-3 col-sm-4 col-xs-6'>
                  <i className='fa fa-frown-o'></i>
                  fa-frown-o
                </div>
                <div className='htlfndr-fa-icons col-md-3 col-sm-4 col-xs-6'>
                  <i className='fa fa-futbol-o'></i>
                  fa-futbol-o
                </div>
                <div className='htlfndr-fa-icons col-md-3 col-sm-4 col-xs-6'>
                  <i className='fa fa-gamepad'></i>
                  fa-gamepad
                </div>
                <div className='htlfndr-fa-icons col-md-3 col-sm-4 col-xs-6'>
                  <i className='fa fa-gavel'></i>
                  fa-gavel
                </div>
                <div className='htlfndr-fa-icons col-md-3 col-sm-4 col-xs-6'>
                  <i className='fa fa-gbp'></i> fa-gbp
                </div>
                <div className='htlfndr-fa-icons col-md-3 col-sm-4 col-xs-6'>
                  <i className='fa fa-ge'></i> fa-ge
                  <span className='text-muted'>(alias)</span>
                </div>
                <div className='htlfndr-fa-icons col-md-3 col-sm-4 col-xs-6'>
                  <i className='fa fa-gear'></i> fa-gear
                  <span className='text-muted'>(alias)</span>
                </div>
                <div className='htlfndr-fa-icons col-md-3 col-sm-4 col-xs-6'>
                  <i className='fa fa-gears'></i>
                  fa-gears <span className='text-muted'>(alias)</span>
                </div>
                <div className='htlfndr-fa-icons col-md-3 col-sm-4 col-xs-6'>
                  <i className='fa fa-get-pocket'></i>
                  fa-get-pocket
                </div>
                <div className='htlfndr-fa-icons col-md-3 col-sm-4 col-xs-6'>
                  <i className='fa fa-gg'></i> fa-gg
                </div>
                <div className='htlfndr-fa-icons col-md-3 col-sm-4 col-xs-6'>
                  <i className='fa fa-gg-circle'></i>
                  fa-gg-circle
                </div>
                <div className='htlfndr-fa-icons col-md-3 col-sm-4 col-xs-6'>
                  <i className='fa fa-gift'></i> fa-gift
                </div>
                <div className='htlfndr-fa-icons col-md-3 col-sm-4 col-xs-6'>
                  <i className='fa fa-git'></i> fa-git
                </div>
                <div className='htlfndr-fa-icons col-md-3 col-sm-4 col-xs-6'>
                  <i className='fa fa-git-square'></i>
                  fa-git-square
                </div>
                <div className='htlfndr-fa-icons col-md-3 col-sm-4 col-xs-6'>
                  <i className='fa fa-github'></i>
                  fa-github
                </div>
                <div className='htlfndr-fa-icons col-md-3 col-sm-4 col-xs-6'>
                  <i className='fa fa-github-alt'></i>
                  fa-github-alt
                </div>
                <div className='htlfndr-fa-icons col-md-3 col-sm-4 col-xs-6'>
                  <i className='fa fa-github-square'></i>
                  fa-github-square
                </div>
                <div className='htlfndr-fa-icons col-md-3 col-sm-4 col-xs-6'>
                  <i className='fa fa-gittip'></i>
                  fa-gittip <span className='text-muted'>(alias)</span>
                </div>
                <div className='htlfndr-fa-icons col-md-3 col-sm-4 col-xs-6'>
                  <i className='fa fa-glass'></i>
                  fa-glass
                </div>
                <div className='htlfndr-fa-icons col-md-3 col-sm-4 col-xs-6'>
                  <i className='fa fa-globe'></i>
                  fa-globe
                </div>
                <div className='htlfndr-fa-icons col-md-3 col-sm-4 col-xs-6'>
                  <i className='fa fa-google'></i>
                  fa-google
                </div>
                <div className='htlfndr-fa-icons col-md-3 col-sm-4 col-xs-6'>
                  <i className='fa fa-google-plus'></i>
                  fa-google-plus
                </div>
                <div className='htlfndr-fa-icons col-md-3 col-sm-4 col-xs-6'>
                  <i className='fa fa-google-plus-square'></i>{' '}
                  fa-google-plus-square
                </div>
                <div className='htlfndr-fa-icons col-md-3 col-sm-4 col-xs-6'>
                  <i className='fa fa-google-wallet'></i>
                  fa-google-wallet
                </div>
                <div className='htlfndr-fa-icons col-md-3 col-sm-4 col-xs-6'>
                  <i className='fa fa-graduation-cap'></i> fa-graduation-cap
                </div>
                <div className='htlfndr-fa-icons col-md-3 col-sm-4 col-xs-6'>
                  <i className='fa fa-gratipay'></i>
                  fa-gratipay
                </div>
                <div className='htlfndr-fa-icons col-md-3 col-sm-4 col-xs-6'>
                  <i className='fa fa-group'></i>
                  fa-group <span className='text-muted'>(alias)</span>
                </div>
                <div className='htlfndr-fa-icons col-md-3 col-sm-4 col-xs-6'>
                  <i className='fa fa-h-square'></i>
                  fa-h-square
                </div>
                <div className='htlfndr-fa-icons col-md-3 col-sm-4 col-xs-6'>
                  <i className='fa fa-hacker-news'></i>
                  fa-hacker-news
                </div>
                <div className='htlfndr-fa-icons col-md-3 col-sm-4 col-xs-6'>
                  <i className='fa fa-hand-grab-o'></i>
                  fa-hand-grab-o <span className='text-muted'>(alias)</span>
                </div>
                <div className='htlfndr-fa-icons col-md-3 col-sm-4 col-xs-6'>
                  <i className='fa fa-hand-lizard-o'></i>
                  fa-hand-lizard-o
                </div>
                <div className='htlfndr-fa-icons col-md-3 col-sm-4 col-xs-6'>
                  <i className='fa fa-hand-o-down'></i>
                  fa-hand-o-down
                </div>
                <div className='htlfndr-fa-icons col-md-3 col-sm-4 col-xs-6'>
                  <i className='fa fa-hand-o-left'></i>
                  fa-hand-o-left
                </div>
                <div className='htlfndr-fa-icons col-md-3 col-sm-4 col-xs-6'>
                  <i className='fa fa-hand-o-right'></i>
                  fa-hand-o-right
                </div>
                <div className='htlfndr-fa-icons col-md-3 col-sm-4 col-xs-6'>
                  <i className='fa fa-hand-o-up'></i>
                  fa-hand-o-up
                </div>
                <div className='htlfndr-fa-icons col-md-3 col-sm-4 col-xs-6'>
                  <i className='fa fa-hand-paper-o'></i>
                  fa-hand-paper-o
                </div>
                <div className='htlfndr-fa-icons col-md-3 col-sm-4 col-xs-6'>
                  <i className='fa fa-hand-peace-o'></i>
                  fa-hand-peace-o
                </div>
                <div className='htlfndr-fa-icons col-md-3 col-sm-4 col-xs-6'>
                  <i className='fa fa-hand-pointer-o'></i> fa-hand-pointer-o
                </div>
                <div className='htlfndr-fa-icons col-md-3 col-sm-4 col-xs-6'>
                  <i className='fa fa-hand-rock-o'></i>
                  fa-hand-rock-o
                </div>
                <div className='htlfndr-fa-icons col-md-3 col-sm-4 col-xs-6'>
                  <i className='fa fa-hand-scissors-o'></i> fa-hand-scissors-o
                </div>
                <div className='htlfndr-fa-icons col-md-3 col-sm-4 col-xs-6'>
                  <i className='fa fa-hand-spock-o'></i>
                  fa-hand-spock-o
                </div>
                <div className='htlfndr-fa-icons col-md-3 col-sm-4 col-xs-6'>
                  <i className='fa fa-hand-stop-o'></i>
                  fa-hand-stop-o <span className='text-muted'>(alias)</span>
                </div>
                <div className='htlfndr-fa-icons col-md-3 col-sm-4 col-xs-6'>
                  <i className='fa fa-hashtag'></i>
                  fa-hashtag
                </div>
                <div className='htlfndr-fa-icons col-md-3 col-sm-4 col-xs-6'>
                  <i className='fa fa-hdd-o'></i>
                  fa-hdd-o
                </div>
                <div className='htlfndr-fa-icons col-md-3 col-sm-4 col-xs-6'>
                  <i className='fa fa-header'></i>
                  fa-header
                </div>
                <div className='htlfndr-fa-icons col-md-3 col-sm-4 col-xs-6'>
                  <i className='fa fa-headphones'></i>
                  fa-headphones
                </div>
                <div className='htlfndr-fa-icons col-md-3 col-sm-4 col-xs-6'>
                  <i className='fa fa-heart'></i>
                  fa-heart
                </div>
                <div className='htlfndr-fa-icons col-md-3 col-sm-4 col-xs-6'>
                  <i className='fa fa-heart-o'></i>
                  fa-heart-o
                </div>
                <div className='htlfndr-fa-icons col-md-3 col-sm-4 col-xs-6'>
                  <i className='fa fa-heartbeat'></i>
                  fa-heartbeat
                </div>
                <div className='htlfndr-fa-icons col-md-3 col-sm-4 col-xs-6'>
                  <i className='fa fa-history'></i>
                  fa-history
                </div>
                <div className='htlfndr-fa-icons col-md-3 col-sm-4 col-xs-6'>
                  <i className='fa fa-home'></i> fa-home
                </div>
                <div className='htlfndr-fa-icons col-md-3 col-sm-4 col-xs-6'>
                  <i className='fa fa-hospital-o'></i>
                  fa-hospital-o
                </div>
                <div className='htlfndr-fa-icons col-md-3 col-sm-4 col-xs-6'>
                  <i className='fa fa-hotel'></i>
                  fa-hotel <span className='text-muted'>(alias)</span>
                </div>
                <div className='htlfndr-fa-icons col-md-3 col-sm-4 col-xs-6'>
                  <i className='fa fa-hourglass'></i>
                  fa-hourglass
                </div>
                <div className='htlfndr-fa-icons col-md-3 col-sm-4 col-xs-6'>
                  <i className='fa fa-hourglass-1'></i>
                  fa-hourglass-1 <span className='text-muted'>(alias)</span>
                </div>
                <div className='htlfndr-fa-icons col-md-3 col-sm-4 col-xs-6'>
                  <i className='fa fa-hourglass-2'></i>
                  fa-hourglass-2 <span className='text-muted'>(alias)</span>
                </div>
                <div className='htlfndr-fa-icons col-md-3 col-sm-4 col-xs-6'>
                  <i className='fa fa-hourglass-3'></i>
                  fa-hourglass-3 <span className='text-muted'>(alias)</span>
                </div>
                <div className='htlfndr-fa-icons col-md-3 col-sm-4 col-xs-6'>
                  <i className='fa fa-hourglass-end'></i>
                  fa-hourglass-end
                </div>
                <div className='htlfndr-fa-icons col-md-3 col-sm-4 col-xs-6'>
                  <i className='fa fa-hourglass-half'></i> fa-hourglass-half
                </div>
                <div className='htlfndr-fa-icons col-md-3 col-sm-4 col-xs-6'>
                  <i className='fa fa-hourglass-o'></i>
                  fa-hourglass-o
                </div>
                <div className='htlfndr-fa-icons col-md-3 col-sm-4 col-xs-6'>
                  <i className='fa fa-hourglass-start'></i> fa-hourglass-start
                </div>
                <div className='htlfndr-fa-icons col-md-3 col-sm-4 col-xs-6'>
                  <i className='fa fa-houzz'></i>
                  fa-houzz
                </div>
                <div className='htlfndr-fa-icons col-md-3 col-sm-4 col-xs-6'>
                  <i className='fa fa-html5'></i>
                  fa-html5
                </div>
                <div className='htlfndr-fa-icons col-md-3 col-sm-4 col-xs-6'>
                  <i className='fa fa-i-cursor'></i>
                  fa-i-cursor
                </div>
                <div className='htlfndr-fa-icons col-md-3 col-sm-4 col-xs-6'>
                  <i className='fa fa-ils'></i> fa-ils
                </div>
                <div className='htlfndr-fa-icons col-md-3 col-sm-4 col-xs-6'>
                  <i className='fa fa-image'></i>
                  fa-image <span className='text-muted'>(alias)</span>
                </div>
                <div className='htlfndr-fa-icons col-md-3 col-sm-4 col-xs-6'>
                  <i className='fa fa-inbox'></i>
                  fa-inbox
                </div>
                <div className='htlfndr-fa-icons col-md-3 col-sm-4 col-xs-6'>
                  <i className='fa fa-indent'></i>
                  fa-indent
                </div>
                <div className='htlfndr-fa-icons col-md-3 col-sm-4 col-xs-6'>
                  <i className='fa fa-industry'></i>
                  fa-industry
                </div>
                <div className='htlfndr-fa-icons col-md-3 col-sm-4 col-xs-6'>
                  <i className='fa fa-info'></i> fa-info
                </div>
                <div className='htlfndr-fa-icons col-md-3 col-sm-4 col-xs-6'>
                  <i className='fa fa-info-circle'></i>
                  fa-info-circle
                </div>
                <div className='htlfndr-fa-icons col-md-3 col-sm-4 col-xs-6'>
                  <i className='fa fa-inr'></i> fa-inr
                </div>
                <div className='htlfndr-fa-icons col-md-3 col-sm-4 col-xs-6'>
                  <i className='fa fa-instagram'></i>
                  fa-instagram
                </div>
                <div className='htlfndr-fa-icons col-md-3 col-sm-4 col-xs-6'>
                  <i className='fa fa-internet-explorer'></i>{' '}
                  fa-internet-explorer
                </div>
                <div className='htlfndr-fa-icons col-md-3 col-sm-4 col-xs-6'>
                  <i className='fa fa-institution'></i>
                  fa-institution <span className='text-muted'>(alias)</span>
                </div>
                <div className='htlfndr-fa-icons col-md-3 col-sm-4 col-xs-6'>
                  <i className='fa fa-ioxhost'></i>
                  fa-ioxhost
                </div>
                <div className='htlfndr-fa-icons col-md-3 col-sm-4 col-xs-6'>
                  <i className='fa fa-italic'></i>
                  fa-italic
                </div>
                <div className='htlfndr-fa-icons col-md-3 col-sm-4 col-xs-6'>
                  <i className='fa fa-joomla'></i>
                  fa-joomla
                </div>
                <div className='htlfndr-fa-icons col-md-3 col-sm-4 col-xs-6'>
                  <i className='fa fa-jpy'></i> fa-jpy
                </div>
                <div className='htlfndr-fa-icons col-md-3 col-sm-4 col-xs-6'>
                  <i className='fa fa-jsfiddle'></i>
                  fa-jsfiddle
                </div>
                <div className='htlfndr-fa-icons col-md-3 col-sm-4 col-xs-6'>
                  <i className='fa fa-key'></i> fa-key
                </div>
                <div className='htlfndr-fa-icons col-md-3 col-sm-4 col-xs-6'>
                  <i className='fa fa-keyboard-o'></i>
                  fa-keyboard-o
                </div>
                <div className='htlfndr-fa-icons col-md-3 col-sm-4 col-xs-6'>
                  <i className='fa fa-krw'></i> fa-krw
                </div>
                <div className='htlfndr-fa-icons col-md-3 col-sm-4 col-xs-6'>
                  <i className='fa fa-language'></i>
                  fa-language
                </div>
                <div className='htlfndr-fa-icons col-md-3 col-sm-4 col-xs-6'>
                  <i className='fa fa-laptop'></i>
                  fa-laptop
                </div>
                <div className='htlfndr-fa-icons col-md-3 col-sm-4 col-xs-6'>
                  <i className='fa fa-lastfm'></i>
                  fa-lastfm
                </div>
                <div className='htlfndr-fa-icons col-md-3 col-sm-4 col-xs-6'>
                  <i className='fa fa-lastfm-square'></i>
                  fa-lastfm-square
                </div>
                <div className='htlfndr-fa-icons col-md-3 col-sm-4 col-xs-6'>
                  <i className='fa fa-leaf'></i> fa-leaf
                </div>
                <div className='htlfndr-fa-icons col-md-3 col-sm-4 col-xs-6'>
                  <i className='fa fa-leanpub'></i>
                  fa-leanpub
                </div>
                <div className='htlfndr-fa-icons col-md-3 col-sm-4 col-xs-6'>
                  <i className='fa fa-legal'></i>
                  fa-legal <span className='text-muted'>(alias)</span>
                </div>
                <div className='htlfndr-fa-icons col-md-3 col-sm-4 col-xs-6'>
                  <i className='fa fa-lemon-o'></i>
                  fa-lemon-o
                </div>
                <div className='htlfndr-fa-icons col-md-3 col-sm-4 col-xs-6'>
                  <i className='fa fa-level-down'></i>
                  fa-level-down
                </div>
                <div className='htlfndr-fa-icons col-md-3 col-sm-4 col-xs-6'>
                  <i className='fa fa-level-up'></i>
                  fa-level-up
                </div>
                <div className='htlfndr-fa-icons col-md-3 col-sm-4 col-xs-6'>
                  <i className='fa fa-life-bouy'></i>
                  fa-life-bouy <span className='text-muted'>(alias)</span>
                </div>
                <div className='htlfndr-fa-icons col-md-3 col-sm-4 col-xs-6'>
                  <i className='fa fa-life-buoy'></i>
                  fa-life-buoy <span className='text-muted'>(alias)</span>
                </div>
                <div className='htlfndr-fa-icons col-md-3 col-sm-4 col-xs-6'>
                  <i className='fa fa-life-ring'></i>
                  fa-life-ring
                </div>
                <div className='htlfndr-fa-icons col-md-3 col-sm-4 col-xs-6'>
                  <i className='fa fa-life-saver'></i>
                  fa-life-saver <span className='text-muted'>(alias)</span>
                </div>
                <div className='htlfndr-fa-icons col-md-3 col-sm-4 col-xs-6'>
                  <i className='fa fa-lightbulb-o'></i>
                  fa-lightbulb-o
                </div>
                <div className='htlfndr-fa-icons col-md-3 col-sm-4 col-xs-6'>
                  <i className='fa fa-line-chart'></i>
                  fa-line-chart
                </div>
                <div className='htlfndr-fa-icons col-md-3 col-sm-4 col-xs-6'>
                  <i className='fa fa-link'></i> fa-link
                </div>
                <div className='htlfndr-fa-icons col-md-3 col-sm-4 col-xs-6'>
                  <i className='fa fa-linkedin'></i>
                  fa-linkedin
                </div>
                <div className='htlfndr-fa-icons col-md-3 col-sm-4 col-xs-6'>
                  <i className='fa fa-linkedin-square'></i> fa-linkedin-square
                </div>
                <div className='htlfndr-fa-icons col-md-3 col-sm-4 col-xs-6'>
                  <i className='fa fa-linux'></i>
                  fa-linux
                </div>
                <div className='htlfndr-fa-icons col-md-3 col-sm-4 col-xs-6'>
                  <i className='fa fa-list'></i> fa-list
                </div>
                <div className='htlfndr-fa-icons col-md-3 col-sm-4 col-xs-6'>
                  <i className='fa fa-list-alt'></i>
                  fa-list-alt
                </div>
                <div className='htlfndr-fa-icons col-md-3 col-sm-4 col-xs-6'>
                  <i className='fa fa-list-ol'></i>
                  fa-list-ol
                </div>
                <div className='htlfndr-fa-icons col-md-3 col-sm-4 col-xs-6'>
                  <i className='fa fa-list-ul'></i>
                  fa-list-ul
                </div>
                <div className='htlfndr-fa-icons col-md-3 col-sm-4 col-xs-6'>
                  <i className='fa fa-location-arrow'></i> fa-location-arrow
                </div>
                <div className='htlfndr-fa-icons col-md-3 col-sm-4 col-xs-6'>
                  <i className='fa fa-lock'></i> fa-lock
                </div>
                <div className='htlfndr-fa-icons col-md-3 col-sm-4 col-xs-6'>
                  <i className='fa fa-long-arrow-down'></i> fa-long-arrow-down
                </div>
                <div className='htlfndr-fa-icons col-md-3 col-sm-4 col-xs-6'>
                  <i className='fa fa-long-arrow-left'></i> fa-long-arrow-left
                </div>
                <div className='htlfndr-fa-icons col-md-3 col-sm-4 col-xs-6'>
                  <i className='fa fa-long-arrow-right'></i> fa-long-arrow-right
                </div>
                <div className='htlfndr-fa-icons col-md-3 col-sm-4 col-xs-6'>
                  <i className='fa fa-long-arrow-up'></i>
                  fa-long-arrow-up
                </div>
                <div className='htlfndr-fa-icons col-md-3 col-sm-4 col-xs-6'>
                  <i className='fa fa-magic'></i>
                  fa-magic
                </div>
                <div className='htlfndr-fa-icons col-md-3 col-sm-4 col-xs-6'>
                  <i className='fa fa-magnet'></i>
                  fa-magnet
                </div>
                <div className='htlfndr-fa-icons col-md-3 col-sm-4 col-xs-6'>
                  <i className='fa fa-mail-forward'></i>
                  fa-mail-forward <span className='text-muted'>(alias)</span>
                </div>
                <div className='htlfndr-fa-icons col-md-3 col-sm-4 col-xs-6'>
                  <i className='fa fa-mail-reply'></i>
                  fa-mail-reply <span className='text-muted'>(alias)</span>
                </div>
                <div className='htlfndr-fa-icons col-md-3 col-sm-4 col-xs-6'>
                  <i className='fa fa-mail-reply-all'></i> fa-mail-reply-all{' '}
                  <span className='text-muted'>(alias)</span>
                </div>
                <div className='htlfndr-fa-icons col-md-3 col-sm-4 col-xs-6'>
                  <i className='fa fa-male'></i> fa-male
                </div>
                <div className='htlfndr-fa-icons col-md-3 col-sm-4 col-xs-6'>
                  <i className='fa fa-map'></i> fa-map
                </div>
                <div className='htlfndr-fa-icons col-md-3 col-sm-4 col-xs-6'>
                  <i className='fa fa-map-marker'></i>
                  fa-map-marker
                </div>
                <div className='htlfndr-fa-icons col-md-3 col-sm-4 col-xs-6'>
                  <i className='fa fa-map-o'></i>
                  fa-map-o
                </div>
                <div className='htlfndr-fa-icons col-md-3 col-sm-4 col-xs-6'>
                  <i className='fa fa-map-pin'></i>
                  fa-map-pin
                </div>
                <div className='htlfndr-fa-icons col-md-3 col-sm-4 col-xs-6'>
                  <i className='fa fa-map-signs'></i>
                  fa-map-signs
                </div>
                <div className='htlfndr-fa-icons col-md-3 col-sm-4 col-xs-6'>
                  <i className='fa fa-maxcdn'></i>
                  fa-maxcdn
                </div>
                <div className='htlfndr-fa-icons col-md-3 col-sm-4 col-xs-6'>
                  <i className='fa fa-meanpath'></i>
                  fa-meanpath
                </div>
                <div className='htlfndr-fa-icons col-md-3 col-sm-4 col-xs-6'>
                  <i className='fa fa-medium'></i>
                  fa-medium
                </div>
                <div className='htlfndr-fa-icons col-md-3 col-sm-4 col-xs-6'>
                  <i className='fa fa-medkit'></i>
                  fa-medkit
                </div>
                <div className='htlfndr-fa-icons col-md-3 col-sm-4 col-xs-6'>
                  <i className='fa fa-meh-o'></i>
                  fa-meh-o
                </div>
                <div className='htlfndr-fa-icons col-md-3 col-sm-4 col-xs-6'>
                  <i className='fa fa-microphone'></i>
                  fa-microphone
                </div>
                <div className='htlfndr-fa-icons col-md-3 col-sm-4 col-xs-6'>
                  <i className='fa fa-microphone-slash'></i> fa-microphone-slash
                </div>
                <div className='htlfndr-fa-icons col-md-3 col-sm-4 col-xs-6'>
                  <i className='fa fa-mixcloud'></i>
                  fa-mixcloud
                </div>
                <div className='htlfndr-fa-icons col-md-3 col-sm-4 col-xs-6'>
                  <i className='fa fa-minus-circle'></i>
                  fa-minus-circle
                </div>
                <div className='htlfndr-fa-icons col-md-3 col-sm-4 col-xs-6'>
                  <i className='fa fa-minus-square'></i>
                  fa-minus-square
                </div>
                <div className='htlfndr-fa-icons col-md-3 col-sm-4 col-xs-6'>
                  <i className='fa fa-minus-square-o'></i> fa-minus-square-o
                </div>
                <div className='htlfndr-fa-icons col-md-3 col-sm-4 col-xs-6'>
                  <i className='fa fa-mobile'></i>
                  fa-mobile
                </div>
                <div className='htlfndr-fa-icons col-md-3 col-sm-4 col-xs-6'>
                  <i className='fa fa-mobile-phone'></i>
                  fa-mobile-phone <span className='text-muted'>(alias)</span>
                </div>
                <div className='htlfndr-fa-icons col-md-3 col-sm-4 col-xs-6'>
                  <i className='fa fa-modx'></i> fa-modx
                </div>
                <div className='htlfndr-fa-icons col-md-3 col-sm-4 col-xs-6'>
                  <i className='fa fa-money'></i>
                  fa-money
                </div>
                <div className='htlfndr-fa-icons col-md-3 col-sm-4 col-xs-6'>
                  <i className='fa fa-moon-o'></i>
                  fa-moon-o
                </div>
                <div className='htlfndr-fa-icons col-md-3 col-sm-4 col-xs-6'>
                  <i className='fa fa-mortar-board'></i>
                  fa-mortar-board <span className='text-muted'>(alias)</span>
                </div>
                <div className='htlfndr-fa-icons col-md-3 col-sm-4 col-xs-6'>
                  <i className='fa fa-motorcycle'></i>
                  fa-motorcycle
                </div>
                <div className='htlfndr-fa-icons col-md-3 col-sm-4 col-xs-6'>
                  <i className='fa fa-mouse-pointer'></i>
                  fa-mouse-pointer
                </div>
                <div className='htlfndr-fa-icons col-md-3 col-sm-4 col-xs-6'>
                  <i className='fa fa-music'></i>
                  fa-music
                </div>
                <div className='htlfndr-fa-icons col-md-3 col-sm-4 col-xs-6'>
                  <i className='fa fa-navicon'></i>
                  fa-navicon <span className='text-muted'>(alias)</span>
                </div>
                <div className='htlfndr-fa-icons col-md-3 col-sm-4 col-xs-6'>
                  <i className='fa fa-newspaper-o'></i>
                  fa-newspaper-o
                </div>
                <div className='htlfndr-fa-icons col-md-3 col-sm-4 col-xs-6'>
                  <i className='fa fa-object-group'></i>
                  fa-object-group
                </div>
                <div className='htlfndr-fa-icons col-md-3 col-sm-4 col-xs-6'>
                  <i className='fa fa-object-ungroup'></i> fa-object-ungroup
                </div>
                <div className='htlfndr-fa-icons col-md-3 col-sm-4 col-xs-6'>
                  <i className='fa fa-odnoklassniki'></i>
                  fa-odnoklassniki
                </div>
                <div className='htlfndr-fa-icons col-md-3 col-sm-4 col-xs-6'>
                  <i className='fa fa-odnoklassniki-square'></i>{' '}
                  fa-odnoklassniki-square
                </div>
                <div className='htlfndr-fa-icons col-md-3 col-sm-4 col-xs-6'>
                  <i className='fa fa-opencart'></i>
                  fa-opencart
                </div>
                <div className='htlfndr-fa-icons col-md-3 col-sm-4 col-xs-6'>
                  <i className='fa fa-openid'></i>
                  fa-openid
                </div>
                <div className='htlfndr-fa-icons col-md-3 col-sm-4 col-xs-6'>
                  <i className='fa fa-opera'></i>
                  fa-opera
                </div>
                <div className='htlfndr-fa-icons col-md-3 col-sm-4 col-xs-6'>
                  <i className='fa fa-optin-monster'></i>
                  fa-optin-monster
                </div>
                <div className='htlfndr-fa-icons col-md-3 col-sm-4 col-xs-6'>
                  <i className='fa fa-outdent'></i>
                  fa-outdent
                </div>
                <div className='htlfndr-fa-icons col-md-3 col-sm-4 col-xs-6'>
                  <i className='fa fa-paint-brush'></i>
                  fa-paint-brush
                </div>
                <div className='htlfndr-fa-icons col-md-3 col-sm-4 col-xs-6'>
                  <i className='fa fa-pagelines'></i>
                  fa-pagelines
                </div>
                <div className='htlfndr-fa-icons col-md-3 col-sm-4 col-xs-6'>
                  <i className='fa fa-paypal'></i>
                  fa-paypal
                </div>
                <div className='htlfndr-fa-icons col-md-3 col-sm-4 col-xs-6'>
                  <i className='fa fa-paperclip'></i>
                  fa-paperclip
                </div>
                <div className='htlfndr-fa-icons col-md-3 col-sm-4 col-xs-6'>
                  <i className='fa fa-paragraph'></i>
                  fa-paragraph
                </div>
                <div className='htlfndr-fa-icons col-md-3 col-sm-4 col-xs-6'>
                  <i className='fa fa-paste'></i>
                  fa-paste <span className='text-muted'>(alias)</span>
                </div>
                <div className='htlfndr-fa-icons col-md-3 col-sm-4 col-xs-6'>
                  <i className='fa fa-paper-plane'></i>
                  fa-paper-plane
                </div>
                <div className='htlfndr-fa-icons col-md-3 col-sm-4 col-xs-6'>
                  <i className='fa fa-paper-plane-o'></i>
                  fa-paper-plane-o
                </div>
                <div className='htlfndr-fa-icons col-md-3 col-sm-4 col-xs-6'>
                  <i className='fa fa-pause'></i>
                  fa-pause
                </div>
                <div className='htlfndr-fa-icons col-md-3 col-sm-4 col-xs-6'>
                  <i className='fa fa-pause-circle'></i>
                  fa-pause-circle
                </div>
                <div className='htlfndr-fa-icons col-md-3 col-sm-4 col-xs-6'>
                  <i className='fa fa-pause-circle-o'></i> fa-pause-circle-o
                </div>
                <div className='htlfndr-fa-icons col-md-3 col-sm-4 col-xs-6'>
                  <i className='fa fa-paw'></i> fa-paw
                </div>
                <div className='htlfndr-fa-icons col-md-3 col-sm-4 col-xs-6'>
                  <i className='fa fa-pencil'></i>
                  fa-pencil
                </div>
                <div className='htlfndr-fa-icons col-md-3 col-sm-4 col-xs-6'>
                  <i className='fa fa-pencil-square'></i>
                  fa-pencil-square
                </div>
                <div className='htlfndr-fa-icons col-md-3 col-sm-4 col-xs-6'>
                  <i className='fa fa-pencil-square-o'></i> fa-pencil-square-o
                </div>
                <div className='htlfndr-fa-icons col-md-3 col-sm-4 col-xs-6'>
                  <i className='fa fa-percent'></i>
                  fa-percent
                </div>
                <div className='htlfndr-fa-icons col-md-3 col-sm-4 col-xs-6'>
                  <i className='fa fa-phone'></i>
                  fa-phone
                </div>
                <div className='htlfndr-fa-icons col-md-3 col-sm-4 col-xs-6'>
                  <i className='fa fa-phone-square'></i>
                  fa-phone-square
                </div>
                <div className='htlfndr-fa-icons col-md-3 col-sm-4 col-xs-6'>
                  <i className='fa fa-photo'></i>
                  fa-photo <span className='text-muted'>(alias)</span>
                </div>
                <div className='htlfndr-fa-icons col-md-3 col-sm-4 col-xs-6'>
                  <i className='fa fa-pied-piper'></i>
                  fa-pied-piper
                </div>
                <div className='htlfndr-fa-icons col-md-3 col-sm-4 col-xs-6'>
                  <i className='fa fa-pied-piper-alt'></i> fa-pied-piper-alt
                </div>
                <div className='htlfndr-fa-icons col-md-3 col-sm-4 col-xs-6'>
                  <i className='fa fa-pinterest'></i>
                  fa-pinterest
                </div>
                <div className='htlfndr-fa-icons col-md-3 col-sm-4 col-xs-6'>
                  <i className='fa fa-pinterest-p'></i>
                  fa-pinterest-p
                </div>
                <div className='htlfndr-fa-icons col-md-3 col-sm-4 col-xs-6'>
                  <i className='fa fa-pinterest-square'></i> fa-pinterest-square
                </div>
                <div className='htlfndr-fa-icons col-md-3 col-sm-4 col-xs-6'>
                  <i className='fa fa-picture-o'></i>
                  fa-picture-o
                </div>
                <div className='htlfndr-fa-icons col-md-3 col-sm-4 col-xs-6'>
                  <i className='fa fa-pie-chart'></i>
                  fa-pie-chart
                </div>
                <div className='htlfndr-fa-icons col-md-3 col-sm-4 col-xs-6'>
                  <i className='fa fa-plane'></i>
                  fa-plane
                </div>
                <div className='htlfndr-fa-icons col-md-3 col-sm-4 col-xs-6'>
                  <i className='fa fa-play'></i> fa-play
                </div>
                <div className='htlfndr-fa-icons col-md-3 col-sm-4 col-xs-6'>
                  <i className='fa fa-play-circle'></i>
                  fa-play-circle
                </div>
                <div className='htlfndr-fa-icons col-md-3 col-sm-4 col-xs-6'>
                  <i className='fa fa-play-circle-o'></i>
                  fa-play-circle-o
                </div>
                <div className='htlfndr-fa-icons col-md-3 col-sm-4 col-xs-6'>
                  <i className='fa fa-plug'></i> fa-plug
                </div>
                <div className='htlfndr-fa-icons col-md-3 col-sm-4 col-xs-6'>
                  <i className='fa fa-plus'></i> fa-plus
                </div>
                <div className='htlfndr-fa-icons col-md-3 col-sm-4 col-xs-6'>
                  <i className='fa fa-plus-circle'></i>
                  fa-plus-circle
                </div>
                <div className='htlfndr-fa-icons col-md-3 col-sm-4 col-xs-6'>
                  <i className='fa fa-plus-square'></i>
                  fa-plus-square
                </div>
                <div className='htlfndr-fa-icons col-md-3 col-sm-4 col-xs-6'>
                  <i className='fa fa-plus-square-o'></i>
                  fa-plus-square-o
                </div>
                <div className='htlfndr-fa-icons col-md-3 col-sm-4 col-xs-6'>
                  <i className='fa fa-power-off'></i>
                  fa-power-off
                </div>
                <div className='htlfndr-fa-icons col-md-3 col-sm-4 col-xs-6'>
                  <i className='fa fa-product-hunt'></i>
                  fa-product-hunt
                </div>
                <div className='htlfndr-fa-icons col-md-3 col-sm-4 col-xs-6'>
                  <i className='fa fa-print'></i>
                  fa-print
                </div>
                <div className='htlfndr-fa-icons col-md-3 col-sm-4 col-xs-6'>
                  <i className='fa fa-puzzle-piece'></i>
                  fa-puzzle-piece
                </div>
                <div className='htlfndr-fa-icons col-md-3 col-sm-4 col-xs-6'>
                  <i className='fa fa-qq'></i> fa-qq
                </div>
                <div className='htlfndr-fa-icons col-md-3 col-sm-4 col-xs-6'>
                  <i className='fa fa-qrcode'></i>
                  fa-qrcode
                </div>
                <div className='htlfndr-fa-icons col-md-3 col-sm-4 col-xs-6'>
                  <i className='fa fa-question'></i>
                  fa-question
                </div>
                <div className='htlfndr-fa-icons col-md-3 col-sm-4 col-xs-6'>
                  <i className='fa fa-question-circle'></i> fa-question-circle
                </div>
                <div className='htlfndr-fa-icons col-md-3 col-sm-4 col-xs-6'>
                  <i className='fa fa-quote-left'></i>
                  fa-quote-left
                </div>
                <div className='htlfndr-fa-icons col-md-3 col-sm-4 col-xs-6'>
                  <i className='fa fa-quote-right'></i>
                  fa-quote-right
                </div>
                <div className='htlfndr-fa-icons col-md-3 col-sm-4 col-xs-6'>
                  <i className='fa fa-ra'></i> fa-ra
                  <span className='text-muted'>(alias)</span>
                </div>
                <div className='htlfndr-fa-icons col-md-3 col-sm-4 col-xs-6'>
                  <i className='fa fa-reddit'></i>
                  fa-reddit
                </div>
                <div className='htlfndr-fa-icons col-md-3 col-sm-4 col-xs-6'>
                  <i className='fa fa-reddit-alien'></i>
                  fa-reddit-alien
                </div>
                <div className='htlfndr-fa-icons col-md-3 col-sm-4 col-xs-6'>
                  <i className='fa fa-reddit-square'></i>
                  fa-reddit-square
                </div>
                <div className='htlfndr-fa-icons col-md-3 col-sm-4 col-xs-6'>
                  <i className='fa fa-renren'></i>
                  fa-renren
                </div>
                <div className='htlfndr-fa-icons col-md-3 col-sm-4 col-xs-6'>
                  <i className='fa fa-random'></i>
                  fa-random
                </div>
                <div className='htlfndr-fa-icons col-md-3 col-sm-4 col-xs-6'>
                  <i className='fa fa-recycle'></i>
                  fa-recycle
                </div>
                <div className='htlfndr-fa-icons col-md-3 col-sm-4 col-xs-6'>
                  <i className='fa fa-reddit'></i>
                  fa-reddit
                </div>
                <div className='htlfndr-fa-icons col-md-3 col-sm-4 col-xs-6'>
                  <i className='fa fa-reddit-alien'></i>
                  fa-reddit-alien
                </div>
                <div className='htlfndr-fa-icons col-md-3 col-sm-4 col-xs-6'>
                  <i className='fa fa-reddit-square'></i>
                  fa-reddit-square
                </div>
                <div className='htlfndr-fa-icons col-md-3 col-sm-4 col-xs-6'>
                  <i className='fa fa-renren'></i>
                  fa-renren
                </div>
                <div className='htlfndr-fa-icons col-md-3 col-sm-4 col-xs-6'>
                  <i className='fa fa-refresh'></i>
                  fa-refresh
                </div>
                <div className='htlfndr-fa-icons col-md-3 col-sm-4 col-xs-6'>
                  <i className='fa fa-registered'></i>
                  fa-registered
                </div>
                <div className='htlfndr-fa-icons col-md-3 col-sm-4 col-xs-6'>
                  <i className='fa fa-remove'></i>
                  fa-remove <span className='text-muted'>(alias)</span>
                </div>
                <div className='htlfndr-fa-icons col-md-3 col-sm-4 col-xs-6'>
                  <i className='fa fa-reorder'></i>
                  fa-reorder <span className='text-muted'>(alias)</span>
                </div>
                <div className='htlfndr-fa-icons col-md-3 col-sm-4 col-xs-6'>
                  <i className='fa fa-repeat'></i>
                  fa-repeat
                </div>
                <div className='htlfndr-fa-icons col-md-3 col-sm-4 col-xs-6'>
                  <i className='fa fa-reply'></i>
                  fa-reply
                </div>
                <div className='htlfndr-fa-icons col-md-3 col-sm-4 col-xs-6'>
                  <i className='fa fa-reply-all'></i>
                  fa-reply-all
                </div>
                <div className='htlfndr-fa-icons col-md-3 col-sm-4 col-xs-6'>
                  <i className='fa fa-retweet'></i>
                  fa-retweet
                </div>
                <div className='htlfndr-fa-icons col-md-3 col-sm-4 col-xs-6'>
                  <i className='fa fa-rmb'></i> fa-rmb
                  <span className='text-muted'>(alias)</span>
                </div>
                <div className='htlfndr-fa-icons col-md-3 col-sm-4 col-xs-6'>
                  <i className='fa fa-road'></i> fa-road
                </div>
                <div className='htlfndr-fa-icons col-md-3 col-sm-4 col-xs-6'>
                  <i className='fa fa-rocket'></i>
                  fa-rocket
                </div>
                <div className='htlfndr-fa-icons col-md-3 col-sm-4 col-xs-6'>
                  <i className='fa fa-rotate-left'></i>
                  fa-rotate-left <span className='text-muted'>(alias)</span>
                </div>
                <div className='htlfndr-fa-icons col-md-3 col-sm-4 col-xs-6'>
                  <i className='fa fa-rotate-right'></i>
                  fa-rotate-right <span className='text-muted'>(alias)</span>
                </div>
                <div className='htlfndr-fa-icons col-md-3 col-sm-4 col-xs-6'>
                  <i className='fa fa-rouble'></i>
                  fa-rouble <span className='text-muted'>(alias)</span>
                </div>
                <div className='htlfndr-fa-icons col-md-3 col-sm-4 col-xs-6'>
                  <i className='fa fa-rss'></i> fa-rss
                </div>
                <div className='htlfndr-fa-icons col-md-3 col-sm-4 col-xs-6'>
                  <i className='fa fa-rss-square'></i>
                  fa-rss-square
                </div>
                <div className='htlfndr-fa-icons col-md-3 col-sm-4 col-xs-6'>
                  <i className='fa fa-rub'></i> fa-rub
                </div>
                <div className='htlfndr-fa-icons col-md-3 col-sm-4 col-xs-6'>
                  <i className='fa fa-ruble'></i>
                  fa-ruble <span className='text-muted'>(alias)</span>
                </div>
                <div className='htlfndr-fa-icons col-md-3 col-sm-4 col-xs-6'>
                  <i className='fa fa-rupee'></i>
                  fa-rupee <span className='text-muted'>(alias)</span>
                </div>
                <div className='htlfndr-fa-icons col-md-3 col-sm-4 col-xs-6'>
                  <i className='fa fa-safari'></i>
                  fa-safari
                </div>
                <div className='htlfndr-fa-icons col-md-3 col-sm-4 col-xs-6'>
                  <i className='fa fa-save'></i> fa-save
                  <span className='text-muted'>(alias)</span>
                </div>
                <div className='htlfndr-fa-icons col-md-3 col-sm-4 col-xs-6'>
                  <i className='fa fa-scissors'></i>
                  fa-scissors
                </div>
                <div className='htlfndr-fa-icons col-md-3 col-sm-4 col-xs-6'>
                  <i className='fa fa-scribd'></i>
                  fa-scribd
                </div>
                <div className='htlfndr-fa-icons col-md-3 col-sm-4 col-xs-6'>
                  <i className='fa fa-search'></i>
                  fa-search
                </div>
                <div className='htlfndr-fa-icons col-md-3 col-sm-4 col-xs-6'>
                  <i className='fa fa-search-minus'></i>
                  fa-search-minus
                </div>
                <div className='htlfndr-fa-icons col-md-3 col-sm-4 col-xs-6'>
                  <i className='fa fa-search-plus'></i>
                  fa-search-plus
                </div>
                <div className='htlfndr-fa-icons col-md-3 col-sm-4 col-xs-6'>
                  <i className='fa fa-sellsy'></i>
                  fa-sellsy
                </div>
                <div className='htlfndr-fa-icons col-md-3 col-sm-4 col-xs-6'>
                  <i className='fa fa-send'></i> fa-send
                  <span className='text-muted'>(alias)</span>
                </div>
                <div className='htlfndr-fa-icons col-md-3 col-sm-4 col-xs-6'>
                  <i className='fa fa-send-o'></i>
                  fa-send-o <span className='text-muted'>(alias)</span>
                </div>
                <div className='htlfndr-fa-icons col-md-3 col-sm-4 col-xs-6'>
                  <i className='fa fa-server'></i>
                  fa-server
                </div>
                <div className='htlfndr-fa-icons col-md-3 col-sm-4 col-xs-6'>
                  <i className='fa fa-share'></i>
                  fa-share
                </div>
                <div className='htlfndr-fa-icons col-md-3 col-sm-4 col-xs-6'>
                  <i className='fa fa-share-alt'></i>
                  fa-share-alt
                </div>
                <div className='htlfndr-fa-icons col-md-3 col-sm-4 col-xs-6'>
                  <i className='fa fa-share-alt-square'></i> fa-share-alt-square
                </div>
                <div className='htlfndr-fa-icons col-md-3 col-sm-4 col-xs-6'>
                  <i className='fa fa-share-square'></i>
                  fa-share-square
                </div>
                <div className='htlfndr-fa-icons col-md-3 col-sm-4 col-xs-6'>
                  <i className='fa fa-share-square-o'></i> fa-share-square-o
                </div>
                <div className='htlfndr-fa-icons col-md-3 col-sm-4 col-xs-6'>
                  <i className='fa fa-shekel'></i>
                  fa-shekel <span className='text-muted'>(alias)</span>
                </div>
                <div className='htlfndr-fa-icons col-md-3 col-sm-4 col-xs-6'>
                  <i className='fa fa-sheqel'></i>
                  fa-sheqel <span className='text-muted'>(alias)</span>
                </div>
                <div className='htlfndr-fa-icons col-md-3 col-sm-4 col-xs-6'>
                  <i className='fa fa-shield'></i>
                  fa-shield
                </div>
                <div className='htlfndr-fa-icons col-md-3 col-sm-4 col-xs-6'>
                  <i className='fa fa-ship'></i> fa-ship
                </div>
                <div className='htlfndr-fa-icons col-md-3 col-sm-4 col-xs-6'>
                  <i className='fa fa-shirtsinbulk'></i>
                  fa-shirtsinbulk
                </div>
                <div className='htlfndr-fa-icons col-md-3 col-sm-4 col-xs-6'>
                  <i className='fa fa-shopping-bag'></i>
                  fa-shopping-bag
                </div>
                <div className='htlfndr-fa-icons col-md-3 col-sm-4 col-xs-6'>
                  <i className='fa fa-shopping-basket'></i> fa-shopping-basket
                </div>
                <div className='htlfndr-fa-icons col-md-3 col-sm-4 col-xs-6'>
                  <i className='fa fa-shopping-cart'></i>
                  fa-shopping-cart
                </div>
                <div className='htlfndr-fa-icons col-md-3 col-sm-4 col-xs-6'>
                  <i className='fa fa-sign-in'></i>
                  fa-sign-in
                </div>
                <div className='htlfndr-fa-icons col-md-3 col-sm-4 col-xs-6'>
                  <i className='fa fa-sign-out'></i>
                  fa-sign-out
                </div>
                <div className='htlfndr-fa-icons col-md-3 col-sm-4 col-xs-6'>
                  <i className='fa fa-signal'></i>
                  fa-signal
                </div>
                <div className='htlfndr-fa-icons col-md-3 col-sm-4 col-xs-6'>
                  <i className='fa fa-simplybuilt'></i>
                  fa-simplybuilt
                </div>
                <div className='htlfndr-fa-icons col-md-3 col-sm-4 col-xs-6'>
                  <i className='fa fa-sitemap'></i>
                  fa-sitemap
                </div>
                <div className='htlfndr-fa-icons col-md-3 col-sm-4 col-xs-6'>
                  <i className='fa fa-skyatlas'></i>
                  fa-skyatlas
                </div>
                <div className='htlfndr-fa-icons col-md-3 col-sm-4 col-xs-6'>
                  <i className='fa fa-skype'></i>
                  fa-skype
                </div>
                <div className='htlfndr-fa-icons col-md-3 col-sm-4 col-xs-6'>
                  <i className='fa fa-slack'></i>
                  fa-slack
                </div>
                <div className='htlfndr-fa-icons col-md-3 col-sm-4 col-xs-6'>
                  <i className='fa fa-sliders'></i>
                  fa-sliders
                </div>
                <div className='htlfndr-fa-icons col-md-3 col-sm-4 col-xs-6'>
                  <i className='fa fa-slideshare'></i>
                  fa-slideshare
                </div>
                <div className='htlfndr-fa-icons col-md-3 col-sm-4 col-xs-6'>
                  <i className='fa fa-smile-o'></i>
                  fa-smile-o
                </div>
                <div className='htlfndr-fa-icons col-md-3 col-sm-4 col-xs-6'>
                  <i className='fa fa-soccer-ball-o'></i>
                  fa-soccer-ball-o <span className='text-muted'>(alias)</span>
                </div>
                <div className='htlfndr-fa-icons col-md-3 col-sm-4 col-xs-6'>
                  <i className='fa fa-sort'></i> fa-sort
                </div>
                <div className='htlfndr-fa-icons col-md-3 col-sm-4 col-xs-6'>
                  <i className='fa fa-sort-alpha-asc'></i> fa-sort-alpha-asc
                </div>
                <div className='htlfndr-fa-icons col-md-3 col-sm-4 col-xs-6'>
                  <i className='fa fa-sort-alpha-desc'></i> fa-sort-alpha-desc
                </div>
                <div className='htlfndr-fa-icons col-md-3 col-sm-4 col-xs-6'>
                  <i className='fa fa-sort-amount-asc'></i> fa-sort-amount-asc
                </div>
                <div className='htlfndr-fa-icons col-md-3 col-sm-4 col-xs-6'>
                  <i className='fa fa-sort-amount-desc'></i> fa-sort-amount-desc
                </div>
                <div className='htlfndr-fa-icons col-md-3 col-sm-4 col-xs-6'>
                  <i className='fa fa-sort-asc'></i>
                  fa-sort-asc
                </div>
                <div className='htlfndr-fa-icons col-md-3 col-sm-4 col-xs-6'>
                  <i className='fa fa-sort-desc'></i>
                  fa-sort-desc
                </div>
                <div className='htlfndr-fa-icons col-md-3 col-sm-4 col-xs-6'>
                  <i className='fa fa-sort-down'></i>
                  fa-sort-down <span className='text-muted'>(alias)</span>
                </div>
                <div className='htlfndr-fa-icons col-md-3 col-sm-4 col-xs-6'>
                  <i className='fa fa-sort-numeric-asc'></i> fa-sort-numeric-asc
                </div>
                <div className='htlfndr-fa-icons col-md-3 col-sm-4 col-xs-6'>
                  <i className='fa fa-sort-numeric-desc'></i>{' '}
                  fa-sort-numeric-desc
                </div>
                <div className='htlfndr-fa-icons col-md-3 col-sm-4 col-xs-6'>
                  <i className='fa fa-sort-up'></i>
                  fa-sort-up <span className='text-muted'>(alias)</span>
                </div>
                <div className='htlfndr-fa-icons col-md-3 col-sm-4 col-xs-6'>
                  <i className='fa fa-soundcloud'></i>
                  fa-soundcloud
                </div>
                <div className='htlfndr-fa-icons col-md-3 col-sm-4 col-xs-6'>
                  <i className='fa fa-space-shuttle'></i>
                  fa-space-shuttle
                </div>
                <div className='htlfndr-fa-icons col-md-3 col-sm-4 col-xs-6'>
                  <i className='fa fa-spinner'></i>
                  fa-spinner
                </div>
                <div className='htlfndr-fa-icons col-md-3 col-sm-4 col-xs-6'>
                  <i className='fa fa-spoon'></i>
                  fa-spoon
                </div>
                <div className='htlfndr-fa-icons col-md-3 col-sm-4 col-xs-6'>
                  <i className='fa fa-spotify'></i>
                  fa-spotify
                </div>
                <div className='htlfndr-fa-icons col-md-3 col-sm-4 col-xs-6'>
                  <i className='fa fa-square'></i>
                  fa-square
                </div>
                <div className='htlfndr-fa-icons col-md-3 col-sm-4 col-xs-6'>
                  <i className='fa fa-square-o'></i>
                  fa-square-o
                </div>
                <div className='htlfndr-fa-icons col-md-3 col-sm-4 col-xs-6'>
                  <i className='fa fa-stack-exchange'></i> fa-stack-exchange
                </div>
                <div className='htlfndr-fa-icons col-md-3 col-sm-4 col-xs-6'>
                  <i className='fa fa-stack-overflow'></i> fa-stack-overflow
                </div>
                <div className='htlfndr-fa-icons col-md-3 col-sm-4 col-xs-6'>
                  <i className='fa fa-star'></i> fa-star
                </div>
                <div className='htlfndr-fa-icons col-md-3 col-sm-4 col-xs-6'>
                  <i className='fa fa-star-half'></i>
                  fa-star-half
                </div>
                <div className='htlfndr-fa-icons col-md-3 col-sm-4 col-xs-6'>
                  <i className='fa fa-star-half-empty'></i> fa-star-half-empty{' '}
                  <span className='text-muted'>(alias)</span>
                </div>
                <div className='htlfndr-fa-icons col-md-3 col-sm-4 col-xs-6'>
                  <i className='fa fa-star-half-full'></i> fa-star-half-full{' '}
                  <span className='text-muted'>(alias)</span>
                </div>
                <div className='htlfndr-fa-icons col-md-3 col-sm-4 col-xs-6'>
                  <i className='fa fa-star-half-o'></i>
                  fa-star-half-o
                </div>
                <div className='htlfndr-fa-icons col-md-3 col-sm-4 col-xs-6'>
                  <i className='fa fa-star-o'></i>
                  fa-star-o
                </div>
                <div className='htlfndr-fa-icons col-md-3 col-sm-4 col-xs-6'>
                  <i className='fa fa-steam'></i>
                  fa-steam
                </div>
                <div className='htlfndr-fa-icons col-md-3 col-sm-4 col-xs-6'>
                  <i className='fa fa-steam-square'></i>
                  fa-steam-square
                </div>
                <div className='htlfndr-fa-icons col-md-3 col-sm-4 col-xs-6'>
                  <i className='fa fa-step-backward'></i>
                  fa-step-backward
                </div>
                <div className='htlfndr-fa-icons col-md-3 col-sm-4 col-xs-6'>
                  <i className='fa fa-step-forward'></i>
                  fa-step-forward
                </div>
                <div className='htlfndr-fa-icons col-md-3 col-sm-4 col-xs-6'>
                  <i className='fa fa-stethoscope'></i>
                  fa-stethoscope
                </div>
                <div className='htlfndr-fa-icons col-md-3 col-sm-4 col-xs-6'>
                  <i className='fa fa-sticky-note'></i>
                  fa-sticky-note
                </div>
                <div className='htlfndr-fa-icons col-md-3 col-sm-4 col-xs-6'>
                  <i className='fa fa-sticky-note-o'></i>
                  fa-sticky-note-o
                </div>
                <div className='htlfndr-fa-icons col-md-3 col-sm-4 col-xs-6'>
                  <i className='fa fa-stop'></i> fa-stop
                </div>
                <div className='htlfndr-fa-icons col-md-3 col-sm-4 col-xs-6'>
                  <i className='fa fa-stop-circle'></i>
                  fa-stop-circle
                </div>
                <div className='htlfndr-fa-icons col-md-3 col-sm-4 col-xs-6'>
                  <i className='fa fa-stop-circle-o'></i>
                  fa-stop-circle-o
                </div>
                <div className='htlfndr-fa-icons col-md-3 col-sm-4 col-xs-6'>
                  <i className='fa fa-strikethrough'></i>
                  fa-strikethrough
                </div>
                <div className='htlfndr-fa-icons col-md-3 col-sm-4 col-xs-6'>
                  <i className='fa fa-street-view'></i>
                  fa-street-view
                </div>
                <div className='htlfndr-fa-icons col-md-3 col-sm-4 col-xs-6'>
                  <i className='fa fa-stumbleupon'></i>
                  fa-stumbleupon
                </div>
                <div className='htlfndr-fa-icons col-md-3 col-sm-4 col-xs-6'>
                  <i className='fa fa-stumbleupon-circle'></i>{' '}
                  fa-stumbleupon-circle
                </div>
                <div className='htlfndr-fa-icons col-md-3 col-sm-4 col-xs-6'>
                  <i className='fa fa-subscript'></i>
                  fa-subscript
                </div>
                <div className='htlfndr-fa-icons col-md-3 col-sm-4 col-xs-6'>
                  <i className='fa fa-suitcase'></i>
                  fa-suitcase
                </div>
                <div className='htlfndr-fa-icons col-md-3 col-sm-4 col-xs-6'>
                  <i className='fa fa-sun-o'></i>
                  fa-sun-o
                </div>
                <div className='htlfndr-fa-icons col-md-3 col-sm-4 col-xs-6'>
                  <i className='fa fa-superscript'></i>
                  fa-superscript
                </div>
                <div className='htlfndr-fa-icons col-md-3 col-sm-4 col-xs-6'>
                  <i className='fa fa-support'></i>
                  fa-support <span className='text-muted'>(alias)</span>
                </div>
                <div className='htlfndr-fa-icons col-md-3 col-sm-4 col-xs-6'>
                  <i className='fa fa-table'></i>
                  fa-table
                </div>
                <div className='htlfndr-fa-icons col-md-3 col-sm-4 col-xs-6'>
                  <i className='fa fa-tablet'></i>
                  fa-tablet
                </div>
                <div className='htlfndr-fa-icons col-md-3 col-sm-4 col-xs-6'>
                  <i className='fa fa-tachometer'></i>
                  fa-tachometer
                </div>
                <div className='htlfndr-fa-icons col-md-3 col-sm-4 col-xs-6'>
                  <i className='fa fa-tag'></i> fa-tag
                </div>
                <div className='htlfndr-fa-icons col-md-3 col-sm-4 col-xs-6'>
                  <i className='fa fa-tags'></i> fa-tags
                </div>
                <div className='htlfndr-fa-icons col-md-3 col-sm-4 col-xs-6'>
                  <i className='fa fa-tasks'></i>
                  fa-tasks
                </div>
                <div className='htlfndr-fa-icons col-md-3 col-sm-4 col-xs-6'>
                  <i className='fa fa-taxi'></i> fa-taxi
                </div>
                <div className='htlfndr-fa-icons col-md-3 col-sm-4 col-xs-6'>
                  <i className='fa fa-television'></i>
                  fa-television
                </div>
                <div className='htlfndr-fa-icons col-md-3 col-sm-4 col-xs-6'>
                  <i className='fa fa-tencent-weibo'></i>
                  fa-tencent-weibo
                </div>
                <div className='htlfndr-fa-icons col-md-3 col-sm-4 col-xs-6'>
                  <i className='fa fa-terminal'></i>
                  fa-terminal
                </div>
                <div className='htlfndr-fa-icons col-md-3 col-sm-4 col-xs-6'>
                  <i className='fa fa-text-height'></i>
                  fa-text-height
                </div>
                <div className='htlfndr-fa-icons col-md-3 col-sm-4 col-xs-6'>
                  <i className='fa fa-text-width'></i>
                  fa-text-width
                </div>
                <div className='htlfndr-fa-icons col-md-3 col-sm-4 col-xs-6'>
                  <i className='fa fa-th'></i> fa-th
                </div>
                <div className='htlfndr-fa-icons col-md-3 col-sm-4 col-xs-6'>
                  <i className='fa fa-th-large'></i>
                  fa-th-large
                </div>
                <div className='htlfndr-fa-icons col-md-3 col-sm-4 col-xs-6'>
                  <i className='fa fa-th-list'></i>
                  fa-th-list
                </div>
                <div className='htlfndr-fa-icons col-md-3 col-sm-4 col-xs-6'>
                  <i className='fa fa-thumb-tack'></i>
                  fa-thumb-tack
                </div>
                <div className='htlfndr-fa-icons col-md-3 col-sm-4 col-xs-6'>
                  <i className='fa fa-thumbs-down'></i>
                  fa-thumbs-down
                </div>
                <div className='htlfndr-fa-icons col-md-3 col-sm-4 col-xs-6'>
                  <i className='fa fa-thumbs-o-down'></i>
                  fa-thumbs-o-down
                </div>
                <div className='htlfndr-fa-icons col-md-3 col-sm-4 col-xs-6'>
                  <i className='fa fa-thumbs-o-up'></i>
                  fa-thumbs-o-up
                </div>
                <div className='htlfndr-fa-icons col-md-3 col-sm-4 col-xs-6'>
                  <i className='fa fa-thumbs-up'></i>
                  fa-thumbs-up
                </div>
                <div className='htlfndr-fa-icons col-md-3 col-sm-4 col-xs-6'>
                  <i className='fa fa-ticket'></i>
                  fa-ticket
                </div>
                <div className='htlfndr-fa-icons col-md-3 col-sm-4 col-xs-6'>
                  <i className='fa fa-times'></i>
                  fa-times
                </div>
                <div className='htlfndr-fa-icons col-md-3 col-sm-4 col-xs-6'>
                  <i className='fa fa-times-circle'></i>
                  fa-times-circle
                </div>
                <div className='htlfndr-fa-icons col-md-3 col-sm-4 col-xs-6'>
                  <i className='fa fa-times-circle-o'></i> fa-times-circle-o
                </div>
                <div className='htlfndr-fa-icons col-md-3 col-sm-4 col-xs-6'>
                  <i className='fa fa-tint'></i> fa-tint
                </div>
                <div className='htlfndr-fa-icons col-md-3 col-sm-4 col-xs-6'>
                  <i className='fa fa-toggle-down'></i>
                  fa-toggle-down <span className='text-muted'>(alias)</span>
                </div>
                <div className='htlfndr-fa-icons col-md-3 col-sm-4 col-xs-6'>
                  <i className='fa fa-toggle-left'></i>
                  fa-toggle-left <span className='text-muted'>(alias)</span>
                </div>
                <div className='htlfndr-fa-icons col-md-3 col-sm-4 col-xs-6'>
                  <i className='fa fa-toggle-off'></i>
                  fa-toggle-off
                </div>
                <div className='htlfndr-fa-icons col-md-3 col-sm-4 col-xs-6'>
                  <i className='fa fa-toggle-on'></i>
                  fa-toggle-on
                </div>
                <div className='htlfndr-fa-icons col-md-3 col-sm-4 col-xs-6'>
                  <i className='fa fa-toggle-right'></i>
                  fa-toggle-right <span className='text-muted'>(alias)</span>
                </div>
                <div className='htlfndr-fa-icons col-md-3 col-sm-4 col-xs-6'>
                  <i className='fa fa-toggle-up'></i>
                  fa-toggle-up <span className='text-muted'>(alias)</span>
                </div>
                <div className='htlfndr-fa-icons col-md-3 col-sm-4 col-xs-6'>
                  <i className='fa fa-trademark'></i>
                  fa-trademark
                </div>
                <div className='htlfndr-fa-icons col-md-3 col-sm-4 col-xs-6'>
                  <i className='fa fa-trash'></i>
                  fa-trash
                </div>
                <div className='htlfndr-fa-icons col-md-3 col-sm-4 col-xs-6'>
                  <i className='fa fa-trash-o'></i>
                  fa-trash-o
                </div>
                <div className='htlfndr-fa-icons col-md-3 col-sm-4 col-xs-6'>
                  <i className='fa fa-tree'></i> fa-tree
                </div>
                <div className='htlfndr-fa-icons col-md-3 col-sm-4 col-xs-6'>
                  <i className='fa fa-trello'></i>
                  fa-trello
                </div>
                <div className='htlfndr-fa-icons col-md-3 col-sm-4 col-xs-6'>
                  <i className='fa fa-tripadvisor'></i>
                  fa-tripadvisor
                </div>
                <div className='htlfndr-fa-icons col-md-3 col-sm-4 col-xs-6'>
                  <i className='fa fa-trophy'></i>
                  fa-trophy
                </div>
                <div className='htlfndr-fa-icons col-md-3 col-sm-4 col-xs-6'>
                  <i className='fa fa-truck'></i>
                  fa-truck
                </div>
                <div className='htlfndr-fa-icons col-md-3 col-sm-4 col-xs-6'>
                  <i className='fa fa-try'></i> fa-try
                </div>
                <div className='htlfndr-fa-icons col-md-3 col-sm-4 col-xs-6'>
                  <i className='fa fa-tty'></i> fa-tty
                </div>
                <div className='htlfndr-fa-icons col-md-3 col-sm-4 col-xs-6'>
                  <i className='fa fa-tumblr'></i>
                  fa-tumblr
                </div>
                <div className='htlfndr-fa-icons col-md-3 col-sm-4 col-xs-6'>
                  <i className='fa fa-tumblr-square'></i>
                  fa-tumblr-square
                </div>
                <div className='htlfndr-fa-icons col-md-3 col-sm-4 col-xs-6'>
                  <i className='fa fa-turkish-lira'></i>
                  fa-turkish-lira <span className='text-muted'>(alias)</span>
                </div>
                <div className='htlfndr-fa-icons col-md-3 col-sm-4 col-xs-6'>
                  <i className='fa fa-tv'></i> fa-tv
                  <span className='text-muted'>(alias)</span>
                </div>
                <div className='htlfndr-fa-icons col-md-3 col-sm-4 col-xs-6'>
                  <i className='fa fa-twitch'></i>
                  fa-twitch
                </div>
                <div className='htlfndr-fa-icons col-md-3 col-sm-4 col-xs-6'>
                  <i className='fa fa-twitter'></i>
                  fa-twitter
                </div>
                <div className='htlfndr-fa-icons col-md-3 col-sm-4 col-xs-6'>
                  <i className='fa fa-twitter-square'></i> fa-twitter-square
                </div>
                <div className='htlfndr-fa-icons col-md-3 col-sm-4 col-xs-6'>
                  <i className='fa fa-umbrella'></i>
                  fa-umbrella
                </div>
                <div className='htlfndr-fa-icons col-md-3 col-sm-4 col-xs-6'>
                  <i className='fa fa-university'></i>
                  fa-university
                </div>
                <div className='htlfndr-fa-icons col-md-3 col-sm-4 col-xs-6'>
                  <i className='fa fa-underline'></i>
                  fa-underline
                </div>
                <div className='htlfndr-fa-icons col-md-3 col-sm-4 col-xs-6'>
                  <i className='fa fa-undo'></i> fa-undo
                </div>
                <div className='htlfndr-fa-icons col-md-3 col-sm-4 col-xs-6'>
                  <i className='fa fa-unlink'></i>
                  fa-unlink <span className='text-muted'>(alias)</span>
                </div>
                <div className='htlfndr-fa-icons col-md-3 col-sm-4 col-xs-6'>
                  <i className='fa fa-unlock'></i>
                  fa-unlock
                </div>
                <div className='htlfndr-fa-icons col-md-3 col-sm-4 col-xs-6'>
                  <i className='fa fa-unlock-alt'></i>
                  fa-unlock-alt
                </div>
                <div className='htlfndr-fa-icons col-md-3 col-sm-4 col-xs-6'>
                  <i className='fa fa-unsorted'></i>
                  fa-unsorted <span className='text-muted'>(alias)</span>
                </div>
                <div className='htlfndr-fa-icons col-md-3 col-sm-4 col-xs-6'>
                  <i className='fa fa-upload'></i>
                  fa-upload
                </div>
                <div className='htlfndr-fa-icons col-md-3 col-sm-4 col-xs-6'>
                  <i className='fa fa-usb'></i> fa-usb
                </div>
                <div className='htlfndr-fa-icons col-md-3 col-sm-4 col-xs-6'>
                  <i className='fa fa-usd'></i> fa-usd
                </div>
                <div className='htlfndr-fa-icons col-md-3 col-sm-4 col-xs-6'>
                  <i className='fa fa-user'></i> fa-user
                </div>
                <div className='htlfndr-fa-icons col-md-3 col-sm-4 col-xs-6'>
                  <i className='fa fa-user-md'></i>
                  fa-user-md
                </div>
                <div className='htlfndr-fa-icons col-md-3 col-sm-4 col-xs-6'>
                  <i className='fa fa-user-plus'></i>
                  fa-user-plus
                </div>
                <div className='htlfndr-fa-icons col-md-3 col-sm-4 col-xs-6'>
                  <i className='fa fa-user-secret'></i>
                  fa-user-secret
                </div>
                <div className='htlfndr-fa-icons col-md-3 col-sm-4 col-xs-6'>
                  <i className='fa fa-user-times'></i>
                  fa-user-times
                </div>
                <div className='htlfndr-fa-icons col-md-3 col-sm-4 col-xs-6'>
                  <i className='fa fa-users'></i>
                  fa-users
                </div>
                <div className='htlfndr-fa-icons col-md-3 col-sm-4 col-xs-6'>
                  <i className='fa fa-viacoin'></i>
                  fa-viacoin
                </div>
                <div className='htlfndr-fa-icons col-md-3 col-sm-4 col-xs-6'>
                  <i className='fa fa-video-camera'></i>
                  fa-video-camera
                </div>
                <div className='htlfndr-fa-icons col-md-3 col-sm-4 col-xs-6'>
                  <i className='fa fa-vimeo'></i>
                  fa-vimeo
                </div>
                <div className='htlfndr-fa-icons col-md-3 col-sm-4 col-xs-6'>
                  <i className='fa fa-vimeo-square'></i>
                  fa-vimeo-square
                </div>
                <div className='htlfndr-fa-icons col-md-3 col-sm-4 col-xs-6'>
                  <i className='fa fa-vine'></i> fa-vine
                </div>
                <div className='htlfndr-fa-icons col-md-3 col-sm-4 col-xs-6'>
                  <i className='fa fa-volume-down'></i>
                  fa-volume-down
                </div>
                <div className='htlfndr-fa-icons col-md-3 col-sm-4 col-xs-6'>
                  <i className='fa fa-volume-off'></i>
                  fa-volume-off
                </div>
                <div className='htlfndr-fa-icons col-md-3 col-sm-4 col-xs-6'>
                  <i className='fa fa-volume-up'></i>
                  fa-volume-up
                </div>
                <div className='htlfndr-fa-icons col-md-3 col-sm-4 col-xs-6'>
                  <i className='fa fa-vk'></i> fa-vk
                </div>
                <div className='htlfndr-fa-icons col-md-3 col-sm-4 col-xs-6'>
                  <i className='fa fa-warning'></i>
                  fa-warning <span className='text-muted'>(alias)</span>
                </div>
                <div className='htlfndr-fa-icons col-md-3 col-sm-4 col-xs-6'>
                  <i className='fa fa-wechat'></i>
                  fa-wechat <span className='text-muted'>(alias)</span>
                </div>
                <div className='htlfndr-fa-icons col-md-3 col-sm-4 col-xs-6'>
                  <i className='fa fa-weibo'></i>
                  fa-weibo
                </div>
                <div className='htlfndr-fa-icons col-md-3 col-sm-4 col-xs-6'>
                  <i className='fa fa-weixin'></i>
                  fa-weixin
                </div>
                <div className='htlfndr-fa-icons col-md-3 col-sm-4 col-xs-6'>
                  <i className='fa fa-wifi'></i> fa-wifi
                </div>
                <div className='htlfndr-fa-icons col-md-3 col-sm-4 col-xs-6'>
                  <i className='fa fa-wikipedia-w'></i>
                  fa-wikipedia-w
                </div>
                <div className='htlfndr-fa-icons col-md-3 col-sm-4 col-xs-6'>
                  <i className='fa fa-windows'></i>
                  fa-windows
                </div>
                <div className='htlfndr-fa-icons col-md-3 col-sm-4 col-xs-6'>
                  <i className='fa fa-wordpress'></i>
                  fa-wordpress
                </div>
                <div className='htlfndr-fa-icons col-md-3 col-sm-4 col-xs-6'>
                  <i className='fa fa-whatsapp'></i>
                  fa-whatsapp
                </div>
                <div className='htlfndr-fa-icons col-md-3 col-sm-4 col-xs-6'>
                  <i className='fa fa-wheelchair'></i>
                  fa-wheelchair
                </div>
                <div className='htlfndr-fa-icons col-md-3 col-sm-4 col-xs-6'>
                  <i className='fa fa-won'></i> fa-won
                  <span className='text-muted'>(alias)</span>
                </div>
                <div className='htlfndr-fa-icons col-md-3 col-sm-4 col-xs-6'>
                  <i className='fa fa-wrench'></i>
                  fa-wrench
                </div>
                <div className='htlfndr-fa-icons col-md-3 col-sm-4 col-xs-6'>
                  <i className='fa fa-xing'></i> fa-xing
                </div>
                <div className='htlfndr-fa-icons col-md-3 col-sm-4 col-xs-6'>
                  <i className='fa fa-xing-square'></i>
                  fa-xing-square
                </div>
                <div className='htlfndr-fa-icons col-md-3 col-sm-4 col-xs-6'>
                  <i className='fa fa-yahoo'></i>
                  fa-yahoo
                </div>
                <div className='htlfndr-fa-icons col-md-3 col-sm-4 col-xs-6'>
                  <i className='fa fa-yc'></i> fa-yc
                  <span className='text-muted'>(alias)</span>
                </div>
                <div className='htlfndr-fa-icons col-md-3 col-sm-4 col-xs-6'>
                  <i className='fa fa-yc-square'></i>
                  fa-yc-square <span className='text-muted'>(alias)</span>
                </div>
                <div className='htlfndr-fa-icons col-md-3 col-sm-4 col-xs-6'>
                  <i className='fa fa-yelp'></i> fa-yelp
                </div>
                <div className='htlfndr-fa-icons col-md-3 col-sm-4 col-xs-6'>
                  <i className='fa fa-yen'></i> fa-yen
                  <span className='text-muted'>(alias)</span>
                </div>
                <div className='htlfndr-fa-icons col-md-3 col-sm-4 col-xs-6'>
                  <i className='fa fa-youtube'></i>
                  fa-youtube
                </div>
                <div className='htlfndr-fa-icons col-md-3 col-sm-4 col-xs-6'>
                  <i className='fa fa-youtube-play'></i>
                  fa-youtube-play
                </div>
                <div className='htlfndr-fa-icons col-md-3 col-sm-4 col-xs-6'>
                  <i className='fa fa-youtube-square'></i> fa-youtube-square
                </div>
              </div>
            </div>
          </main>
          <aside
            id='htlfndr-right-sidebar'
            className='col-sm-12 col-md-3 col-lg-3 htlfndr-sidebar htlfndr-sidebar-in-right'
            role='complementary'
          >
            <div className='htlfndr-menu_elements'>
              <div
                className='htlfndr-elements-tab collapsed'
                data-target='#typography'
                data-toggle='collapse'
              >
                Typography <i className='caret'></i>
              </div>
              <ul id='typography' className='collapse'>
                <li>
                  <Link to='#htlfndr-headers'>Headers</Link>
                </li>
                <li>
                  <Link to='#htlfndr-par'>Paragraph</Link>
                </li>
                <li>
                  <Link to='#htlfndr-big-par'>Big Paragraph</Link>
                </li>
                <li>
                  <Link to='#htlfndr-small-par'>Small Paragraph</Link>
                </li>
                <li>
                  <Link to='#htlfndr-blockquote'>Blockquote</Link>
                </li>
                <li>
                  <Link to='#htlfndr-tag'>Code Tag</Link>
                </li>
                <li>
                  <Link to='#htlfndr-pre-tag'>Preformatted Tag</Link>
                </li>
                <li>
                  <Link to='#htlfndr-tables'>Tables</Link>
                </li>
              </ul>
              <div
                className='htlfndr-elements-tab collapsed'
                data-target='#elements'
                data-toggle='collapse'
              >
                Elements
                <i className='caret'></i>
              </div>
              <ul id='elements' className='collapse'>
                <li>
                  <Link to='#htlfndr-but'>Buttons</Link>
                </li>
                <li>
                  <Link to='#htlfndr-but-icon'>Buttons with Icons</Link>
                </li>
                <li>
                  <Link to='#htlfndr-alerts'>Alerts</Link>
                </li>
                <li>
                  <Link to='#htlfndr-pag'>Paginations</Link>
                </li>
              </ul>
              <div
                className='htlfndr-elements-tab collapsed'
                data-target='#forms'
                data-toggle='collapse'
              >
                Forms <i className='caret'></i>
              </div>
              <ul id='forms' className='collapse'>
                <li>
                  <Link to='#htlfndr-inputs'>Text Inputs</Link>
                </li>
                <li>
                  <Link to='#htlfndr-tabs'>Tabs</Link>
                </li>
                <li>
                  <Link to='#htlfndr-adv-but'>
                    Advanced checkboxes and radios
                  </Link>
                </li>
                <li>
                  <Link to='#htlfndr-slider'>Range slider</Link>
                </li>
              </ul>
              <div className='htlfndr-elements-tab'>
                <Link to='#htlfndr-icons'>Icons</Link>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  )
}

export default Elements
