import { StyleSheet, View,ActivityIndicator,TextInput,Image,Alert } from 'react-native'
import React, { Component } from 'react';
import {Container,Header,Title,Content,Button,Item,Text,Label,Input,Badge,Body, Spinner,Left,Right,Form,List,
    ListItem,Thumbnail,} from "native-base";

import Icon from 'react-native-vector-icons/MaterialIcons'
import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';

let customFonts = {
    'Roboto': require('../assets/fonts/Roboto/Roboto.ttf'),
    'Roboto_medium': require('../assets/fonts/Roboto/Roboto_medium.ttf'),
    'Open-Sans-Bold': require('../assets/fonts/Open-Sans/OpenSans-Bold.ttf'),
    'material':require('../assets/fonts/Material/MaterialIcons-Regular.ttf'),
};
let itemdata=["Dummy Data"]
export default class AddOrder extends React.Component {
    constructor(props) {
        super(props);
       this.state = {
           email: "",
           password: "",
           userid:"",
           fontsLoaded: false,
           data:["Dummy Data"]
          };
        }  
        async _loadFontsAsync() {
          await Font.loadAsync(customFonts);
          this.setState({ fontsLoaded: true });
        }
        componentDidMount() {
            this.setState({userid:this.props.navigation.state.params.userid});
          this._loadFontsAsync();
          this.getInventory();
        }
    getInventory=()=>{
            fetch('http://35.154.138.70/fetchinventory', {
                method: 'GET'
             })
             .then((response) => response.json())
             .then((responseJson) => {
                responseJson.forEach(function (element) {
                    element.quantity = 0;
                  });
                this.setState({
                    data: responseJson
                 })
             })
             .catch((error) => {
                console.error(error);
             });
    } 
    placeOrder = () => {
        let data;
        let qtyadded=0;
        data=this.state.data
        data.forEach(function (element) {
            qtyadded=qtyadded+element.quantity;
          });
        if(qtyadded>0)
        {
            const addeditems = data.filter((item) => item.quantity !== 0);
            this.props.navigation.navigate('Order',{ email: this.props.navigation.state.params.email,
                userid:this.props.navigation.state.params.userid,
                  data:addeditems })
        }
        else
        {
            Alert.alert("Add Items")
        }
    }
  render() {
    let index;
    itemdata = this.state.data
    return (
      <View style={styles.container}>
        <Image
        source={require("../images/order.png")}
        style={{ marginTop:20,alignSelf:'center',width: 100, height: 100 }}/>
        <Content style={{marginTop:30}}>
          <List>
            {itemdata.map((data, i) => (
              <ListItem thumbnail key={i}>
                  <Thumbnail square size={60} source={{uri: data.image}} />
                <Body>
                  <Text style={styles.itemnamestyle}>{data.name}</Text>
                </Body>
                <Button transparent onPress={()=> {
                        index = itemdata.findIndex(x => x.name ===data.name);
                        if(data.quantity>0)
                        {
                            itemdata[index].quantity=data.quantity-1;
                        }
                        this.setState({data:itemdata})
                  } }>
                    <Text style={styles.itemnamestyle}><Icon name="remove-circle" size={30} color="#900" /></Text>
                  </Button>
                  <Text style={styles.itemnamestyle}>{data.quantity}</Text>
                  <Button transparent onPress={()=> {
                        index = itemdata.findIndex(x => x.name ===data.name);
                        itemdata[index].quantity=data.quantity+1;
                        this.setState({data:itemdata})
                  } }>
                    <Text style={styles.itemnamestyle}><Icon name="add-circle" size={30} color="#900" /></Text>
                  </Button>
                  
              </ListItem>
            ))}
          </List>
          <Button rounded primary style={styles.mb15} onPress={this.placeOrder}>
            <Text style={styles.textstyle}>Proceed To Checkout</Text>
          </Button>
        </Content>
        
      </View>
    )
  }
}
const styles = StyleSheet.create({
      container: {
          flex:1,
        justifyContent: 'center',
        backgroundColor: "#fff",
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
      mb15: {
        margin: 15, 
        marginTop: 20,
    marginBottom: 200,
    flexDirection: 'row', 
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
    marginBottom: 10,
    flexDirection: 'row', 
    justifyContent: 'center',
    fontFamily:'Open-Sans-Bold',
    fontSize:25,
    fontWeight: 'bold',
    color:'#262566'
      },
      itemnamestyle:{
        fontFamily:'Open-Sans-Bold',
        fontSize:20,
        fontWeight: 'bold',
        color:'#262566',
      },
      textstyle:{
        fontFamily:'Open-Sans-Bold',
        color:'#fff'
      }
    }); 