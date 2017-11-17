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
  Pay
} from '../containers'
import {
  Animated,
  Easing
} from 'react-native'
import { StackNavigator } from 'react-navigation'

export const StackApp = StackNavigator({
  Home: { screen: Pay },
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
