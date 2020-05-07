import { StyleSheet, View,ActivityIndicator,TextInput,Image } from 'react-native'
import React, { Component } from 'react';
import {Container,Header,Title,Content,Button,Item,Text,Label,Input,Badge,Body, Spinner,Left,Right,Icon,Form} from "native-base";
import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';


let customFonts = {
  'Roboto': require('../assets/fonts/Roboto/Roboto.ttf'),
  'Roboto_medium': require('../assets/fonts/Roboto/Roboto_medium.ttf'),
  'Open-Sans-Bold': require('../assets/fonts/Open-Sans/OpenSans-Bold.ttf'),
};

export default class Logo extends React.Component {

    constructor(props) {
        super(props);
     
       this.state = {
           email: "",
           password: "",
           userid:"",
           loading:false,
           fontsLoaded: false,
           src:{
            "lat":19.044503,
            "lon":72.820451
          },
          des:{
            "lat":19.04683,
            "lon":72.82036
          },
          user_id:"5e885130c752a3af9e6c991e",
          mission_id:"5ea83dfbcca93223c3af8602"
          };
        }
        async _loadFontsAsync() {
          await Font.loadAsync(customFonts);
          this.setState({ fontsLoaded: true });
        }
        componentDidMount() {
          this._loadFontsAsync();
          setTimeout(() => {
            this.props.navigation.navigate('Login')
          }, 1000);
        }
    
  render() {
    return (
      <View style={styles.container}>
          <Content style={{marginTop:30}}>
          <Image
      source={require("../images/dronelogostart.jpg")}
      style={{alignSelf:'center',marginTop:150,width: 200, height: 200 }}/>
      <ActivityIndicator size="large" color="#fff" styles={styles.spinnerstyle} />
        </Content>
      </View>
    )
  }
}

const styles = StyleSheet.create({
      container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: "#0e0b42",
        fontFamily:'Open-Sans-Bold',
      },
      input: {
        width: 200,
        height: 44,
        padding: 10,
        borderWidth: 1,
        borderColor: 'black',
        marginBottom: 10,
      },
      mb: {
        margin: 15, 
        marginTop: 10,
    flexDirection: 'row', 
    justifyContent: 'center',
        marginBottom: 10,
      },
      mb15: {
        margin: 15, 
        marginTop: 50,
    flexDirection: 'row', 
    justifyContent: 'center',
    fontFamily:'Open-Sans-Bold'
      },
      mb16: {
        margin: 15, 
        marginTop: 20,
    marginBottom: 500,
    flexDirection: 'row', 
    justifyContent: 'center',
    fontFamily:'Open-Sans-Bold'
      },
      mb17: {
        margin: 15, 
        marginTop: 10,
    marginBottom: 20,
    flexDirection: 'row', 
    justifyContent: 'center',
    fontFamily:'Open-Sans-Bold',
    fontSize:25,
    fontWeight: 'bold',
    color:'#262566'
      },
      textstyle:{
        fontFamily:'Open-Sans-Bold',
        color:'#fff'
      },
      spinnerstyle:{
        flex:1,
        alignSelf:'center',
        marginTop:300,
        marginBottom:500
      },
    });
    