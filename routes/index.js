import React from 'react'
import {
  TouchableOpacity,
  Platform,
  Text
} from 'react-native'
import {
  HeaderRightButtons,
  HeaderRigthBag,
  HeaderRightRestaurant
} from '../components'
import {
  Home,
  Login,
  Register,
  Prueba,
  RestaurantList,
  Menu,
  DetailFood,
  Bag,
  QualificationService,
  Pay,
  EditUser,
  RestaurantView,
  Historial,
  UserDetails,
  StatusScreen,
  SearchMap,
  Favorites
} from '../containers'
import { StackNavigator } from 'react-navigation'
import Icon from 'react-native-vector-icons/FontAwesome'

export const StackApp = StackNavigator({
  Home: {
    screen: Home,
    navigationOptions: { header: null }
  },
  Login: {
    screen: Login,
    navigationOptions: ({navigation}) => ({
      headerLeft: (<TouchableOpacity onPress={() => navigation.goBack()} style={{width: 50}}>
        <Icon name={(Platform.OS === 'ios') ? 'angle-left' : 'arrow-left'} size={30} color={'#FFF'} style={{marginLeft: 10}} />
      </TouchableOpacity>)
    })
  },
  Register: {
    screen: Register,
    navigationOptions: ({navigation}) => ({
      headerLeft: (<TouchableOpacity onPress={() => navigation.goBack()} style={{width: 50}}>
        <Icon name={(Platform.OS === 'ios') ? 'angle-left' : 'arrow-left'} size={30} color={'#FFF'} style={{marginLeft: 10}} />
      </TouchableOpacity>)
    })
  },
  Restaurants: {
    screen: RestaurantList,
    navigationOptions: ({navigation}) => ({
      headerLeft: (<TouchableOpacity style={{width: 50}}>
        <Icon name='bars' size={30} color={'#FFF'} style={{marginLeft: 10}} />
      </TouchableOpacity>),
      headerRight: (<HeaderRightButtons />)
    })
  },
  Menu: {
    screen: Menu,
    navigationOptions: ({navigation}) => ({
      headerLeft: (<TouchableOpacity onPress={() => navigation.goBack()} style={{width: 50}}>
        <Icon name='bars' size={30} color={'#FFF'} style={{marginLeft: 10}} />
      </TouchableOpacity>),
      headerRight: (<HeaderRigthBag />)
    })
  },
  Map: {
    screen: SearchMap,
    navigationOptions: ({navigation}) => ({
      headerLeft: (<TouchableOpacity style={{width: 50}}>
        <Icon name='bars' size={30} color={'#FFF'} style={{marginLeft: 10}} />
      </TouchableOpacity>),
      headerTitle: navigation.state.params.username,
      headerTitleStyle: {
        width: '100%',
        color: '#FFF',
        textAlign: 'left'
      }
    })
  },
  Restaurant: {
    screen: RestaurantView,
    navigationOptions: ({navigation}) => ({
      headerLeft: (<TouchableOpacity onPress={() => navigation.goBack()} style={{width: 50}}>
        <Icon name={(Platform.OS === 'ios') ? 'angle-left' : 'arrow-left'} size={30} color={'#FFF'} style={{marginLeft: 10}} />
      </TouchableOpacity>),
      headerRight: (<HeaderRightRestaurant />)
    })
  },
  DetailFood: {
    screen: DetailFood,
    navigationOptions: ({navigation}) => ({
      headerLeft: (<TouchableOpacity onPress={() => navigation.goBack()} style={{width: 50}}>
        <Icon name={(Platform.OS === 'ios') ? 'angle-left' : 'arrow-left'} size={30} color={'#FFF'} style={{marginLeft: 10}} />
      </TouchableOpacity>),
      headerRight: (<HeaderRightRestaurant />)
    })
  }
},
  {
    mode: 'modal',
    navigationOptions: {
      gesturesEnabled: false,
      headerStyle: {
        backgroundColor: '#FF5722'
      }
    }
  }
)
