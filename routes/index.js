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
  UserDetails,
  RestaurantView
} from '../containers'
import {
  Animated,
  Easing
} from 'react-native'
import { StackNavigator } from 'react-navigation'

export const StackApp = StackNavigator({
  Home: { screen: RestaurantView },
  Login: {screen: Login},
  Register: {screen: Register},
  Restaurant: {screen: RestaurantList}
},
  {
    mode: 'modal',
    navigationOptions: {
      gesturesEnabled: false
    }
  }
)
