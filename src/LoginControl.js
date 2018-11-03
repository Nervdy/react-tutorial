import React, { Component } from 'react'
import Greeting from './Greeting'
import MyButton from './MyButton'

export default class LoginControl extends Component {
  constructor(props) {
    super(props)
    this.handleLoginClick = this.handleLoginClick.bind(this)
    this.handleLogoutClick = this.handleLogoutClick.bind(this)
    this.state = {
      isLoggedIn: false
    }
  }

  handleLoginClick() {
    this.setState({isLoggedIn: true})
  }

  handleLogoutClick() {
    this.setState({isLoggedIn: false})
  }

  render() {
    const isLoggedIn = this.state.isLoggedIn
    let button

    if (isLoggedIn) {
      button = <MyButton onClick={this.handleLogoutClick}>Logout</MyButton>
    } else {
      button = <MyButton onClick={this.handleLoginClick}>Login</MyButton>
    }

    return (
      <div>
        <Greeting isLoggedIn={isLoggedIn}></Greeting>
        <p>The user is <b>{ isLoggedIn ? 'currently' : 'not' } logged in.</b></p>
        {button}
      </div>
    )
  }
}