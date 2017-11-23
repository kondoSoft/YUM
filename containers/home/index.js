import React, {Component} from 'react'
import {
  StatusBar,
  Platform,
  Text
} from 'react-native'
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
  Logo
} from '../../components/homeComponents'

class Home extends Component {
  constructor () {
    super()
    this.state = {
      preventRegister: 0,
      preventLogin: 0,
      preventLoginFb: 0
    }
    this.goToRegister = this.goToRegister.bind(this)
  }
  componentDidMount () {
    // setTimeout(() => {
    //   this.button.measure((x, y, width, height, pageX, pageY) => console.log(`x: ${x}, y: ${y}, width: ${width}, height: ${height}, pageX: ${pageX}, pageY: ${pageY}`))
    // }, 1000)
    // this.button.setNativeProps({
    //   style: {
    //     position: 'absolute',
    //     top: 0,
    //     left: 0
    //   }
    // })
  }
  render () {
    const {navigate} = this.props.navigation
    return (
      <HomeContainer>
        <StatusBar
          backgroundColor='#ff5722'
          barStyle='light-content'
          setTranslucent
        />
        <BackgroundImage source={require('../../assets/img/inicio_backg.png')} />
        <UpContainer>
          <Logo source={require('../../assets/img/Yum-logo-22.png')} />
        </UpContainer>
        <DownContainer>
          <DownSubContainerUp>
            <Button text='COMIENZA AHORA' onPress={() => this.goToRegister()} />
          </DownSubContainerUp>
          <DownSubContainerDown>
            <LeftContainer>
              <WhiteText>Ya tienes cuenta?</WhiteText>
              <SecondaryButton text='INICIA SESIÓN' acolor='#fff' onPress={() => navigate('Login')} />
            </LeftContainer>
            <RightContainer>
              <WhiteText>Inicia con</WhiteText>
              <SecondaryButton text='FACEBOOK' Icon='facebook' acolor='#fff' />
            </RightContainer>
          </DownSubContainerDown>
        </DownContainer>
        {/* <Text ref={ref => this.button = ref} >Hello world</Text> */}
      </HomeContainer>
    )
  }
  // Function to prevent more than one press on register button and prevent mounted n numbers of register container
  goToRegister () {
    const {navigate} = this.props.navigation
    if (this.state.preventRegister === 0) {
      this.setState({
        preventRegister: 1
      }, () => {
        navigate('Register')
      })
      setTimeout(() => {
        this.setState({
          preventRegister: 0
        })
      }, 1000)
    } else {
      console.log('prevent onPress when one time has pressed')
    }
  }
}
export default Home
