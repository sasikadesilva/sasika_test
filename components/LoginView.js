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
            password: '',
            emailError : '',
            passwordError : '',
            isSuccess : false
        }
    }

    onEmailChange = (text) =>{
        this.setState({
            email : text,
            emailError: "",
            passwordError : ""
        })
    }

    onPasswordChange = (text) =>{
        this.setState({
            password : text,
            emailError: "",
            passwordError : "",
            
        })
    }

    validateInputs = () =>{
        const {email,password} = this.state

        if(email.length > 0 && password.length > 0){
            return true
        }

        return false
    }

    onSubmit = () =>{
        let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if(this.state.email.length == 0){
            this.setState({ emailError: "Email is required"})
            return false;
        }
        else if (reg.test(this.state.email) === false) {
           
            this.setState({ emailError: "Email is not a valid one"})
            return false;
        }
       else if(this.state.password.length == 0){
            this.setState({ passwordError: "Password is required"})
            return false;
        }
       
        

        this.setState({
            isSuccess : true
        })

    }

    renderSuccessBlock = () =>{
        if(this.state.isSuccess){
            return(
                <View>
                        <Text style={{color : "green"}}>Success</Text>
                    </View>
            )
        }
        
    }

    render() {
        const { email, password ,emailError,passwordError} = this.state
        return (

            <View style={Styles.container}>
                <View style={Styles.textContainer}>
                    <Text style={Styles.labelText}>Email</Text>
                    <View style={{ width: "60%" }}>
                        <CustomTextInput
                            value={email}
                            onChangeText={(text) => this.onEmailChange(text)}
                            keyboardType = {"email-address"}
                        />
                    </View>

                </View>

                <View style={{justifyContent : 'flex-end', flexDirection : 'row'}}>
                    <Text style = {{color: "red"}}>{emailError}</Text>
                </View>

                <View style={Styles.textContainer}>
                    <Text style={Styles.labelText}>Password</Text>
                    <View style={{ width: "60%" }}>
                        <CustomTextInput
                            secureTextEntry={true}
                            value = {password}
                            onChangeText={(text) => this.onPasswordChange(text)}
                        />
                    </View>

                </View>
                <View style={{justifyContent : 'flex-end', flexDirection : 'row'}}>
                    <Text style = {{color: "red"}}>{passwordError}</Text>
                </View>

                <TouchableOpacity
                    onPress={()=>this.onSubmit()}
                    style={Styles.button}
                   
                >
                    <Text style={{ color: "white", fontWeight: 'bold', fontSize: 18, textAlign: 'center' }}>Sign-In</Text>
                </TouchableOpacity>

                {this.renderSuccessBlock()}
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
        justifyContent: 'center',
        alignContent: 'center',
        alignSelf: 'flex-end',
        marginTop: 20,
        borderColor: "black",
        borderWidth: 1,
        borderStyle: 'solid'
    }
})