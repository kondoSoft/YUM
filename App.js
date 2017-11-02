import React from 'react'
import { Text, View } from 'react-native'
import {
  Button,
  Wrapper,
  SecondaryButton,
  StyledInput,
  Status,
  SearchInput,
} from './components'
import{
  Home,
}from './containers'

export default class App extends React.Component {
  constructor(){
    super()
    this.state = {
      text:'',
      colorB:'rgb(131,131,131)',
    }
    this.ChangeText = this.ChangeText.bind(this)
  }
  render () {
    return (
      <Wrapper>
        <Home/>
        {/* <SearchInput label='Busca tu direccion' type='default' value={this.state.textSearch} change={this.ChangeText}/>
        <Status />
        <Button IconSide='check'/>
        <Button text='AÑADIR A LA BOLSA' Icon='shopping-bag'/>
        <Button text='PAGAR ' IconSide='check'/>
        <SecondaryButton text='MÀS CERCANOS' acolor='rgb(255,87,34)'/>
        <StyledInput label='Contraseña' secure={true} type='password' />
        <StyledInput label='Correo'  secure={false} type='default' value={this.state.text} change={this.ChangeText} colorB={this.state.colorB}/> */}
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
