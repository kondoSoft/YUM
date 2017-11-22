import React, {Component} from 'react'
import styled from 'styled-components/native'
import {
  StatusBar,
  Platform
} from 'react-native'
import {
  MainContainer,
  Scroll,
  PreviewRestaurant
} from '../../components'
import {
  TextGray,
  CenterContainer,
  Img
} from '../../components/favoriteComponents'

class Favorites extends Component {
  constructor () {
    super()
    this.state = {
      Favorites: {
        name: 'sda'
      },
      Empty: true
    }
    this.CheckEmpty = this.CheckEmpty.bind(this)
    this.CheckEmpty()
  }
  render () {
    return (
      <Scroll>
        <MainContainer>
          <StatusBar
            hidden={Platform !== 'ios'}
            backgroundColor='#ff5722'
            barStyle='light-content'
            setTranslucent />
          {this.state.Empty == true
          ? <CenterContainer justify='center'>
            <Img source={require('../../assets/img/status_button.png')} />
            <TextGray>Aun no tienes restaurantes favoritos</TextGray>
          </CenterContainer>
          : <CenterContainer>
            <PreviewRestaurant />
            <PreviewRestaurant />
            <PreviewRestaurant />
            <PreviewRestaurant />
            <PreviewRestaurant />
            <PreviewRestaurant />
            <PreviewRestaurant />
          </CenterContainer>
        }
        </MainContainer>
      </Scroll>
    )
  }
  CheckEmpty () {
    let state = this.state
    let tam = Object.keys(state.Favorites).length
    if (tam == 0) {
      state.Empty = true
    } else {
      state.Empty = false
    }
    this.setState(state)
  }
}

export default Favorites
