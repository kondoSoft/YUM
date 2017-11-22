import React, {Component} from 'react'
import {
  Text,
  Dimensions,
  StatusBar,
  Platform
} from 'react-native'
import {
  ScreenContainer,
  AvatarName,
  UserInfo,
  Info,
  InfoText,
  PayMethod,
  Method,
  MethodTitle,
  MethodInfo,
  MethodText
} from '../../components'
import Icon from 'react-native-vector-icons/Foundation'

const height = Dimensions.get('window').height
const width = Dimensions.get('window').width

export default class UserDetails extends Component {
  render () {
    return (
      <ScreenContainer height={height} width={width}>
        <StatusBar
          hidden={Platform.OS !== 'ios'}
          backgroundColor='#ff5722'
          barStyle='light-content'
          setTranslucent
        />
        <AvatarName>
          <Icon name='torsos-all' color={'#FB9234'} size={60} />
          <Text style={{fontSize: 20}}>Luis Manuel Juarez Flores</Text>
        </AvatarName>
        <UserInfo>
          <Info>
            <Icon name='mail' color={'#FA5332'} size={25} />
            <InfoText>luismanueljf@gmail.com</InfoText>
          </Info>
          <Info>
            <Icon name='key' color={'#FA5332'} size={25} />
            <InfoText>*******</InfoText>
          </Info>
          <Info>
            <Icon name='telephone' color={'#FA5332'} size={25} />
            <InfoText>(993) 3648303</InfoText>
          </Info>
        </UserInfo>
        <PayMethod>
          <Method>
            <MethodTitle>
              Métodos de Pago
            </MethodTitle>
          </Method>
          <MethodInfo>
            <Info>
              <Icon name='credit-card' color={'#FA5332'} size={30} />
              <InfoText>Tarjeta de Crédito/Débito</InfoText>
            </Info>
            <Info>
              <MethodText>Número de tarjeta</MethodText>
              <InfoText>**** **** **** 0000</InfoText>
            </Info>
            <Info>
              <MethodText>Fecha de nacimiento</MethodText>
              <InfoText>MM/AA</InfoText>
            </Info>
            <Info>
              <MethodText>Código de seguridad</MethodText>
              <InfoText>***</InfoText>
            </Info>
          </MethodInfo>
        </PayMethod>
      </ScreenContainer>
    )
  }
}
