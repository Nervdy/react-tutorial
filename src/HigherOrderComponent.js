import React, { Children } from 'react'
import MyButton from './MyButton';

const yell = (PassedComponent) =>
  ({ children, ...props }) => <PassedComponent {...props}> {children.toUpperCase()}! </PassedComponent>

const Title = (props) => <h1>{props.children}</h1>

export const AngryTitle = yell(Title)



const reverse = (PassedComponent) =>
  ({ children, ...props }) => {
    console.log(children)
    console.log(props)
    console.log(PassedComponent)
    return <PassedComponent {...props}> {children.split('').reverse().join('')} </PassedComponent>
  }

export const ReverseButton = reverse(MyButton)


export const ChildrenReverse = (PassedComponent) =>
  ({ children, ...props }) => {
    let childrenArr = Children.toArray(children)
    return <PassedComponent {...props}> {childrenArr.reverse()} </PassedComponent>
  }