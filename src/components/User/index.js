import React, { PropTypes } from 'react'
import './User.css'

const User = ({ id, name, desc, editUser, deleteUser }) => (
  <div className='user'>
    <div className='user__name'>{name}</div>
    <div className='user__desc'>{desc}</div>
    <button className='user__edit' onClick={() => editUser(id)}>Edit</button>
    <button className='user__delete' onClick={() => deleteUser(id)}>Delete</button>
  </div>
)

User.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  desc: PropTypes.string,
  editUser: PropTypes.func.isRequired,
  deleteUser: PropTypes.func.isRequired,
}

export default User
