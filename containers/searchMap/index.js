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
  View
} from 'react-native'
import {
  MapView
} from 'expo'

const height = Dimensions.get('window').height
const width = Dimensions.get('window').width

export default class SearchMap extends Component {
  render () {
    return (
      <ScreenContainer width={width} height={(height - 50)}>
        <MapView
          style={{width: '100%', height: (height - 65), alignItems: 'center', justifyContent: 'space-between'}}
          initialRegion={{
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421
          }}
        >
          <SearchInput style={{marginTop: 30}} placeholder='Elige tu dirección' />
          <Button style={{marginBottom: 30}}text='Continuar' />
        </MapView>
      </ScreenContainer>
    )
  }
}
