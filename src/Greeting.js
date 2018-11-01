import React, { Component } from 'react'

function UserGreeting(props) {
  return <h1>Welcome bacK!</h1>
}

function GuestGreeting(props) {
  return <h1>Please sign up.</h1>
}

export default class Greeting extends Component {
  render() {
    const isLoggedIn = this.props.isLoggedIn
    if (isLoggedIn) {
      return <UserGreeting />
    }
    return <GuestGreeting />
  }
}