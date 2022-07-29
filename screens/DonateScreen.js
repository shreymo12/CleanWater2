import React, {Components} from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import db from "../config";
import firebase from "firebase";
import HomeScreen from './HomeScreen';


export default class DonateScreen extends Compoents{
  goToHomeScreen = ()=>{
    <Text style = {styles.buttonText}>
       Go Home

    </Text>
    this.props.navigation.navigate('HomeScreen')
  }
  constructor(){
    super();
    this.state ={
      userId: "",
      amountDonated: ""
    };
  }
  donatedAmount = (userId, amountDonated) => {
    firebase
    .createUserId (userID, amountDonated)
    .then(()=>{
      db.collection("Donations").add({
        Name: this.state.userId, 
        amount: this.state.amountDonated
      });

    })
  }
    render(){
        return(

           <View>
            <TextInput
              placeholder= "User Id"
              placeholderTextColor = "gray"
              keyboardType = "user-id"
              onChangeText = {text=>{
                this.setState({
                  userId:text
                })
              }}
            />
            <TextInput
              placeholder = "$ Donated"
              placeholderTextColor = "gray"
              keyboardType = "amount"
              onChangeText = {number =>{
                this.setState ({
                  amountDonated : number
                })
              }}
            />

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