import React from 'react'
import styled from 'styled-components/native'
import {
  StyledInput,
  Button,
} from '../components'

const MainContainer = styled.View`
  flex: 1;
`
const UpContainer = styled.View`
  flex: 2;
  justify-content: center;
  align-items: center;
`
const CenterContainer = styled.View`
  padding: 15px;
  justify-content: center;
  flex: 4;
`
const DownContainer = styled.View`
  flex: 3;
  justify-content: center;
  align-items: center;
`
const Img = styled.Image`
  z-index: -1;
  width: 100%;
  height: 100%;
  position: absolute;
`
const Logo = styled.Image `
  height: 60px;
  width: 60px;
`
const Register = () => (
  <MainContainer>
    <UpContainer>
      <Img source = {require('../assets/img/exampleBG.jpg')} />
      <Logo source = {require('../assets/img/status_button.png')} />
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
export default Register
