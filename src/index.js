import React from 'react'
import ReactDom from 'react-dom'
import './index.css'

import Toggle from './Toggle'
import Greeting from './Greeting'
import MyButton from './MyButton'

class Clock extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      date: new Date(),
      counter: 0,
      isLoggedIn: false
    }
    this.step = 2
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => {
      },
      1000
    )
  }

  componentWillUnmount() {
    clearInterval(this.timerID)
  }

  componentWillUpdate() {
    console.log('componentWillUpdate')
  }

  componentDidUpdate() {
    console.log('componentDidUpdate')
  }

  tick = () => {
    console.log(this)
    this.setState({
      date: new Date()
    })
    console.log('setState date')

    // this.setState((state) => ({counter: this.state.counter + this.step}))
    this.setState({ counter: this.state.counter + this.step })
    console.log('setState 1')
    this.setState((state) => ({ counter: state.counter + this.step }))
    console.log('setState 2')

  }

  render() {
    console.log('render')
    return (
      <div>
        <Greeting isLoggedIn={this.state.isLoggedIn}/>
        <h1>Hello, World!</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
        <p>{this.state.counter}</p>
        <button onClick={this.tick}>tick</button>
        <br />
        <Toggle></Toggle>
        i'm a 
        <MyButton 
          onClick={() => this.setState((state) => ({isLoggedIn: !state.isLoggedIn}))}
          borderRadius="6px"
          primary={true}>
          primary
        </MyButton>
        <MyButton>
          Normal
        </MyButton>
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