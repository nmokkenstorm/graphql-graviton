import React from 'react'
import ReactDOM from 'react-dom'
import { App } from './App'
import './index.css'

const target = document.getElementById('react-root');

target && ReactDOM.render(<App/>, target)
