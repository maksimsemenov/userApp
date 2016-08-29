import React, { PropTypes } from 'react'
import { Link } from 'react-router'

import './Header.css'

const Header = ({ name }) => (
  <header className='header'>
    <Link to='/'>Home</Link>
    {name ? <div className='heade__name'>{name}</div> : null}
  </header>
)

Header.propTypes = {
  name: PropTypes.string
}

export default Header
