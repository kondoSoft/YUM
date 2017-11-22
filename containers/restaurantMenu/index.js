import React, {Component} from 'react'
import styled from 'styled-components/native'
import {
  ViewHeader,
  PreviewFood,
  IconEdit,
  MainContainer
} from '../../components'
import {
  ContainerTop,
  ContainerTopUp,
  ContainerTopDown,
  ContainerTopleft,
  ContainerTopRight,
  ContainerBottom,
  ScrollContent
} from '../../components/restaurantMenuComponents'
import {
  StatusBar,
  Platform
} from 'react-native'

class Menu extends Component {
  render () {
    const {navigate} = this.props.navigation
    return (
      <MainContainer>
        <StatusBar
          hidden = {Platform === 'ios' ? false : true }
          backgroundColor='#ff5722'
          barStyle='light-content'
          setTranslucent
        />
        <ContainerTop>
          <ContainerTopDown>
            <ViewHeader onPress={() => navigate('Restaurant')} />
          </ContainerTopDown>
        </ContainerTop>
        <ContainerBottom>
          <ScrollContent>
            <PreviewFood onPress={() => navigate('DetailFood')} />
            <PreviewFood />
            <PreviewFood />
            <PreviewFood />
            <PreviewFood />
          </ScrollContent>
        </ContainerBottom>
      </MainContainer>
    )
  }
}

export default Menu
