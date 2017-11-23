import React, {Component} from 'react'
import styled from 'styled-components/native'
import {
  ScreenContainer,
  SearchInput,
  Button
} from '../../components'
import {
  Dimensions,
  Text,
  View,
  StatusBar,
  Platform
} from 'react-native'
import {
  MapView
} from 'expo'

const height = Dimensions.get('window').height
const width = Dimensions.get('window').width

export default class SearchMap extends Component {
  render () {
    const {navigate} = this.props.navigation
    return (
      <ScreenContainer ref={ref => this.scrollContainer = ref} width={width} height='100%' style={{alignItems: 'center', justifyContent: 'space-between'}}>
        <StatusBar
          hidden={Platform.OS !== 'ios'}
          backgroundColor='#ff5722'
          barStyle='light-content'
          setTranslucent
        />
        <MapView
          style={{width: '100%', height: '100%', zIndex: 0, position: 'absolute'}}
          initialRegion={{
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421
          }}
        />
        <SearchInput style={{marginTop: 30, zIndex: 4}} placeholder='Elige tu dirección' />
        <Button style={{marginBottom: 30, zIndex: 4}} text='Continuar' onPress={() => navigate('Restaurants')} />
      </ScreenContainer>
    )
  }
}
