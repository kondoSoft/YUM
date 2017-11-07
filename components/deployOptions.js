import React from 'react'
import styled from 'styled-components/native'
import {
  IconEdit,
}
from './index'

const MainContainer =  styled.View`
  display: flex;
  flex-direction: row;
  border:1px solid black;
  justify-content: center;
`
const Label = styled.TouchableOpacity`
  display: flex;
  flex-direction: row;
  align-items: center;
  flex: 1;
`
const LabelText = styled.Text`
  font-size: 15px;
  color: rgb(255,87,34);
`
const ExtraText = styled.Text`
  font-size: 10px;
  color: rgb(131,131,131);
`
const TextInput = styled.TextInput`
  border-style: solid;
  border-bottom-color: rgb(131,131,131);
  border-bottom-width: 1px;
  padding-bottom: 10px;
`
const Options = (props) => (
  <MainContainer>
    <Label view = {props.state}>
      <IconEdit
        display = {() => props.state == true ? 'none':'flex' }
        name = 'plus'
        size = {20}
      />
      <LabelText view = {props.state}>
        Añadir indicaciones
      </LabelText>
      <ExtraText>
        (Opcional)
      </ExtraText>
      <TextInput/>
    </Label>
  </MainContainer>
)
export default Options
