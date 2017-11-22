import React, {Component} from 'react'
import {
    Dimensions,
    Animated,
    View,
    Text,
    TouchableOpacity,
    Picker,
    StatusBar
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
import {
  StatusBar,
  Platform
} from 'react-native'

const height = Dimensions.get('window').height
const width = Dimensions.get('window').width

class ModalPayment extends Component {
  constructor (props) {
    super(props)
    this.state = {
      animated: new Animated.Value(-300),
      height: 0,
      value: ''
    }
    this.showPickerModal = this.showPickerModal.bind(this)
    this.closePicker = this.closePicker.bind(this)
    this.getValue = this.getValue.bind(this)
    this.returnValue = this.returnValue.bind(this)
  }
  showPickerModal () {
    Animated.spring(this.state.animated, {
      toValue: 0,
      duration: 500
    }).start()
  }
  closePicker () {
    this.returnValue()
    Animated.spring(this.state.animated, {
      toValue: -300,
      duration: 500
    }).start()
  }
  returnValue () {
    return this.state.value
  }
  getValue (value) {
    this.setState({
      language: value
    })
  }
  render () {
    return (
      <Animated.View style={{position: 'absolute', bottom: this.state.animated, backgroundColor: '#D3D3D3', height: 300, width: '100%', zIndex: 3}}>
        <View>
          <StatusBar
            hidden = {Platform === 'ios' ? false : true }
            backgroundColor='#ff5722'
            barStyle='light-content'
            setTranslucent
          />
          <View style={{width: '100%', flexDirection: 'row', justifyContent: 'space-between'}}>
            <TouchableOpacity style={{backgroundColor: 'red', padding: 10}} onPress={this.closePicker}>
              <Text style={{fontSize: 16, color: '#FFF'}}>Cancelar</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{backgroundColor: '#FF5722', padding: 10}} onPress={this.closePicker}>
              <Text style={{fontSize: 16, color: '#FFF'}}>Confirmar</Text>
            </TouchableOpacity>
          </View>
          <View>
            <Picker
              selectedValue={this.state.language}
              onValueChange={(itemValue, itemIndex) => this.getValue(itemValue)}>
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
    const {navigate} = this.props.navigation
    return (
      <ScreenContainer height={height} width={width}>
        <StatusBar
          backgroundColor='#ff5722'
          barStyle='light-content'
          setTranslucent
        />
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
          <Button onPress={() => navigate('Status')} text='PAGAR' IconSide='check' />
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
