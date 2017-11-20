import React from 'react'
import styled from 'styled-components/native'
import {
  CircleImage,
  IconEdit,
  StarIcon,
  Description,
  MinimunPrice,
  DeliverTime,
}
from '../index'

const MainContainer =  styled.TouchableOpacity`
width: 95%;
height: 100%;
display: flex;
flex-direction: row;
border-style: solid;
border-bottom-color: rgb(255,87,34);
border-bottom-width: 2px;
padding-bottom: 10px;
justify-content: center;
align-items: center;
`
const ContainerLeft =  styled.View`
  flex: 2;
`
const ContainerRight =  styled.View`
  flex: 4;
  padding-left: 5px;
`
const ContainerRightUp =  styled.View`
  flex: 1;
  justify-content: flex-start;
`
const ContainerRightDown =  styled.View`
  flex: 2;
`
const ContainerRightDownTop = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: space-between;
  padding-left: 4px;
`
const ContainerRightDownBottom =  styled.View`
  flex: 1;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding-left: 5px;
`
const ViewHeader = () => (
  <MainContainer>
    <ContainerLeft>
      <CircleImage
        source = {require('../../assets/img/restaurant.jpg')}
        size = '109px'
      />
    </ContainerLeft>
    <ContainerRight>
      <ContainerRightUp>
        <Description
          titleColor = '#000'
          titleText = 'Los Danzantes'
          descriptionText = 'Comida Mexicana,bar.'
          width = '100%'
          height = '30px'
          margin = '0px'
          size = '20px'
        />
      </ContainerRightUp>
      <ContainerRightDown>
        <ContainerRightDownTop>
          <DeliverTime
            text = '30 min. aprox'
            color = 'rgb(255,87,34)'
          />
          <MinimunPrice
            text = '$120.00'
            color = 'rgb(255,87,34)'
          />
        </ContainerRightDownTop>
        <ContainerRightDownBottom>
          <StarIcon
            qualification = '4.5'
            justify='space-between'
            width='40%'
          />
          <IconEdit
            name = 'heart'
            size = {20}
            justify='flex-end'
          />
        </ContainerRightDownBottom>
      </ContainerRightDown>
    </ContainerRight>
  </MainContainer>
)

export default ViewHeader
