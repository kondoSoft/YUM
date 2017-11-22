import React, {Component} from 'react'
import styled from 'styled-components/native'
import {
  StatusBar,
  Platform
} from 'react-native'
import {
  SecondaryButton,
  IconEdit,
  PreviewRestaurant,
  MainContainer
} from '../../components'
import {
  TopContainer,
  BottomContainer,
  ScrollContent,
  TopContainerUp,
  TopContainerUpLeft,
  TopContainerUpRight,
  TopContainerDown
} from '../../components/restaurantListComponents'

class RestaurantList extends Component {
  render () {
    const {navigate} = this.props.navigation
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
            <SecondaryButton
              width='50%'
              text='MÁS CERCANOS'
              acolor='rgb(255,87,34)'
            />
          </TopContainerDown>
        </TopContainer>
        <BottomContainer>
          <ScrollContent>
            <PreviewRestaurant onPress={() => navigate('Menu')} />
            <PreviewRestaurant />
            <PreviewRestaurant />
            <PreviewRestaurant />
            <PreviewRestaurant />
            <PreviewRestaurant />
          </ScrollContent>
        </BottomContainer>
      </MainContainer>
    )
  }
}

export default RestaurantList
