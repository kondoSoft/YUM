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
  RestaurantView
} from '../containers'
import { StackNavigator } from 'react-navigation'

export const StackApp = StackNavigator({
  Home: { screen: EditUser },
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
