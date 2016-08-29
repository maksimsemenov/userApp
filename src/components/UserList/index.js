import React, { PropTypes } from 'react'
import './UserList.css'

const UserList = ({ addUser, children }) => (
  <div className='list'>
    <buttom className='button button--confirm' onClick={() => addUser()}>Add User</buttom>
    <div className='list__users'>
      {children}
    </div>
  </div>
)

UserList.propTypes = {
  addUser: PropTypes.func.isRequired
}

export default UserList
