import React , {Component}from 'react'
import styled from 'styled-components/native'
import {
  IconEdit,
  Button,
  Selector,
  Options,
  MainContainer,
} from '../../components'

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
  FoodDetail,
}from '../../components/detailViewofFoodComponents'

class DetailFood extends Component {
  constructor() {
    super()
    this.state = {
      order: '01',
      View: false,
      Price: '50.00',
      Total: '$50.00',
    }
    this.HideExtras = this.HideExtras.bind(this)
    this.DecrementNumber = this.DecrementNumber.bind(this)
    this.IncrementNumber = this.IncrementNumber.bind(this)
  }
  render() {
    return(
      <MainContainer>
        <TopContainer>
          <TopContainerUp>
            <IconEdit
              name = 'shopping-bag'
              justify = 'flex-end'
              size = {25}
            />
          </TopContainerUp>
          <TopContainerDown>
            <FoodImage
              source = {require('../../assets/img/restaurant.jpg')}
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
            decrement = {this.DecrementNumber}
            order = {this.state.order}
            increment = {this.IncrementNumber}
          />
            <Price>{this.state.Total}</Price>
          </BottomContainerCenter>
          <BottomContainerDown>
            <Options
              view = {this.state.view}
              hide = {this.HideExtras}
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
