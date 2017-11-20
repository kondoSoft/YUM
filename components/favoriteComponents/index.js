import styled from 'styled-components/native'
import React from 'react'

const TextGray = styled.Text`
  font-size: 20px;
  color: #c7c7cc;
  text-align: center;
  width: 70%;
`
const   CenterContainer = styled.View`
  height: 100%;
  width: 100%;
  flex: 1;
  align-items: center;
  ${(props)=> props.justify && 'justify-content:'+ props.justify};
`
const Img = styled.Image`
  width: 150px;
  height: 150px;
`

export {
  Img,
  TextGray,
  CenterContainer,
}
