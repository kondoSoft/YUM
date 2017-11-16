import styled from 'styled-components/native'
import React from 'react'
import {
  Button,
  SecondaryButton,
} from '../../components'
const HomeContainer = styled.View`
  flex: 1;
  display: flex;
  justify-content: center;
  z-index: 2;
  width: 100%;
  align-items: center;
`
const BackgroundImage = styled.Image`
  z-index: -1;
  width: 100%;
  height: 100%;
  position: absolute;
`
const UpContainer = styled.View`
  flex: 3;
  align-items: center;
  justify-content: center;
`
const DownContainer = styled.View`
  flex:2;
  width: 100%;
`
const DownSubContainerUp = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`
const DownSubContainerDown = styled.View`
  flex: 3;
  flex-direction: row;
`
const LeftContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`
const RightContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`
const WhiteText = styled.Text`
  color: #fff;
  text-align: center;
`
const Logo = styled.Image`
  width: 100px;
  height: 100px;
`
const Home = () => (
  <HomeContainer>
    <BackgroundImage source={require('../../assets/img/exampleBG.jpg')}/>
    <UpContainer>
      <Logo source={require('../../assets/img/status_button.png')}/>
    </UpContainer>
    <DownContainer>
      <DownSubContainerUp>
        <Button text='COMIENZA AHORA'/>
      </DownSubContainerUp>
      <DownSubContainerDown>
        <LeftContainer>
          <WhiteText>Ya tienes cuenta?</WhiteText>
          <SecondaryButton text='INICIA SESIÓN' acolor='#fff'/>
        </LeftContainer>
        <RightContainer>
          <WhiteText>Inicia con</WhiteText>
          <SecondaryButton text='FACEBOOK' Icon='facebook' acolor='#fff'/>
        </RightContainer>
      </DownSubContainerDown>
    </DownContainer>
  </HomeContainer>
)
export default Home
