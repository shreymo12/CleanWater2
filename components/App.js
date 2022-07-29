import React from'react';
import {createAppContainer, createSwitchNavigator,} from 'react-navigation'
import HomeScreen from './screens/HomeScreen';
import FactScreen from './screens/FactScreen';
import DonateScreen from './screens/DonateScreen';


export default class app extends Components(){
    render(){
        return(
            <AppContainer/>
        );
    }
    
}


const switchNavigator  = createSwitchNavigator({
    HomeScreen:HomeScreen, 
    FactScreen: FactScreen,
    DonateScreen: DonateScreen 

})

const AppContainer = createAppContainer(AppNavigator)