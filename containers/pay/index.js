import React, {Component} from 'react'
import {
    Dimensions,
    Animated,
    View,
    Text,
    TouchableOpacity,
    Picker
} from 'react-native'
import {
  ScreenContainer,
  Button
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
  font-size: ${props => props.size ? props.size : '14px'};
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
const CardNumberContainer = styled.View`
  width: 90%;
`
const CardDetails = styled.View`
  width: 90%;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
  margin-top: 20px;
`
const Detail = styled.View`
  width: 45%;
`
const Input = styled.TextInput`
  margin-top: 10px;
  width: 100%;
  border-bottom-width: 2px;
  border-color: #CACBCA;
  padding: 10px 15px 5px 15px;
`
const PayButton = styled.View`
  width: 100%;
  flex: 1;
  align-items: center;
  justify-content: space-around;
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
    this.closePicker = this.closePicker.bind(this)
  }
  showPickerModal () {
    Animated.spring(this.state.animated, {
      toValue: 0,
      duration: 500
    }).start()
  }
  closePicker () {
    Animated.spring(this.state.animated, {
      toValue: -300,
      duration: 500
    }).start()
  }
  render () {
    return (
      <Animated.View style={{position: 'absolute', bottom: this.state.animated, backgroundColor: 'red', height: 300, width: '100%', zIndex: 3}}>
        <View>
          <View>
            <TouchableOpacity onPress={this.closePicker}>
              <Text>buttons</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={this.closePicker}>
              <Text>buttons</Text>
            </TouchableOpacity>
          </View>
          <View>
            <Picker
              selectedValue={this.state.language}
              onValueChange={(itemValue, itemIndex) => this.setState({language: itemValue})}>
              <Picker.Item label='Java' value='java' />
              <Picker.Item label='JavaScript' value='js' />
            </Picker>
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
        <CardNumberContainer>
          <Label size={12}>Número de tarjeta</Label>
          <Input secureTextEntry placeholder='**** **** **** ****' />
        </CardNumberContainer>
        <CardDetails>
          <Detail>
            <Label size={12}>Fecha de vencimiento</Label>
            <Input />
          </Detail>
          <Detail>
            <Label size={12}>Código de seguridad <Icon name='credit-card' color={'#CACBCA'} size={20} /></Label>
            <Input />
          </Detail>
        </CardDetails>
        <PayButton>
          <Button text='PAGAR' IconSide='check' />
        </PayButton>
        { <ModalPayment ref={ref => this._modalPicker = ref} /> }
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
