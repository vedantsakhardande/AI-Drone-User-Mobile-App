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

export default class Placed extends React.Component {

    constructor(props) {
        super(props);
     
       this.state = {
           email: "",
           password: "",
           userid:"",
           missionnotstarted:true,
           fontsLoaded: false,
          };
        }
        async _loadFontsAsync() {
          await Font.loadAsync(customFonts);
          this.setState({ fontsLoaded: true });
        }
        componentDidMount() {
            this.setState({userid:this.props.navigation.state.params.userid});
          this._loadFontsAsync();
          setTimeout(() => {
            this.setState({missionnotstarted:false})
          }, 5000);
        }
    orderPlaced=()=>{
        
        this.props.navigation.navigate('Tracking', { email: this.state.email, password:this.state.password,userid:this.state.userid })
              
    } 
  render() {
        let btn;
        if(this.state.missionnotstarted==true)
          {
              btn= <Button disabled rounded style={styles.mb15} onPress={(this.orderPlaced)}>
              <Text style={styles.textstyle}>Live Tracking</Text>
            </Button>;
          }
        else btn= <Button rounded primary style={styles.mb15} onPress={(this.orderPlaced)}>
        <Text style={styles.textstyle}>Live Tracking</Text>
      </Button>;
    return (
      <View style={styles.container}>
        
          <Content style={{marginTop:30}}>
        <Image
        source={require("../images/confirmed.png")}
        style={{ alignSelf:'center',width: 300, height: 300 }}/>
        <Title style={styles.mb17}>Order Placed and Confirmed</Title>
          <Form>
           {btn}
          </Form>
          
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
        margin: 15, 
        marginTop: 50,
    marginBottom: 200,
    justifyContent: 'center',
    fontFamily:'Open-Sans-Bold'
      },
      mb16: {
        margin: 15, 
        marginTop: 10,
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
    color:'#12b337'
      },
      textstyle:{
        fontFamily:'Open-Sans-Bold',
        color:'#fff'
      }
    });
    