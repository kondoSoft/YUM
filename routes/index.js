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
  Favorites,
} from '../containers'
import { StackNavigator } from 'react-navigation'

export const StackApp = StackNavigator({
  Home: { screen: Home },
  Login: {screen: Login},
  Register: {screen: Register},
  Restaurants: {screen: RestaurantList},
  Menu: {screen: Menu},
},
  {
    mode: 'modal',
    navigationOptions: {
      gesturesEnabled: false
    }
  }
)
