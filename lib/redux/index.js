import { combineReducers, compose, createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { reducer as formReducer } from 'redux-form'

let reduxStore = null

// Create Root Reducer.
const rootReducer = combineReducers({
  form: formReducer
})

const createMiddleware = () => {
  const universalMiddleware = applyMiddleware(thunk)
  return process.browser && window.devToolsExtension
    ? compose(universalMiddleware, window.devToolsExtension())
    : universalMiddleware
}

const getStore = initialState => {
  let store
  if (!process.browser || !reduxStore) {
    const middleware = createMiddleware()
    store = createStore(rootReducer, initialState, middleware)
    if (!process.browser) {
      return store
    }
    reduxStore = store
  }
  return reduxStore
}

export default getStore
