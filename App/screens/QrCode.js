import { StyleSheet, View, Image,TextInput,Text,ActivityIndicator } from 'react-native'
import React, { Component } from 'react';
import {Container,Header,Title,Content,Button,Item,Label,Input,Badge,Body,Left,Right,Icon,Form,Spinner} from "native-base";
import NetInfo from "@react-native-community/netinfo";
// import Pusher from 'pusher-js/react-native';
import QRCode from 'react-native-qrcode';
import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';
// import Pusher from 'pusher-js'
let customFonts = {
  'Roboto': require('../assets/fonts/Roboto/Roboto.ttf'),
  'Roboto_medium': require('../assets/fonts/Roboto/Roboto_medium.ttf'),
  'Open-Sans-Bold': require('../assets/fonts/Open-Sans/OpenSans-Bold.ttf'),
};
export default class QrCode extends React.Component {
 
    constructor(props) {
        super(props);
       this.state = {
           randomnumber:"0",
           noqrcode:false,
           dontdisplayqrcode:true,
           displaytext:false,
           vicinity:260,
           url:"https://aidrone.s3.ap-south-1.amazonaws.com/drone.jpg",
           fontsLoaded: false,
           qrcodematched:false,
          };
        }
        async _loadFontsAsync() {
          await Font.loadAsync(customFonts);
          this.setState({ fontsLoaded: true });
        }
 componentDidMount(){
  this._loadFontsAsync();
  this.setState({randomnumber:this.props.navigation.state.params.randomnumber,displaytext:true,noqrcode:true})
    this.timer = setInterval(()=> this.getPusherData(), 5000)
}
async getPusherData() {
      if(this.state.qrcodematched==false)
      {
        fetch('http://35.154.138.70/checkQrCode', {
            method: 'POST',
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              dummydata:"Dummydata"
            }),
          }).then((response) => response.json())
              .then((responseJson) => {
                if(responseJson==true)
                {
                  this.setState({qrcodematched:true})
                  setTimeout(() => {
                  this.props.navigation.navigate('Thankyou',{ email: this.props.navigation.state.params.email, 
                    userid:this.props.navigation.state.params.userid,
                  })
                }, 3000);
                }
              })
              .catch((error) => {
                console.error(error);
              });
      }
      else{
        this.setState({dontdisplayqrcode:false})
      }
      
          }
    
  render() {
    let disp;
    let headtitle;
    let img;
    let foottitle;

    if(this.state.qrcodematched==false)
    {
      disp=
      <Content style={styles.mb15}>
      <QRCode
      value={this.state.randomnumber}
      size={300}
      bgColor='black'
      fgColor='white'
      disabled={this.state.dontdisplayqrcode}
      styles={{ alignSelf:'center',width: 300, height: 300 }}
/>
</Content>;
  img=<Image
  source={require("../images/qrcodeshow.png")}
  style={{ alignSelf:'center',width: 250, height: 250 }}/>;
  foottitle=<Title style={styles.mb17}>SHOW QR CODE</Title>;
    }
    else 
    {
      headtitle=null;
      disp=
      <ActivityIndicator size="large" color="#0000ff" styles={styles.spinnerstyle} />;
      img=null;
      foottitle=null;
    }
    return (
      <View style={styles.container}>
                  {disp}
                  {img}
                  {foottitle}
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
      input: {
        width: 200,
        height: 44,
        padding: 10,
        borderWidth: 1,
        borderColor: 'black',
        marginBottom: 10,
      },
      mb15: {
        flex:1,
        marginTop: 30,
    alignSelf:'center',
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
      spinnerstyle:{
        flex:1,
        alignSelf:'center',
        marginTop:300,
        marginBottom:500
      },
      textstyle:{
        fontFamily:'Open-Sans-Bold',
        color:'#fff'
      }
    });
    