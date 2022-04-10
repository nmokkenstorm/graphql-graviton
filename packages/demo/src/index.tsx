import React from 'react'
import ReactDOM from 'react-dom'
import { App } from '@graviton/client'
import './index.css'

const target = document.getElementById('react-root');

target && ReactDOM.render(<App/>, target)
