import React, {Component} from 'react'
import {
  Text,
  Dimensions,
  StatusBar
} from 'react-native'
import {
    ScreenContainer,
    AvatarName,
    EditUserInfo,
    EditForm,
    EditInput,
    EditLabel,
    PayMethod,
    Method,
    MethodTitle,
    OptionPayment,
    Label,
    PaymentButton,
    TotalText,
    CardNumberContainer,
    Input,
    Detail,
    CardDetails,
    Button,
    SaveButton
} from '../../components'
import Icon from 'react-native-vector-icons/FontAwesome'

const height = Dimensions.get('window').height
const width = Dimensions.get('window').width

export default class EditUser extends Component {
  constructor () {
    super()
    this.state = {
      typePayment: 'Tarjeta de crédito/Débito'
    }
  }
  render () {
    return (
      <ScreenContainer height={height} width={width}>
        <StatusBar
          backgroundColor='#ff5722'
          barStyle='light-content'
          setTranslucent
        />
        <EditUserInfo>
          <EditForm>
            <EditLabel>Nombre</EditLabel>
            <EditInput />
          </EditForm>
          <EditForm>
            <EditLabel>Correo electronico</EditLabel>
            <EditInput />
          </EditForm>
          <EditForm>
            <EditLabel>Contraseña</EditLabel>
            <EditInput />
          </EditForm>
        </EditUserInfo>
        <PayMethod style={{marginTop: 0, justifyContent: 'space-between'}}>
          <Method>
            <MethodTitle>
              Métodos de Pago
            </MethodTitle>
          </Method>
          <OptionPayment style={{marginTop: 0, width: '100%'}}>
            <Label>Opciones de pago</Label>
            <PaymentButton>
              <TotalText size={14} fontWeight>{this.state.typePayment}</TotalText>
              <Icon name='caret-down' color={'rgb(255,155,37)'} size={20} />
            </PaymentButton>
          </OptionPayment>
          <CardNumberContainer style={{width: '100%'}}>
            <Label size={12}>Número de tarjeta</Label>
            <Input secureTextEntry placeholder='**** **** **** ****' />
          </CardNumberContainer>
          <CardDetails style={{width: '100%'}}>
            <Detail>
              <Label size={12}>Fecha de vencimiento</Label>
              <Input />
            </Detail>
            <Detail>
              <Label size={12}>Código de seguridad <Icon name='credit-card' color={'#CACBCA'} size={20} /></Label>
              <Input />
            </Detail>
          </CardDetails>
          <SaveButton>
            <Button text='Guardar' />
          </SaveButton>
        </PayMethod>
      </ScreenContainer>
    )
  }
}
