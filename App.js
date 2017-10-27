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
        <Text>Ponte pilas</Text>
        <Text>PONTE PILAS.</Text>
        <Text>tranquilo</Text>
      </Wrapper>
    )
  }
}
