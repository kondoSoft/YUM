import React from 'react'
import styled from 'styled-components/native'
import {
  StyledInput,
  Button,
} from '../components'

const UpContainer = styled.View`
  flex: 1;
`
const CenterContainer = styled.View`
  flex: 1;
  justify-content: flex-start;
  align-items: center;
  padding-top: 50px;
`
const DownContainer = styled.View`
  flex: 1;
  justify-content: flex-start;
  align-items: center;
`
const MainContainer = styled.View`
  flex: 1;
  border-width: 1px;
  border-color: #000;
`
const Img = styled.Image`
  width: 100%;
  height: 100%;
`
const UpText = styled.Text`
  font-size: 13px;
  color: ${(props) => props.color};
  width: 100%;
`
const TextContainer = styled.View`
  width: 90%;
  padding-left: 15px;
  margin-bottom: -10px;
`
const InputContainer = styled.View`
  flex: 1;
  width: 90%;
  max-height: 60px;
  margin: 5px 0 5px 0;
`

const Login = () => (
  <MainContainer>
    <UpContainer>
      <Img source={require('../assets/img/exampleBG.jpg')} />
    </UpContainer>
    <CenterContainer>
      <InputContainer>
        <TextContainer>
          <UpText color='rgb(131,131,131)' >Correo electronico</UpText>
        </TextContainer>
        <StyledInput label='Correo'  secure={false} type='default' /*value={this.state.text} change={this.ChangeText} colorB={this.state.colorB}*/ />
      </InputContainer>
      <InputContainer>
        <StyledInput label='Contraseña' secure={true} type='password' />
        <TextContainer>
          <UpText color='rgb(255,87,34)'>Olvidaste tu contraseña?</UpText>
        </TextContainer>
      </InputContainer>
    </CenterContainer>
    <DownContainer>
      <Button text='ACEPTAR'/>
    </DownContainer>
  </MainContainer>
)
export default Login
