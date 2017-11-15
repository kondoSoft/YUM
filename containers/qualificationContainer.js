import React from 'react'
import styled from 'styled-components/native'
import {
  Button,
  TouchableStars,
  StyledInput,
} from '../components'

const ScrollView = styled.ScrollView`
  display: flex;
  align-items: center;
`

const MainContainer = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;

`
const BackgroundImage = styled.Image`
  z-index: -1;
  width: 100%;
  height: 100%;
  position: absolute;
`
const CenterContainer = styled.View`
  margin-top: 15%;
  display: flex;
  justify-content: center;
  width: 90%;
  height: 80%;
  background-color: #fff;
  border-radius: 10px;
`
const TopContainer = styled.View`
  flex: 1;
  align-items: center;
  justify-content: space-around;
`
const BottomContainer = styled.View`
  flex: 1;
  align-items: center;
  justify-content: space-around;
`
const Logo = styled.Image `
  height: 80px;
  width: 80px;
`
const Text = styled.Text`
  font-size: 22px;
  text-align: center;
  font-weight: 400;
`
const InputContainer = styled.View`
  width: 100%;
  display: flex;
  height: 80px;
`
const TextGray = styled.Text`
  color: #757575;
  font-size: 12px;
  margin-left: 10px;
`
const QualificationService = (props) =>(
    <MainContainer>
      <BackgroundImage source={require('../assets/img/exampleBG.jpg')}/>
      <CenterContainer>
        <TopContainer>
          <Logo source = {require('../assets/img/status_button.png')} />
          <Text> ENTREGA EXITOSA!</Text>
          <TouchableStars  action = {props.action} qualification = {props.state.currentQualification}/>
        </TopContainer>
        <BottomContainer>
          <InputContainer>
            <TextGray>
              Comentarios o sugerencias(Opcional)
            </TextGray>
            <StyledInput/>
          </InputContainer>
          <Button IconSide='check'/>
        </BottomContainer>
      </CenterContainer>
    </MainContainer>
)

export default QualificationService
