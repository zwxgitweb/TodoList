import React from 'react'
import { Provider } from 'react-redux'
import { render } from 'react-dom'
import App from './app'
import store from './Redux/store'

const container = document.querySelector('#container');
render(<Provider store={store}><App /></Provider>, container);