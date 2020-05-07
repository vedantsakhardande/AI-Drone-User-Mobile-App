import { StyleSheet, View,ActivityIndicator,TextInput,Text,Image } from 'react-native'
import React, { Component } from 'react';
import {Container,Header,Title,Content,Button,Item,Label,Input,Badge,Body, Spinner,Left,Right,Icon,Form} from "native-base";
import * as Font from 'expo';

export default class Thankyou extends React.Component {

    constructor(props) {
        super(props);
       this.state = {
           email: "",
           password: ""
          };
        }
  render() {
    return (
      <View style={styles.container}>
        <Content style={{marginTop:30}}>
           <Image
        source={{
            uri: "https://aidrone.s3.ap-south-1.amazonaws.com/delivered.png",
        }}
        style={{ alignSelf:'center',width: 200, height: 200 }}/>
           <Image
        source={{
            uri: "https://aidrone.s3.ap-south-1.amazonaws.com/Dronedelivery.jpg",
        }}
        style={{ alignSelf:'center',width: 200, height: 200 }}/>
        <Image
        source={{
            uri: "https://aidrone.s3.ap-south-1.amazonaws.com/ThankYou+.jpg",
        }}
        style={{ alignSelf:'center',width: 200, height: 200 }}/>
        </Content>
      </View>
    )
  }
}

const styles = StyleSheet.create({
      container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: "#fff",
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
    });
    