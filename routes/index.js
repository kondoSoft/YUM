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
  SearchMap
} from '../containers'
import { StackNavigator } from 'react-navigation'

export const StackApp = StackNavigator({
  Home: { screen: SearchMap },
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
