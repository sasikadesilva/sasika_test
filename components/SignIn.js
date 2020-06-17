
import React,{Component} from 'react';
import {
  
  StyleSheet,
  
  View,
  Text,
 
} from 'react-native';



export default class SignIn extends Component{

  render(){
    return(
      <View style={Styles.container}>
          <Text style={{textAlign : 'center', fontSize : 20}}>SignIn</Text>
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