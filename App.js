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
  Login,
  Register,
  Prueba,
  RestaurantList,
  Menu,
}from './containers'

export default class App extends React.Component {
  constructor(){
    super()
    this.state = {
      text:'',
      colorB:'rgb(131,131,131)',
      order: '01',
    }
    this.ChangeText = this.ChangeText.bind(this)
    this.DecrementNumber = this.DecrementNumber.bind(this)
    this.IncrementNumber = this.IncrementNumber.bind(this)
  }
  render () {
    return (
      <Wrapper>
        {/* <Home/> */}
        {/* <Login/> */}
        <Prueba decrement = {this.DecrementNumber} state = {this.state} increment = {this.IncrementNumber}/>
        {/* <RestaurantList/> */}
        {/* <Menu/> */}
        {/* <SearchInput label='Busca tu direccion' type='default' value={this.state.textSearch} change={this.ChangeText}/>
        <Status />
        <Button IconSide='check'/>
        <Button text='AÑADIR A LA BOLSA' Icon='shopping-bag'/>
        <Button text='PAGAR ' IconSide='check'/>
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

  DecrementNumber(){
    let state = this.state
    let q = state.order
    let quantity = parseInt('10',q)

    if (quantity <= 10  && quantity > 0) {
        let newNumber = quantity - 1
        let stringNumber = '0' + newNumber
        state.order = stringNumber
        this.setState(state)
    }
    else if (quantity > 0 && quantity > 10 ){
      let newNumber = quantity - 1
      state.order = newNumber
      this.setState(state)
    }
  }
  IncrementNumber(){
    let state = this.state
    let q = state.order
    let quantity = parseInt(q)
    if (quantity <= 8 ) {
      let newNumber = quantity + 1
      let stringNumber = '0' + newNumber
      state.order = stringNumber
      this.setState(state)
    }
    else if (quantity >= 9){
      let newNumber = quantity + 1
      state.order = newNumber
      this.setState(state)
    }
  }

}
