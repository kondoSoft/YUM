import React from 'react'
import styled from 'styled-components/native'
import Icon from 'react-native-vector-icons/FontAwesome'

const MainContainer = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`
const Price = styled.Text`
  font-size: 12px;
`
const MinimunPrice = (props) => (
  <MainContainer center = {props.center}>
    <Icon
      name = 'tag'
      color={props.color}
      size={20}
    />
    <Price> {props.text} </Price>
  </MainContainer>
)
export default MinimunPrice
