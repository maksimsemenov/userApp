import React, { PropTypes } from 'react'
import { browserHistory } from 'react-router'
import './Delete.css'

const onCancel = () => browserHistory.push('/')

const Delete = ({ name, onDelete }) => (
  <div className='delete'>
    <div className='delete__dialog'>
      <h2 className='delete__title'>{`Are you sure you want to delete ${name}?`}</h2>
      <div className='delete__footer'>
        <button className='button button--danger' onClick={onDelete}>Delete</button>
        <button className='button button--cancel' onClick={onCancel}>Cancel</button>
      </div>
    </div>
  </div>
)

Delete.propTypes = {
  name: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired
}

export default Delete
