import { useEffect, useState } from 'react'
import { useNavigate, useLocation, Link } from 'react-router-dom'
import ApiService from '../services/ApiService.js'
import './Auth.css'
import PropTypes from 'prop-types'

const Login = ({ setIsLoggedIn }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const navigate = useNavigate()
  const location = useLocation()

  
const getQueryParam = param => {
  return new URLSearchParams(location.search).get(param)
}

const from = decodeURIComponent(getQueryParam('from') || '/')

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location])

    const handleRegisterClick = () => {
  navigate(`/register?from=${from}`, { state: { from } })
}

  const handleSubmit = async e => {
    e.preventDefault()

    if (!email || !password) {
      setError('Please fill in all fields.')
      setTimeout(() => setError(''), 30000)
      return
    }

    try {
      const response = await ApiService.loginUser({ email, password })
      if (response.statusCode === 200) {
        localStorage.setItem('token', response.token)
        localStorage.setItem('role', response.role)
        setIsLoggedIn(true)
        navigate(from, { replace: true })
      }
    } catch (error) {
      setError(error.response?.data?.message || error.message)
      setTimeout(() => setError(''), 30000)
    }
  }

  return (
    <div className='auth-container'>
      <h2>Login</h2>
      {error && <p className='error-message'>{error}</p>}
      <form onSubmit={handleSubmit}>
        <div className='form-group'>
          <label>Email: </label>
          <input
            type='email'
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
          />
        </div>
        <div className='form-group'>
          <label>Password: </label>
          <input
            type='password'
            value={password}
            onChange={e => setPassword(e.target.value)}
            required
          />
        </div>
        <button type='submit'>Login</button>
      </form>

      <p className='register-link'>
        Don&apos;t have an account? <Link onClick={handleRegisterClick}>Register</Link>
      </p>
    </div>
  )
}
Login.propTypes = {
  setIsLoggedIn: PropTypes.func.isRequired
}
export default Login
