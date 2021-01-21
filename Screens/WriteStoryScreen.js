import React from 'react';
import { StyleSheet, Text, View,TextInput,Image, TouchableOpacity,ToastAndroid } from 'react-native';
import { TextInput } from 'react-native-gesture-handler'; 
import {Header} from 'react-native-elements';
import firebase from 'firebase';
import db from '../config';
import keyAvoidingView from 'ToastAndroid-native';



const App = () => {
    const showToast = () => {
      ToastAndroid.show("Your Story Has Been Submitted", ToastAndroid.SHORT);
    };





export default class WriteStoryScreen extends React.Component{

    submitStory=async()=>{
    
    }
        




    render (){
        return(
            <KeyboardAvoidingView  style={styles.container} behavior="padding" enabled   >  
        <View  style={{flex:1,justifyContent:'center',alignItems:'center'}}>
        <Text>
           Story Hub
        </Text>
    
                       <TextInput 
                            style={styles.inputBox}
                            placeholder="Story Title"
                    />
    
    
                    <TextInput 
                            style={styles.inputBox}
                            placeholder="Author"
                    />
                        <TextInput 
                            style={styles.inputBox}
                            placeholder="Write your story here"
                    />
    
    <TouchableOpacity
        style={styles.submitButton}
        onPress={this.submitStory}>
<Text  styles={styles.buttonText}> Submit  </Text>
    </TouchableOpacity>
    
    
    
    
    <TouchableOpacity 
           onPress={this.nextScreen}>
            <Text style = {styles.button}>Submit</Text>
            </TouchableOpacity>
    
    </View>
    </KeyboardAvoidingView>
      )  }}

      const styles=StyleSheet.create({
        container:{
            flex:1,
            justifyContent:'center',
            alignItems:'center',
        
        },
   
        inputBox:{
            width:200,
            height:40,
            borderWidth:1.5,
            borderRightWidth:0,
            fontSize:20
        },
        submitButton:{
            backgroundColor:'#FBC02D',
            width:100,
            height:50
        },

        })