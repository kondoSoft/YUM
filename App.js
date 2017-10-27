import React from 'react'
import { Text, View } from 'react-native'
import {
  Button,
  Wrapper,
  SecondaryButton,
} from './components'

export default class App extends React.Component {
  render () {
    return (
      <Wrapper>
        <Button>COMIENZA AHORA</Button>
        <SecondaryButton text='INICIAR SESION'/>
        <SecondaryButton text='FACEBOOK' Icon='facebook'/>
      </Wrapper>
    )
  }
}
