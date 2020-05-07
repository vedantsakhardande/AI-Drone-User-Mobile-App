import { StyleSheet, View,ActivityIndicator,TextInput,Image,Platform,Animated,Easing } from 'react-native'
import React, { Component } from 'react';
import {Container,Header,Title,Content,Button,Item,Text,Label,Input,Badge,Body, Spinner,Left,Right,Form,List,
  ListItem,Thumbnail,} from "native-base";
import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';
import Icon from 'react-native-vector-icons/MaterialIcons';
import * as Location from 'expo-location';
import * as Permissions from 'expo-permissions';
import Geocoder from 'react-native-geocoding';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import Constants from 'expo-constants';

let customFonts = {
  'Roboto': require('../assets/fonts/Roboto/Roboto.ttf'),
  'Roboto_medium': require('../assets/fonts/Roboto/Roboto_medium.ttf'),
  'Open-Sans-Bold': require('../assets/fonts/Open-Sans/OpenSans-Bold.ttf'),
};
let itemdata=["Dummy Data"]
export default class Order extends React.Component {

    constructor(props) {
        super(props);
        this.springValue = new Animated.Value(0.3)
       this.state = {
           email: "",
           password: "",
           userid:"",
           fontsLoaded: false,
           data:["dummydata"],
           location: null,
            errorMessage: null,
            address:"Location is being fetched ...",
            coordinates:"",
            addressset:false,
            autoFocus:true
          };
        }
        async _loadFontsAsync() {
          await Font.loadAsync(customFonts);
          this.setState({ fontsLoaded: true });
        }
        componentDidMount() {
            this.setState({userid:this.props.navigation.state.params.userid,data:this.props.navigation.state.params.data});
          this._loadFontsAsync();
          if (Platform.OS === 'android' && !Constants.isDevice) {
            this.setState({
              errorMessage: 'Oops, this will not work on Sketch in an Android emulator. Try it on your device!',
            });
          } else {
            this._getLocationAsync();
          }
          setTimeout(() => {
           this.setState({autoFocus:false})
          }, 1000);
          this.timer = setInterval(()=> this.spring(), 1000)
        }
        spring () {
          this.springValue.setValue(0.3)
          Animated.spring(
            this.springValue,
            {
              toValue: 1,
              friction: 1
            }
          ).start()
        }
        _getLocationAsync = async () => {
          let { status } = await Permissions.askAsync(Permissions.LOCATION);
          if (status !== 'granted') {
            this.setState({
              errorMessage: 'Permission to access location was denied',
            });
          }
          let location = await Location.getCurrentPositionAsync({});
          this.setState({ location });
          let text = 'Waiting..';
          let coords;
          let lat,lon;
          let myApiKey;
          if (this.state.errorMessage) {
            text = this.state.errorMessage;
          } else if (this.state.location) {
            coords=this.state.location.coords
            lat=coords.latitude
            lon=coords.longitude
      Geocoder.init(Constants.manifest.ios.config.googleMapsApiKey, {language : "en"});
      Geocoder.from(lat, lon)
          .then(json => {
          var addressComponent=json.results[1].formatted_address;
            text=addressComponent
            this.setState({address:addressComponent,addressset:true,coordinates:`${lat},${lon}`})
          })
          .catch(error => console.warn(error));
          }

        };
    placeOrder=()=>{
        var currentdate = new Date();
        var timestamp=currentdate.getDate() + "/"+ (currentdate.getMonth()+1)  + "/" +currentdate.getFullYear()
        +" "+ currentdate.getHours() + ":"+currentdate.getMinutes()+":"+currentdate.getSeconds()
        fetch('http://35.154.138.70/placeOrder', {
            method: 'POST',
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              user_id:this.state.userid,
              status:false,
              order:this.state.data,
              timestamp:timestamp
            }),
          }).then((response) => response.json())
              .then((responseJson) => {
                if(responseJson==true){
                    this.props.navigation.navigate('Placed', { email: this.state.email, password:this.state.password,userid:this.state.userid })
                }
              })
              .catch((error) => {
                console.error(error);
              });
    }
    getDefaultVal=()=>{
      this.state.autoFocus=true;
      return this.state.address
    }
  render() {
    let rendering;
    let page;
    itemdata = this.state.data
    rendering={
      // selection: { start:0,end: 0 }, 
      onBlur: () => this.setState({ showPlacesList: false }),
        onFocus: () => this.setState({ showPlacesList: true }),
    }
    if(this.state.addressset==false)
    {
      page=<ActivityIndicator size="large" color="#0000ff" styles={styles.spinnerstyle} />;
    }
    else
    {
    page=<Content >
    <Title style={styles.mb17}>Delivery Location</Title>
    <Animated.Image
      style={{ alignSelf:"center",width: 80, height: 80, transform: [{scale: this.springValue}] }}
      source={require("../images/locationicon.jpg")}/>
      <GooglePlacesAutocomplete
        minLength={2} // minimum length of text to search
        autoFocus={this.state.autoFocus}
        fetchDetails={true}
        returnKeyType={'default'}
        listViewDisplayed='auto'
        renderDescription={row =>
          row.description || row.formatted_address || row.name
        }
        onPress={(data, details = null) => { // 'details' is provided when fetchDetails = true
      
        this.setState(
          {
            address: data.description, // selected address
            coordinates: `${details.geometry.location.lat},${details.geometry.location.lng}`, // selected coordinates
          }
        );
        rendering={
          selection: { start:0,end: 0 }, 
          onBlur: () => this.setState({ showPlacesList: false }),
            onFocus: () => this.setState({ showPlacesList: true }),
        }
        }}
        getDefaultValue={this.getDefaultVal}
        query={{
          key: Constants.manifest.ios.config.googleMapsApiKey,
          language: 'en',
          types: 'geocode',
        }}
        listViewDisplayed={this.state.showPlacesList}
        textInputProps={rendering}
        styles={{
          textInputContainer: {
              backgroundColor: 'transparent',
              height: null,
              borderTopColor: 'transparent',
              borderBottomColor: 'transparent',
              borderTopWidth: 10,
              borderBottomWidth: 10,
              borderRadius:50,
              alignSelf:'center'
              },
          textInput: {
              color: '#3F51B5',
              paddingRight: 5,
              paddingLeft: 5,
              fontSize: 15,
              lineHeight: 23,
              height: 60,
              flex: 4,
              borderWidth: 2,
              borderBottomColor: 'transparent',
              borderRadius:50,
              marginTop: 2,
              marginLeft: 0,
              fontFamily:'Open-Sans-Bold',
          },

          description: {
              fontWeight: 'bold',
          },
          separator: {
              display: 'none'
          },
          predefinedPlacesDescription: {
              color: '#1faadb',
          },
          poweredContainer: {
              display: 'none'
          }
      }}
        enablePoweredByContainer={true}
        currentLocation={false}
        currentLocationLabel="Current location"
        nearbyPlacesAPI='GooglePlacesSearch'
        filterReverseGeocodingByTypes={['locality', 'administrative_area_level_3']}
        predefinedPlacesAlwaysVisible={false}
      />
      <List>
        {itemdata.map((data, i) => (
          <ListItem thumbnail key={i}>
              <Thumbnail square size={60} source={{uri: data.image}} />
            <Body>
              <Text style={styles.itemnamestyle}>{data.name}</Text>
            </Body>
            <Right>
            <Text style={styles.itemnamestyle}><Icon name="shopping-basket" size={30} color="#900" /> {data.quantity}</Text>
            </Right>
          </ListItem>
        ))}
      </List>
      <Form>
        <Button rounded primary style={styles.mb15} onPress={(this.placeOrder)}>
        <Text style={styles.textstyle}>Place Order</Text>
      </Button>
      </Form>
    </Content>
  ;
    }
    return (
      <View style={styles.container}>
      {page}
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
    marginBottom: 20,
    alignSelf:'center',
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
    