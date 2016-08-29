import React, { PropTypes, Component } from 'react'
import { browserHistory } from 'react-router'
import { v4 } from 'node-uuid'
import defaultData from '../../defaultData'
import Header from '../Header'
import UserList from '../UserList'
import User from '../User'
import Edit from '../Edit'
import Footer from '../Footer'
import Delete from '../Delete'
import './App.css'


const handleEditUserClick = (id) => browserHistory.push(`/edit/${id}`)
const handleDeleteUserClick = (id) => browserHistory.push(`/delete/${id}`)
const handleAddUserClick = (id) => browserHistory.push('/add')

class App extends Component {
  constructor() {
    super()
    this.state = {
      users: defaultData
    }
    this.deleteUser = this._deleteUser.bind(this)
    this.user = this._user.bind(this)
    this.saveUser = this._saveUser.bind(this)
  }

  _deleteUser(id) {
    const { users } = this.state
    this.setState({
      users: users.filter(user => user.id !== id)
    })
    browserHistory.push('/')
  }
  _user(id) {
    return this.state.users.filter(user => user.id === id)[0]
  }
  _saveUser(user) {
    const users = this.state.users
    const existingUser = users.filter(u => u.id === user.id)[0]

    if (existingUser) {
      const index = users.indexOf(existingUser)
      this.setState({
        users: [...users.slice(0, index), user, ...users.slice(index + 1)]
      })
    } else {
      this.setState({
        users: [...users, user]
      })
    }
    browserHistory.push('/')
  }
  render() {
    const users = this.state.users
    const { action, id } = this.props.params

    if ((action === 'edit' && id) || action === 'add') {
      return (
        <div className='app'>
          <Header name={id ? this.user(id).name : ''} />
          <Edit
            id={id || v4()}
            name={id ? this.user(id).name : ''}
            desc={id ? this.user(id).desc : ''}
            onSave={this.saveUser}
          />
          <Footer />
        </div>
      )
    }

    return (
      <div className='app'>
        <Header />
        <UserList addUser={handleAddUserClick}>
          {users.map(user => (
            <User
              key={user.id}
              id={user.id}
              name={user.name}
              desc={user.desc}
              editUser={handleEditUserClick}
              deleteUser={handleDeleteUserClick}
            />
          ))}
        </UserList>
        <Footer />
        {action === 'delete' && id ?
          <Delete
            name={this.user(id).name}
            onDelete={() => this.deleteUser(id)}
          /> :
          null
        }
      </div>
    )

  }
}

App.propTypes = {
  id: PropTypes.number
}

export default App
