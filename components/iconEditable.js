import React from 'react'
import styled from 'styled-components/native'
import Icon from 'react-native-vector-icons/FontAwesome'

const IconContainer = styled.View`
  flex: 1;
  display: ${(props) => props.display ? props.display : 'flex'}
  flex-direction: row;
  justify-content: ${(props) => props.justify ? props.justify : 'center'};
  align-items: ${(props) => props.align ? props.align : 'center'};
  ${(props) => props.cssproperty};
  padding: 1px;
`

const IconEdit = (props) =>(
  <IconContainer display = {props.display} align = {props.align} justify = {props.justify} >
    <Icon
      name = {props.name}
      color = {'rgb(255,87,34)'}
      size = {props.size}
    />
  </IconContainer>
)
export default IconEdit
