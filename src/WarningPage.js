import React, { Component } from 'react'
import styled from 'styled-components'
import MyButton from './MyButton'


const WarnContainer = styled.div`
  display: inline-block;
  padding: 10px;
  background: palevioletred;
  border-radius: 3px;
  box-shadow: 3px 3px 3px palevioletred;
  color: white;
  font-weight: bolder;
  text-align: center;
  margin: 1em;
`

class WarningBanner extends Component {
  constructor(props) {
    super(props)
    this.state = {
      textNum: 1,
      numbers: [1, 2, 3, 4, 5]
    }
    this.increment = this.increment.bind(this)
  }

  WarnButton = styled(MyButton)`
    color: white;
    border-color: white;
  `

  increment() {
    this.setState(state => ({
      textNum: state.textNum + 1
    }))
  }

  incrementNumber(index) {
    this.setState((state) => {
      let numbers = state.numbers.slice()
      numbers[index] += 1
      return { numbers }
    })
  }

  renderNumbersList() {
    const WarnButton = this.WarnButton
    return this.state.numbers.map((i, index) =>
      <WarnButton 
        key={index.toString()}
        onClick={() => this.incrementNumber(index)}>
        {i}
      </WarnButton>
    )
  }

  render() {
    if (!this.props.warn) return null

    const WarnButton = this.WarnButton
    const numbersList = this.renderNumbersList()
    console.log(numbersList)
    return (
      <WarnContainer className="warning">
        Warning!
        <WarnButton onClick={this.increment}>increment {this.state.textNum}</WarnButton>
        {numbersList}
      </WarnContainer>
    )
  }
}
console.dir(WarningBanner)
// function WarningBanner(props) {
//   if (!props.warn) {
//     return null
//   }

//   return (
//     <WarnContainer className="warning">
//       Warning!
//     </WarnContainer>
//   )
// }

export default class WarningPage extends Component {
  constructor(props) {
    super(props)
    this.state = { showWarning: true }
    this.handleToggleClick = this.handleToggleClick.bind(this)
  }

  handleToggleClick() {
    this.setState(state => ({
      showWarning: !state.showWarning
    }))
  }

  render() {
    return (
      <div>
        <WarningBanner warn={this.state.showWarning} />
        <MyButton onClick={this.handleToggleClick}>
          {this.state.showWarning ? 'Hide' : 'Show'}
        </MyButton>
      </div>
    )
  }
}