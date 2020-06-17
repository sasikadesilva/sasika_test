import React, { Component } from 'react';
import {

    StyleSheet,
    TextInput,
    View,
    Text,

} from 'react-native';


 export const CustomTextInput = (props) =>{ 
    return(
        <View>
            <TextInput
                        style={{ height: 35, padding : 5, borderColor: 'gray', borderWidth: 1, width : "100%" }}
                        keyboardType={props.keyboardType}
                        value = {props.value}
                        onChangeText = {props.onChangeText}
                        onSubmitEditing = {props.onSubmitEditing}
                        secureTextEntry = {props.secureTextEntry}
                        
                    />
        </View>
    )
}