import React, { Component } from 'react';
import {

    StyleSheet,
    TextInput,
    View,
    Text,
    TouchableOpacity

} from 'react-native';

import { CustomTextInput } from "./common"

export default class LoginView extends Component {

    constructor(props) {
        super(props)
        this.state = {
            email: '',
            password: ''
        }
    }

    render() {
        return (

            <View style={Styles.container}>
                <View style={Styles.textContainer}>
                    <Text style={Styles.labelText}>Email</Text>
                    <View style={{ width: "60%" }}>
                        <CustomTextInput

                        />
                    </View>

                </View>

                <View style={Styles.textContainer}>
                    <Text style={Styles.labelText}>Password</Text>
                    <View style={{ width: "60%" }}>
                        <CustomTextInput
                            secureTextEntry = {true}
                        />
                    </View>

                </View>


                <TouchableOpacity

                    style={Styles.button}
                >
                    <Text style={{color : "white",fontWeight : 'bold', fontSize : 18, textAlign : 'center'}}>Sign-In</Text>
                </TouchableOpacity>
            </View>

        )
    }

}

const Styles = StyleSheet.create({
    container: {
        width: "80%",
        padding: 20,
        marginTop: 20,
        alignSelf: 'center',
        borderWidth: 0.7,
        borderRadius: 3,
        borderColor: 'black',
        borderStyle: 'solid'
    },

    textContainer: {
        flexDirection: 'row',
        marginTop: 10,
        justifyContent: 'space-between',
    },

    labelText: {
        fontSize: 19,
        fontWeight: 'bold',
    },
    button: {
        width: 100,
        height: 40,
        backgroundColor: "gray",
        justifyContent : 'center',
        alignContent : 'center',
        alignSelf : 'flex-end',
        marginTop : 20,
        borderColor : "black",
        borderWidth: 1,
        borderStyle: 'solid'
    }
})