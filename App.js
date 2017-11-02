import React from 'react'
import { Text, View } from 'react-native'
import {
  Button,
  Wrapper,
  SecondaryButton,
  StyledInput,
  Status,
} from './components'

export default class App extends React.Component {
  constructor(){
    super()
    this.state = {
      text:'',
      colorB:'rgb(131,131,131)'
    }
    this.ChangeText = this.ChangeText.bind(this)
  }
  render () {
    return (
      <Wrapper>
        <Status />
        <Button text='COMIENZA AHORA'/>
        <Button IconSide='check'/>
        <Button text='AÑADIR A LA BOLSA' Icon='shopping-bag'/>
        <Button text='PAGAR ' IconSide='check'/>
        <SecondaryButton text='MÀS CERCANOS' acolor='rgb(255,87,34)'/>
        <SecondaryButton text='INICIAR SESION' acolor='#fff'/>
        <SecondaryButton text='FACEBOOK' Icon='facebook' acolor='#fff'/>
        <StyledInput label='Contraseña' secure={true} type='password' />
        <StyledInput label='Correo'  secure={false} type='default' value={this.state.text} change={this.ChangeText} colorB={this.state.colorB}/>
      </Wrapper>
    )
  }
  ChangeText(e){
    let state = this.state
    state.text = e
    state.colorB = 'rgb(255,87,34)'
    this.setState(state)


  }
}
