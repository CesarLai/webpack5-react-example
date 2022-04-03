import React from 'react'
import ReactDOM from 'react-dom'

import App from './App'

import '@/styles/global.css'

if (module.hot) {
  module.hot.accept()
}

ReactDOM.render(<App />, document.getElementById('cesarlai-app'))
