import React, { Component } from 'react'

export default class Toggle extends Component {
  constructor(props) {
    super(props)
    console.log(props)
    console.log(props === this.props)
    this.state = {isToggleOn: true}
  }

  handleClick(...a) {
    console.log(a)
    this.setState((state) => ({
      isToggleOn: !state.isToggleOn
    }))
  }

  render() {
    return (
      <button  {...this.props} onClick={this.handleClick.bind(this, '123')}>
        {this.state.isToggleOn ? 'ON' : 'OFF'}
      </button>
    )
  }
}