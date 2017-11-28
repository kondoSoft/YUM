
import React from 'react'
import {
  TouchableOpacity,
  Platform,
  Text
} from 'react-native'
import {
  HeaderRightButtons,
  HeaderRigthBag,
  HeaderRightRestaurant,
  HeaderLeftStatus,
  HeaderMiddleStatus,
  HeaderRightStatus,
  ModalExample
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
import { StackNavigator, DrawerNavigator } from 'react-navigation'
import Icon from 'react-native-vector-icons/FontAwesome'

const AuthStack = StackNavigator({
  Home: {
    screen: Home,
    navigationOptions: { header: null }
  },
  Login: {
    screen: Login,
    navigationOptions: ({navigation}) => ({
      headerLeft: (<TouchableOpacity onPress={() => navigation.goBack()} style={{width: 50}}>
        <Icon name={(Platform.OS === 'ios') ? 'angle-left' : 'arrow-left'} size={30} color={'#FFF'} style={{marginLeft: 20}} />
      </TouchableOpacity>)
    })
  },
  Register: {
    screen: Register,
    navigationOptions: ({navigation}) => ({
      headerLeft: (<TouchableOpacity onPress={() => navigation.goBack()} style={{width: 50}}>
        <Icon name={(Platform.OS === 'ios') ? 'angle-left' : 'arrow-left'} size={30} color={'#FFF'} style={{marginLeft: 20}} />
      </TouchableOpacity>)
    })
  }
}, {
  headerMode: (Platform.OS === 'ios') ? 'float' : 'screen',
  mode: (Platform.OS === 'ios') ? 'modal' : 'card',
  navigationOptions: {
    gesturesEnabled: false,
    headerStyle: {
      backgroundColor: '#FF5722'
    }
  }
})

const MainStack = StackNavigator({
  Restaurants: {
    screen: RestaurantList,
    navigationOptions: ({navigation}) => ({
      headerLeft: (<TouchableOpacity style={{width: 50}} onPress={() => navigation.navigate('DrawerToggle')}>
        <Icon name='bars' size={30} color={'#FFF'} style={{marginLeft: 20}} />
      </TouchableOpacity>),
      headerRight: (<HeaderRightButtons />)
    })
  },
  Menu: {
    screen: Menu,
    navigationOptions: ({navigation}) => ({
      headerLeft: (<TouchableOpacity onPress={() => navigation.goBack()} style={{width: 50}}>
        <Icon name={(Platform.OS === 'ios') ? 'angle-left' : 'arrow-left'} size={30} color={'#FFF'} style={{marginLeft: 20}} />
      </TouchableOpacity>),
      headerRight: (<HeaderRigthBag {...navigation} />)
    })
  },
  Map: {
    screen: SearchMap,
    navigationOptions: ({navigation}) => ({
      headerLeft: (<TouchableOpacity onPress={() => navigation.navigate('DrawerToggle')} style={{width: 50}}>
        <Icon name='bars' size={30} color={'#FFF'} style={{marginLeft: 20}} />
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
        <Icon name={(Platform.OS === 'ios') ? 'angle-left' : 'arrow-left'} size={30} color={'#FFF'} style={{marginLeft: 20}} />
      </TouchableOpacity>),
      headerRight: (<HeaderRightRestaurant />)
    })
  },
  DetailFood: {
    screen: DetailFood,
    navigationOptions: ({navigation}) => ({
      headerLeft: (<TouchableOpacity onPress={() => navigation.goBack()} style={{width: 50}}>
        <Icon name={(Platform.OS === 'ios') ? 'angle-left' : 'arrow-left'} size={30} color={'#FFF'} style={{marginLeft: 20}} />
      </TouchableOpacity>),
      headerRight: (<HeaderRightRestaurant />)
    })
  },
  Bag: {
    screen: Bag,
    navigationOptions: ({navigation}) => ({
      headerLeft: (<TouchableOpacity onPress={() => navigation.goBack()} style={{width: 50}}>
        <Icon name={(Platform.OS === 'ios') ? 'angle-left' : 'arrow-left'} size={30} color={'#FFF'} style={{marginLeft: 20}} />
      </TouchableOpacity>),
      headerTitle: 'Bolsa',
      headerTitleStyle: {
        width: '100%',
        color: '#FFF',
        textAlign: 'left',
        fontSize: 20
      }
    })
  },
  Pay: {
    screen: Pay,
    navigationOptions: ({navigation}) => ({
      headerLeft: (<TouchableOpacity onPress={() => navigation.goBack()} style={{width: 50}}>
        <Icon name={(Platform.OS === 'ios') ? 'angle-left' : 'arrow-left'} size={30} color={'#FFF'} style={{marginLeft: 20}} />
      </TouchableOpacity>),
      headerTitle: 'Pago',
      headerTitleStyle: {
        width: '100%',
        color: '#FFF',
        textAlign: 'left',
        fontSize: 20
      }
    })
  },
  Status: {
    screen: StatusScreen,
    navigationOptions: ({navigation}) => ({
      headerLeft: (<HeaderLeftStatus />),
      headerTitle: (<HeaderMiddleStatus />),
      headerTitleStyle: {
        color: '#FFF',
        textAlign: 'center'
      },
      headerRight: (<HeaderRightStatus />)
    })
  }
}, {
  initialRoutName: 'Map',
  headerMode: (Platform.OS === 'ios') ? 'float' : 'screen',
  mode: (Platform.OS === 'ios') ? 'modal' : 'card',
  navigationOptions: {
    gesturesEnabled: false,
    headerStyle: {
      backgroundColor: '#FF5722'
    }
  }
})

export const StackApp = DrawerNavigator({
  Auth: { screen: AuthStack },
  App: { screen: MainStack }
},
  {
    headerMode: 'none'
  }
)
