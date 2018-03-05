import 'semantic-ui-css/semantic.min.css'
import 'emoji-data-css/files/eo-32-emoji.min.css'

import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import configureStore from './store'

import Layout from './components/Layout'

const store = configureStore({
  route: {
    stage: 'list'
  },
  search: {
    term: ''
  },
  modals: {
    addToken: false
  },
  tokens: []
})

render(
  <Provider store={store}>
    <Layout />
  </Provider>,
  document.getElementById('main')
)
