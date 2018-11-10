import React from 'react'

const yell = (PassedComponent) => 
               ({ children, ...props }) => <PassedComponent {...props}> {children.toUpperCase()}! </PassedComponent> 

const Title = (props) => <h1>{props.children}</h1> 

const AngryTitle = yell(Title)
export default AngryTitle