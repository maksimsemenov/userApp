import React, { PropTypes, Component } from 'react'
import { browserHistory } from 'react-router'
import './Edit.css'

class Edit extends Component {
  constructor(props) {
    super(props)
    this.onSave = this._onSave.bind(this)
    this.onNameChange = this._onNameChange.bind(this)
    this.onDescChange = this._onDescChange.bind(this)
    this.state = {
      name: this.props.name,
      desc: this.props.desc
    }
  }

  _onSave() {
    console.log(this.state.name, this.state.desc)
    this.props.onSave({
      id: this.props.id,
      name: this.state.name,
      desc: this.state.desc
    })
    browserHistory.push('/')
  }
  _onNameChange(e) {
    const name = e.target.value
    this.setState({ name })
  }
  _onDescChange(e) {
    const desc = e.target.value
    this.setState({ desc })
  }

  render() {
    const { name, desc } = this.state
    return (
      <div className='edit'>
        <h1 className='edit__header'>{name ? `Edit ${name}` : 'Create New User'}</h1>
        <div className='edit__group'>
          <label className='edit__label' htmlFor='name'>Full Name</label>
          <input id='name' className='edit__textfield' type='text' value={name} onChange={this.onNameChange} placeholder='Full Name' />
        </div>
        <div className='edit__group'>
          <label className='edit__label' htmlFor='desc'>Professional Description</label>
          <textarea className='edit__textfield' rows={4} value={desc} onChange={this.onDescChange} placeholder='Professional Description' />
        </div>
        <div className='edit__footer'>
          <button className='button button--confirm' onClick={this.onSave}>Save</button>
          <button className='button button--cancel' onClick={() => browserHistory.push('/')}>Cancel</button>
        </div>
      </div>
    )
  }
}

Edit.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string,
  desc: PropTypes.string,
  onSave: PropTypes.func.isRequired,
}

export default Edit
