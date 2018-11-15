import React, { Suspense } from 'react'
import ReactDom from 'react-dom'
import styled from 'styled-components'

import MyButton from './MyButton'
import LoginControl from './LoginControl'
import WarningPage from './WarningPage'
import Blog from './Blog'
import { NameForm, EssayForm, FlavorForm } from './FormComp'
import { AngryTitle, ReverseButton, ChildrenReverse } from './HigherOrderComponent'

const Toggle = React.lazy(() => import(/* webpackChunkName: "Toggle" */ './Toggle'))
const Calculator = React.lazy(() => import(/* webpackChunkName: "Temperature" */ './Temperature'))

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
        <Suspense fallback={<div>Loadingiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii</div>}>
          <Toggle></Toggle>
        </Suspense>
        <MyButton 
          onClick={() => this.setState((state) => ({isLoggedIn: !state.isLoggedIn}))}
          borderRadius="6px"
          primary={true}>
          primary
        </MyButton>
        {/* <MyButton as={Toggle}></MyButton> */}
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

const ThemeContext = React.createContext('primary')
console.log(ThemeContext)

class App extends React.Component {
  FilterableProductTable = null

  static contextType = ThemeContext

  constructor(props) {
    super(props)
    this.state = {
      showTable: false
    }
  }

  handleShowTableChange() {    
    if (!this.state.showTable && !this.FilterableProductTable) {
      import(/* webpackChunkName: "FilterableProductTable" */ './FilterableProductTable').then((module) => {
        this.FilterableProductTable = module.default
        
        this.setState(() => {
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
    console.log(this.context)
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
          <Suspense fallback={<div>Loadingiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii</div>}>
            <Calculator />
          </Suspense>
          <h1>--------------</h1>
          <MyButton onClick={this.handleShowTableChange.bind(this)}>showTable</MyButton>
          {FilterableProductTable}
          <h1>--------------</h1>
          <AngryTitle className="AngryTitle">Whatever</AngryTitle>
          <ReverseButton primary={this.context && true}>ReverseButton</ReverseButton>
        </PageContanerRight>
      </div>
    )
  }
}



ReactDom.render(
  (
    <ThemeContext.Provider value="normal">
      <App />
    </ThemeContext.Provider>
  ),
  document.getElementById('root')
)