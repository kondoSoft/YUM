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
        food: '',
        check: 0,
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
  const {navigate} = this.props.navigation
  setTimeout(() => {
    this.setState({
      food: 'Pedido Recibido',check: 1
    })
  }, 2000)
  setTimeout(() => {
    this.setState({
      food: 'Comida Lista',check: 2
    })
  }, 4000)
  setTimeout(() => {
    this.setState({
      food: 'Pedido en camino',check: 3
    })
  }, 6000)
  setTimeout(() => {
    this.setState({
      food: 'Tu pedido a llegado',check: 4
    })
  }, 8000)
  setTimeout(() => {
    navigate('QualificationService')
  }, 8500)
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
          width: '90%',
          flexDirection: 'row',
          flex: 1,
          alignItems: 'center',
          justifyContent: 'space-around',
        }}>
          <CircleImage size={40} source={require('../../assets/img/status_button.png')} />
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
          width: '90%',
          flexDirection: 'row',
          flex: 1,
          alignItems: 'center',
        }}>
          <CircleImage size={40} source={require('../../assets/img/status_button.png')} />
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
              marginTop: this.state.check == 1 && 15,
              flexDirection: 'row',
              width: '100%',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <Status text={this.state.food}/>
            </Animated.View>
            : <Animated.View style={{
                opacity,
                marginBottom,
                flexDirection: 'row',
                width: '100%',
                alignItems: 'center',
                justifyContent: 'center'
              }}
              >
                <Check>
                  <Icon name={this.state.check >= 1 ? 'ios-checkmark-circle-outline' : 'ios-radio-button-off'} size={35} color={'#F9381F'} />
                </Check>
                <TextStatus>
                  <Text style={{fontSize: 18}}>Pedido Recibido</Text>
                </TextStatus>
              </Animated.View>
          }
          {
            this.state.food === 'Comida Lista' ?
            <Animated.View style={{
              marginBottom,
              flexDirection: 'row',
              width: '100%',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
            <Status text={this.state.food}/>
            </Animated.View>
            : <Animated.View style={{
                opacity,
                marginBottom,
                flexDirection: 'row',
                width: '100%',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <Check>
                  <Icon name={this.state.check >=2 ? 'ios-checkmark-circle-outline' : 'ios-radio-button-off'} size={35} color={'#F9381F'} />
                </Check>
                <TextStatus>
                  <Text style={{fontSize: 18}}>Comida Lista</Text>
                </TextStatus>
              </Animated.View>
          }
          {
            this.state.food === 'Pedido en camino' ?
            <Animated.View style={{
              marginBottom,
              paddingBottom: this.state.check == 3 && 20,
              flexDirection: 'row',
              width: '100%',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
            <Status text={this.state.food}/>
            </Animated.View>
            : <Animated.View style={{
                opacity,
                marginBottom,
                flexDirection: 'row',
                width: '100%',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <Check>
                  <Icon name={this.state.check >= 3 ? 'ios-checkmark-circle-outline' : 'ios-radio-button-off'} size={35} color={'#F9381F'} />
                </Check>
                <TextStatus>
                  <Text style={{fontSize: 18}}>Pedido en camino</Text>
                </TextStatus>
              </Animated.View>
          }
          {
            this.state.food === 'Tu pedido ha llegado' ?
            <Animated.View style={{
              marginBottom,
              flexDirection: 'row',
              width: '100%',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
            <Status text={this.state.food}/>
            </Animated.View>
            : <Animated.View style={{
                opacity,
                marginBottom,
                flexDirection: 'row',
                width: '100%',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <Check>
                  <Icon name={this.state.check >=4 ? 'ios-checkmark-circle-outline' : 'ios-radio-button-off'} size={35} color={'#F9381F'} />
                </Check>
                <TextStatus>
                  <Text style={{fontSize: 18}}>Tu pedido ha llegado</Text>
                </TextStatus>
              </Animated.View>
          }

        </StatusContainer>
       </BottomView>
      </ScreenContainer>
    )
  }
}
// ios-checkmark-circle-outline
