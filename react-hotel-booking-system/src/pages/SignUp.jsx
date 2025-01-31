import { Component } from 'react'
import { Link } from 'react-router-dom'

export class SignUp extends Component {
  render() {
    return (
        <div>
            {/* <div id="htlfndr-sing-up">
        <div className="htlfndr-content-card">
            <div className="htlfndr-card-title clearfix">
                <h2 className="pull-left">Sing up</h2>
            </div>
            <form id="htlfndr-sing-up-form" method="post">
                <div className="row">
                    <div className="col-md-6">
                        <h4>first name</h4> <input id="htlfndr-sing-up-name" className="htlfndr-input" type="text"
                            name="htlfndr-sing-up-name" />
                    </div>
                    <div className="col-md-6">
                        <h4>last name</h4> <input id="htlfndr-sing-up-last-name" className="htlfndr-input" type="text"
                            name="htlfndr-sing-up-last-name" />
                    </div>
                </div>
                <h4>E-mail adress</h4> <input id="htlfndr-sing-up-email" className="htlfndr-input" type="text"
                    name="htlfndr-sing-up-email" />
                <h4>Password</h4> <input id="htlfndr-sing-up-pass" className="htlfndr-input" type="text"
                    name="htlfndr-sing-up-pass" />
                <h4>Confirm Password</h4> <input id="htlfndr-sing-up-pass-conf" className="htlfndr-input" type="text"
                    name="htlfndr-sing-up-pass-conf" />
                <div className="clearfix"> <span>Have an Account? <Link data-target="#htlfndr-sing-in" data-toggle="modal" to="#">
                            <span>Sing in</span> </Link> </span> <input type="submit" value="Sing up" className="pull-right" />
                </div>
            </form>
        </div>
    </div> */}
<section className="" >
  <div id='htlfndr-sing-up'>
  <div className='htlfndr-content-card'>
    <div className='htlfndr-card-title clearfix'>
      <h2 className='pull-left'>Sing up</h2>
    </div>
    <form id='htlfndr-sing-up-form' method='post'>
      <div className='row'>
        <div className='col-md-6'>
          <h4>first name</h4>{' '}
          <input
            id='htlfndr-sing-up-name'
            className='htlfndr-input'
            type='text'
            name='htlfndr-sing-up-name'
          />
        </div>
        <div className='col-md-6'>
          <h4>last name</h4>{' '}
          <input
            id='htlfndr-sing-up-last-name'
            className='htlfndr-input'
            type='text'
            name='htlfndr-sing-up-last-name'
          />
        </div>
      </div>
      <h4>E-mail adress</h4>{' '}
      <input
        id='htlfndr-sing-up-email'
        className='htlfndr-input'
        type='text'
        name='htlfndr-sing-up-email'
      />
      <h4>Password</h4>{' '}
      <input
        id='htlfndr-sing-up-pass'
        className='htlfndr-input'
        type='text'
        name='htlfndr-sing-up-pass'
      />
      <h4>Confirm Password</h4>{' '}
      <input
        id='htlfndr-sing-up-pass-conf'
        className='htlfndr-input'
        type='text'
        name='htlfndr-sing-up-pass-conf'
      />
      <div className='clearfix'>
        {' '}
        <span>
          Have an Account?{' '}
          <Link to='/sign-in'>
            <span>Sing in</span>{' '}
          </Link>{' '}
        </span>{' '}
        <input type='submit' value='Sing up' className='pull-right' />
      </div>
    </form>
  </div>
</div>

</section>
      </div>
    )
  }
}

export default SignUp