import React, {Component} from 'react'
import {
  Platform,
  View,
  Text,
  TouchableOpacity,
  TouchableNativeFeedback
} from 'react-native'
import styled from 'styled-components/native'
import Icon from 'react-native-vector-icons/FontAwesome'

const Container = styled.View`
  flex: 1;
`
const Row = styled.View`
  flex: ${props => props.flex ? props.flex : 1};
  background-color: ${props => props.bgColor ? props.bgColor : '#FFF'};
  margin: ${props => props.margin ? '10px' : '0px'};
  ${props => {
    if (props.spaceAround) {
      return `justify-content: space-around;`
    }
  }};
  ${props => {
    if (props.flexEnd) {
      return `justify-content: flex-end;`
    }
  }}
`
const BackgroundImage = styled.Image`
  width: 100%;
`
const IosButton = styled.TouchableOpacity`
  padding: 20px;
  flex-direction: row;
  align-items: center;
  margin-top: 3px;
  margin-bottom: 3px;
`
const ButtonText = styled.Text`
  font-size: 25px;
  padding-left: 15px;
`
const AndroidButton = styled.TouchableNativeFeedback`
  padding: 20px;
  flex-direction: row;
  align-items: center;
  margin-top: 3px;
  margin-bottom: 3px;
`
const DrawerButton = (props) => {
  if (Platform.OS === 'ios') {
    return (
      <IosButton onPress={props.onPress}>
        {props.children}
      </IosButton>
    )
  } else {
    return (
      <AndroidButton onPress={props.onPress}>
        {props.children}
      </AndroidButton>
    )
  }
}

class Drawer extends Component {
  render () {
    return (
      <Container>
        <View>
          <BackgroundImage source={require('../../assets/img/drawer_backg.png')} />
        </View>
        <Row flex={2} margin spaceAround>
          <DrawerButton onPress={() => this.props.navigation.navigate('Profile')}>
            <Icon name='user' size={25} color={'#FF5722'} />
            <ButtonText>Usuario</ButtonText>
          </DrawerButton>
          <DrawerButton onPress={() => this.props.navigation.navigate('Favorites')}>
            <Icon name='heart' size={25} color={'#FF5722'} />
            <ButtonText>Favoritos</ButtonText>
          </DrawerButton>
          <DrawerButton onPress={() => this.props.navigation.navigate('History')}>
            <Icon name='book' size={25} color={'#FF5722'} />
            <ButtonText>Historial</ButtonText>
          </DrawerButton>
          <DrawerButton>
            <Icon name='file-text-o' size={25} color={'#FF5722'} />
            <ButtonText>Factura</ButtonText>
          </DrawerButton>
        </Row>
        <Row margin flexEnd>
          <DrawerButton>
            <Icon name='sign-out' size={25} color={'#FF5722'} />
            <ButtonText>Cerrar Sesión</ButtonText>
          </DrawerButton>
        </Row>
      </Container>
    )
  }
}

export default Drawer
