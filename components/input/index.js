import React from 'react'
import styled from 'styled-components/native'
import {Platform} from 'react-native'

const TextBox = styled.TextInput`
  background-color: #fff;
  padding-left: 5px;
  margin: ${(props) => props.withOutMargin ? '0' : '10px' };
  flex: 1;
  ${(props)=> {if (Platform.OS == 'ios') {
    return `
      border-bottom-width: 1px;
      border-color: #FF5722;
    `
      }
    }
  }
`
const StyledInput = (props) => (
    <TextBox
      colorB = {props.colorB}
      value = {props.value}
      keyboardType = {props.type}
      secureTextEntry = {props.secure}
      placeholder = {props.label}
      onChangeText = {(text) => props.change ? props.change(text): ''}
      withOutMargin = {props.withOutMargin}
      selectionColor = {'#ff5722'}
      underlineColorAndroid = {'#FF5722'}
      // onSubmitEditing = {console.log("hola mundo")}
    />
)
export default StyledInput
