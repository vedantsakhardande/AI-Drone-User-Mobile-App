import { StyleSheet, View,TouchableOpacity, Image,TextInput,Text,Dimensions } from 'react-native'
import React, { Component } from 'react';
import {Container,Header,Title,Content,Button,Item,Label,Input,Badge,Body,Left,Right,Icon,Form,Card,
  CardItem} from "native-base";
import NetInfo from "@react-native-community/netinfo";
import MapView,{Marker,PROVIDER_GOOGLE} from 'react-native-maps';
import { Ionicons } from '@expo/vector-icons';
import * as Font from 'expo-font';
// import Pusher from 'pusher-js'
import Constants from 'expo-constants';

let customFonts = {
  'Roboto': require('../assets/fonts/Roboto/Roboto.ttf'),
  'Roboto_medium': require('../assets/fonts/Roboto/Roboto_medium.ttf'),
  'Open-Sans-Bold': require('../assets/fonts/Open-Sans/OpenSans-Bold.ttf'),
};
export default class Tracking extends React.Component {
 
    constructor(props) {
        super(props);
     
       this.state = {
           randomnumber:"0",
           noqrcode:false,
           dontdisplayqrcode:true,
           displaytext:false,
           vicinity:false,
           url:"https://aidrone.s3.ap-south-1.amazonaws.com/drone.jpg",
           fontsLoaded: false,
          };
        }

        async _loadFontsAsync() {
          await Font.loadAsync(customFonts);
          this.setState({ fontsLoaded: true });
        }
        componentDidMount() {
          this._loadFontsAsync();
          setTimeout(() => {
            this.setState({vicinity:true})
          }, 5000);
        }
 componentWillMount(){
  const API_KEY =Constants.manifest.ios.config.googleMapsApiKey
    // this.timer = setInterval(()=> this.getPusherData(), 3000)
}
// async getPusherData() {

//           }
    getQRCode=()=> {
      var flag=0
      if(this.state.vicinity==false)
      {
        flag=1;
      }
      else if(this.state.vicinity==true)
      { 
        fetch('http://35.154.138.70/getQrCode', {
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
                this.setState({randomnumber:responseJson.toString(),dontdisplayqrcode:false,displaytext:true,noqrcode:true})
                this.props.navigation.navigate('QrCode',{ email: this.props.navigation.state.params.email,
                  userid:this.props.navigation.state.params.userid,
                    randomnumber:this.state.randomnumber })
              })
              .catch((error) => {
                console.error(error);
              });
        this.setState({ url: "http://35.154.138.70/getQrCode" });
      }
        if(flag==1)
        {
          setTimeout(() => {
            this.setState({vicinity:true});
          }, 5000);
        }

      }
      
  render() {
    let btn;
    const markerImg = require('../images/drone_location.png')
    if(this.state.vicinity==false)
      {
          btn= <Button disabled rounded style={styles.mb15}  onPress={(this.getQRCode)}>
          <Text style={styles.textstyle}>Get QRCode</Text>
        </Button>
      }
    else btn= <Button rounded primary style={styles.mb15}  onPress={(this.getQRCode)}>
    <Text style={styles.textstyle}>Get QRCode</Text>
  </Button>

    return (
      <View style={styles.container}>
<Body style={{marginTop:30}}>
<MapView
        provider={PROVIDER_GOOGLE}
        style={styles.maps}
        initialRegion={{
          latitude: 19.044331,
          longitude: 72.820453,
          latitudeDelta: 0.003,
          longitudeDelta: 0.003,
        }}
        >
        <Marker
          coordinate={{latitude: 19.044331, longitude: 72.820453}}
          title="Drone"
          description="Location"
          image={markerImg}
          style={{width: 36, height: 38}}
          resizeMode="contain"   
        />
      </MapView>  
          </Body>
          {btn}
      </View>
    )
  }
}
const styles = StyleSheet.create({
      container: {
        flex:1,
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
      mb: {
        marginBottom: 15
      },
      mb15: {
        margin: 15, 
        marginTop: 20,
    flexDirection: 'row', 
    justifyContent: 'center',
    fontFamily:'Open-Sans-Bold'
      },
      mb16: {
        margin: 15, 
        marginTop: 400,
    marginBottom: 500,
    flexDirection: 'row', 
    justifyContent: 'center',
    fontFamily:'Open-Sans-Bold'
      },
      mb17: {
        margin: 15, 
        marginTop: 10,
    marginBottom: 10,
    flexDirection: 'row', 
    justifyContent: 'center',
    alignContent:"center",
    alignItems:"center",
    fontFamily:'Open-Sans-Bold',
    fontSize:25,
    fontWeight: 'bold',
    color:'#262566'
      },
      textstyle:{
        fontFamily:'Open-Sans-Bold',
        color:'#fff'
      },
      maps: {
        width:'100%',
        height:'100%',
        position: 'absolute'
      },
    });