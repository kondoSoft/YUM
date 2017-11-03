import React from 'react'
import styled from 'styled-components/native'
import Icon from 'react-native-vector-icons/FontAwesome'

const MainContainer = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`
const Time = styled.Text`
  font-size: 12px;
`
const DeliverTime = (props) => (
  <MainContainer>
      <Icon
        name = 'clock-o'
        color={'rgb(255,155,37)'}
        size={20}
      />
    <Time> {props.text} </Time>
  </MainContainer>
)

export default DeliverTime
