/* global window */
import { createStore, applyMiddleware, compose } from 'redux'
import { persistStore, autoRehydrate } from 'redux-persist'
import risi from 'redux-immutable-state-invariant'

import reducers from './reducers'

export default function (initialState = {}) {
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
  let middleware = []

  middleware.push(risi())

  const store = createStore(reducers, initialState, composeEnhancers(
    applyMiddleware(...middleware),
    autoRehydrate()
  ))

  persistStore(store, {
    blacklist: ['search', 'modals']
  })

  return store
}
