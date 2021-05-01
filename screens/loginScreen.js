import React from 'react';
import { View, Text, KeyboardAvoidingView, Image, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import db from '../config';
import firebase from 'firebase';

export default class loginScreen extends React.Component {

    constructor(props){
        super(props);

        this.state = {
            email: '',
            password: ''
        }
    }


    login = async (email, password)=>{

        if(email && password){

            try{
                const response = await firebase.auth().signInWithEmailAndPassword(email, password);

                if(response){
                    this.props.navigation.navigate('Transaction');
                };
            }
            catch(error){
                switch(error.code){
                    case 'auth/user-not-found':
                        alert("User does not exist")
                        console.log("User doesn't exist")
                    break;

                    case 'auth/invalid-email':
                        alert("Incorrect Email or Password")
                        console.log("Invalid");
                    break;
                }
            }

        }

        else{
            alert('Enter email and password')
        }

    }


    render(){
        return(
            <KeyboardAvoidingView>

                <View>
                    <Image 
                      source = {require('../assets/booklogo.jpg')}
                      style = {{width: 200, height: 200, alignSelf: 'center', marginTop: 100}}/>

                    <Text style = {{textAlign: 'center', fontSize: 30, marginTop: 30}}>WILY</Text>
                </View>

                <View>
                    <TextInput 
                      style = {styles.loginBox}
                      placeholder = "abc@gmail.com"
                      keyboardType = 'email-address'
                      onChangeText = {(text)=>{
                          this.setState({
                              email: text
                          })
                      }} />

                    <TextInput 
                      style = {styles.loginBox}
                      placeholder = "Enter Password"
                      secureTextEntry = {true}
                      onChangeText = {(text)=>{
                          this.setState({
                              password: text
                          })
                      }} />
                </View>

                <View>
                    <TouchableOpacity
                      style = {styles.loginButton}
                      onPress = {()=>{
                          this.login(this.state.email, this.state.password)
                      }}>
                        <Text style = {{textAlign: 'center'}}> LOGIN </Text>
                    </TouchableOpacity>
                </View>

            </KeyboardAvoidingView>
        )
    }

}

const styles = StyleSheet.create({

    loginBox: {
      width: 300,
      height: 40,
      borderWidth: 1.5,
      fontSize: 20,
      paddingLeft: 10,
      alignSelf: 'center',
      marginTop: 40
    },

    loginButton: {
      height: 30, 
      width: 90, 
      borderWidth: 1, 
      marginTop: 45, 
      padding: 5, 
      borderRadius: 7,
      alignSelf: 'center'
    }

});