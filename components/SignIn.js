
import React,{Component} from 'react';
import {
  
  StyleSheet,
  
  View,
  Text,
 
} from 'react-native';

import LoginView from "./LoginView"

export default class SignIn extends Component{

  render(){
    return(
      <View style={Styles.container}>
          <Text style={{textAlign : 'center', fontSize : 20}}>SignIn</Text>

          <LoginView />
      </View>
    )
  }
}

const Styles = StyleSheet.create({
  container : {
    flex : 1,
    justifyContent : 'center',
    alignContent : 'center'
  }
})