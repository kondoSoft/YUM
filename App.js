import React from 'react'
import { Text, View } from 'react-native'
import {
  Button,
  Wrapper,
  SecondaryButton,
  StyledInput,
} from './components'

export default class App extends React.Component {
  constructor(){
    super()
    this.state = {
      text:'',
      color:'rgb(131,131,131)'
    }
    this.ChangeText = this.ChangeText.bind(this)
  }
  render () {
    console.log(this.state.color);
    return (
      <Wrapper>
        <Button>COMIENZA AHORA</Button>
        <SecondaryButton text='INICIAR SESION'/>
        <SecondaryButton text='FACEBOOK' Icon='facebook'/>
        <StyledInput label='contraseña' secure={true} type='email-address'/>
        <StyledInput label='correo'  secure={false} type='default' value={this.state.text} change={this.ChangeText}/>
      </Wrapper>
    )
  }
  ChangeText(e){
    let state = this.state
    state.text = e
    state.color = 'rgb(255,87,34)'
    this.setState(state)


  }
}
