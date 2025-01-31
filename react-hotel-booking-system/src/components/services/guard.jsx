import { Navigate, useLocation } from 'react-router-dom'
import ApiService from './ApiService'
import PropTypes from 'prop-types'
import React from 'react'

export const ProtectedRoute = ({ component: Component, ...rest }) => {
  const location = useLocation()

  return ApiService.isAuthenticated() ? (
    React.createElement(Component, rest)
  ) : (
    <>
      <Navigate to='/login' replace state={{ from: location }} />
    </>
  )
}

ProtectedRoute.propTypes = {
  component: PropTypes.elementType.isRequired
}

export const CustomerRoute = ({ component: Component, ...rest }) => {
  const location = useLocation()

  return ApiService.isCustomer() ? (
    React.createElement(Component, rest)
  ) : (
    <>
      <Navigate to='/login' replace state={{ from: location }} />
    </>
  )
}
CustomerRoute.propTypes = {
  component: PropTypes.elementType.isRequired
}

export const AdminRoute = ({ component: Component, ...rest }) => {
  const location = useLocation()

  return ApiService.isAdmin() ? (
    React.createElement(Component, rest)
  ) : (
    <>
      <Navigate to='/login' replace state={{ from: location }} />
    </>
  )
}
AdminRoute.propTypes = {
  component: PropTypes.elementType.isRequired
}
