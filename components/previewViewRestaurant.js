import styled from 'styled-components/native'
import React from 'react'
import {
  CircleImage,
  Description,
  StarIcon,
} from './index'

const MainContainer = styled.View`
  width: 95%;
  height: 100px;
  display: flex;
  flex-direction: row;
  border: 1px solid black;
`
const LeftContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  border: 1px solid black;
`
const RightContainer = styled.View`
  flex: 3;
  border: 1px solid black;
`
const RightUpContainer =  styled.View`
  flex: 1;
  border: 1px solid black;

`
const RightDownContainer = styled.View`
  flex: 1;
  flex-direction: row;
  border: 1px solid black;

`
const RightDownContainerLeft = styled.View`
  flex: 1;
  border: 1px solid black;

`
const RightDownContainerRight = styled.View`
  flex: 1;
  border: 1px solid black;

`
const PreviewRestaurant = () => (
  <MainContainer>
    <LeftContainer>
      <CircleImage
        source = {require('../assets/img/restaurant.jpg')}
      />
    </LeftContainer>
    <RightContainer>
      <RightUpContainer>
        <Description
          titleColor = 'rgb(255,138,2)'
          titleText = 'Los Danzantes'
          descriptionText = 'Comida Mexicana,bar.'
          width = '100%'
          height = '30px'
        />
      </RightUpContainer>
      <RightDownContainer>
        <RightDownContainerLeft></RightDownContainerLeft>
        <RightDownContainerRight>
          <StarIcon
            single
            qualification = '3.5'
          />
        </RightDownContainerRight>

      </RightDownContainer>
    </RightContainer>
  </MainContainer>
)
export default PreviewRestaurant
