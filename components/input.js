import React from 'react'
import styled from 'styled-components/native'

const TextBox = styled.TextInput`
  border-bottom-width: 1px;
  background-color: #fff;
  border-color: 'rgb(131,131,131)';
`

const StyledInput = (props) => (

    <TextBox
      // color = {props.color}
      value = {props.value}
      keyboardType = {props.type}
      secureTextEntry = {props.secure}
      placeholder = {props.label}
      onChangeText={(text) => props.change(text)}

    />
)
export default StyledInput
