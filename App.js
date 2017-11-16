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
import {StackApp} from './routes'

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
    this.DecrementNumber = this.DecrementNumber.bind(this)
    this.IncrementNumber = this.IncrementNumber.bind(this)
    this.HideExtras = this.HideExtras.bind(this)
    this.ChangeStars = this.ChangeStars.bind(this)
  }
  render () {
    return (
      <Provider store={store}>
        <StackApp />
      </Provider>
    )
  }
  ChangeText (e) {
    let state = this.state
    state.text = e
    state.colorB = 'rgb(255,87,34)'
    this.setState(state)
  }

  DecrementNumber () {
    let state = this.state
    let q = state.order
    let quantity = parseInt('10', q)
    if (quantity <= 10 && quantity > 0) {
      let newNumber = quantity - 1
      let stringNumber = '0' + newNumber
      state.order = stringNumber
      let price = state.Price
      let total = price * newNumber
      state.Total = '$' + total + '.00'
      this.setState(state)
    } else if (quantity > 0 && quantity > 10) {
      let newNumber = quantity - 1
      state.order = newNumber
      let price = state.Price
      let total = price * newNumber
      state.Total = '$' + total + '.00'
      this.setState(state)
    }
  }
  IncrementNumber () {
    let state = this.state
    let q = state.order
    let quantity = parseInt(q)

    if (quantity <= 8) {
      let newNumber = quantity + 1
      let stringNumber = '0' + newNumber
      state.order = stringNumber
      let price = state.Price
      let total = price * newNumber
      state.Total = '$' + total + '.00'
      this.setState(state)
    } else if (quantity >= 9) {
      let newNumber = quantity + 1
      state.order = newNumber
      let price = state.Price
      let total = price * newNumber
      state.Total = '$' + total + '.00'
      this.setState(state)
    }
  }
  HideExtras () {
    let state = this.state
    if (state.View === false) {
      state.View = true
    } else {
      state.View = false
    }
    this.setState(state)
  }

  ChangeStars (indice) {
    let state = this.state
    state.currentQualification = indice
    this.setState(state)
  }
}
