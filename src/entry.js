import React from 'react'
import ReactDOM from 'react-dom'

import createApp from './createApp'

import '@/styles/global.css'

const app = createApp()

if (module.hot) {
  module.hot.accept()
}

ReactDOM.render(app, document.getElementById('cesarlai-app'))
