
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
  ModalExample,
  Drawer,
  HeaderRightUser
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

const UserStack = StackNavigator({
  User: {
    screen: UserDetails,
    navigationOptions: ({navigation}) => ({
      headerTintColor: '#FFF',
      headerRight: (<HeaderRightUser {...navigation} />)
    })
  },
  EditUser: {
    screen: EditUser,
    navigationOptions: {
      headerTintColor: '#FFF'
    }
  }
}, {
  headerMode: 'none'
})

const AuthStack = StackNavigator({
  Home: {
    screen: Home,
    navigationOptions: { header: null }
  },
  Login: {
    screen: Login,
    navigationOptions: {
      headerTintColor: '#FFF'
    }
  },
  Register: {
    screen: Register,
    navigationOptions: {
      headerTintColor: '#FFF'
    }
  }
}, {
  headerMode: (Platform.OS === 'ios') ? 'float' : 'screen',
  mode: (Platform.OS === 'ios') ? 'modal' : 'card',
  navigationOptions: {
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
      headerTintColor: '#FFF',
      headerRight: (<HeaderRigthBag {...navigation} />)
    })
  },
  Map: {
    screen: SearchMap,
    navigationOptions: ({navigation}) => ({
      headerLeft: (<TouchableOpacity onPress={() => navigation.navigate('DrawerToggle')} style={{width: 50}}>
        <Icon name='bars' size={30} color={'#FFF'} style={{marginLeft: 20}} />
      </TouchableOpacity>),
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
      headerTintColor: '#FFF',
      headerRight: (<HeaderRightRestaurant />)
    })
  },
  DetailFood: {
    screen: DetailFood,
    navigationOptions: ({navigation}) => ({
      headerTintColor: '#FFF',
      headerRight: (<HeaderRightRestaurant />)
    })
  },
  Bag: {
    screen: Bag,
    navigationOptions: ({navigation}) => ({
      headerTintColor: '#FFF',
      headerTitle: 'Bolsa',
      headerTitleStyle: {
        width: '80%',
        color: '#FFF',
        textAlign: 'center',
        fontSize: 20
      }
    })
  },
  Pay: {
    screen: Pay,
    navigationOptions: ({navigation}) => ({
      headerTintColor: '#FFF',
      headerTitle: 'Pago',
      headerTitleStyle: {
        width: '80%',
        color: '#FFF',
        textAlign: 'center',
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
  },
  Profile: { screen: UserStack },
  Favorites: {
    screen: Favorites,
    navigationOptions: {
      headerTintColor: '#FFF'
    }
  },
  History: {
    screen: Historial,
    navigationOptions: {
      headerTintColor: '#FFF'
    }
  }
}, {
  initialRoutName: 'Map',
  headerMode: (Platform.OS === 'ios') ? 'float' : 'screen',
  mode: (Platform.OS === 'ios') ? 'modal' : 'card',
  navigationOptions: {
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
    headerMode: 'none',
    contentComponent: navigation => <Drawer {...navigation} />,
    gesturesEnabled: false
  }
)
