import React from 'react'
import styled from 'styled-components/native'
import {
  IconEdit,
  Button,
  Selector,
  Options,
} from '../components'

const MainContainer = styled.View`
  display: flex;
  width: 100%;
  height: 100%;
`
const TopContainer = styled.View`
  flex: 2;
`
const TopContainerUp = styled.View`
  flex: 1;
  padding: 10px;
  border-style: solid;
  border-bottom-color: rgb(131,131,131);
  border-bottom-width: 2px;
`
const TopContainerDown =  styled.View`
  flex: 4;
`
const BottomContainer = styled.View`
  flex: 3;
  margin: 0 10px 0 10px;
`
const BottomContainerUp = styled.View`
  flex: 1;
`
const BottomContainerCenter = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`
const BottomContainerDown = styled.View`
  flex: 3;
  justify-content: center;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  margin-top: 15px;
`
const FoodImage = styled.Image`
  width: 100%;
  height: 100%;
`
const StyledText = styled.Text`
  font-size: 25px;
  border-style: solid;
  border-bottom-color: rgb(255,87,34);
  border-bottom-width: 2px;
`
const Price = styled.Text`
  font-size: 25px;
  flex: 1;
  flex-direction: row;
  align-items: center;
  text-align: right;
  margin-top: 5px;
`
const FoodDetail = styled.Text`
  font-size: 15px;
  text-align: justify;
  margin: 5px 0 10px 0;
`
const DetailFood = (props) => (
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
          source = {require('../assets/img/restaurant.jpg')}
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
        decrement = {props.decrement}
        order = {props.state.order}
        increment = {props.increment}
      />
        <Price>{props.state.Total}</Price>
      </BottomContainerCenter>
      <BottomContainerDown>
        <Options
          view = {props.state.view}
          hide = {props.hide}
        />
        <Button
          text='AÑADIR A LA BOLSA'
          Icon='shopping-bag'
        />
      </BottomContainerDown>
    </BottomContainer>
  </MainContainer>
)
export default DetailFood
