import React from 'react'
import styled from 'styled-components/native'

const TextBox = styled.TextInput`
  border-bottom-width: 1px;
  background-color: #fff;
  border-Color: ${props => props.colorB ? props.colorB :'rgb(131,131,131)'};
  padding-left: 5px;
  margin: 10px;
`

const StyledInput = (props) => (

    <TextBox
      colorB = {props.colorB}
      value = {props.value}
      keyboardType = {props.type}
      secureTextEntry = {props.secure}
      placeholder = {props.label}
      onChangeText={(text) => props.change ? props.change(text): ''}

    />
)
export default StyledInput
