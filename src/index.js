import React from 'react'
import ReactDOM from 'react-dom'
import Hello from './react_component'

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Hello />,
    document.getElementById('app')
  )
})
