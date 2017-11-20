import React, {Component} from 'react'
import {
  StatusBar
} from 'react-native'
import {
  StyledInput,
  Button,
  MainContainer,
} from '../../components'
import {
  UpContainer,
  CenterContainer,
  DownContainer,
  Img,
  UpText,
  TextContainer,
  InputContainer,
  Logo,
} from '../../components/loginComponents'
class Login extends Component {
  render(){
    const {navigate} = this.props.navigation
    return (
      <MainContainer>
        <StatusBar
          backgroundColor="#ff5722"
          barStyle="light-content"
          setTranslucent = {true}
        />
        <UpContainer>
          <Img source = {require('../../assets/img/login_backg.png')} />
        </UpContainer>
        <CenterContainer>
          <InputContainer>
            <TextContainer>
              <UpText color = 'rgb(131,131,131)' > Correo electronico </UpText>
            </TextContainer>
            <StyledInput label = 'Correo'  secure = {false} type = 'default' /*value={this.state.text} change={this.ChangeText} colorB={this.state.colorB}*/ />
          </InputContainer>
          <InputContainer>
            <StyledInput label = 'Contraseña' secure = {true} type = 'password' />
            <TextContainer>
              <UpText color = 'rgb(255,87,34)'> Olvidaste tu contraseña? </UpText>
            </TextContainer>
          </InputContainer>
        </CenterContainer>
        <DownContainer>
          <Button text = 'ACEPTAR' onPress={() => navigate('Map')}/>
        </DownContainer>
      </MainContainer>
    )
  }
}
export default Login
