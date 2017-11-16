import {
  Home,
  Login,
  Register,
  Prueba,
  RestaurantList,
  Menu,
  DetailFood,
  Bag,
  QualificationService
} from '../containers'

import { StackNavigator } from 'react-navigation'

export const StackApp = StackNavigator({
  Home: {screen: Home},
  Login: {screen: Login},
  Register: {screen: Register},
  Restaurant: {screen: RestaurantList}
})
