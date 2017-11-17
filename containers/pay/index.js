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
  Button,
  Total,
  TotalText,
  OptionPayment,
  Label,
  CardNumberContainer,
  Input,
  CardDetails,
  Detail,
  PayButton,
  PaymentButton
} from '../../components'
import Icon from 'react-native-vector-icons/FontAwesome'
import styled from 'styled-components/native'

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
