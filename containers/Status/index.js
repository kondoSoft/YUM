import React, {Component} from 'react'
import {
    Dimenions,
    Text,
    View,
    StatusBar,
    Platform,
    LayoutAnimation,
    NativeModules,
    Animated,
    Easing
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
    Status,
    BottomView,
} from '../../components'
import {
  MapView
} from 'expo'
import Icon from 'react-native-vector-icons/Ionicons'
const { UIManager } = NativeModules;

  UIManager.setLayoutAnimationEnabledExperimental && UIManager.setLayoutAnimationEnabledExperimental(true);

export default class StatusScreen extends Component {
  constructor(){
    super()
    this.state = {
        hidden:false,
        h: '75%',
        orderStatus: '',
        mapHeight:'25%',
        food: ''
      }

      this.animatedValue = new Animated.Value(1)
    this._onPress = this._onPress.bind(this)
  }
  _onPress = () => {
    const CustomLayoutSpring = {
    duration: 1000,
    create: {
      type: LayoutAnimation.Types.spring,
      property: LayoutAnimation.Properties.scaleXY,
      springDamping: 1.5,
      friction: 8,
      tension: 1,
    },
    update: {
      type: LayoutAnimation.Types.spring,
      springDamping: 1.5,
      friction: 8,
      tension: 20,
    },
    }
  // Animate the update
  LayoutAnimation.configureNext(CustomLayoutSpring)
  this.animate()
  // LayoutAnimation.spring()
  this.state.hidden == false ?
  this.setState({ h: '20%', mapHeight: '80%',hidden: true})
  :
  this.setState({ h: '75%', mapHeight: '25%',hidden: false})
}
animate () {
  if (this.animatedValue._value === 1) {
    this.animatedValue.setValue(0)
    Animated.timing(
      this.animatedValue,
      {
        toValue: 0,
        duration: 2000,
        easing: Easing.linear
      }
    ).start()
  }else {
    this.animatedValue.setValue(1)
    Animated.timing(
      this.animatedValue,
      {
        toValue: 1,
        duration: 2000,
        easing: Easing.linear
      }
    ).start()
  }
}
componentDidMount () {
  setTimeout(() => {
    this.setState({
      food: 'Pedido Recibido'
    })
  }, 2000)
  setTimeout(() => {
    this.setState({
      food: 'Tu Pedido Ha Llegado'
    })
  }, 4000)
  setTimeout(() => {
    this.setState({
      food: 'Comida Lista'
    })
  }, 6000)
}
render () {
    const opacity = this.animatedValue.interpolate({
      inputRange: [0, 1],
      outputRange: [0, 1]
    })
    const marginBottom = this.animatedValue.interpolate({
      inputRange: [0, 1],
      outputRange: [40, 0]
    })
    return (
      <ScreenContainer>
        <StatusBar
          hidden={Platform.OS !== 'ios'}
          backgroundColor='#ff5722'
          barStyle='light-content'
          setTranslucent
        />
        <MapView
          style={{ flex: 4, width: '100%' }}
          initialRegion={{
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421
          }}
        />
       <BottomView height = {this.state.h} >
        <ArrowDown flex={0.4} onPress = {this._onPress}>
          <Icon  name={this.state.hidden ? 'ios-arrow-up' : 'ios-arrow-down'} size={25} color={'#F9381F'} />
        </ArrowDown>
        <Animated.View style={{
          opacity,
          width: '100%',
          flexDirection: 'row',
          flex: 1,
          alignItems: 'center'
        }}>
          <CircleImage size={60} source={require('../../assets/img/status_button.png')} />
          <RestaurantData>
            <Text>Los Danzantes</Text>
          </RestaurantData>
          <PhoneMessage>
            <Icon name='ios-call' size={25} color={'#F9381F'} />
            <Icon name='ios-chatbubbles' size={25} color={'#F9381F'} />
          </PhoneMessage>
        </Animated.View>
        <Animated.View style={{
          opacity,
          width: '90%',
          height: 2,
          backgroundColor: '#C7C7CC'
        }}/>
        <Animated.View style={{
          opacity,
          width: '100%',
          flexDirection: 'row',
          flex: 1,
          alignItems: 'center'
        }}>
          <CircleImage size={60} source={require('../../assets/img/status_button.png')} />
          <MotorcycleData>
            <Text>Jorge Velásquez</Text>
            <Motorcycle>Italika Blanca 2W45JV</Motorcycle>
          </MotorcycleData>
          <PhoneMessage>
            <Icon name='ios-call' size={25} color={'#F9381F'} />
            <Icon name='ios-chatbubbles' size={25} color={'#F9381F'} />
          </PhoneMessage>
        </Animated.View>
        <Animated.View style={{
          opacity,
          width: '90%',
          height: 2,
          backgroundColor: '#FF5722'
        }}/>
        <StatusContainer flex={3}>
          {
            this.state.food === 'Pedido Recibido' ?
            <Animated.View style={{
              marginBottom,
              flexDirection: 'row',
              width: '100%',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <Status />
            </Animated.View>
            : <Animated.View style={{
                marginBottom,
                flexDirection: 'row',
                width: '100%',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <Check>
                  <Icon name={this.state.food === 'Tu Pedido Ha Llegado' ? 'ios-checkmark-circle-outline' : 'ios-radio-button-off'} size={35} color={'#F9381F'} />
                </Check>
                <TextStatus>
                  <Text style={{fontSize: 18}}>Pedido Recibido</Text>
                </TextStatus>
              </Animated.View>
          }
          {
            this.state.food === 'Tu Pedido Ha Llegado' ?
            <Animated.View style={{
              marginBottom,
              flexDirection: 'row',
              width: '100%',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <Status />
            </Animated.View>
            : <Animated.View style={{
                marginBottom,
                flexDirection: 'row',
                width: '100%',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <Check>
                  <Icon name={this.state.food === 'Comida Lista' ? 'ios-checkmark-circle-outline' : 'ios-radio-button-off'} size={35} color={'#F9381F'} />
                </Check>
                <TextStatus>
                  <Text style={{fontSize: 18}}>Pedido Recibido</Text>
                </TextStatus>
              </Animated.View>
          }
          {/* <Animated.View style={{
                      opacity,
                      flexDirection: 'row',
                      width: '100%',
                      alignItems: 'center'
                    }} >
                      <Check>
                        <Icon name='ios-radio-button-off' size={35} color={'#F9381F'} />
                      </Check>
                      <TextStatus>
                        <Text style={{fontSize: 18}}>Tu pedido ha llegado</Text>
                      </TextStatus>
                    </Animated.View> */}
          <Animated.View style={{
            opacity,
            flexDirection: 'row',
            width: '100%',
            alignItems: 'center'
          }} >
            <Check>
              <Icon name='ios-radio-button-off' size={35} color={'#F9381F'} />
            </Check>
            <TextStatus>
              <Text style={{fontSize: 18}}>Comida Lista</Text>
            </TextStatus>
          </Animated.View>
          <Animated.View style={{
            opacity,
            flexDirection: 'row',
            width: '100%',
            alignItems: 'center'
          }} >
            <Check>
              <Icon name='ios-radio-button-off' size={35} color={'#F9381F'} />
            </Check>
            <TextStatus>
              <Text style={{fontSize: 18}}>Tu pedido ha llegado</Text>
            </TextStatus>
          </Animated.View>
        </StatusContainer>
       </BottomView>
      </ScreenContainer>
    )
  }
}
// ios-checkmark-circle-outline
