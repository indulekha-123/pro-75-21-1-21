import React from 'react';
import { StyleSheet, Text, View,TextInput,Image,KeyboardAvoidingView,ToastAndroid, TouchableOpacity } from 'react-native';
import * as firebase from 'firebase'

export default class LoginScreen extends React.Component{
    constructor(){
        super();
        this.state={
            emailId:'',
            password:'',
    
        }
    }
    
    login=async (email,password)=>{
        if(email && password){
            try{
                const response=await firebase.auth().signInWithEmailAndPassword(email,password)
                if(response){
                    this.props.navigation.navigate('ReadStory')
                }
            }
            catch(error){
                switch(error.code){
                    case 'auth/user-not-found':
                        alert("User Does Not Exist")
                        break
                        case 'auth/invalid-email':
                            alert("Incorrect Email Or Password")
                            break
                }
            }
        }
        else {
            alert ("Enter Email And Password")
    
        }
    }
    
    
    
    render(){
    return(
    <KeyboardAvoidingView    style={{alignItems:'center',marginTop:20}}  >
  
    <View>
    <TextInput
    style={styles.loginBox}
    placeholder="abc@example.com"
    keyboardType='email-address'
    onChangeText={(text)=>{
        this.setState({
            emailId:text
    
        })
    }}
    
    />  
    <TextInput
    style={styles.loginBox}
    secureTextEntry={true}
    placeholder="Enter Password"
    onChangeText={(text)=>{
        this.setState({
            password:text
    
        })
    }}
    
    />  
    </View>
    
    <View>   
      <TouchableOpacity  style={{height:30,width:90,borderWidth:1,margintop:20,paddingTop:5,borderRadius:7}}
      onPress={()=>{this.login(this.state.emailId,this.state.password) }} >
    <Text  style={{textAlign:'center'}}>   Login   </Text>
    
          </TouchableOpacity>  
        
         </View>
    
    
    
    </KeyboardAvoidingView>
    )
    }
    
    }
    
    const styles=StyleSheet.create({
    loginBox:{
        width:300,
        height:40,
        borderWidth:1.5,
        fontSize:20,
        margin:10,
        paddingLeft:10,
        backgroundColor:'red'
    }
    
    
    })
    
    
    
    