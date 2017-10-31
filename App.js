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
      colorB:'rgb(131,131,131)'
    }
    this.ChangeText = this.ChangeText.bind(this)
  }
  render () {
    console.log(this.state.colorB);
    return (
      <Wrapper>
        <Button>COMIENZA AHORA</Button>
        <SecondaryButton text='INICIAR SESION'/>
        <SecondaryButton text='FACEBOOK' Icon='facebook'/>
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
