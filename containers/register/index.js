import React , {Component}from 'react'
import styled from 'styled-components/native'
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
    Logo,
} from '../../components/registerComponents'
import {
  StatusBar,
  Platform
} from 'react-native'
class Register extends Component {
  render () {
    return (
      <MainContainer>
        <StatusBar
          hidden = {Platform === 'ios' ? false : true }
          backgroundColor='#ff5722'
          barStyle='light-content'
          setTranslucent
        />
        <UpContainer>
          <Img source = {require('../../assets/img/signin_backg.png')} />
        </UpContainer>
        <CenterContainer>
          <StyledInput label = 'Nombre de usuario'/>
          <StyledInput label = 'Correo electronico' />
          <StyledInput label = 'Contraseña' type = 'password' secure = {true} />
          <StyledInput label = 'Confirmar Contraseña' type = 'password' secure = {true}/>
        </CenterContainer>
        <DownContainer>
          <Button text = 'ACEPTAR'/>
        </DownContainer>
      </MainContainer>
    )
  }
}

export default Register
