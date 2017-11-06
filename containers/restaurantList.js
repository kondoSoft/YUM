import React from 'react'
import styled from 'styled-components/native'
import {
  SecondaryButton,
  IconEdit,
  PreviewRestaurant,
}
from '../components'
const MainContainer =  styled.View`
  flex: 1;
`
const TopContainer =  styled.View`
  margin-top: 10px;
  flex: 1;
`
const BottomContainer =  styled.ScrollView`
  flex:  4;
`
const ScrollContent =  styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`
const TopContainerUp = styled.View`
  flex: 1;
  flex-direction: row;
  border-style: solid;
  border-bottom-width: 2px;
  border-bottom-color: rgba(151,151,151 , 0.25);
`
const TopContainerUpLeft = styled.View`
  flex: 2;
`
const TopContainerUpRight = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: flex-end ;
  align-items: center;
`
const TopContainerDown =  styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  border-style: solid;
  border-bottom-color: rgb(255,87,34);
  border-bottom-width: 2px;
  margin: 0 10px 0 10px;
`
const RestaurantList = () => (
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
 export default RestaurantList
