import React from 'react'
import styled from 'styled-components/native'
import {
  IconEdit,
  StyledInput,
}
from '../index'

const MainContainer =  styled.View`
  display: flex;
  justify-content: center;
  height: 70px;
  width: 100%;
  margin-bottom: 45px;
`
const Label = styled.TouchableOpacity`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 80%;
  margin-left: ${(props) => props.view === true ? '12px': '-15px'};
`
const LabelText = styled.Text`
  font-size: ${(props) => props.view === true ? '10px' : '15px'};
  color: ${(props) => props.view === true ? 'rgb(131,131,131)' : 'rgb(255,87,34)'};
  margin-left: ${(props) => props.view === true ? '0': '-10px'};
  `
const ExtraText = styled.Text`
  font-size: 10px;
  color: rgb(131,131,131);
  margin-right: 60px;
`

const Options = (props) => (
  <MainContainer>
    <Label view = {props.view} onPress = {props.hide}>
      <IconEdit
        display = {props.view}
        name = 'plus'
        size = {20}
        justify = 'center'
      />
      <LabelText view = {props.view}>
        Añadir indicaciones
      </LabelText>
      <ExtraText>
        (Opcional)
      </ExtraText>
    </Label>
    <StyledInput />
  </MainContainer>
)
export default Options
