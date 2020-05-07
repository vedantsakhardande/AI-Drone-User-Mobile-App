// import React from 'react'
// import AppContainer from './index'
// import { Ionicons } from '@expo/vector-icons';
// import {
//   SafeAreaProvider,
//   initialWindowSafeAreaInsets
// } from 'react-native-safe-area-context';
// // import SafeAreaView from 'react-native-safe-area-view';

// export default function App() {
  
//   return <AppContainer />

// }

// import React, { Component } from 'react';
// import AppContainer from './index';
// import { Root } from 'native-base';
// import * as Font from 'expo-font';
// import { AppLoading } from 'expo';
// import { createAppContainer } from 'react-navigation'
// import Router from './Router'


// // const AppContainer = createAppContainer(Router)
// export default class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = { loading: true };
//   }
// async componentDidMount() {
//     await Font.loadAsync({
//       Roboto: require('native-base/Fonts/Roboto.ttf'),
//       Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
//     });
//     this.setState({ loading: false });
//   }
// render() {
//     if (this.state.loading) {
//       return (
//         <Root>
//           <AppLoading />
//         </Root>
//       );
//     } else {
//       return (
//         <Root>
//           <AppContainer />
//           {/* {AppContainer} */}
//         </Root>
//       );
//     }
//   }
// }

import React from 'react';
import { StyleSheet, View, StatusBar, ActivityIndicator,Image } from 'react-native';
import * as Font from 'expo-font';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Icon from 'react-native-vector-icons/MaterialIcons';
// import Expo from 'expo'
import Logo from './screens/Logo'
import Login from './screens/Login'
import Signup from './screens/Signup'
import AddOrder from './screens/AddOrder'
import Order from './screens/Order'
import Placed from './screens/Placed'
import QrCode from './screens/QrCode'
import Tracking from './screens/Tracking'
import Thankyou from './screens/Thankyou'

const Router = createStackNavigator(
  {
    Logo: { screen: Logo,navigationOptions: () => ({
      title: `.`,
      headerLayoutPreset: 'center',
      headerTitleAlign: 'center',
      headerStyle: {
        backgroundColor: '#0e0b42',
      },
      headerTintColor: '#0e0b42',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    }),},
    Login: { screen: Login,navigationOptions: () => ({
      title: `LOGIN`,
      headerLeft: ()=>
        <Image
  source={require("./images/dronelogo.png")}
  style={{marginTop:5,width: 60, height: 60 }}/>
      ,
      headerLayoutPreset: 'center',
      headerTitleAlign: 'center',
      headerStyle: {
        backgroundColor: '#262566',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    }),},
    Signup: { screen: Signup,navigationOptions: () => ({
      title: `SIGN UP`,
      headerLeft: ()=>
      <Image
      source={require("./images/dronelogo.png")}
      style={{marginTop:5,width: 60, height: 60 }}/>
      ,
      headerLayoutPreset: 'center',
      headerTitleAlign: 'center',
      headerStyle: {
        backgroundColor: '#262566',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    }),},
    AddOrder: { screen: AddOrder,navigationOptions: () => ({
      title: `ADD ORDER`,
      headerLeft: ()=>
      <Image
      source={require("./images/dronelogo.png")}
      style={{marginTop:5,width: 60, height: 60 }}/>
      ,
      headerLayoutPreset: 'center',
      headerTitleAlign: 'center',
      headerStyle: {
        backgroundColor: '#262566',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    }),},
    Order: { screen: Order,navigationOptions: () => ({
      title: `CART`,
      headerLeft: ()=>
      <Image
      source={require("./images/dronelogo.png")}
      style={{marginTop:5,width: 60, height: 60 }}/>
      ,
      headerLayoutPreset: 'center',
      headerTitleAlign: 'center',
      headerStyle: {
        backgroundColor: '#262566',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    }),},
    Placed: { screen: Placed,navigationOptions: () => ({
      title: `ORDER PLACED`,
      headerLeft: ()=>
      <Image
      source={require("./images/dronelogo.png")}
      style={{marginTop:5,width: 60, height: 60 }}/>
      ,
      headerLayoutPreset: 'center',
      headerTitleAlign: 'center',
      headerStyle: {
        backgroundColor: '#262566',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    }),},
    QrCode: { screen: QrCode,navigationOptions: () => ({
      title: `QR CODE`,
      headerLeft: ()=>
      <Image
      source={require("./images/dronelogo.png")}
      style={{marginTop:5,width: 60, height: 60 }}/>
      ,
      headerLayoutPreset: 'center',
      headerTitleAlign: 'center',
      headerStyle: {
        backgroundColor: '#262566',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    }),},
    Tracking: { screen: Tracking,navigationOptions: () => ({
      title: `LIVE TRACKING`,
      headerLeft: ()=>
      <Image
      source={require("./images/dronelogo.png")}
      style={{marginTop:5,width: 60, height: 60 }}/>
      ,
      headerLayoutPreset: 'center',
      headerTitleAlign: 'center',
      headerStyle: {
        backgroundColor: '#262566',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    }),},
    Thankyou: { screen: Thankyou,navigationOptions: () => ({
      title: `THANK YOU`,
      headerLeft: ()=>
      <Image
      source={require("./images/dronelogo.png")}
      style={{marginTop:5,width: 60, height: 60 }}/>
      ,
      headerLayoutPreset: 'center',
      headerTitleAlign: 'center',
      headerStyle: {
        backgroundColor: '#262566',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    }),}
  },
  {
    initialRouteName: 'Logo'
  }
)


const AppContainer = createAppContainer(Router);

export default class App extends React.Component {

  state = {
      assetsLoaded: false,
  };

  async componentWillMount() {
      await Expo.Font.loadAsync({
          'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf'),
          'Open-Sans-Bold': require('./assets/fonts/Open-Sans/OpenSans-Bold.ttf'),
          'material':require('./assets/fonts/Material/MaterialIcons-Regular.ttf'),
      });
  
      this.setState({ assetsLoaded: true });
  }

  render() {

      const {assetsLoaded} = this.state;

      if( assetsLoaded ) {
          return (
              <AppContainer
                  ref={nav => {
                      this.navigator = nav;
                  }}
              />
          );
      }
      else {
          return (
              <View style={styles.container}>
                  <ActivityIndicator />
                  <StatusBar barStyle="default" />
              </View>
          );
      }
  }
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center'
  },
});