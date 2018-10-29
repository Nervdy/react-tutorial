import React from 'react'
import ReactDom from 'react-dom'
import './index.css'

function formatName(user) {
  return user.firstName + ' ' + user.lastName
}

const user = {
  firstName: 'Harper',
  lastName: 'Perez'
}

const element = (
  <h1 data-a="123" className={user}>
    Hello, {formatName(user)}
  </h1>
)

ReactDom.render(
  element,
  document.getElementById('root')
)