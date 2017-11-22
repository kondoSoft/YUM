import React, {Component} from 'react'
import {
  MainContainer,
  ViewHistorial,
  Scroll
} from '../../components'
import {
  TextContainer,
  RawText
} from '../../components/headerTitle'
import {
  StatusBar,
  Platform
} from 'react-native'
class Historial extends Component {
  render () {
    return (
      <MainContainer>
        <StatusBar
          hidden={Platform.OS !== 'ios'}
          backgroundColor='#ff5722'
          barStyle='light-content'
          setTranslucent />
        <TextContainer>
          <RawText>Recientes</RawText>
        </TextContainer>
        <Scroll>
          <ViewHistorial />
          <ViewHistorial />
          <ViewHistorial />
          <ViewHistorial />
          <ViewHistorial />
          <ViewHistorial />
          <ViewHistorial />
        </Scroll>
      </MainContainer>
    )
  }
}
export default Historial
