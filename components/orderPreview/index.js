import React from 'react'
import styled from 'styled-components/native'
import {
  IconEdit,
  Description,
} from '../index'

const MainContainer = styled.View`
  display: flex;
  width: 100%;
  height: 40px;
  justify-content: space-between;
  flex-direction: row;
  margin: 2px 0 2px 0;
`
const LeftContainer = styled.TouchableOpacity`
  flex: 1;
`
const CenterContainer = styled.View`
  flex: 3;
  justify-content: flex-start;
`
const RightContainer = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: flex-end;
  align-items: baseline;
`
const Price = styled.Text`
  font-size: 15px;
`
const PreviewOrder = () =>(
  <MainContainer>
    <LeftContainer>
      <IconEdit
        name = 'times'
        size = {25}
        justify = 'flex-start'
      />
    </LeftContainer>
    <CenterContainer>
      <Description
        height = '40px'
        titleColor = '#000'
        titleText = '02 Tostadas de pollo'
        descriptionText = 'Sin cebolla'
      />
    </CenterContainer>
    <RightContainer>
      <Price>$100.00</Price>
    </RightContainer>
  </MainContainer>
)
export default PreviewOrder
