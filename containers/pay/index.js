import React, {Component} from 'react'
import {
    Dimensions,
    Animated,
    View,
    Text,
    TouchableOpacity
} from 'react-native'
import {
  ScreenContainer
} from '../../components'
import Icon from 'react-native-vector-icons/FontAwesome'
import styled from 'styled-components/native'

const Total = styled.View`
  width: 90%;
  padding: 15px 0px;
  flex-direction: row;
  justify-content: space-between;
  border-bottom-width: 2px;
  border-color: #FA5900;
`
const TotalText = styled.Text`
  font-size: ${props => props.size ? props.size : '18px'};
  ${props => {
    if (props.fontWeight) {
      return `font-weight: 800;`
    }
  }}
`

const OptionPayment = styled.View`
  margin-top: 20px;
  width: 90%;
  padding: 15px 0px;
`
const Label = styled.Text`
  font-size: 14px;
`
const PaymentButton = styled.TouchableOpacity`
  width: 100%;
  border-radius: 10;
  border-width: 2px;
  border-color: #FA5900;
  padding: 10px 15px;
  margin-top: 10px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`

const height = Dimensions.get('window').height
const width = Dimensions.get('window').width

class ModalPayment extends Component {
  constructor (props) {
    super(props)
    this.state = {
      animated: new Animated.Value(-300),
      height: 0
    }
    this.showPickerModal = this.showPickerModal.bind(this)
  }
  showPickerModal () {
    Animated.spring(this.state.animated, {
      toValue: 0,
      duration: 500
    }).start()
  }
  render () {
    return (
      <Animated.View style={{position: 'absolute', bottom: this.state.animated, backgroundColor: 'red', height: 300, width: '100%', zIndex: 3}}>
        <View>
          <View>
            <TouchableOpacity>
              <Text>buttons</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text>buttons</Text>
            </TouchableOpacity>
          </View>
          <View>
            <Text>Hello picker</Text>
          </View>
        </View>
      </Animated.View>
    )
  }
}

export default class Pay extends Component {
  constructor (props) {
    super(props)
    this.state = {
      typePayment: 'Tarjeta de Crédito/Débito'
    }
    this.changeTypePayment = this.changeTypePayment.bind(this)
  }
  render () {
    return (
      <ScreenContainer height={height} width={width}>
        <ModalPayment ref={ref => this._modalPicker = ref} />
        <Total>
          <TotalText>TOTAL</TotalText>
          <TotalText>$255.00</TotalText>
        </Total>
        <OptionPayment>
          <Label>Opciones de pago</Label>
          <PaymentButton onPress={this.changeTypePayment}>
            <TotalText size={14} fontWeight>{this.state.typePayment}</TotalText>
            <Icon name='caret-down' color={'rgb(255,155,37)'} size={20} />
          </PaymentButton>
        </OptionPayment>
      </ScreenContainer>
    )
  }
  changeTypePayment () {
    this._modalPicker.showPickerModal()
    // this.setState({
    //   typePayment: 'OXXO'
    // })
  }
}
