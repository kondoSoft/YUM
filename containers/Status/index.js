import React, {Component} from 'react'
import {
    Dimenions,
    Text,
    View
} from 'react-native'
import {
    ScreenContainer,
    ArrowDown,
    RestaurantInfo,
    MotorcycleInfo,
    Image,
    RestaurantData,
    MotorcycleData,
    CircleImage,
    PhoneMessage,
    Motorcycle,
    Hr,
    StatusContainer,
    StatusCheck,
    Check,
    TextStatus,
    Status
} from '../../components'
import {
  MapView
} from 'expo'
import Icon from 'react-native-vector-icons/FontAwesome'

export default class StatusScreen extends Component {
  render () {
    return (
      <ScreenContainer>
        <MapView
          style={{width: '100%', height: 200 }}
          initialRegion={{
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421
          }}
        />
        <ArrowDown>
          <Icon name='caret-down' size={30} color={'#F9381F'} />
        </ArrowDown>
        <RestaurantInfo>
          <CircleImage size={60} source={require('../../assets/img/status_button.png')} />
          <RestaurantData>
            <Text>Los Danzantes</Text>
          </RestaurantData>
          <PhoneMessage>
            <Icon name='phone' size={25} color={'#F9381F'} />
            <Icon name='commenting' size={25} color={'#F9381F'} />
          </PhoneMessage>
        </RestaurantInfo>
        <Hr color={'#C7C7CC'} />
        <MotorcycleInfo>
          <CircleImage size={60} source={require('../../assets/img/status_button.png')} />
          <MotorcycleData>
            <Text>Jorge Velásquez</Text>
            <Motorcycle>Italika Blanca 2W45JV</Motorcycle>
          </MotorcycleData>
          <PhoneMessage>
            <Icon name='phone' size={25} color={'#F9381F'} />
            <Icon name='commenting' size={25} color={'#F9381F'} />
          </PhoneMessage>
        </MotorcycleInfo>
        <Hr />
        <StatusContainer>
          <StatusCheck>
            <Check>
              <Icon name='check-circle-o' size={30} color={'#F9381F'} />
            </Check>
            <TextStatus>
              <Text style={{fontSize: 18}}>Pedido Recibido</Text>
            </TextStatus>
          </StatusCheck>
          <StatusCheck>
            <Check>
              <Icon name='check-circle-o' size={30} color={'#F9381F'} />
            </Check>
            <TextStatus>
              <Text style={{fontSize: 18}}>Comida Lista</Text>
            </TextStatus>
          </StatusCheck>
          <StatusCheck>
            <Status />
          </StatusCheck>
          <StatusCheck>
            <Check>
              <Icon name='check-circle-o' size={30} color={'#F9381F'} />
            </Check>
            <TextStatus>
              <Text style={{fontSize: 18}}>Tu pedido ha llegado</Text>
            </TextStatus>
          </StatusCheck>
        </StatusContainer>
      </ScreenContainer>
    )
  }
}
