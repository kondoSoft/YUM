import React from 'react'
import { Text, View } from 'react-native'
import {
  Button,
  Wrapper
} from './components'

export default class App extends React.Component {
  render () {
    console.log(Button)
    return (
      <Wrapper>
        <Button>COMIENZA AHORA</Button>
      </Wrapper>
    )
  }
}
