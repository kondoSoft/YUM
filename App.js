import React from 'react'
import { Text, View } from 'react-native'
import {
  Button,
  Wrapper,
  SecondaryButton,
  StyledInput,
  Status,
  SearchInput
} from './components'
import {
  Home,
  Login,
  Register,
  Prueba,
  RestaurantList,
  Menu,
  DetailFood,
  Bag,
  QualificationService
} from './containers'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunkMiddleware from 'redux-thunk'
import logger from 'redux-logger'
import devToolsEnhancer from 'remote-redux-devtools'
import rootReducer from './reducers'

const store = createStore(
    rootReducer,
    devToolsEnhancer(),
    applyMiddleware(
        thunkMiddleware,
        logger
    )
)

export default class App extends React.Component {
  constructor () {
    super()
    this.state = {
      text: '',
      colorB: 'rgb(131,131,131)',
      order: '01',
      View: false,
      Price: '50.00',
      Total: '$50.00',
      currentQualification: 0
    }
    this.ChangeText = this.ChangeText.bind(this)
  }
  render () {
    return (
      <Provider store={store}>
        <QualificationService/>
      </Provider>
    )
  }
  ChangeText (e) {
    let state = this.state
    state.text = e
    state.colorB = 'rgb(255,87,34)'
    this.setState(state)
  }

}
