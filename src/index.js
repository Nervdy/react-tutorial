import React from 'react'
import ReactDom from 'react-dom'
import './index.css'

class Clock extends React.Component {
  constructor(props) {
    super(props)
    this.state = {date: new Date()}
  }

  render() {
    console.log(this)
    return (
      <div>
        <h1>Hello, World!</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    )
  }
}

class App extends React.Component {
  render() {
    return (
      <Clock />
    )
  }
}

ReactDom.render(
  <App />,
  document.getElementById('root')
)