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

export const StackApp = StackNavigator({
  Home: {
    screen: Home,
    navigationOptions:{ header: null,},
  },
  Login: {screen: Login,
    navigationOptions:{
    headerStyle: {backgroundColor: 'transparent'},
    },
  },
  Register: {screen: Register},
  Restaurants: {screen: RestaurantList},
  Menu: {screen: Menu},
  Map: {
    screen: SearchMap,
    navigationOptions:{ header: null,},
  },
  Restaurant: {
    screen:RestaurantView,
  },


},
  {
    mode: 'modal',
    navigationOptions: {
      gesturesEnabled: false
    }
  }
)
