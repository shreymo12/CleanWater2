import React, {Component} from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';
import FactScreen from './screens/FactScreen';
import DonateScreen from './DonateScreen';



export default class HomeScreen extends Component{
  goToDonateScreen =() =>{
    <Text style= {styles.buttonText}>
         Press here to Donate 
    </Text>
    this.props.navigation.navigate('DonateScreen')
    
  }
  goToFactScreen =() =>{
    <Text style = {styles.buttonText}> 
       New Fact       
    </Text>
    this.props.navigation.navigate('FactScreen')
  }
    render(){
        return(

          <View>
            <Text>Home Screen </Text>

         
          <View>
            <TouchableOpacity
              style = {[styles.button, {backgroundColor:"blue"}]}
              onPress = {this.goToDonateScreen}>
            </TouchableOpacity>

            <TouchableOpacity
              style = {[styles.button, {backgroundColor: "blue"}]}
              onPress = {this.goToFactScreen}>
            </TouchableOpacity>

          
                

              
          </View>
          </View>
            
        );
    }
}

const styles = StyleSheet.create({
  button:{
    justifyContent: 'center', 
    alignSelf: 'center',
    borderWidth : 2, 
    marginTop : 50, 
    with: 200,
    height: 50
  },
  buttonText: {
    textAlign: 'center',
    color : "gray"
  }
})