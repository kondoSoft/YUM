import styled from 'styled-components/native'
import React from 'react'
import {
  CircleImage,
  Description,
  StarIcon,
  DeliverTime,
  MinimunPrice,
  IconEdit,
} from './index'

const MainContainer = styled.TouchableOpacity`
  width: 95%;
  height: 120px;
  display: flex;
  flex-direction: row;
  border-style: solid;
  border-bottom-color: rgb(131,131,131);
  border-bottom-width: 1px;
  padding-bottom: 10px;
  justify-content: center;
  align-items: center;
  `
const LeftContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`
const RightContainer = styled.View`
  flex: 3;
  padding-left: 4px;
`
const RightUpContainer =  styled.View`
  flex: 2;
  padding-top: 10px;
  flex-direction: row;
  justify-content: space-around;
`
const RightDownContainer = styled.View`
  flex: 3;
  flex-direction: row;
`
const RightDownContainerLeft = styled.View`
  flex: 1;
`
const RightDownContainerRight = styled.View`
  flex: 1;
  justify-content: flex-end;
  padding-bottom: 5px;
`
const RightDownContainerLeftDown = styled.View`
  flex: 1;
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
          margin = '10px'
        />
        <IconEdit
          name = 'heart'
          justify = 'flex-end'
          align = 'flex-start'
          size = {20}
        />
      </RightUpContainer>
      <RightDownContainer>
        <RightDownContainerLeft>
          <DeliverTime
            text = '30 min. aprox'
          />
          <MinimunPrice
            text = '$120.00 mín.'
          />
        </RightDownContainerLeft>
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
