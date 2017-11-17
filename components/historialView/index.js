import styled from 'styled-components/native'
import React from 'react'
import IconEdit from '../iconEditable'

const MainContainer = styled.View`
  width: 95%;
  height: 90px;
  display: flex;
  flex-direction: row;
  padding: 0 10px 0 10px;
  border-style: solid;
  border-bottom-color: #757575;
  border-bottom-width: 1px;
  padding-bottom: 10px;
  margin: 20px 10px 0 10px;
  justify-content: center;

`
const LeftContainer = styled.View`
  flex: 1;
  height: 100%;
`
const RightContainer = styled.View`
  flex: 1;
  height: 100%;
  flex-direction: row;
`
const LeftTopContainer = styled.View`
  flex: 1;
`
const LeftBottomContainer = styled.View`
  flex: 1;
  flex-direction: row;
`
const RightTopContainer = styled.View`
  flex: 4;
`
const RightBottomContainer = styled.TouchableOpacity`
  flex: 1;
  flex-direction: row;
  align-items: flex-start;
`
const OrangeText = styled.Text`
  font-size: 20px;
  color: #ff5722;
`
const TextGray = styled.Text`
  font-size: 14px;
  color: #757575;
  text-align: right;
`
const TextContainer = styled.View`
  flex: 4;
  flex-direction: row;
  align-items: center;
`
const IconContainer = styled.View`
  flex: 1;
  border: 1px solid #ff5722;
  border-radius: 1000px;
  margin: 3px 1px;
`
const ViewHistorial = () => (
  <MainContainer>
    <LeftContainer>
      <LeftTopContainer>
        <OrangeText>Orden #368</OrangeText>
      </LeftTopContainer>
      <LeftBottomContainer>
        <IconContainer>
          <IconEdit
            name = 'cutlery'
          />
        </IconContainer>
        <TextContainer>
          <TextGray> Los Danzantes</TextGray>
        </TextContainer>
      </LeftBottomContainer>
    </LeftContainer>
    <RightContainer>
      <RightTopContainer>
        <TextGray> Abril 16,2017</TextGray>
        <TextGray> 16:25</TextGray>
      </RightTopContainer>
      <RightBottomContainer>
        <IconEdit
          name = 'times'
          size = {25}
        />
      </RightBottomContainer>
    </RightContainer>
  </MainContainer>
)
export default ViewHistorial
