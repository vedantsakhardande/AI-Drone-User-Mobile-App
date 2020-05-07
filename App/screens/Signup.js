import React, { Component } from 'react';
import { StyleSheet,  View ,Text,Image} from 'react-native'
import {Container,Header,Title,Content,Button,Item,Label,Input,Body,Left,Right,Icon,Form} from "native-base";
import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';


let customFonts = {
  'Roboto': require('../assets/fonts/Roboto/Roboto.ttf'),
  'Roboto_medium': require('../assets/fonts/Roboto/Roboto_medium.ttf'),
  'Open-Sans-Bold': require('../assets/fonts/Open-Sans/OpenSans-Bold.ttf'),
};
export default class Signup extends React.Component {
    constructor(props) {
        super(props);
     
       this.state = {
           name:"",
           email: "",
           password: "",
           fontsLoaded: false,
          };
        }
        async _loadFontsAsync() {
          await Font.loadAsync(customFonts);
          this.setState({ fontsLoaded: true });
        }
        componentDidMount() {
          this._loadFontsAsync();
        }
        addUser=()=>{
            fetch('http://35.154.138.70/usersignup', {
                method: 'POST',
                headers: {
                  Accept: 'application/json',
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                name:this.state.name,
                  email: this.state.email,
                  password: this.state.password,
                }),
              }).then((response) => response.json())
                  .then((responseJson) => {
                    if(responseJson==true){
                        this.props.navigation.navigate('Login')
                    }
                  })
                  .catch((error) => {
                    console.error(error);
                  });
        }
    handleName = (text) => {
        this.setState({ name: text })
     }
    handleEmail = (text) => {
        this.setState({ email: text })
     }
     handlePassword = (text) => {
        this.setState({ password: text })
     }
    goToLogin = () => this.props.navigation.navigate('Login')
    render() {
      return (
        <View style={styles.container}>
          <Image
        source={require("../images/login.png")}
        style={{ marginTop:"5%",alignSelf:'center',width: 50, height: 50 }}/>
          <Content style={{marginTop:30}}>
          <Form>
          <Item>
              <Input placeholder="Name" onChangeText={this.handleName}/>
            </Item>
            <Item>
              <Input placeholder="Email" onChangeText={this.handleEmail}/>
            </Item>
            <Item>
              <Input placeholder="Password" secureTextEntry onChangeText={this.handlePassword}/>
            </Item>
          </Form>
          <Button rounded success style={styles.mb15} onPress={(this.addUser)}>
            <Text style={styles.textstyle}>Sign Up</Text>
          </Button>
          <Button rounded primary style={styles.mb16} onPress={this.goToLogin}>
            <Text style={styles.textstyle}>Sign In</Text>
          </Button>
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
    }
  });
  