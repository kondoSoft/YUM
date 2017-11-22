import React, {Component} from 'react'
import styled from 'styled-components/native'
import {
  IconEdit,
  Button,
  Selector,
  Options,
  MainContainer
} from '../../components'
import {
  StatusBar,
  Platform
} from 'react-native'
import {
  TopContainer,
  TopContainerUp,
  TopContainerDown,
  BottomContainer,
  BottomContainerUp,
  BottomContainerCenter,
  BottomContainerDown,
  FoodImage,
  StyledText,
  Price,
  FoodDetail
} from '../../components/detailViewofFoodComponents'

class DetailFood extends Component {
  constructor () {
    super()
    this.state = {
      nOrders: 0,
      View: false,
      price: 0.00,
      Total: '$50.00',
      borderC: '#C7C7CC'
    }
    this.HideExtras = this.HideExtras.bind(this)
    this.DecrementNumber = this.DecrementNumber.bind(this)
    this.IncrementNumber = this.IncrementNumber.bind(this)
    this.addOrder = this.addOrder.bind(this)
    this.removeOrder = this.removeOrder.bind(this)
  }
  render () {
    return (
      <MainContainer>
        <StatusBar
          hidden={Platform.OS !== 'ios'}
          backgroundColor='#ff5722'
          barStyle='light-content'
          setTranslucent
        />
        <TopContainer>
          <TopContainerDown>
            <FoodImage
              source={require('../../assets/img/restaurant.jpg')}
            />
          </TopContainerDown>
        </TopContainer>
        <BottomContainer>
          <BottomContainerUp>
            <StyledText>Tostadas de pollo</StyledText>
            <FoodDetail>Orden de 3. Con lechuga, cebolla morada y tomate.</FoodDetail>
          </BottomContainerUp>
          <BottomContainerCenter>
            <Selector
              borderC={this.state.borderC}
              decrement={this.removeOrder}
              order={this.state.nOrders.toString()}
              increment={this.addOrder}
          />
            <Price>{this.state.price.toLocaleString('es-MX', {style: 'currency', 'currency': 'MXN'})}</Price>
          </BottomContainerCenter>
          <BottomContainerDown>
            <Options
              view={this.state.view}
              hide={this.HideExtras}
            />
            <Button
              text='AÑADIR A LA BOLSA'
              Icon='shopping-bag'
            />
          </BottomContainerDown>
        </BottomContainer>
      </MainContainer>
    )
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
  addOrder () {
    this.setState({
      nOrders: this.state.nOrders + 1,
      price: this.state.price + 50,
      borderC: '#FF5722'
    })
  }
  removeOrder () {
    if (this.state.nOrders > 0) {
      this.setState({
        nOrders: this.state.nOrders - 1,
        price: this.state.price - 50
      })
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
}

export default DetailFood
