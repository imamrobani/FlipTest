import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {DetailTransaction, Home, Profile, SplashScreen} from '@screens';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {BottomNavigator} from '@components';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const MainApp = () => {
  return (
    <Tab.Navigator tabBar={props => <BottomNavigator {...props} />}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
};

const Router = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="SplashScreen" component={SplashScreen} />
      <Stack.Screen name="MainApp" component={MainApp} />
      <Stack.Screen name="DetailTransaction" component={DetailTransaction} />
    </Stack.Navigator>
  );
};

export default Router;
