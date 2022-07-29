import * as React from 'react';
import { View } from 'react-native';
import HomeScreen from './screens/HomeScreen'
import BuzzerScreen from './screens/FactScreen'
import HotChoclate from './screens/DonateScreen'
import { createAppContainer, createSwitchNavigator} from 'react-navigation'; 

export default class App extends React.Component {
  render() {
    return (
      <View>
        <AppContainer/>
      </View>
    );
  }
}


var AppNavigator = createSwitchNavigator({
  HomeScreen:HomeScreen,
  BuzzerScreen : BuzzerScreen,
  HotChoclate:HotChoclate
})

const AppContainer = createAppContainer(AppNavigator)
