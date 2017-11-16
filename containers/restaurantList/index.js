import React , {Component}from 'react'
import styled from 'styled-components/native'
import {
  SecondaryButton,
  IconEdit,
  PreviewRestaurant,
  MainContainer,
} from '../../components'
import {
  TopContainer,
  BottomContainer,
  ScrollContent,
  TopContainerUp,
  TopContainerUpLeft,
  TopContainerUpRight,
  TopContainerDown,
} from '../../components/restaurantListComponents'

class RestaurantList extends Component {
  render () {
    return (
      <MainContainer>
        <TopContainer>
          <TopContainerUp>
            <TopContainerUpLeft>
            </TopContainerUpLeft>
            <TopContainerUpRight>
              <IconEdit
                name  =  'map-marker'
                size = {25}
              />
              <IconEdit
                name  =  'search'
                size = {25}
              />
            </TopContainerUpRight>
          </TopContainerUp>
          <TopContainerDown>
            <SecondaryButton
              width = '50%'
              text = 'MÀS CERCANOS'
              acolor = 'rgb(255,87,34)'
            />
          </TopContainerDown>
        </TopContainer>
        <BottomContainer>
          <ScrollContent>
            <PreviewRestaurant/>
            <PreviewRestaurant/>
            <PreviewRestaurant/>
            <PreviewRestaurant/>
            <PreviewRestaurant/>
            <PreviewRestaurant/>
          </ScrollContent>
        </BottomContainer>
      </MainContainer>
    )
  }

}

 export default RestaurantList
