import React from 'react'
import styled from 'styled-components/native'
import {IconEdit} from './index'

const MainContainer = styled.TouchableOpacity`
  width: 100%;
  height: 40px;
  flex-direction: row;
  display: flex;
  align-items: center;
  justify-content: flex-start;
`
const LeftContainer = styled.View`
  flex: 1;
  flex-direction: row;
  align-items: baseline;
`
const RightContainer = styled.View`
  flex: 4;
  flex-direction: row;
  align-items: baseline;
  justify-content: flex-start;
  margin-left: -40px
`
const DescriptionText = styled.Text`
  font-size: 15px;
  color: rgb(255,87,34);
`
const Add = () => (
  <MainContainer>
    <LeftContainer>
      <IconEdit
        name = 'plus'
        size = {20}
        justify = 'flex-start'
      />
    </LeftContainer>
    <RightContainer>
      <DescriptionText> AGREGAR OTRO PLATILLO </DescriptionText>
    </RightContainer>
  </MainContainer>
)
export default Add
