import React, {Compoent} from 'react';
import {View, TouchableOpacity, StyleSheet, Button} from 'react-native';
import HomeScreen from './HomeScreen';



export default class FactScreen extends Componets{
  goToHomeScreen = () =>{
    <Text style={styles.buttonText}>
        Go Back
    </Text>
    this.props.navigation.navigate('HomeScreen')
  }
  showFact1 = () =>{
    <Text style={styles.buttonText}>  Each year 1.2 trillion gallons of untreated sewage, stormwater, and industral waste are dumped into US water</Text>
   

  }
  showFact2 = () =>{
    <Text style={styles.buttonText}> In developing countries 70% of industrial wastes are dumped untreated into waters, pulluting the useable water supple</Text>
  }
  showFact3 = () => {
    <Text style={styles.buttonText}>
     Half of the world rivers and streams and more than one-third of our lakes are pulluted and unfit for swimming, drinking, and fishing
    </Text>
  }
  showFact4 = () =>{
    <Text style={styles.buttonText}> 
      Nearly 70 million people in Bangladesh are exposed to groundwater that is exposed to arsenic
    </Text>

  }

    render(){
        return(
          
         <View>
          <TouchableOpacity
            style = {[styles.button,{backgroundColor: "blue"}]}
            onPress={()=>this.showFact1()}>

          </TouchableOpacity>

          <TouchableOpacity
            style = {[styles.button,{backgroundColor: "red"}]}
            onPress={()=>this.showFact2()}>

          </TouchableOpacity>

          <TouchableOpacity
            style = {[styles.button,{backgroundColor: "purple"}]}
            onPress={()=>this.showFact3()}>

          </TouchableOpacity>

          <TouchableOpacity
            style = {[styles.button,{backgroundColor: "green"}]}
            onPress={()=>this.showFact4()}>

          </TouchableOpacity>

          <TouchableOpacity
            style = {[styles.button,{backgroundColor: "yellow"}]}
            onPress = {this.goToHomeScreen}>
          </TouchableOpacity>
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