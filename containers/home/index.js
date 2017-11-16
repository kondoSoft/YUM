import React , {Component} from 'react'
import {
  Button,
  SecondaryButton
} from '../../components'
import {
  HomeContainer,
  BackgroundImage,
  UpContainer,
  DownContainer,
  DownSubContainerUp,
  DownSubContainerDown,
  LeftContainer,
  RightContainer,
  WhiteText,
  Logo,
} from '../../components/homeComponents'

class Home extends Component{
  render() {
    return(
      <HomeContainer>
        <BackgroundImage source={require('../../assets/img/inicio_backg.png')}/>
        <UpContainer>
          <Logo source={require('../../assets/img/Yum-logo-22.png')}/>
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
  }
}
export default Home
