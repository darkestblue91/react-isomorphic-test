// @flow

import $ from 'jquery'
import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { APP_NAME } from '../config'
import {
  HOME_PAGE_ROUTE,
  HELLO_PAGE_ROUTE,
  HELLO_ASYNC_PAGE_ROUTE,
  NOT_FOUND_DEMO_PAGE_ROUTE,
} from '../routes'

const handleNavLinkClick = () => {
  $('body').scrollTop(0)
  $('.js-navbar-collapse').collapse('hide')
}

