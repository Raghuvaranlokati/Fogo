import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from './HomeScreen'; // Import your Home screen component
import LoginScreen from './LoginScreen'; // Import your Login screen component
import RegisterScreen from './RegisterScreen'; // Import your Register screen component
import ForgotPasswordScreen from './ForgotPasswordScreen'
import Profile from './Profile';
import ProfileEdit from './ProfileEdit';
import vpn from './vpn';
import News from './News'

import Torrent from './Torrent';
import anyvideo from './Anyvideo';
import join from'./join';
import Community from './Community';


const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
     
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Forgot" component={ForgotPasswordScreen} />
        <Stack.Screen name="Register" component={RegisterScreen} />
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="EditOption" component={ProfileEdit} />
        <Stack.Screen name="vpn" component={vpn} />
        <Stack.Screen name="Torrent" component={Torrent} />
        <Stack.Screen name="video format" component={anyvideo} />
        <Stack.Screen name="join" component={join} />
        <Stack.Screen name="Community" component={Community} />
        <Stack.Screen name="dark news" component={News} />






      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
