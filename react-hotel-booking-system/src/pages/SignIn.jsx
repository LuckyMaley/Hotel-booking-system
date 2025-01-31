import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const response = await axios.post('http://localhost:8080/api/v1/auth/authenticate', { email, password });
      localStorage.setItem('token', response.data.token);
      localStorage.setItem('user', JSON.stringify(response.data.user));
      console.log("USER:", response.data.user);

      // Get user role from the response
      const userRole = response.data.user.role;
      console.log("ROLE:", userRole)

      // Redirect based on role
      if (userRole === 'ADMIN') {
        navigate('/admin-page');
      } else {
        navigate('/user-page');
      }
      
    } catch (error) {
      console.error('Login failed', error);
      alert('Login failed. Please check your credentials.');
    }
  };

  return (
    <div>
      <div id='htlfndr-sign-in'>
        <div className='htlfndr-content-card'>
          <div className='htlfndr-card-title clearfix'>
            <h2 className='pull-left'>Sign in</h2>
          </div>
          <form id='htlfndr-sign-in-form' onSubmit={handleSubmit}>
            <h4>E-mail address</h4>
            <input
              id='htlfndr-sign-in-email'
              className='htlfndr-input'
              type='email'
              name='email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <h4>Password</h4>
            <input
              id='htlfndr-sign-in-pass'
              className='htlfndr-input'
              type='password'
              name='password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <div className='clearfix'>
              <span>
                Don&apos;t have an account?{' '}
                <Link to='/sign-up'>
                  <span>Sign up</span>
                </Link>
              </span>
              <input type='submit' value='Sign in' className='pull-right' />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
