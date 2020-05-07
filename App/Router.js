import { createStackNavigator } from 'react-navigation-stack'
import React, { Component } from 'react';
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
    Login: { screen: Login,navigationOptions: () => ({
      title: `AI DRONE`,
      headerLeft: null,
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
      title: `AI DRONE`,
      headerLeft: null,
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
      title: `AI DRONE`,
      headerLeft: null,
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
      title: `AI DRONE`,
      headerLeft: null,
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
      title: `AI DRONE`,
      headerLeft: null,
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
      title: `AI DRONE`,
      headerLeft: null,
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
      title: `AI DRONE`,
      headerLeft: null,
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
      title: `AI DRONE`,
      headerLeft: null,
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
    initialRouteName: 'Login'
  }
)

export default Router;