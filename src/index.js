import React from 'react'
import ReactDom from 'react-dom'
import styled from 'styled-components'

import Toggle from './Toggle'
import MyButton from './MyButton'
import LoginControl from './LoginControl'
import WarningPage from './WarningPage'
import Blog from './Blog'
import { NameForm, EssayForm, FlavorForm } from './FormComp'
import Calculator from './Temperature'
import { AngryTitle, ReverseButton, ChildrenReverse } from './HigherOrderComponent'


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
        <h1>Hello, World!</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
        <p>{this.state.counter}</p>
        <button onClick={this.tick}>tick</button>
        <br />
        <Toggle></Toggle>
        <MyButton 
          onClick={() => this.setState((state) => ({isLoggedIn: !state.isLoggedIn}))}
          borderRadius="6px"
          primary={true}>
          primary
        </MyButton>
        <MyButton as={Toggle}></MyButton>
        <h1 children={"H1 Children"}>
          H1 Component
        </h1>
      </div>
    )
  }
}


const PageContaner = styled.div`
  position: fixed;
  display: inline-block;
  width: 50%;
  height: 100%;
  margin: 0;
  box-sizing: border-box;
  padding: 10px 3em;
  border: 2px dashed palevioletred;
  overflow: auto;
`
const PageContanerRight = ChildrenReverse(
  styled(PageContaner)`
    margin-left: 50%;
  `
)

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      showTable: false
    }
  }

  FilterableProductTable = null

  handleShowTableChange(event) {    
    if (!this.state.showTable && !this.FilterableProductTable) {
      import(/* webpackChunkName: "FilterableProductTable" */ './FilterableProductTable').then((module) => {
        this.FilterableProductTable = module.default
        
        this.setState(state => {
          return {showTable: true}
        })
      })
    } else {
      this.setState(state => {
        return {showTable: !state.showTable}
      })
    }

  }

  shouldComponentUpdate() {
    if (this.FilterableProductTable == null) return false
    return true
  }
  
  
  render() {
    let FilterableProductTable = this.FilterableProductTable
    if (!this.state.showTable) FilterableProductTable = null
    
    return (
      <div>
        <PageContaner>
          <div>
            <Clock />
            <h1>--------------</h1>
            <LoginControl />
            <h1>--------------</h1>
            <WarningPage />
            <h1>--------------</h1>
            {Blog}
          </div>
        </PageContaner>
        <PageContanerRight>
          <NameForm />
          <EssayForm />
          <FlavorForm test={[1,2,3]} />
          <h1>--------------</h1>
          <Calculator />
          <h1>--------------</h1>
          <MyButton onClick={this.handleShowTableChange.bind(this)}>showTable</MyButton>
          {FilterableProductTable}
          <h1>--------------</h1>
          <AngryTitle className="asd">Whatever</AngryTitle>
          <ReverseButton>ReverseButton</ReverseButton>
        </PageContanerRight>
      </div>
    )
  }
}

ReactDom.render(
  <App />,
  document.getElementById('root')
)